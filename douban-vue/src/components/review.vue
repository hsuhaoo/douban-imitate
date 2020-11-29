<template>
    <div id="reviews" class="section">
        <SectionNav title="最受欢迎的书评">
            <span class="link-more"><a href="/review/best/">更多热门书评»</a></span>
            <span class="link-more"><a href="/review/latest/">最新书评»</a></span>
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
                        <ul class="star">
                            <li>★</li>
                            <li>★</li>
                            <li>★</li>
                            <li>★</li>
                            <li>★</li>
                        </ul>
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
                items : [...Array(4).keys()],
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

img{
    width: 75px;  
    height: auto;
}
.more-meta{
        display: none;
}
.review{
    display: flex;
    border-bottom: 1px solid #e5ebe4;
    margin-bottom: 24px;
    padding-bottom: 24px;
}
.review:nth-last-child(1){
    border-bottom: 0;
}
h3 {
    margin: 0;
    padding: 0;
}

.review-bd{
    margin: 0 20px;
}
.review-meta a{
    color: #666;
}
.review-content a:hover, h3 a:hover, .review-meta a:hover{
    background-color: #37a;
    color: white;
}

.review-meta{
    color: #666;
}
.star{
    display: inline-block;
}
.star li {
    display: inline-block;
}
</style>