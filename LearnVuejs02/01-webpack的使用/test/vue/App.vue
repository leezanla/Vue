<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      message: 'Hello Webpack',
      name: '我是组件中的名字'
    }
  },
  methods: {
    btnClick() {

    }
  }
}
</script>

<style scoped>
.title {
  color: green;
}
</style>