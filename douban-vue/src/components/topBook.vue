<template>
    <div class="section weekly-top">
        <SectionNav title="畅销图书榜">
        </SectionNav>
        <div class="bd">
            
                <ul class="list list-ranking">
                    
                    <li class="item impression_track_chart" v-for="(item,index) in items" :key="index" data-track="https://frodo.douban.com/rohirrim/tracking/impression?subject_id=27192353&amp;isbn=7555262800&amp;source=dangdang&amp;user_id=&amp;bid=BUzu3uNF2kA&amp;platform=pc&amp;location=vendor_charts">
                        <span class="rank-num">1.</span>
                        <div class="book-info">
                            <a href="https://book.douban.com/subject/27192353/" class="name" target="_blank">钝感力</a>
                            <div class="author">[日] 渡边淳一</div>
                        </div>
                        <a href="https://book.douban.com/link2/?pre=1&amp;vendor=dangdang&amp;srcpage=bestseller&amp;price=3140&amp;pos=1&amp;url=http%3A%2F%2Funion.dangdang.com%2Ftransfer.php%3Ffrom%3DP-306226-0-s27192353%26backurl%3Dhttp%3A%2F%2Fproduct.dangdang.com%2Fproduct.aspx%3Fproduct_id%3D25201859&amp;srcsubj=&amp;type=bkbuy&amp;subject=27192353" target="_blank" onclick="track('https://frodo.douban.com/rohirrim/tracking/click?subject_id=27192353&amp;isbn=7555262800&amp;source=dangdang&amp;user_id=&amp;bid=BUzu3uNF2kA&amp;platform=pc&amp;location=vendor_charts')"><span class="buy-button">去购买</span></a>
                    </li>
                </ul>
        </div>
    </div>
</template>

<script>
    import SectionNav from './sectionNav.vue'
    export default{
        name:"TopBook",
        data(){
            return{
                items : [...Array(10).keys()],
                infos : ['下载豆瓣客户端', '登录/注册']
            }
        },
        components:{
            SectionNav,
        }
    }
    </script>

<style scoped>
.list-col5 {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-column-gap: 9px;

}

.img{
    width: 100px;  
    height: auto;
}
.more-meta{
        display: none;
}
.link-more{
        font-size: 13px;
        color: #3377aa;
        margin: 15px;
}
</style>