<template>
    <div id="reviews" class="section">
        <SectionNav title="最受欢迎的书评">
            <span class="link-more"><router-link to="/review/">更多热门书评»</router-link
                ></span>
            <span class="link-more"><router-link to="/review/">最新书评»</router-link></span>
        </SectionNav>
        <div class="reviews-bd">
            <div class="review " v-for="(item,index) in dataList" :key="index">
                <div class="review-hd">
                    <router-link :to="'/review/'+item.id">
                        <img :src="'../picture/'+dataList[index].src.split('/').slice(-1)" :alt="dataList[index].title">
                    </router-link>
                </div>
                <div class="review-bd">
                    <h3><router-link :to="'/review/'+item.id">{{dataList[index].dataTitle}}</router-link></h3>
                    <div class="review-meta">
                        <a >{{dataList[index].info[0]}}</a> 评论
                        <router-link :to="'/subject/'+item.href.split('/').slice(-2)[0]">{{dataList[index].title}}</router-link>
                        <!-- <ul class="star">
                            <li>★</li>
                            <li>★</li>
                            <li>★</li>
                            <li>★</li>
                            <li>★</li>
                        </ul> -->
                        <Star :score="dataList[index].star/2"/>
                    </div>
                    <div class="review-content">
                        {{dataList[index].text}}
                        <router-link :to="'/review/'+item.id">(全文)</router-link>
                    </div>
                </div>
            </div>
    
        </div>
    </div>
</template>

<script>
    import SectionNav from './sectionNav.vue'
    import Star from './star.vue'
    import store from "../store.js"

    // let dataList = require('../data/review')
    export default{
        name:"Review",
        data(){
            return{
                dataList: null,
            }
        },
        mounted() {
            this.$axios.get('http://localhost:8081/review/', {
                responseType: 'json'
            })
            .then(res => {
                    this.dataList = res.data.slice(0,5);
                    for(const item of this.dataList){
                        item.text = item.text.slice(0,128);
                    }
                    // this.abstract();
                    this.ready = true;
                }
            );
        },
        components:{
            SectionNav,
            Star,
        },
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