<template>
  <div>
    <h3>我是profile中的标题</h3>
    <h4>{{this.$route.query.name}}</h4>
    <h4>{{this.$route.query.age}}</h4>
    <h4>{{this.$route.query.gender}}</h4>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>

</style>
