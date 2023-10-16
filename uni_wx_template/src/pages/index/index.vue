<template>
  <view class="content">
    <view class="banner">banner</view>
    <uni-notice-bar scrollable single text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
    <view class="search">
      <uni-input type="text" />
      <button>开始解析</button>
      <button>粘贴</button>
    </view>
  </view>
</template>


<script>
export default {
  data() {
    return {
      title: 'Hello',
    }
  },
  onLoad() {},
  methods: {},
}
</script>

<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.banner{
  width: 100vh;
  height: 400rpx;
  background-color: #8f8f94;
}
.search{
  width: 100vh;
  height: 50px;
  display: flex;
  justify-content: space-around;
}



.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
