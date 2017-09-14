<template>
  <div id="news">
    <ul class="newsList">
			
      <li v-for="(item,index) in list" :key="index">
				<router-link :to="{name:'show',params:{catid:item.catid,id:item.id}}"><p>{{item.title}}</p><span>{{item.inputtime}}</span></router-link>			
			</li>
    </ul>
  </div>
</template>

<script>
import MyAjax from "./../../md/MyAjax.js";
export default {
    data(){
        return {
            
        }
    },
    props:['list']
}
</script>

<style lang="scss" scoped>

  @import "../../assets/scss/com.scss";

	.newsList {
  	padding: 0 torem(20px);
		min-height: torem(300px);
		font-size: torem(28px);
  	li {
  		height: torem(80px);
  		line-height: torem(80px);
  		border-bottom: 1px #514c82 dotted;
			position: relative;
			padding-top: torem(10px);
			
			a {
				display: block;
				height: 100%;
				color: #514c82;

				p {					
					height: 100%;
					margin-right: torem(160px);
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}				
				span {
					height: 100%;
					position: absolute;
					right: 0;		
					top: torem(10px);		
					font-size: torem(24px);
					color: #949ab4;
				}

			}
  	
  	}
  } 

</style>
