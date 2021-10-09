<template>
  <div>
    <h3>我是一名用户</h3>
    <p>我是用户的内容</p>
    <p>{{userId}}</p>
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    userId() {
      return this.$route.params.userId
    }
  },
  created() {
    console.log("home create");
  },
  destroyed() {
    console.log('home destroyed');
  },
}
</script>

<style scoped>

</style>
