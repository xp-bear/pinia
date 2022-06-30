<template>
  <p>{{ mainStore.count }}</p>
  <p>{{ mainStore.foo }}</p>
  <hr />
  <p>{{ count }}</p>
  <p>{{ foo }}</p>
  <hr />
  <p><button @click="handleChaneClick">修改数据</button></p>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useMainStore } from "../store/index";

const mainStore = useMainStore();
/*
  //这是有问题的，因为这样拿到的数据不是响应式的，是一次性的
  //Pinia其实就是把state数据都做了 reactive 处理了
  // const { count, foo } = mainStore;

  // 解决办法是:使用pinia的storeToRefs进行解构
  // 把解构出来的数据做ref 响应式代理,所以访问的时候,是使用count.value进行访问.
  const { count, foo } = storeToRefs(mainStore);
  console.log(count.value)
*/
const { count, foo } = storeToRefs(mainStore);

// 修改函数
const handleChaneClick = () => {
  mainStore.count++;
};
</script>
