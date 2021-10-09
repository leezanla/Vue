<template>
  <div>
    <h3>我是家标题</h3>
    <p>我是家内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: '/home/news',
    }
  },
  created() {
    console.log("home create");
  },
  destroyed() {
    console.log('home destroyed');
  },
  // activated() {
  //   this.$router.push(this.path)
  // },
  // beforeRouteLeave(to, from, next) {
  //   this.path = this.$route.path
  //   next()
  // }
}
</script>

<style scoped>

</style>
