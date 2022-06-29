<template>
  <h2>reactive响应式对象</h2>
  <h3>姓名：{{ user.name }}</h3>
  <h3>年龄：{{ user.age }}</h3>
  <h3>wife：{{ user.wife }}</h3>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const obj = {
      name: "qzk",
      age: 20,
      wife: {
        name: "xiaotiantian",
        age: 20,
        car: ["宝马"],
      },
    };
    const user = reactive<any>(obj);

    const update = () => {
      user.name += "++";
      // 删除user->obj中的属性,需要将reactive的泛型改为any
      delete user.age;
      // 删除user代理中的属性同时也会删除obj中的age
      console.log(obj);
    };
    return {
      user,
      update,
    };
  },
});
</script>

<style></style>
