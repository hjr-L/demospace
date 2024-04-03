<template>
    <NuxtLayout></NuxtLayout>
</template>

<script setup>
const counter = useState('counter', () => Math.round(Math.random() * 10000))
const runTimeConfig = useRuntimeConfig();
const router = useRoute();
console.log(router);
definePageMeta({
    validate: async (route) => {
        // return false 将404
        return /^\d+$/.test(route.params.id)
    }
})
useHead({
    meta: [
        { name: 'description', content: "description" }
    ],
})
// $fetch 发起请求 不使用useAsyncData封装会造成数据查询两次
// useAsyncData(key值，查询函数)
/**
pick 和 transform 可以只让服务端返回传输需要的数据，refresh可以刷新数据， execute手动获取
useFetch 以上两者的封装 const {pending, data, error, execute, refresh, status} = await useFetch('/cart/coupons', {lazy: true, pick: ['a','b'],   transform: (mountains) => {
  return mountains.map(mountain => ({ title: mountain.title, description: mountain.description }))
}})
*/ 
const { data: discounts, pending } = await useAsyncData('cart-discount', async () => {
    const [coupons, offers] = await Promise.all([$fetch('/cart/coupons'), $fetch('/cart/offers')])

    return {
        coupons,
        offers
    }
})

</script>

<style lang="less" scoped></style>
