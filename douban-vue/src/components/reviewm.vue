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
                                    rel="v:image"> </a>
                            <header class="main-hd">
                                <a href="https://www.douban.com/people/atdelilah/" class="avator">
                                    <img width="24" height="24" :src="'../picture/'+item.src.split('/').slice(-1)">
                                </a>
                                <a href="https://www.douban.com/people/atdelilah/" class="name">{{item.dataAuthor}}</a>
                                <!-- <span class="allstar10 main-title-rating" title="很差">{{item.star}}</span> -->
                                <Star :score="item.star/2"/>

                                <span class="main-meta">{{item.date}}</span>
                            </header>
                            <div class="main-bd">
                                <h2><router-link :to="'/review/'+item.id">{{item.dataTitle}}</router-link></h2>
                                <div id="review_13071563_short" class="review-short" >
                                    <div class="short-content">
                                        {{item.abstract}}
                                        &nbsp;(<a href="javascript:;" id="toggle-13071563-copy" class="unfold"
                                            title="展开">展开</a>)
                                    </div>
                                </div>

                                <div class="action">
                                    <a href="javascript:;;" class="fold hidden">收起</a>
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
        components:{
            Star,
        },
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
</style>