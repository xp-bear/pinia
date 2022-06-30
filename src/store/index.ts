import { defineStore } from "pinia";

// 1.定义并且导出容器

//参数1：容器的ID，必须唯一，将来Pinia会把所以的容器挂载到根容器
// 参数2：选项对象
// 返回值：一个函数，调用得到容器实例
export const useMainStore = defineStore("main", {
  /*
  类似于组件的data，用来存储全局状态的
  1.必须是函数：这样是为了在服务端渲染的时候避免交叉请求导致的数据状态污染
  2.必须是箭头函数，这是为了更好的TS类型推导
  */
  state: () => {
    return {
      count: 100,
      foo: "bar",
    };
  },

  /**类似于组件的computed，用来封装计算属性，有缓存的功能 */
  getters: {},

  /**类似于组件的methods，封装业务逻辑，修改state */
  actions: {},
});
// 2.使用容器中的state

//3.修改state

//4.容器中的action的使用
