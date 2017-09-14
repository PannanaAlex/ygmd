<template>
    <div>
        <section class="page1">
            <div class="top">
				<section class="left">
                    <router-link to="/">
                        <div class="logo"><img src="../assets/image/icon.png"/></div>
                        <div class="word">
                            <p>妖怪名单</p>
                            <span>此时此世与你相约</span>
                        </div>
                    </router-link>
				</section>
				<section class="right" @click="download()"></section>
			</div> 
        </section>
        <section class="page2">
            <div class="left">
                <Crumbs :path-items="pathItems"></Crumbs>
                <!-- <span><router-link to="/">首页</router-link></span> > <span><router-link :to="{name:'category',params:{catid:catid1}}">新闻</router-link></span> > <span>{{catname}}</span> -->
            </div>
            <div class="right">{{updatetime}}</div>
        </section>
        <section class="page3">
            <div class="socialShare share-item share-component social-share">
                分享到：
			</div>
            <div v-html="list.content" class="content"></div>
        </section>
    </div>
</template>

<script>
import MyAjax from "./../md/MyAjax.js";
import Crumbs from "@/components/common/Crumbs";
export default {
   data(){
        return {
            list:{},
            list2:"",
            catname:"",
            catid1:"0",
            updatetime:"",
            pathItems:[],
            fromRoute:''
        }
    },
    components:{
        Crumbs
    },
    methods: {
        download(){
            alert("暂未开放，敬请期待")
        },
        //路由初始化方法
        pathInit(){
            let arr = []
            switch(this.fromRoute){
                case "category" :
                    arr.push({name:'首页',url:'/'})
                    arr.push({name:'新闻中心',url:`/category/${129}`})
                    arr.push({name:this.catname,url:``})
                break;
                case "category_picture" :
                    arr.push({name:'首页',url:'/'})
                    arr.push({name:'同人专区',url:`/category_picture/${130}`})
                    arr.push({name:this.catname,url:``})
                break;
                default:
                    arr.push({name:'首页',url:'/'})
                    arr.push({name:this.catname,url:``})
                ;break;
                         
            }
            this.pathItems = arr
            //console.log(this.fromRoute);
        }
    },
    // watch:{
    //     '$route':function(to, from){
    //         console.log(to,from)
    //     },
    // },
    beforeRouteEnter (to, from, next) {
        next(vm => {                
            vm.fromRoute = from.name
        })       
    },

    mounted(){
        const that = this;
        const {catid,id} = this.$route.params;
        const url = `http://apicms.gulugames.cn/api.php?op=get_content&catid=${catid}&id=${id}`;
        MyAjax.fetchJsonp(url,(data) => {
            console.log(data);
            console.log(data.data.postion);
            that.list = data.data;
            that.updatetime = data.data.updatetime;
        },(err) => {
            console.log(err);
        })
			
        // const url2 = "http://apicms.gulugames.cn/api.php?op=get_category&siteid=13&field=setting"; //二级位置
        // MyAjax.fetchJsonp(url2,(data) => {
        //     console.log(data)
        //     that.list2 = data.data;
        // },(err) => {
        //     console.log(err);
        // })
	
        const url1 = `http://apicms.gulugames.cn/api.php?op=get_category_info&catid=${catid}`; //三级位置
        MyAjax.fetchJsonp(url1,(data) => {
            //console.log(data)
            that.catname = data.data.catname;
            that.catid1 = data.data.catid;
            // that.all = Math.ceil(data.count/5)
            this.pathInit()
        },(err) => {
            console.log(err);
        })	

        $('.share-item').share({
            title: '',
            sites:['weibo','qzone','tencent']
        });
    
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/com.scss";
    .page1 {
        height: torem(146px);     
        padding: 0 torem(30px);
        border-bottom: 1px #959595 solid;
        .left {
            float: left;
            height: torem(95px);
            margin-top: torem(25px);
            .logo {
                width: torem(95px);
                height: torem(95px);
                background: #ccc;
                border-radius: torem(20px);
                float: left;
                margin-right: torem(20px);
            }
            .word {
                float: left;
                color: #514c82;
                p {
                    font-size: torem(40px);
                    font-weight: bold;
                }
                span {
                    font-size: torem(18px);
                }
            }
        }
        .right {
            width: torem(150px);
            height: torem(57px);
            background: url(../assets/image/bg13.png);
            background-size: 100% 100%;
            float: right;
            margin-top: torem(45px);
        }
    }
    .page2 {
        height: torem(100px);
        line-height: torem(100px);
        border-bottom: 1px #959595 solid;
        padding: 0 torem(30px);
        color: #a6b7b9;
        font-size: torem(30px);

        .left {
            float: left;
            span {
                a {
                    color: #a6b7b9;
                }
            }
        }
        .right {
            float: right;
        }
    }
    .page3 {
        padding: 0 torem(20px);
        .share-item {
             height: torem(100px);
             line-height: torem(110px);
             font-size: torem(28px);
             text-align: center;
             color: #a6b7b9;
        }
        .content {
            font-size: torem(28px);
            p {
                margin-bottom: torem(10px);
            }
            img {
                display: block;
                width: 100%;
                margin: torem(10px) 0;
            }
        }
       
    }
</style>
