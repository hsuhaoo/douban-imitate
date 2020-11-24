<template>
    <div id="reviews" class="section">
        <SectionNav title="电子图书">
            <span><a href="/review/best/">更多热门书评»</a></span>
            <span><a href="/review/latest/">最新书评»</a></span>
        </SectionNav>
        <div class="reviews-bd">
            <div class="review " v-for="(item,index) in items" :key="index">
                <div class="review-hd">
                    <a href="https://book.douban.com/review/12967087/">
                        <img src="https://img2.doubanio.com/view/subject/m/public/s33741322.jpg" alt="达尔文的正确打开方式：一生坚持投身所爱">
                    </a>
                </div>
                <div class="review-bd">
                    <h3><a href="https://book.douban.com/review/12967087/">达尔文的正确打开方式：一生坚持投身所爱</a></h3>
                    <div class="review-meta">
                        <a href="https://www.douban.com/people/50021732/">新经典</a> 评论
                        <a href="https://book.douban.com/review/12967087/">《物种起源》</a>
    
                        <span class="allstar0"></span>
                    </div>
                    <div class="review-content">
                        你肯定知道他。 他和林肯同一天出生，不过比林肯有钱加幸运太多太多了。 严格意义上的富三代
                        他的外祖父是响当当的瓷器厂创办人，超有钱大资本家；祖父是自然科学家兼诗人，两个好友约好让漂亮女儿和优秀医生儿子...
                        <a href="https://book.douban.com/review/12967087/">(全文)</a>
                    </div>
                </div>
            </div>
    
        </div>
    </div>
</template>

<script>
    import SectionNav from './sectionNav.vue'
    export default{
        name:"Review",
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