<template>
    <div class="tabnews">
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
            <div class="tab"><tab @handlClick="handlClick"></tab></div>
			<newsList :list="list"></newsList> 
        </section>
        <section class="page3">
            <paging @pageClick="pageClick" :all="all" :cur="cur"></paging>
        </section>
    </div>
</template>

<script>
    import NewsList from "@/components/index/NewsList";
    import Tab from "@/components/index/Tab";
    import Paging from "@/components/index/Paging";
    import MyAjax from "./../md/MyAjax.js";
    export default {
         data() {
			return {
				all: 3, //总页数
	            cur: 1,//当前页码
	            list:[],
//	            catid:117		
			}
		},
		components: {
	        NewsList,
            Tab,
            Paging
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
	            var that = this;
	            var url = `http://apicms.gulugames.cn/api.php?op=get_news&catid=${catid}&page=${page}&size=5`;
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
			//this.fetch(0,115);
            this.fetch('',129,5)		
		}
    }
</script>

<style lang="scss" scoped>
 
@import "../assets/scss/com.scss";
.tabnews {
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
        .tab {
            height: torem(115px);
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
