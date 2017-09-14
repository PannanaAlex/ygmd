<template>
  <div class="crumbs_container">
        <router-link v-for="(path,index) in pathItems" :to="path.url" :key="index">{{path.name}} <span> > </span> </router-link>
  </div>
</template>

<script>
export default {
    name:'Crumbs',
    props:{
        pathItems:{
            type:Array,
            required:true,
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/com.scss";
  .crumbs_container{
       a {
           color: #a6b7b8;
           font-size: torem(28px);
           &:last-child {
               span {
                   display: none;
               }
           }
       }
  }
</style>
