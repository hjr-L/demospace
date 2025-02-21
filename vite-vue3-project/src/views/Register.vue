<template>
    <div>
        <!-- <h1>注册</h1> -->
         <el-space direction="vertical">
             <el-input v-model="user.username"></el-input>
             <el-input type="password" v-model="user.password"></el-input>
             <el-button @click="submit">确定</el-button>
         </el-space>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router';
import { useUserStore } from '../store/user';
import { reactive } from 'vue'

const router = useRouter()
const user = reactive({
    username: '',
    password: ''
})
const userStore = useUserStore()

const submit = () => {
    userStore.register(user)
    router.push('/home')
}

</script>
