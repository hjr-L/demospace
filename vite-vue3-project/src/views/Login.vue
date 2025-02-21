<template>
    <div>
        <!-- <h1>登录</h1> -->
         <el-space direction="vertical">
             <el-input v-model="user.username"></el-input>
             <el-input type="password" v-model="user.password"></el-input>
             <div class="operation">
                <el-button type="text" @click="router.push('/register')">注册</el-button>
                <el-button type="text">注销</el-button>
             </div>
             <el-button @click="submit">确定</el-button>
         </el-space>
    </div>
</template>
<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router';
import { useUserStore } from '../store/user';

const userStore = useUserStore()

const router = useRouter()
const user = reactive({
    username: '',
    password: ''
})

const submit = async () => {
    await userStore.login(user)
    router.push('/home')
}
</script>

<style lang="less" scoped>
    .operation{
        width: 100%;
        .flex-container(center, space-around);
    }
</style>