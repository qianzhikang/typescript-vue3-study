<template>
  <div>
    <!-- 不通过父组件可以直接向孙子组件传递数据 -->
    <h2>provide和inject</h2>
    <p>当前颜色:{{ color }}</p>
    <button @click="changeColor('red')">red</button>
    <button @click="changeColor('green')">green</button>
    <button @click="changeColor('blue')">blue</button>
    <hr>
    <!-- 子组件 -->
    <son-components></son-components>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import SonComponents from './components/Son.vue'
export default defineComponent({
  name: "App",
  components:{
    SonComponents
  },
  setup() {
    const color = ref("red");
    const changeColor = (val: string) => {
      console.log(val)
      color.value = val;
    };
    // 使用provide向下传值，下层使用inject('key')接收
    provide('color',color)
    
    return {
      color,
      changeColor,
    };
  },
});
</script>

<style></style>
