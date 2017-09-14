<template>
	<div id="index">
		<toast
            :options="options"
            :show="showNotification"
            @hideToast="hideToast"
        ></toast>
		<section class="page1" :class="backState ? 'blue1' : 'pink1'">
			 <div class="pink" @click="blueChange"></div>
			 <div class="blue" @click="pinkChange"></div> 
			 <div class="present" @click="present()"></div>
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
				<section class="right">
					<!-- <a href="http://spread.gulugulu.cn/ga/ygmdgw.apk"></a> -->
					<a href="" @click="nodown()"></a>
				</section>
			</div> 
			<ul class="nav">
				 <!-- <li v-for="(item,index) in list6" :key="index"><router-link :to="{name:'category',params:{catid:item.catid}}">{{item.catname}}</router-link></li>   -->
				   <!-- <li v-for="(item,index) in list6" :key="index">
					<router-link :to="{path:`/${ item.has_child == 1 ? JSON.parse(item.setting).category_template + '/' + 
					item.catid : JSON.parse(item.setting).list_template + '/' + item.catid}`}">{{item.catname}}</router-link>
				</li>    -->
				<!-- <li><router-link :to="{name:'category',params:{catid:catid1}}">{{catname1}}</router-link></li>
				<li><router-link :to="{name:'category_picture',params:{catid:catid2}}">{{catname2}}</router-link></li>  -->
			 </ul>  
			<button @click="showVideo = !showVideo"></button>
			<div class="order" @click="order"></div>
		</section>

		       <section class="page2" :class="backState ? 'blue2' : 'pink2'">
			<div class="mod">
				<section class="swiper-container banner-swiper1">
					<ul class="swiper-wrapper">
						<li class="swiper-slide" v-for="(item,index) in list2" :key="index">
							<img :src="item.thumb"/>					
					   </li>								  
					</ul>
					<div class="pagination"></div>
				</section>
				<div class="news">
					<tab @handlClick="handlClick"></tab>
			        <newsList :list="list"></newsList> 
			        
				</div>
				<div id="ft">
					<router-link :to="{ name: 'list', params: { catid: catid ? catid : 129 }}">查看更多</router-link>				
				</div>
			</div>
		</section>

		<section class="page3" :class="backState ? 'blue3' : 'pink3'">
			<div class="gamesIntro">游戏介绍</div>
			<section class="swiper-container banner-swiper2">
				<ul class="swiper-wrapper">
					<li class="swiper-slide" v-for="(item,index) in list5" :key="index">
						<img :src="item.thumb"/>
						
				   </li>					
				</ul>
				<div class="prev"><img src="../assets/image/bg16.png"/></div>
                <div class="next"><img src="../assets/image/bg17.png"/></div>
			</section>
		</section>
		<section class="page4" :class="backState ? 'blue4' : 'pink4'">
			<div class="cartoon">动漫专区</div>
			<section>
				<div class="left"><a :href="list4Url"><img :src="list4"/></a></div>
				<div class="right">					
					<a :href="list4_1Url"><p><img src="../assets/image/bg3.png"></p><img :src="list4_1"/></a>
				</div>
			</section>
		</section>
		<section class="page5" :class="backState ? 'blue5' : 'pink5'">
			<div class="colleagues">同人专区</div>
			<ul class="tab">
				<li v-for="(item,index) in list3" :key="index" @click="collClick(index,item.catid)" :class="collIndex == index ? 'coll_active' : ''">
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
			<div class="backtop" @click="backTop"></div>
			<div class="socialShare share-item share-component social-share">
                分享到：
				<div class="share"></div>
			</div>
		</section>       

		<div id="mask" v-if="maskState">
			
			<div class="inner" v-if="showState">
				<a href="javascript:void(0);" class="close" @click="order"></a>
				<ul>
					<li><span :class="typeState ? 'typeActive' : ''" @click="typeClick('Android')">安卓用户</span>
					    <span :class="!typeState ? 'typeActive' : ''"  @click="typeClick('iOS')">IOS用户</span></li>
					<li><input type="number" v-model="tel" placeholder="输入手机号" oninput="if(value.length>11)value=value.slice(0,11)" class="tel"></li>
					<li>
						<input type="number" v-model="code" placeholder="输入验证码" class="code" oninput="if(value.length>6)value=value.slice(0,6)">
						<button class="send" @click="send" :disabled="codeText == '发送验证码' ? false : true">{{codeText}}</button>
					</li>
					<li></li>
					<div ></div>
						<button class="submit" @click="submit"></button>
					</li>
				</ul>
			</div>
			<div class="succes-content" v-else>
				<p>恭喜您<span>预约成功</span>，届时测试激活码<br/>将随机抽取并以<span>短信形式</span>发送至您<br/>预约的手机</p>
				<div class="btn" @click="order"></div>
					
			</div>
		</div>
	    
		<div id="video" v-if="showVideo">
			<div class="inner">
				<a href="javascript:void(0);" class="close" @click="showVideo = !showVideo">×</a>
				<video x-webkit-airplay="true" x5-video-player-fullscreen="true" x5-video-player-typ="h5" webkit-playsinline="true" playsinline="true" controls="controls" preload="auto"> 
					<source src="http://cdn.gulugulu.cn/phpcms/ygmd/video/ygmd.mp4?v=2" type="video/mp4">
				</video>  
			</div>
		</div>

	</div>

</template>



<script>
	import NewsList from "@/components/index/NewsList";
    import Tab from "@/components/index/Tab";
    import MyAjax from "@/md/MyAjax.js";
	import axios from 'axios';
	import {getStore,setStore} from '@/md/utils';
	import Toast from '@/components/com/toast'

	let swiper1 ,swiper2;
	export default {
		watch: {
			// list:function(newlist){
			// 	this.fetch('',129,3)
			// }
		},
		data() {
			return {
	            cur: 1,//当前页码
				vurl: "",
				list:[],	//栏目列表,
				list1:[],
				list2:[],
				list3:[],
				list4:[],
				list4Url:"",
				list4_1:[],
				list4_1Url:"",
				list5:[],
				list6:[],
				catname1:"",
				catname2:"",
				catid1:"",
				catid2:"",
	            tel:'',		//手机号码
	            code:'',	//验证码
				catid:null,	//栏目id
				maskState:false,  //预约弹出框状态
				options: {
					backgroundColor: 'rgba(252,80,80,.9)'
				},						//提示框的内容
				showNotification: false,//提示框
				codeText:'发送验证码',
				showState:true,     //成功状态显示
				showVideo:false,		//视频显示
				collIndex:0,		//同人专区切换
				backState:false, 		//切换背景
				typeState:true,        //类型切换
				typeName:'Android'
			}
		},
		components: {
	        NewsList,
	        Tab,
			Toast
	    },
	    methods: {
			download(){
				alert("暂未开放，敬请期待")
			},
			present(){
				alert("暂未开放，敬请期待")
			},
			nodown(){
				alert("暂未开放，敬请期待")
			},
			typeClick(name){
				if(name == 'Android'){
					this.typeState = true;
					this.typeName = 'Android';
				}else{
					this.typeState = false;
					this.typeName = 'iOS';
				}
				
			},
			pinkChange(){
				this.backState = false;
				this.$emit('footerChange',false)
			},
			blueChange(){
				this.backState = true;
				this.$emit('footerChange',true)
			},
			collClick(index,catid){
				this.collIndex = index;
				this.collFetch(catid)
			},
			backTop(){
				$('body,html').animate({scrollTop:0},1000);
			},
	    	send(){
				//发送验证码
				if(this.regTel(this.tel)){
					const token = getStore('ygmd_token');
					const tel = this.tel;
					//获取key值
					//接口路径
					const url1 = `http://event.gulugulu.cn/yuyue2/DecimalKey`;//获取key值；先获取token（在mounted里面初始化获取的）
					const url2 = `http://event.gulugulu.cn/yuyue2/SendMsg`;//发送验证码
					
					axios.get(url1,{
							params:{
								token
							}
						})
						.then((res) => {
							res = res.data
							if(res.code == 0){
								const key = res.data.key
								//发送验证码
								const info = {
									token,
									key,
									tel
								}
								//发送验证码
								axios.get(url2,{
									params:info
								}).then( (data) => {
									data = data.data;
									if(data.code == 0){
										this.showNotification = true
										this.options = {
											content:'发送成功'
										}
										this.countTime()
									}else{
										this.showNotification = true
										this.options = {
											content:data.msg
										}

									}
								})

							}else{
								this.showNotification = true
								this.options = {
									content:res.msg
								}
							}
						})
				}	    		
	    	},

			submit(){
            	//提交预约
				const tel = this.tel;
				const code = this.code;
				const type = this.typeName;
				const token = getStore('ygmd_token');
				const url = `http://event.gulugulu.cn/yuyue2/Exchange`;//预约				
				if(this.regTel(tel) && this.regCode(code)){
					const param = {
						tel,
						code,
						token,
						type
					}
					axios(url,{params:param}).then( (res) => {
						res = res.data;
						if(res.code == 0){
							this.showNotification = true
							this.options = {
								content:'预约成功'
							}
							this.showState = false;

							
						}else{
							this.showNotification = true
							this.options = {
								content:res.msg
							}
						}

					})

				}
			},
			countTime(){
				//倒计时
				let time = 60;
				const timeCode = () => {
						--time;
						if(time == 0){
							this.codeText = '获取验证码';
							time = 60;
						}else {
							this.codeText = `${time}秒`
							setTimeout(function(){
								timeCode()
							},1000)
						}
				}
				timeCode();
			},
			regCode(code){
				//验证验证码
				if(code){
					return true;
				}else {
					this.showNotification = true
					this.options = {
						content:'请输入验证码'
					}
					return false;
				}
			},
			regTel(tel){
				//验证手机号
				const reg = /^1[0-9]{10}$/;
				var isphone = reg.test(tel);
				if(tel){
					if(isphone){
						return true;
					}else {
						this.showNotification = true
                        this.options = {
                            content:'手机格式不正确'
                        }
						return false;
					}
				}else {
					this.showNotification = true
					this.options = {
						content:'请输入手机号码'
					}
					return false;
				}
			},
			hideToast(){
                //hide提示框
                this.showNotification = false
            },
			order(){
				//预约框弹出隐藏
				this.maskState = !this.maskState;
			},
	        fetch(page=0,catid=this.catid){
	            var that = this;
	            var url = `http://apicms.gulugames.cn/api.php?op=get_news&catid=${catid}&page=${page}&size=3`;  //新闻列表
				MyAjax.fetchJsonp(url,(data) => {
					//console.log(data)
					that.list = data.data;
					//that.all = Math.ceil(data.count/5)
				},(err) => {
					console.log(err);
				})
	        },
			collFetch(catid){
				const that = this;
				const url1 = `http://apicms.gulugames.cn/api.php?op=get_news&catid=${catid}&page=1&size=3&field=vurl`;  //同人专区图片
				MyAjax.fetchJsonp(url1,(data) => {
					//console.log(data)
					that.list1 = data.data;
					//that.vurl = data.data.vurl;
				},(err) => {
					console.log(err);
				})
			},
	        handlClick(catid){
				this.catid = catid;	
	            this.cur = 1;
	            this.fetch(1,catid)
			},
			swiperInit(){
				swiper1 = new Swiper('.banner-swiper1',{
					direction : 'horizontal', //滑动方向
					loop :true,               //loop模式
					autoplay :5000,           //切换的时间间隔
					autoplayDisableOnInteraction : false, //操作swiper之后，是否禁止autoplay
					speed:1000,               //滑动速度
					preloadImages: false,     //Swiper会强制加载所有图片(默认不加载全部)
					lazyLoading: true,        //图片延迟加载
					pagination : '.banner-swiper1 .pagination',//分页器
					paginationClickable :true,//点击分页器切换			  
				});
				swiper2 = new Swiper('.banner-swiper2',{
					direction : 'horizontal', //滑动方向
					loop :true,               //loop模式
	//			    autoplay :5000,           //切换的时间间隔
					autoplayDisableOnInteraction : false, //操作swiper之后，是否禁止autoplay
					speed:1000,               //滑动速度
					preloadImages: false,     //Swiper会强制加载所有图片(默认不加载全部)
					//lazyLoading: true,        //图片延迟加载		   
					prevButton:'.banner-swiper2 .prev',//上一页
					nextButton:'.banner-swiper2 .next',//下一页
				});
			}
	    },
		mounted() {		
			this.fetch('',129,3)
			this.collFetch(135)

			//初始化获取token
			const url = `http://event.gulugulu.cn/yuyue2/init`;//初始化获取Token
            if(!getStore('ygmd_token')){
                axios(url,{
					params:{
						eventid:'ygmd001'	//eventid
					}
				}).then( (res) => {
					res = res.data;
                    if(res.code == 0){
                        setStore('ygmd_token',res.data.token)
                    }
                })
			}
			const that = this;			
			const url6 = "http://apicms.gulugames.cn/api.php?op=get_category&siteid=13&field=setting"; //导航
			MyAjax.fetchJsonp(url6,(data) => {
				//console.log(data)
				that.list6 = data.data;
				that.catname1 = data.data[0].catname;
				that.catid1 = data.data[0].catid;
				that.catname2 = data.data[1].catname;
				that.catid2 = data.data[1].catid;
				//console.log(that.list6[0].catid)
			},(err) => {
				console.log(err);
			})
			
			const url3 = "http://apicms.gulugames.cn/api.php?op=get_category&siteid=13&catid=130"; //同人专区
			MyAjax.fetchJsonp(url3,(data) => {
				//console.log(data)
				that.list3 = data.data;
			},(err) => {
				console.log(err);
			})
			const url2 = "http://apicms.gulugames.cn/api.php?op=get_news&catid=131"; //幻灯片
			MyAjax.fetchJsonp(url2,(data) => {
				//console.log(data)
				that.list2 = data.data;
			},(err) => {
				console.log(err);
			})
		    const url4 = "http://apicms.gulugames.cn/api.php?op=get_news&catid=138"; //动漫专区
			MyAjax.fetchJsonp(url4,(data) => {
				//console.log(data)
				that.list4 = data.data[0].thumb;
				that.list4Url = data.data[0].url;
				//console.log(that.list4Url)
			},(err) => {
				console.log(err);
			})
			const url4_1 = "http://apicms.gulugames.cn/api.php?op=get_news&catid=140"; //动漫专区(视频)
			MyAjax.fetchJsonp(url4_1,(data) => {
				//console.log(data)
				that.list4_1 = data.data[0].thumb;
				that.list4_1Url = data.data[0].url;
				//console.log(that.list4)
			},(err) => {
				console.log(err);
			})
			const url5 = "http://apicms.gulugames.cn/api.php?op=get_news&catid=139"; //游戏介绍
			MyAjax.fetchJsonp(url5,(data) => {
				//console.log(data)
				that.list5 = data.data;
			},(err) => {
				console.log(err);
			})
			this.$nextTick(() => {
				$('.share').share({
					title: '',
					sites:['weibo','qzone','tencent']
				});
			})

			
			// $('#mask li span').on('click',function(){
			// 	$(this).addClass('spanActive').siblings().removeClass('spanActive');
			// })
				
		
		},
		updated() {
			this.swiperInit()
		}
	}
