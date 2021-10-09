<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      link: String,
      activeColor: {
        type: String,
        default: 'red',
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.link)
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.link) !== -1;
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    font-size: 15px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
