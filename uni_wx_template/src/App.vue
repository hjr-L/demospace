<script>
import {userLogin} from '@/store'
export default {
  onLaunch: function () {
    console.log('App Launch');
    // 初始化登录
    userLogin();
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style>
/*每个页面公共css */
</style>
