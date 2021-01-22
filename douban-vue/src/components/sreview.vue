<template>
    <div id="content" v-if="ready">
        <div class="grid-16-8">
            <div class="article">
                <h1>
                    <span property="v:summary">{{dataList.dataTitle}}</span>
                </h1>
                <div>
                    <div class="main" id="13077015">
                        <header class="main-hd">
                            <a >
                                <span>{{dataList.dataAuthor}}</span>
                            </a>
                            评论
                            <a href="https://book.douban.com/subject/35267458/">{{dataList.title}}</a>
                            <span class="allstar50 main-title-rating"></span>
                            <span class="main-title-hide">{{dataList.score}}</span>
                            <span content="2020-12-23" class="main-meta">{{dataList.date}}</span>
                        </header>
                        <div id="link-report">
                            <div class="review-content clearfix" :data-author="dataList.dataAuthor"
                                data-url="https://book.douban.com/review/13077015/" data-original="1">
                                <p v-html="dataList.text.slice(1).replace(/\n/g,'<br>')"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="aside">
            <div class="sidebar-info-wrapper">
                <div class="subject-title">
                    <a href="https://book.douban.com/subject/35267458/">&gt;&nbsp;{{dataList.title}}</a>
                </div>
                <div class="subject-img">
                    <a :href="dataList.src">
                        <img :alt="dataList.title" :title="dataList.title"
                            :src="dataList.src" rel="v:image">
                    </a>
                </div>
                <div class="subject-info book-info">
                    <ul class="info-list">
                        <li class="info-item" v-for="(item,index) in dataList.info" :key="index">
                            <span class="info-item-key">{{dataList.key[index]}}</span>
                            <span class="info-item-val">{{item}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"Subject",
        data(){
            return{
                dataList : null,
                ready: false,

            }
        },
        mounted(){
            axios
            .get('http://localhost:8081/review/'+this.$route.params.id,{
                responseType: 'json'
                })
            .then(response => {
                console.log(typeof response.data);
                this.dataList = response.data;
                this.ready = true;
            });
            console.log(this.dataList);
        }
        
    }
</script>
<style scoped>
h1 {
    font-size: 26px;
    word-wrap: break-word;
    display: block;
    font-size: 25px;
    font-weight: bold;
    color: #494949;
    margin: 0;
    padding: 0 0 15px 0;
    line-height: 1.1;
}
#content {
    width: 1040px;
    margin: 0 auto;
    margin-top: 40px;
    display: flex;
}
.aside {
    width: 300px;
}
.info-list{
    width: 300px;
}
.info-item-key{
    color: #999;
    padding-right: 5px;
}
.main .main-hd, .main .main-title-tip {
    margin-bottom: 20px;
    line-height: 1.4;
    font-size: 13px;
    color: #999;
    overflow: hidden;
}
.main .main-meta {
    margin: 0 0 0 5px;
    color: #999;
}
.review-content p{
    margin: 0;
}
.sidebar-info-wrapper .subject-img img {
    max-height: 200px;
    max-width: 100px;
}
</style>