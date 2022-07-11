<template>
  <div>
    <h2>toRef的使用</h2>
    <!-- 未解构返回时渲染方式 -->
    <!-- <h3>name:{{ state.name }}</h3>
    <h3>age:{{ state.age }}</h3> -->
    <!-- 解构返回的state2中的属性 -->
    <h3>name:{{ name }}</h3>
    <h3>age:{{ age }}</h3>
    <button @click="timeStop">stop</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({
      name: "qzk",
      age: 20,
    });
    // 使用toRefs可以把一个响应式对象转换成普通对象，该普通对象的每个属性都是一个ref
    const state2 = toRefs(state)
    // 响应式数据测试
    const timer = setInterval(() => {
      state.age += 1;
    }, 1000);
    const timeStop=() => {
      clearInterval(timer)
    }
    return {
      // state,
      // 使用解构的方式返回state,这时就变成了{name:'qzk',age:20},不再是响应式数据了。
      // ...state,
      // 使用toRefs转换之后的state2解构后，数据依然是响应式的
      ...state2,
      timeStop,
    };
  },
});
</script>

<style></style>
