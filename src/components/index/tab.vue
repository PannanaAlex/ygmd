<template>
  <div id="news">
       <ul class="catname">
           <li @click="handClick(129,'',3)"
           	:class="activeIndex == 3 ? 'active' :''">最新</li>
           <li 
           	v-for="(item,index) in list" 
            @click="handClick(item.catid,item.catname,index)"
           	:class="activeIndex == index ? 'active' :''"
           	:key="index">         
               {{item.catname}}
              
            </li>
       </ul>
  </div>
</template>

<script>
import MyAjax from "@/md/MyAjax.js";

export default {
    data(){
        return {
            list:"",
            activeIndex:3
        }
    },
    mounted(){
        var that = this;
       
        //var url = "http://cms.gulugames.cn/api.php?op=get_category&siteid=9&catid=95";
        //var url = "http://cms.gulugames.cn/api.php?op=get_category_info&catid=98"
        var url = "http://apicms.gulugames.cn/api.php?op=get_category&siteid=13&catid=129";
        MyAjax.fetchJsonp(url,(data) => {
            //console.log(data)
            that.list = data.data;
            // that.$emit('handlClick',data.data[0].catid,data.data[0].catname)
        },(err) => {
            console.log(err);
        })
    },
    methods:{
        handClick(catid,catname,index){
        	this.activeIndex = index
            this.$emit('handlClick',catid,catname)
        }
    }
}
</script>

<style scoped lang="scss">
    @import "../../assets/scss/com.scss";
    .catname {
    	font-size: torem(32px);
        height: torem(100px);
        line-height: torem(100px);
        border-bottom: torem(2px) #514c82 solid;
        color: #514c82;
        display: flex;

        li {
            height: 100%;
            flex: 1;
            position: relative;
            text-align: center;
            &:before {
                content:'';
                display: block;
                width: torem(45px);
                height: torem(49px);
                background: url(../../assets/image/bg8.png) no-repeat;
                background-size: 100% 100%;
                position: absolute;
                top:50%;
                transform: translateY(-50%);
                right: torem(-20px);              
            }
            

            &.active{
                color: #514c82;
                font-weight: bold;              
                &:after {
                    content:'';
                    display: block;
                    width: torem(87px);
                    height: torem(12px);                
                    background-image: url(../../assets/image/bg9.png);
                    background-size: 100% 100%;
                    position: absolute;
                    left:50%;
                    transform: translateX(-50%);
                    bottom: torem(0px);
                }              
            }

            // p {
            //     //width: torem(70px);
            //     
            // }
            // span{
            //     display:inline-block;
            //     width: torem(45px);
            //     height: torem(49px);
            //     background: url(../../assets/image/bg8.png) no-repeat;
            //     background-size: 100% 100%;
            //     position: absolute;
            //     right:0;
            //     top:50%;
            //     transform: translateY(-50%);
            // }

            // margin-left:torem(20px);
            // &:nth-child(2){
            //     span{
            //         right:torem(-55px);
            //     }
            // }
            &:first-child{
                //text-align:left;
            }
            &:last-child{
               // text-align: right;
                // span{
                //     display: none;
                // }
                &:before {
                    display: none;
                }            
            }

        }
        
    }

    
    
</style>
