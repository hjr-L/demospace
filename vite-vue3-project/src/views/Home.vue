<template>
    <div class="home">
        <div class="header">
            <span>hi, {{ userStore.username }}</span>
            <span @click="loginOut">退出</span>
        </div>
        <div class="container">
            <ArticleList />
        </div>
    </div>
</template>

<script setup>

import ArticleList from '../components/ArticleList.vue';
import { useUserStore } from '../store/user';
let userStore = useUserStore()

const loginOut = () => {
    userStore.loginOut()
}

const articleList = ref([])
const getArticleList = async () => {
    const res = await fetch('http://localhost:3000/article')
    articleList.value = await res.json()
}

</script>

<style lang="less" scoped>
.home{
    width: 100%;
    .header{
        .flex-container(center, space-around);
    }
    .container{
        width:100%;
    }
}
</style>