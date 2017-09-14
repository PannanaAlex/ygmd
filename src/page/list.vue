<template>
   <div class="morenews">
         <section class="page1">
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
        </section> 
        <section class="page2">
            <h2>{{catname}}</h2>
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <router-link :to="{name:'show',params:{catid:item.catid,id:item.id}}"><p>{{item.title}}</p><span>{{item.inputtime}}</span></router-link>			
                </li>
            </ul>
        </section>
        <section class="page3">
            <paging @pageClick="pageClick" :all="all" :cur="cur"></paging>
        </section>
    </div>
</template>

<script>
    import Paging from "@/components/index/Paging";
    import MyAjax from "./../md/MyAjax.js";
    export default {
         data() {
			return {
				all: 3, //总页数
	            cur: 1,//当前页码
                list:[],
                catname:""
//	            catid:117		
			}
		},
		components: {      
            Paging
        },
         computed:{
            // catname(){
            //     return this.$route.query.catName
            // }
        },
	    methods: {  
            download(){
                alert("暂未开放，敬请期待")
            },
	        pageClick(flag){
	            if(flag){
	                this.cur++;
	            }else{
	                this.cur--
	            }
	            this.fetch(this.cur);
	        },
	        fetch(page=0,catid=this.catid){
	            const that = this;
               // this.catid = this.$route.params.id;
                console.log(catid);
               const url = `http://apicms.gulugames.cn/api.php?op=get_news&catid=${catid}&page=${page}&size=5`;
                
                MyAjax.fetchJsonp(url,(data) => {
                    console.log(data)
                    that.list = data.data;
                    that.all = Math.ceil(data.count/5)
                },(err) => {
                    console.log(err);
                })
	        },
	        handlClick(catid){
	            this.catid = catid;
	            this.cur = 1
	            this.fetch(1,catid)
	        }
	    },
		mounted() {	
            const that = this;
            this.catid = this.$route.params.catid;	
            this.fetch(0,this.catid);	
            const url = `http://apicms.gulugames.cn/api.php?op=get_category_info&catid=${this.catid}`; 
            MyAjax.fetchJsonp(url,(data) => {
                console.log(data)
                that.catname = data.data.catname;
                // that.all = Math.ceil(data.count/5)
            },(err) => {
                console.log(err);
            })	
		}
    }
</script>

<style lang="scss" scoped>
@import "../assets/scss/com.scss";

.morenews {
    position: relative;

     .page1 {
        height: torem(146px);     
        padding: 0 torem(30px);
        border-bottom: 2px #514c82 solid;
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
       
        h2 {
           height: torem(115px);
           line-height: torem(150px);
           padding-left: torem(10px);
           border-bottom: torem(1px) #514c82 solid;
           color: #514c82;
           font-weight: bold;
           font-size: torem(40px);
           margin: 0 torem(550px) torem(30px) torem(20px);
           text-align: center;
        }
        ul {
            padding: 0 torem(20px);
            color: #869ea2;
            font-size: torem(28px);
            min-height: torem(350px);
            li {
                height: torem(70px);
                line-height: torem(70px);
                border-bottom: torem(1px) #869ea2 dotted;
                padding-top: torem(10px);
                position: relative;
                p {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    margin-right: torem(160px);
                }
                span {                
                    position: absolute;
                    right: 0;
                    top: torem(10px);
                    font-size: torem(24px);
                    margin-left: torem(30px);
                    color: #949ab4;
                }
            }
        }
        
    }
    .page3 {
        position: absolute;
        width: torem(210px);
        bottom: torem(-300px);
        left: 50%;
        transform: translateX(-50%);
    }
}
</style>
