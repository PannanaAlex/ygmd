<template>
  <div id="myApp">
    <Header-page v-if='show'></Header-page>
    <div id="content">
        <router-view @footerChange='footerChange'></router-view>
    </div>   
    <Footer-page :activeState="activeState"></Footer-page>
  </div>
</template>

<script>
    import HeaderPage from '@/components/com/header.vue';
    import FooterPage from '@/components/com/footer.vue';
export default {
  name: 'app',
  data(){
    return {
      show:false,
      activeState:false
    }
  },
  components:{
      HeaderPage,
      FooterPage
  },
  methods:{
    footerChange(data){
      this.activeState = data;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>