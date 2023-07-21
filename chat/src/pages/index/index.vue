<template>
  <scroll-view class="content" :scroll-y="true">
    <view class="context">
      <view v-for="(item, index) of messages" :key="index">
        <view class="avatar">
          {{ item.role == "user" ? "User" : "Robot" }}
        </view>
        <view class="output">
          {{ item.content }}
        </view>
      </view>
      <p class="error">{{ errorMsg }}</p>
    </view>
    <view class="bottom">
      <view class="input_group">
        <input
          type="textarea"
          v-model="content"
          class="input"
          focus
          @confirm="submit"
          placeholder="Input"
        />
        <div
          class="button"
          @click="submit"
          :class="{ disabled: !content.trim().length }"
        >
          send
        </div>
      </view>
    </view>
  </scroll-view>
</template>

<script setup>
import chat from "@/utils/chat.js";
import { ref } from "vue";

// "system"用于向模型传递系统级的指示，而"user"和"assistant"分别表示用户的输入和助手（模型）的回复。
// const role = []

const content = ref(""); //用户输入message
const messages = ref([]); //message列表
const errorMsg = ref(""); //error

const submit = async () => {
  try {
    const newContent = {
      role: "user",
      content: content.value.trim(),
    };
    messages.value.push(newContent);
    const result = await chat(messages.value);

    const resultContent = {
      role: "assistant",
      content: result,
    };
    messages.value.push(resultContent);
    errorMsg.value = "";
    content.value = "";
  } catch (error) {
    console.log(error);
    errorMsg.value = error;
  }
};
</script>

<style lang="less">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .error {
    color: rgb(246, 80, 80);
    height: 20rpx;
  }
  .bottom {
    padding-bottom: calc(constant(safe-area-inset-bottom) + 10rpx);
    padding-bottom: calc(env(safe-area-inset-bottom) + 10rpx);
    height: 120rpx;
    box-sizing: border-box;
    padding: 0 12rpx;

    .input_group {
      display: flex;
      justify-content: space-around;
      width: 100%;
    }
    .input {
      border: 2rpx solid #777;
      height: 80rpx;
      padding: 0 10rpx;
      flex: 1;
    }
    .button {
      width: 140rpx;
      height: 80rpx;
      line-height: 80rpx;
      text-align: center;
    }
    .disabled {
      background-color: #f3f1f1;
    }
  }
}

.context {
  width: 100%;
  height: calc(100vh - 130rpx);
  // padding: 20rpx 15rpx;
  & > view {
    display: flex;
    align-items: self-start;
    justify-content: flex-start;
    margin: 14rpx;
    .avatar {
      width: 80rpx;
      height: 80rpx;
      border-radius: 50%;
      margin-right: 20rpx;
      background: #bbee9c;
      line-height: 80rpx;
      text-align: center;
      color: rgb(159, 157, 157);
      font-size: 24rpx;
    }
    .output {
      // background-color: #d1d0d0;
      box-shadow: 0 2px 12px 0 rgba(48,48,48,.05), 0 2px 4px 0 rgba(48,48,48,.1);
      width: auto;
      padding: 10rpx 16rpx;
      background-color: #fff;
      border-radius: 5rpx;
      min-height: 80rpx;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
  }
}
</style>
