<template>
  <div id="app">
    <h3>{{ $store.state.counter }}</h3>
    <button @click="addition">-</button>
    <button @click="subtraction">+</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <hello-vuex></hello-vuex>
    <h3>app中的getters属性</h3>
    <h3>{{$store.getters.powerCounter}}</h3>
    <h3>{{$store.getters.more20stu}}</h3>

    <h3>测试mutations中的异步操作</h3>
    <button @click="modifyInfo">异步</button>
    <h3>{{$store.state.info}}</h3>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  import {INCREMENT} from "./components/Mutations-types";

  export default {
    name: 'App',
    data() {
      return {
        message: "我是App组件",
        counter: 0
      }
    },
    components: {
      HelloVuex
    },
    methods: {
      addition() {
        this.$store.commit(INCREMENT);
      },
      subtraction() {
        this.$store.commit('decrement')
      },
      addCount(count) {
        this.$store.commit('incrementCount', count)
      },
      modifyInfo() {
        this.$store.dispatch('updateInfo')
      }
    }
  }

  const obj = {
    name: 'lee',
    age: 19,
    height: 1.55,
    address: '洛杉矶'
  }
  const {name ,height, age} = obj;
  console.log(obj)
</script>

<style>

</style>