</script>

<style lang="scss" scoped>
	@import "../assets/scss/com.scss";
	.share{
		float: right;
		margin-top: torem(-10px);
		// display: inline-block;
		// width: torem(260px);
		// height: torem(80px);
		// overflow: hidden;
		// border: 1px #ccc solid;
	}
	.page1 {
		height: torem(1104px);	
		position: relative;
		//margin-bottom: torem(10px);
		.pink {
			width: torem(300px);
			height: torem(400px);
			position:absolute;
			left: torem(80px);
			top: torem(180px);
		}
		.blue {
			width: torem(300px);
			height: torem(400px);
			position:absolute;
			right: torem(20px);
			top: torem(200px);
		}
		&.blue1 {
           background: url(../assets/image/page1.png);
		   background-size: 100% 100%;
		}
		&.pink1 {
           background: url(../assets/image/page1_1.png);
		   background-size: 100% 100%;
		}
		.present {
			position: absolute;
			right: torem(100px);
			top: torem(620px);
			width: torem(130px);
			height: torem(130px);
			// border: 1px #000 solid;
		}
		.top {
			height: torem(135px);
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			background: rgba(255,255,255,.5);
			padding: 0 torem(30px);
			z-index: 999;
			.left {
				float: left;
				height: torem(95px);
				margin-top: torem(20px);
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
					color: #087ab6;
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
				margin-top: torem(40px);

				a {
					display: block;
					width: 100%;
					height: 100%;
				}
			}
		}
		button {
			width: torem(100px);
			height: torem(100px);
			border: none;
			background: none;
			position: absolute;
			top: torem(830px);
			left: torem(160px);
		}
		.nav {
			padding-top: torem(150px);
		}
		.order {
			width: torem(395px);
			height: torem(130px);
			background: url(../assets/image/bg1.png);
			background-size: 100% 100%;
			position: absolute;
			top: torem(975px);
			left: torem(180px);
			text-align: center;
			line-height: torem(130px);
		}
	}	
	.page2 {
		//height: torem(787px);	
		padding-top: torem(120px);
		&.blue2 {
           background: url(../assets/image/page2.png);
		   background-size: 100% 100%;
		}
		&.pink2 {
           background: url(../assets/image/page2_1.png);
		   background-size: 100% 100%;
		}
		.mod {
			min-height: torem(780px);
			border: torem(3px) solid #514c82;
			border-radius: torem(30px);
			margin: 0 torem(40px);
			padding: torem(20px) torem(35px);
			background: #f6f6f6;
			.banner-swiper1 {
				position: relative;
				overflow: hidden;
				height: torem(340px);
				background: #eee;
				.swiper-wrapper {
					display: -webkit-box;
					-webkit-display: flex;
					display: flex;
					width: 100%;
					height: 100%;
					.swiper-slide {
						position: relative;
						-webkit-flex-shrink: 0;
						flex-shrink: 0;
						width: 100%;
						overflow: hidden;
						img {
							position: absolute;
							left: 50%;
							top: 50%;
							width: 100%;
							height: 100%;
							max-width: none;
							-webkit-transform: translate(-50%, -50%);
							transform: translate(-50%, -50%);
						}
					}
				}
				.pagination {
					position: absolute;
					//left: 0;
					right: torem(20px);
					bottom: torem(10px);								
				}
				
			}
		}
		#ft {
			width: torem(200px);
			height: torem(60px);
			line-height: torem(60px);
			background: #514c82;
			border-radius: torem(15px);
			margin-left: torem(200px);
			text-align: center;

			a {
				color: #fff;
				font-size: torem(32px);
			}
		}
	}	
	.page3 {
		height: torem(495px);	
		padding-top: torem(60px);
		&.blue3 {
			background: url(../assets/image/page3.png);
		    background-size: 100% 100%;
		}
		&.pink3 {
           background: url(../assets/image/page3_1.png);
		   background-size: 100% 100%;
		}
		.gamesIntro {
			width: torem(284px);
			height: torem(85px);		
			line-height: torem(80px);
			text-align: center;
			margin-left: torem(230px);
			margin-bottom: torem(45px);
			color: #514c82;
			background: url(../assets/image/bg2.png);
			background-size: 100% 100%;
			font-size: torem(40px);
			font-weight: bold;
		}
		.banner-swiper2 {
			width: torem(670px);
			height: torem(315px);
			margin: 0 torem(40px);
			position: relative;
			overflow: hidden;
			background: #eee;
			.swiper-wrapper {
				display: -webkit-box;
				-webkit-display: flex;
				display: flex;
				height: 100%;
				.swiper-slide {
					position: relative;
					-webkit-flex-shrink: 0;
					flex-shrink: 0;
					width: 100%;
					overflow: hidden;
					img {
						position: absolute;
						left: 50%;
						top: 50%;
						width: 100%;
						max-width: none;
						-webkit-transform: translate(-50%, -50%);
						transform: translate(-50%, -50%);
						
					}
				}
			}
	       .prev,.next {
			    width: torem(40px);
			    height: torem(70px);
	       	    position:absolute; 
	       	    z-index:9; top:50%; 
				transform:translateY(-50%); 
				background: rgba(0,0,0,.5);
				img {
					width: 100%;
					height: 100%;
				}   
	       	}
           .prev {left: torem(10px);}
           .next {right: torem(10px);}
		}
	}
	.page4 {
		height: torem(436px);	
		padding-top: torem(50px);
		&.blue4 {
			background: url(../assets/image/page4.png);
		    background-size: 100% 100%;
		}
		&.pink4 {
           background: url(../assets/image/page4_1.png);
		   background-size: 100% 100%;
		}
		.cartoon {
			width: torem(283px);
			height: torem(80px);
			line-height: torem(80px);
			text-align: center;
			margin-left: torem(230px);
			margin-bottom: torem(45px);
			color: #514c82;
			background: url(../assets/image/bg2.png);
			background-size: 100% 100%;
			font-size: torem(40px);
			font-weight: bold;
		}
		section {
			width: torem(670px);
			height: torem(260px);
			margin: 0 torem(40px);
			
			.left {
				width: torem(194px);
			    height: torem(260px);
				float: left;			
				a {
					
					display: block;
					width: 100%;
					height: 100%;
					img {
						width: 100%;
						height: 100%;
					}
				}
			}
			.right {
				width: torem(452px);
			    height: torem(260px);
				float: right;	
				position: relative;				
				a {					
					display: block;
					width: 100%;
					height: 100%;					
					img {
						width: 100%;
						height: 100%;
					}	
					p {
						width: 100%;
						height: 100%;
						background: rgba(0,0,0,.5);	
						position: absolute;	
						img {
							width: torem(96px);
							height: torem(96px);
							margin-left: torem(180px);
							margin-top: torem(80px);
						}				
					}
				}
			}
		}
	}
	.page5 {
		height: torem(855px);		
		padding-top: torem(50px);
		position: relative;
		&.blue5 {
			background: url(../assets/image/page5.png);
		    background-size: 100% 100%;
		}
		&.pink5 {
           background: url(../assets/image/page5_1.png);
		   background-size: 100% 100%;
		}
        .share-item {
			position: absolute;
			left: torem(140px);
			top: torem(680px);
			color: #7d7d7d;
		}
		.backtop {
			width: torem(50px);
			height: torem(108px);
			background: url(../assets/image/bg4.png);
			background-size: 100% 100%;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			top: torem(520px);
		}
		.colleagues {
			width: torem(283px);
			height: torem(80px);
			line-height: torem(80px);
			text-align: center;
			margin-left: torem(230px);
			margin-bottom: torem(45px);
			color: #514c82;
			background: url(../assets/image/bg2.png);
			background-size: 100% 100%;
			font-size: torem(40px);
			font-weight: bold;
		}
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
			.active{
				color: red;
			}
		}
		.content {
			width: torem(666px);
			height: torem(250px);			
			margin: 0 torem(40px);
			li {
				width: torem(220px);
				height: torem(120px);			
				position: relative;	
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
					height: torem(40px);
					line-height: torem(40px);
					text-align: center;
					background: rgba(0,0,0,.5);
					position: absolute;
					bottom: 0;
					color: #fff;
					font-size: torem(24px);
				}
				&:nth-child(1) {
					width: torem(440px);					
					height: torem(250px);
					float: left;
					margin-right: torem(6px);
					
					span {						
						height: torem(60px);
						line-height: torem(60px);						
					}
				}
				&:nth-child(2) {
					 float: right;
					 margin-bottom: torem(8px);
				}
				&:nth-child(3) {
					 float: right;
				}
			}
			.videoActive {
				width: torem(220px);
				height: torem(120px);
				position: relative;
				h1 {
					display: block;
				}
			}
		}
	}	
	#mask {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 99;
		background: rgba(0,0,0,.6);
		.close {
			position: absolute;
			z-index: 2;
			top: 0;
			right: 0;
			width: torem(48px);
			height: torem(48px);
		}
		.inner {
			position: absolute;
			left:50%;
			top: torem(200px);
			bottom: 0;
			transform: translatex(-50%);
			width: torem(684px);
			height: torem(571px);		
			box-sizing: border-box;
			padding: torem(95px) torem(120px) 0 torem(68px);
			background: url(../assets/image/bg10.png) no-repeat center;
			background-size: 100% 100%;			
		}
		li {
			margin-bottom: torem(20px);
			height: torem(70px);
			line-height: torem(70px);
			font-size: torem(28px);
			text-align: center;
			&:first-child {
				font-weight: bold;
				display: flex;
				span {
					display: inline-block;
					flex: 1;
					border: torem(6px) #514c82 double;
					line-height: torem(60px);
					//box-shadow: 2px 2px 2px #514c82;
					&:first-child {
						margin-right: torem(3px);						
					}
					&.typeActive{
						background: #514c82;
						color: white;
					}
					color: #514c82;
					
				}
			}
			input {
				text-align: center;
				color: #514c82;
				height: 100%;
			}
		}
		.tel {
			float: left;
			background: none;
			border: none;
			width: 100%;
		}
		.code {
			float: left;
			background: none;
			border: none;
			width: torem(250px);
		}
		.send {
			//float: right;
			background: none;
			border: none;
			width: torem(190px);
			color: #fff;		
			text-align: center;
			margin-left: torem(10px);			
		}
		.submit {
			margin-top: torem(8px);
			background: none;
			border: none;
			width: torem(485px);
			height: torem(105px);
		}
		::-webkit-input-placeholder {
			color: rgba(255, 255, 255, .3);
		}
		.succes-content {
			position: absolute;
			width:torem(684px);
			height: torem(280px);
			left: 50%;
			top:50%;
			transform: translate(-50%,-50%);
			background: url(../assets/image/bg12.png) no-repeat center;
			background-size: 100% 100%;		
			p {
				color: #514c82;
				width: torem(640px);
				height: 100%;
				font-size: torem(34px);
				margin-top: torem(70px);
				text-align: center;
				font-weight: bold;
				span {
					color: #c82f4a;
				}
			}
			.btn{
				position: absolute;
				top:0px;
				right: 0px;
				width:torem(50px);
				height: torem(50px);
			}
		}
	
	}	
	input::-webkit-input-placeholder {
        color: #514c82!important;
	}	 	
	#video {
		position: fixed;
		z-index: 999;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(0,0,0,.75);
		text-align: center;
		.inner { 
			position:absolute; 
			left:50%; 
			top:50%; 
			transform:translate(-50%,-50%);
			width:100%; 
		}
        .close {
			position:absolute; 
			top:-30px; 
			right:0; 
			width:30px; 
			height:30px; 
			line-height:30px; 
			background:#e50054; 
			font-size:1.5em; 
			color:#fff;
		}
        video {
			width:100%; 
			height:100%;
		}
	}
	
	
	
</style>
<style>
@import "../assets/scss/com.scss";

 span.swiper-pagination-bullet {
	display: inline-block;
    width: 25px;
    height: 25px;
	background: url(../assets/image/bg6.png);
	background-size: 100% 100%; 
	margin-right: 10px;

} 
span.swiper-pagination-bullet-active{
	background: url(../assets/image/bg7.png);
	background-size: 100% 100%; 
} 
</style>
