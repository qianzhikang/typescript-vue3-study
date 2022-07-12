<template>
  <div>
    <h2>子组建</h2>
    <hr>
    <grandson-components></grandson-components>
  </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";
// 子组件中引入孙子组件
import GrandsonComponents from "./Grandson.vue"
export default defineComponent({
  name: "SonComponents",
  components:{
    GrandsonComponents
  },
});
</script>

<style></style>

