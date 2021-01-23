<template>
    <div id="content">
        <h1>豆瓣最受欢迎的书评</h1>
        <div class="grid-16-8 clearfix">
            <div class="article">
                <ul class="top-tab clearfix">
                    <li class=" selected"> <a href="javascript:;"> <span>最受欢迎的</span> </a> </li>
                    <li class=""> <a href="/review/latest?app_name=book"> <span>最新书评</span> </a> </li>
                </ul>
                <div class="review-list chart " v-if="ready">
                    <div v-for="(item,index) in dataList" :key="index">
                        <div class="main review-item" >
                            <a class="subject-img" :to="'/review/'+item.id"> <img :alt="item.title"
                                    :title="item.title" :src="'../picture/'+item.src.split('/').slice(-1)"
                                    rel="v:image"> 
                            </a>
                            <div class="info">
                                <header class="main-hd">
                                    <!-- <a href="https://www.douban.com/people/atdelilah/" class="avator">
                                        <img width="24" height="24" :src="'../picture/'+item.src.split('/').slice(-1)">
                                    </a> -->
                                    <a href="https://www.douban.com/people/atdelilah/" class="name">{{item.dataAuthor}}</a>
                                    <!-- <span class="allstar10 main-title-rating" title="很差">{{item.star}}</span> -->
                                    <Star :score="item.star/2"/>

                                    <span class="main-meta">{{item.date}}</span>
                                </header>
                                <div class="main-bd">
                                    <h2><router-link :to="'/review/'+item.id">{{item.dataTitle}}</router-link></h2>
                                    <div id="review_13071563_short" class="review-short" >
                                        <div class="short-content">
                                            {{item.text.slice(0,128)+"..."}}
                                            &nbsp;(<a href="javascript:;" id="toggle-13071563-copy" class="unfold" @mouseclick=""
                                                title="展开">展开</a>)
                                        </div>
                                    </div>

                                    <div class="action" v-if="folder[index]">
                                        <a href="javascript:;;" class="fold hidden">收起</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="aside">
            </div>

        </div>
    </div>
</template>

<script>
    import Star from './star.vue'
    export default{
        name:"review",
        data(){
            return{
                ready: false,
                folder: Array().fill(true),
            }
        },
        mounted() {
            this.$axios.get('http://localhost:8081/review/', {
                responseType: 'json'
            })
                .then(res => {
                    this.dataList = res.data;
                    console.log(this.dataList);
                    this.ready = true;
                }
                );
        },
        methods: {
            unfold: function(index) {
                this.folder[i] = false
            },
        },
        computed:{
            abstract: function() {
                let getData = (elem) => {
                  let text = elem.text.slice(0,128)+"...";
                  return text;
                };
                textList = this.dataList.map(getData);
                for(let i=0;i<this.dataList.length;i++){
                    if(!folder[i]){
                        textList[i] = this.dataList.text;
                    }
                }
            }
        },
        components:{
            Star,
        },
    }
</script>
<style scoped>
    h1 {
        font-size: 26px;
        margin: 40px 0 0 0;
        padding: 0 0 15px 0;
        font-size: 25px;
        font-weight: bold;
        color: #494949;
        line-height: 1.1;
    }
    .top-tab {
        font-size: 13px;
        color: #37a;
        display: flex;
    }
    .top-tab .selected, .top-tab .selected a {
        color: #111;
        cursor: default;
    }
    .top-tab .selected, .top-tab .selected a {
        color: #111;
        cursor: default;
    }
    .chart .subject-img img {
        max-width: 100%;
    }
    a img {
        border-width: 0;
        vertical-align: middle;
    }
    /* .top-tab>li {
        float: left;
    } */
    .review-list.chart .review-item .subject-img img{
        /* float: left; */
        margin-right: 20px;
        max-width: 75px;
        max-height: 107px;
    }
    .review-list .review-item {
        padding: 20px 0px;
        display: flex;
        border-top: 1px dashed #ddd;
        padding: 20px 0 10px;
    }
    .review-list {
        margin-top: 20px;
    }
    #content {
        width: 1040px;
        margin: 0 auto;
    }
    .review-wrapper {
        font-size: 13px;
    }
    .review-list .review-item .main-bd h2 {
        font-size: 14px;
        margin-bottom: 10px;
        margin-top: 0;
    }
</style>