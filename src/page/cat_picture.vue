<template>
  <div class="cat_picture">
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
			<ul class="tab">
				<li v-for="(item,index) in list" :key="index" @click="collClick(index,item.catid)" :class="collIndex == index ? 'coll_active' : ''">
					<span></span>
					{{item.catname}}</li>
                
			</ul>
			<ul class="content">
				<li v-for="(item,index) in list1" :key="index" :class="item.vurl != '' ? 'videoActive' : '' ">
					<router-link :to="{name:'show',params:{catid:item.catid,id:item.id}}">
						<p ><img :src="item.thumb" /></p>   
					    <span>{{item.title}}</span>
						<h1><img src="../assets/image/bg3.png"/></h1>
					</router-link>				
				</li>
			</ul>
		</section>  

    <section class="page3">
        <paging @pageClick="pageClick" :all="all" :cur="cur"></paging>
    </section> 
  </div>
</template>

<script>
import MyAjax from "./../md/MyAjax.js";
import Paging from "@/components/index/Paging";
export default {
  data(){
    return {
      list:"",
      list1:"",
      collIndex:0,
      all: null, //总页数
      cur: 1, //当前页码
      catid:""
    }
  },
  components: {
    Paging
  },
  methods:{
    download(){
      alert("暂未开放，敬请期待")
    },
    collClick(index,catid){
      this.collIndex = index;
      this.catid = catid;
      this.collFetch(catid)
    },
    pageClick(flag){
      if(flag){
          this.cur++;
      }else{
          this.cur--
      }
      this.collFetch(this.catid,this.cur);
    },
    collFetch(catid,page=1){
				const that = this;
				const url1 = `http://apicms.gulugames.cn/api.php?op=get_news&catid=${catid}&page=${page}&size=4&field=vurl`;  //同人专区图片
				MyAjax.fetchJsonp(url1,(data) => {
					//console.log(data)
          that.list1 = data.data;
          that.all = Math.ceil(data.count/4);
					//that.vurl = data.data.vurl;
				},(err) => {
					console.log(err);
				})
			}
  },
  mounted(){
    this.collFetch(135);

    const that = this;
    const url = "http://apicms.gulugames.cn/api.php?op=get_category&siteid=13&catid=130"; //同人专区
    MyAjax.fetchJsonp(url,(data) => {
      //console.log(data)
      that.list = data.data;
    },(err) => {
      console.log(err);
    })
    
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/com.scss";
.cat_picture {
  position: relative;

.page1 {
    height: torem(146px);     
    padding: 0 torem(30px);
    border-bottom: 2px #514c82 solid;
    margin-bottom: torem(25px);
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
  .coll_active{
			color: #514c82;
		}
		.tab {
			font-size: torem(32px);
			height: torem(45px);
			line-height: torem(45px);
			display: flex;
			margin: 0 torem(40px);
			padding: 0 torem(15px);
			margin-bottom: torem(35px);
			color: #8d89a8;			
			li {
				width: 100%; height: 100%;
				flex: 1;
        position: relative;
        text-align: center;
				span{
					display:inline-block;
					width: torem(45px);
					height: torem(49px);
					background: url(../assets/image/bg8.png);
					background-size: 100% 100%;
					position: absolute;
					right:0;
					top:50%;
					transform: translateY(-50%);
				}				
				&:nth-child(2){
					span{
						right:torem(-55px);
					}
				}
				&:first-child{
					text-align:left;
				}
				&:last-child{
					text-align: right;
					span{
						display: none;
					}
				}
			}
			// .active{
			// 	color: red;
			// }
		}
		.content {
			width: torem(666px);
			min-height: torem(500px);			
      margin: 0 torem(40px);
      overflow: hidden;
			li {
				width: torem(320px);					
				height: torem(240px);		
        position: relative;	
        float: left;
        margin-right: torem(13px);
        margin-bottom: torem(13px);
				h1 {
					display: none;
					width: 100%;
					height: 100%;
					background: rgba(0,0,0,.5);
					position: absolute;
					left: 0;
					top: 0;
					img {
						height: 40%;
						position: absolute;
						left:50%;
						top:50%;
						transform: translate(-50%,-50%);
					}
				}							
				p {
					width: 100%;
					height: 100%;
					img {
						width: 100%;
						height: 100%;
					}
				}
				span {
					display: block;
					width: 100%;
					height: torem(60px);
					line-height: torem(60px);
					text-align: center;
					background: rgba(0,0,0,.5);
					position: absolute;
					bottom: 0;
					color: #fff;
					font-size: torem(24px);
				}
				// &:nth-child(1) {
				// 	width: torem(440px);					
				// 	height: torem(250px);
				// 	float: left;
				// 	margin-right: torem(6px);
					
				// 	span {						
				// 		height: torem(60px);
				// 		line-height: torem(60px);						
				// 	}
				// }
				// &:nth-child(2) {
				// 	 float: right;
				// 	 margin-bottom: torem(8px);
				// }
				// &:nth-child(3) {
				// 	 float: right;
				// }
			}
			.videoActive {
				width: torem(320px);					
				height: torem(240px);
				position: relative;
				h1 {
					display: block;
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
