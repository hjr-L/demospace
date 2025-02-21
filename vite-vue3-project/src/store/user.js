import { defineStore } from "pinia";
import $axios from '@/apis/index.js';

export const useUserStore=  defineStore("user", {
  state: () => ({
    username: "",
    token: '',
    isLogin: false
  }),
  actions: {
    login(newValue) {
        console.log(newValue);
        if(newValue && newValue.username && newValue.password){
            let res = $axios.post("/user/login", newValue);
            const token = res.token;
            localStorage.setItem("token", token);
            localStorage.setItem("username", newValue.username)
            this.token = token;
            this.isLogin = true
            this.username = newValue.username;
            return Promise.resolve();
        }else{
            return Promise.reject();
        }
    },

    async register(newValue){
       await this.login(newValue);
       return Promise.resolve();
    },

    loginOut(){
        this.username = "";
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        return Promise.resolve();
    }
  },
});