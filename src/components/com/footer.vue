<template>
    <footer id="footer" :class="activeState ? 'footer1' : 'footer2'">
       
        <p>
            <a href="http://www.gulugames.cn/" target="_blank">
                <img src="http://cdn.gulugulu.cn/swm/gw/content/images/gulugames.png" style="width:90px; margin-right:10px;">
            </a>
            <a href="http://www.morningtec.cn/" target="_blank">
                <img src="http://cdn.gulugulu.cn/swm/gw/content/newfile/images/czk.png" style="width:90px;">
            </a>
        </p>
        <p>本公司游戏产品适合18岁以上成年人使用。<a href="http://www.morningtec.cn/html/jiazhangjianhu" target="_blank">家长监护系统</a></p>
        <p>
            <a href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/gameNetTag/4028c08c5de56a82015de8b23db30480" target="_blank">
                <img src="http://cdn.gulugulu.cn/common/images/copy.png" style="width:14px;">
            </a>文网游备字〔2017〕Ｍ-CSG 1692 号
        </p>
        <p>
            <a href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/toDetail/4028c08c4d9f1f09014dac9bbfdf030c" target="_blank">
                <img src="http://cdn.gulugulu.cn/common/images/wenhuaju.png" style="width:16px;">
            </a>沪网文[2015]0053-003号
            <a href="http://www.miitbeian.gov.cn" target="_blank">沪ICP备14052609号-16</a>
        </p>
        <p>
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011202002113" target="_blank">
                <img src="http://cdn.gulugulu.cn/gulugulu/gw/images/dataOne/beianbgs.png" style="width:16px;">
            </a>沪公网安备31011202002113号
        </p>
        <p>抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当</p>
        <p>适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活</p>
    
    </footer>
</template>
<script>
    export default {
        data(){
            return {
                
            }
        },
        props:['activeState']
    }
</script>
<style scoped>

    .footer1{
        background:#cbecfd;
    }
    .footer2{
        background:#fbebff;
    }
    #footer{padding:10px 0;  color:#626d6c; text-align:center; font-size:10px}
    #footer img{display:inline-block;}
    a {
        color: #9699ba;
    }
</style>
