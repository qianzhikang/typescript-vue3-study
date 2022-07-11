<template>
  <h2>hook自定义函数</h2>
  <h2>x:{{ x }}</h2>
  <h2>y:{{ y }}</h2>
  <h3 v-if="loading">正在加载中....</h3>
  <h3 v-else-if="errorMsg">错误信息:{{errorMsg}}</h3>
  <!-- 对象数据 -->
  <ul v-else>
    <li>id:{{data.id}}</li>
    <li>address:{{data.address}}</li>
    <li>distance:{{data.distance}}</li>
  </ul>
  <hr>
  <!-- 数组数据 -->
  <ul v-for="item in data" :key="item.id">
    <li>id:{{item.id}}</li>
    <li>id:{{item.title}}</li>
    <li>id:{{item.price}}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import useMousePosition from './hooks/useMousePosition'
import useRequest from './hooks/useRequest'
// 定义接口约束对象类型
interface AddressData{
  id:number,
  address:string,
  distance:string
}
interface ProductsData{
  id:string,
  title:string,
  price:number
}
export default defineComponent({
  name: "App",
  setup() {
    const {x,y} = useMousePosition()
    // 请求对象
    // const {loading,data,errorMsg} = useRequest<AddressData>('/data/address.json')
    // 请求数组    
    const {loading,data,errorMsg} = useRequest<ProductsData[]>('/data/products.json')
    
    // 实现监视data返回的数组长度
    watch(data,()=>{
      // console.log(data.value.length)  //error，由于没有确定data.value的类型，是对象还是数组

      // 使用范型 + 接口约束 + 指定调用类型的方式解决ts报错问题
      if(data.value){
        console.log(data.value.length)
      }
    })
    return {
      x,
      y,
      loading,
      data,
      errorMsg
    };
  },
});
</script>

<style></style>
