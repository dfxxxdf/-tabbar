<!--我是模板，主要用于写界面-->
<template>
  <div id="app">
    <!-- 这里必须要有一个路由的占位符-->
    <router-view></router-view>
   <main-tab-bar/>
  </div>
</template>
<script>
  import MainTabBar from './components/mainTabbar/MainTabBar'
  export default {
    name: 'App',//我主要是把模板链接过来
    components: {
      MainTabBar
    }
}
</script>
<style>
  /*因为这里是在style标签里导入的，所以要用到@*/
  @import "./assets/css/base.css";
</style>
