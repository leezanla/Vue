<template>
  <div>
    <h3>我是关于标题</h3>
    <p>我是关于内容</p>
  </div>
</template>

<script>
export default {
  name: "About",
  created() {
    document.title = '关于';
    console.log("home create");
  },
  destroyed() {
    console.log('home destroyed');
  },
}
</script>

<style scoped>

</style>
