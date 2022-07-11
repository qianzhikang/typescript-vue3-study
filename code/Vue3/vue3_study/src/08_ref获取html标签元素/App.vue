<template>
  <div>
    <h2>ref获取页面中的元素</h2>
    <input type="text" ref="inputRef"/>
  </div>
</template>

<script lang="ts">
import { defineComponent,onMounted,ref } from "vue";
export default defineComponent({
  name: "App",
  // 需求：当页面加载后，页面中的文本框可以自动获取焦点
  setup() {
    const inputRef = ref<HTMLElement | null>(null)
    // 页面加载后的生命周期
    onMounted(()=>{
      inputRef.value&&inputRef.value.focus() //自动获取焦点
    })
    return {
      inputRef
    };
  },
});
</script>

<style></style>
