<template>
    <div id="reviews" class="section">
        <SectionNav title="最受欢迎的书评">
            <span class="link-more"><a href="/review/best/">更多热门书评»</a></span>
            <span class="link-more"><a href="/review/latest/">最新书评»</a></span>
        </SectionNav>
        <div class="reviews-bd">
            <div class="review " v-for="(item,index) in items" :key="index">
                <div class="review-hd">
                    <a :href="dataList[index].href">
                        <img :src="'../picture/'+dataList[index].src.split('/').slice(-1)" :alt="dataList[index].title">
                    </a>
                </div>
                <div class="review-bd">
                    <h3><a :href="dataList[index].href">{{dataList[index].title}}</a></h3>
                    <div class="review-meta">
                        <a :href="dataList[index].href">{{dataList[index].author}}</a> 评论
                        <a :href="dataList[index].author_href">{{dataList[index].book}}</a>
                        <ul class="star">
                            <li>★</li>
                            <li>★</li>
                            <li>★</li>
                            <li>★</li>
                            <li>★</li>
                        </ul>
                    </div>
                    <div class="review-content">
                        {{dataList[index].content.replace("(全文)","")}}
                        <a :href="dataList[index].href">(全文)</a>
                    </div>
                </div>
            </div>
    
        </div>
    </div>
</template>

<script>
    import SectionNav from './sectionNav.vue'
    let dataList = require('../data/review')
    export default{
        name:"Review",
        data(){
            return{
                items : [...Array(4).keys()],
                dataList: dataList,
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