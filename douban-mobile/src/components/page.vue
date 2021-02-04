<template>
    <div id="content" v-if="ready">
        <h1>{{title}}</h1>
        <div class="article">
            <div id="subject_list">
                <div class="rr greyinput">
                    <a href="javascript:;":class="{selected: isDate}" @click="sortYear()">按出版日期排序</a>
                    &nbsp;/&nbsp;
                    <a href="javascript:;" :class="{selected: isScore}" @click="sortScore()">按评价排序</a>
                </div>
                <ul class="subject-list" >
                    <li class="subject-item" v-for="(item,index) in dataList" :key="index">
                        <div class="pic">
                            <router-link :to="'/subject/'+dataList[index].id" class="nbg" >
                                <img :src="'../picture/'+dataList[index].src.split('/').slice(-1)">
                            </router-link>
                        </div>
                        <div class="info">
                            <h2 class="">
                                <router-link :to="'/subject/'+dataList[index].id"
                                    :title="dataList[index].title">
                                    {{dataList[index].title}}
                                </router-link>
                            </h2>
                            <div class="pub">
                                <span class="main-meta">{{dataList[index].author}}</span>
                                <span class="main-meta">{{dataList[index].publisher}}</span>
                                <span class="main-meta">{{dataList[index].year}}</span>
                            </div>
                            <div class="star clearfix">
                                <span class="allstar45"></span>
                                <span class="rating_nums">{{dataList[index].score}}</span>
                                <Star :score="dataList[index].score/2"/>
                                <span class="pl">
                                    {{dataList[index].vote}}
                                </span>
                            </div>
                            <p>{{dataList[index].abstract}}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="aside">
            </div>
        </div>
    </div>
</template>

<script>
    import Star from './star.vue'
    export default {
        name: "Stag",
        props: {
            info: {
                type: String,
            }
        },
        data() {
            return {
                ready: false,
                picList: [],
                dataList: [],
                isScore: false,
                isDate: true,
            }
        },
        mounted() {
            this.$axios.get('http://localhost:8081/page/' + this.$route.params.id, {
                responseType: 'json'
            })
                .then(res => {
                    this.dataList = res.data;
                    console.log(this.dataList);
                    this.ready = true;
                }
                );
        },
        computed: {
            title() {
                const titleList = {
                    'real': '最受关注图书榜:非虚构类',
                    'unreal': '最受关注图书榜:虚构类',
                    'new': '新书速递',
                    'top': '豆瓣读书 Top 250',
                }
                return titleList[this.$route.params.id];
            }
        },
        components: {
            Star,
        },
        methods: {
            sortYear:function(){
                this.dataList.sort(function(a,b){
                return Date.parse(a.year)-Date.parse(b.year)});
                console.log(this.dataList);
                this.isScore = false;
                this.isDate = true;
            },
            sortScore:function(){
                this.dataList.sort(function(a,b){
                return a.score-b.score});
                console.log(this.dataList);
                this.isScore = true;
                this.isDate = false;
            },
        }
    }
</script>

<style scoped>
    h2 {

        font-size: 14px;
        margin: 0 0 6px;
    }

    #content {
        width: 1040px;
        margin: 0 auto;
    }

    .greyinput {
        text-align: right;
    }

    #subject_list {
        width: 675px;
        margin-left: 20px;
    }

    li {
        border-top: 1px dashed #ddd;
        padding: 20px 0 10px;
    }

    .subject-item .pub {
        margin: 6px 0 8px;
    }

    .subject-item .info {
        color: #666;
    }

    /* .aside{
    flex:1;
}  */
    img {
        width: 90px;
        height: auto;
    }

    .pic {
        display: inline-block;
        vertical-align: top;
    }

    .info {
        display: inline-block;
        width: 565px;
        margin-left: 15px;
    }

    .buy-info a {
        color: #bbb;
    }

    .market-info a:hover,
    .buy-info a:hover {
        background-color: #37a;
        color: white;
    }

    .selected, .selected a {
        color: #111;
        cursor: default;
    }
</style>