import Vue from 'vue';
import Router from 'vue-router';
// import Index from '@/page/index';
//import Page1 from '@/page/page1';
//import Page2 from '@/page/page2';
//import Page3 from '@/page/page3';
//import Page4 from '@/page/page4';
//import Page5 from '@/page/page5';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import(`@/page/index`)
    },   
    {
      path:'/category/:catid',
      name:'category',
      component:() => import(`@/page/category`) //一级新闻列表
    },
    {
      path:"/list/:catid",
      name:"list",
      component:() => import(`@/page/list`)  //二级新闻列表
    },
    {
      path:'/category_picture/:catid',
      name:'category_picture',
      component:() => import(`@/page/cat_picture`) //一级图片列表
    },
    {
      path:"/list_picture/:catid",
      name:"list_picture",
      component:() => import(`@/page/list_picture`)  //二级图片列表
    },
    {
      path:'/show/:catid/:id',
      name:'show',
      component:() => import(`@/page/show`)  //内容页
    }
    // {path:"/search/:goodsname",name:"search",
    //     components:{
    // 	    header:MainHeader,
    // 	    content:Search,
    // 	    footer:NoFooter
    	
    //     },
    //     children:[
    //       {path:"searchlist/:id",name:"searchlist",component:SearchList}
    //     ]
    // },

    
  ]
})
