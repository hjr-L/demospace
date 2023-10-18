<template>
  <div>
    <h1>{{ count }}</h1>
    <span class="error">error color</span>
    <span class='fd'></span>
  </div>
</template>

<script>
import {getCurrentInstance, nextTick, ref} from 'vue';
export default {
  setup(){
    const instance = getCurrentInstance();
    const count = ref(0);
    nextTick(()=>{
      count.value = count.value + instance.data.num;
    })
    return {
      count
    }
  },
  data(){
    return {
      test: "123",
      num: 1
    }
  },
  mounted(){
    setTimeout(()=> this.num = 10, 1000)
  }
}

</script>

<style lang="less" scoped>
.read-the-docs {
  color: #888;
}
.error{
  color: @errorColor;
  text-decoration: dashed;
  font-size: 24px;
}
</style>
