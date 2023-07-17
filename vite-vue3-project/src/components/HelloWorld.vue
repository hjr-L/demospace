<template>
  <h1>{{ count }}</h1>
</template>

<script>
import {getCurrentInstance, ref} from 'vue';
export default {
  setup(){
    const instance = getCurrentInstance();
    setTimeout(()=> console.log(instance, instance.data))
    // console.log(instance, instance.data);
    const count = ref(0);
    count.value = count.value + instance.data.num;
    return {
      count
    }
  },
  data(){
    return {
      test: "123",
      num:0
    }
  },
  mounted(){
    setTimeout(()=> this.num = 10, 1000)
    console.log(this.count);
  }
}

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
