<template>
  <p>{{ mainStore.count }}</p>
  <p>{{ mainStore.foo }}</p>
  <p>{{ mainStore.arr }}</p>
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
  //方式一：最简单的方式就是这样
  // mainStore.count++;
  // mainStore.foo='hello';
  //方式二：如果需要修改多个数据，建议使用 $patch,批量更新(有性能优化,)
  // mainStore.$patch({
  //   count: mainStore.count + 1,
  //   foo: "hello",
  //   arr: [...mainStore.arr, 4],
  // });
  //方式三：$patch一个函数,批量更新(有性能优化,)
  // mainStore.$patch((state) => {
  //   state.count++;
  //   state.foo = "hello";
  //   state.arr.push(4);
  // });
  //方式四：逻辑比较多的时候可以封装到actions做处理
  mainStore.changeState(10);
};
</script>
