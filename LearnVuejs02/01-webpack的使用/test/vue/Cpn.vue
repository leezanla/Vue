<template>
  <h3>我是cpn组件中的标题</h3>
  <p>我是cpn组件中的内容</p>
  <p>{{}}</p>
</template>

<script>
export default {
  name: "Cpn",
  data() {
    return {
      name: '我是cpn组件中的name'
    }
  }
}
</script>

<style scoped>
p {
  color: black;
}
</style>