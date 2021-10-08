<template>
  <div id="app">
    <!--<button>首页</button>-->
    <!--<button>关于</button>-->

    <!--<router-link to="/home" replace tag="button" active-class="active">首页</router-link>-->
    <!--<router-link to="/about" replace tag="button">关于</router-link>-->
    <!--<router-view></router-view>-->
    <!--&lt;!&ndash;<div>你好吗？</div>&ndash;&gt;-->
    <!--<button @click="homeClick">首页</button>-->
    <!--<button @click="aboutClick">关于</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/' + userId">用户</router-link>
    <!--<button @click="profileClick">profile</button>-->
    <router-link :to="{path: '/profile', query: {name: 'lee', age: 18, gender: 'female'}}" tag="button">profile</router-link>
    <keep-alive>
      <router-view>

      </router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lee',
    }
  },
  methods: {
    homeClick() {
      this.$router.push('/home');
    },
    aboutClick() {
      this.$router.push('/about');
    },
    profileClick() {
      // this.$router.push('/profile');
      this.$router.push({
        path: '/profile',
        query: {
          name: 'lee',
          age: 18,
          gender: 'male',
        }
      })
    }
  }
}
</script>

<style>
.router-link-active {
  color: #f00;
}
</style>
