<template>
  <div>
    <h2 :style={color}>孙子组件</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject} from "vue";
export default defineComponent({
  name: "GrandsonComponents",
  setup() {
    const color = inject('color')
    console.log(color)
    return {
        color
    };
  },
});
</script>

<style></style>

