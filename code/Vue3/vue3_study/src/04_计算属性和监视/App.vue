<template>
  <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓名</legend>
    姓氏：<input
      type="text"
      placeholder="请输入姓氏"
      v-model="user.firstName"
    />
    <br />名字：<input
      type="text"
      placeholder="请输入名字"
      v-model="user.lastName"
    />
  </fieldset>
  <fieldset>
    <legend>计算属性和监视</legend>
    姓名：<input
      type="text"
      placeholder="请输入名字"
      v-model="fullName1"
    /><br />
    姓名：<input
      type="text"
      placeholder="请输入名字"
      v-model="fullName2"
    /><br />
    姓名：<input type="text" placeholder="请输入名字" v-model="fullName3" />
  </fieldset>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  watch,
  ref,
  watchEffect,
} from "vue";

export default defineComponent({
  name: "App",
  setup() {
    // 定义响应式对象
    const user = reactive({
      firstName: "qzk",
      lastName: "qzk",
    });
    // 通过计算属性的方式实现第一个姓名显示框
    // vue3中的计算属性
    // 只传入一个回调函数表示的是get
    // 第一个姓名
    const fullName1 = computed(() => {
      return user.firstName + "_" + user.lastName;
    });

    // 第二个姓名
    const fullName2 = computed({
      get() {
        return user.firstName + "_" + user.lastName;
      },
      set(val: string) {
        const names = val.split("_");
        user.firstName = names[0];
        user.lastName = names[1];
      },
    });

    // 第三个姓名：使用监视的方式实现
    const fullName3 = ref("");
    watch(
      user,
      ({ firstName, lastName }) => {
        fullName3.value = firstName + "_" + lastName;
      },
      { immediate: true, deep: true }
      //{ immediate: true, deep: true } immediate表示自动执行一次，这样首次运行不会存在空值  deep 表示深度监视
    );

    // 监视，不需要配置immediate，本身默认监视一次
    watchEffect(() => {
      const names = fullName3.value.split("_");
      user.firstName = names[0];
      user.lastName = names[1];
    });
    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    };
  },
});
</script>

<style></style>
