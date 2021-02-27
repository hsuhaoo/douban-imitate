<template>
    <div id="content">
        <h1>{{title}}</h1>
        <div class="grid-16-8">
            <div class="article">
                <div class="top-tab">
                    <a href="javascript:;" @click="sortScore()" :class="{selected: isScore}"> <span>最受欢迎的</span> </a>
                    <a href="javascript:;" @click="sortYear()" :class="{selected: isDate}"> <span>最新书评</span> </a>
                </div>
                <div class="review-list chart " v-if="ready">
                    <div v-for="(item,index) in dataList" :key="item.id">
                        <div class="main review-item" >
                            <router-link class="subject-img" :to="'/review/'+item.id"> <img :alt="item.title"
                                    :title="item.title" :src="'../picture/'+item.src.split('/').slice(-1)"
                                    rel="v:image"> 
                            </router-link>
                            <div class="info">
                                <header class="main-hd">
                                    <a class="name">{{item.dataAuthor}}</a>
                                    <Star :score="item.star/2"/>
                                    <span class="main-meta">{{item.date}}</span>
                                </header>
                                <div class="main-bd">
                                    <h2><router-link :to="'/review/'+item.id">{{item.dataTitle}}</router-link></h2>
                                    <div id="review_13071563_short" class="review-short" >
                                        <div class="short-content">
                                            {{abstract[index]}}
                                            &nbsp;<a href="javascript:;" id="toggle-13071563-copy" class="unfold" @click="unfold(index)"
                                                title="展开" v-if="folder[index]">(展开)</a>
                                        </div>
                                    </div>

                                    <div class="action" v-if="!folder[index]">
                                        <a href="javascript:;;" class="fold hidden" @click="fold(index)">收起</a>
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
    import store from "../store.js"

    export default{
        name:"review",
        data(){
            return{
                ready: false,
                folder: null,
                abstract: null,
                title: "豆瓣最受欢迎的书评",
                isScore: false,
                isDate: true,
            }
        },
        mounted() {
            this.$axios.get('http://localhost:8081/review/', {
                responseType: 'json'
            })
            .then(res => {
                    this.dataList = res.data;
                    console.log(this.dataList[0].href.split("/").slice(-2)[0]);
                    // this.abstract();
                    this.folder = Array(this.dataList.length).fill(true),
                    this.sortYear();
                    this.ready = true;
                }
            );
        },
        components: {
            Star,
        },
        methods: {
            sortYear:function(){
                this.dataList.sort(function(a,b){
                return Date.parse(a.date)-Date.parse(b.date)});
                console.log(this.dataList);
                this.computeAbstract();
                this.isScore = false;
                this.isDate = true;
                this.title = "豆瓣最新的书评";
            },
            sortScore:function(){
                this.dataList.sort(function(a,b){
                return a.star-b.star});
                console.log(this.dataList);
                this.computeAbstract();
                this.isScore = true;
                this.isDate = false;
                this.title = "豆瓣最受欢迎的书评";
            },
            unfold: function(index) {
                this.folder[index] = false;
                this.computeAbstract();
            },
            fold: function(index) {
                this.folder[index] = true;
                this.computeAbstract();
            },
            computeAbstract: function() {
                let getData = (elem) => {
                  let text = elem.text.slice(0,128)+"...";
                  return text;
                };
                let textList = this.dataList.map(getData);
                for(let i=0;i<this.dataList.length;i++){
                    if(!this.folder[i]){
                        textList[i] = this.dataList[i].text;
                    }
                }
                this.abstract = textList;
            }
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
    .grid-16-8{
        width: 675px;
        margin-left: 20px;
    }
    .top-tab {
        font-size: 13px;
        color: #37a;
        text-align: right;
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