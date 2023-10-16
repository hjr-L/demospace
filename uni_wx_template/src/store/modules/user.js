// import Cookies from 'js-cookie'
import { wxLogin } from "@/utils";
import { login } from "@/api/user";
let count = 5;
const state = {};

const mutations = {};

const actions = {
  userLogin({ commit }, value) {
    let timer = setImmediate(async () => {
      try {
        if(count<=0){
          uni.showToast({
            title: '失败'
          })
          clearImmediate(timer);
          timer = null;
        }
        const result = await wxLogin();
        if (result.code) {
          const user = await login({ code: result.code });
          clearImmediate(timer);
          timer = null;
        }else{
          count--;
        }
      } catch (error) {
          count--;
      }
    }, 500);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
