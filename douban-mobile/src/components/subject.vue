<template>
    <div id="wrapper">
        <div id="content">
            <div class="grid-16-8 ">
                <div class="article" v-if="ready">
                    <div class="indent">
                        <div class="subjectwrap">
                            <div class="subject ">
                                <div id="mainpic" class="">
                                    <a class="nbg" 
                                        :title="dataList.title">
                                        <img :src="'../picture/'+dataList.src.split('/').slice(-1)"
                                            title="点击看大图" :alt="dataList.title" rel="v:photo">
                                    </a>
                                </div>
                                <div id="info" class="">
                                    <h1>
                                        <span property="v:itemreviewed">{{dataList.title}}</span>
                                        <div class="clear"></div>
                                    </h1>
                                    <span class="pl">{{dataList.出版社}} /{{dataList.出版年}}<br></span>
                                </div>
                            </div>
                            <div id="interest_sectl" class="">
                                <div class="rating_logo">豆瓣评分<em>TM</em></div>
                                <div class="rating_wrap clearbox" rel="v:rating">
                                    <div class="rating_self " typeof="v:Rating">
                                        <strong class="ll rating_num " property="v:average"> {{dataList.score}} </strong>
                                        <!-- <span property="v:best" content="10.0"></span> -->
                                        <div class="rating_right ">
                                            <div class="ll bigstar40"></div>
                                            <div class="rating_sum">
                                                <Star :score="dataList.score/2"/>
                                                <br>
                                                <span class="">
                                                    <a href="comments" class="rating_people"><span
                                                            property="v:votes">{{dataList.vote}}</span></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div v-for="(item,index) in dataList.ratingPer" :key="index" class="power_wrap" >
                                            <div class="power" :style="'width:'+toPoint(item)*6+'rem'"></div>
                                            <br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br clear="all">
                    <div id="collect_form_35265945"></div>
                    <div class="related_info">
                        <h2>
                            <span>内容简介</span>
                            &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
                        </h2>
                        <div class="indent" id="link-report">
                            <span class="short">
                                <div class="intro">
                                    <p>{{intro}}
                                        <a href="javascript:void(0)" class="j a_show_full" v-if="dataList.intro.length>0 && folder" @click="unfold()">(展开全部)</a>
                                    </p>
                                </div>
                            </span>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<script>
    import Star from './star.vue'

    export default{
        name:"Subject",
        data(){
            return{
                ready:false,
                dataList: {},
                folder:true,
            }
        },
        mounted(){
            this.$axios
            .get('/api/subject/'+this.$route.params.id,{
                responseType: 'json'
                })
            .then(response => {
                console.log(typeof response.data);
                this.dataList = response.data;
                console.log(this.toPoint(this.dataList.ratingPer[0])*140);
                this.ready = true;
            });
        },
        components:{
            Star,
        },
        computed: {
            intro: function() {
                if(this.folder){
                    return this.dataList.introSummary
                }
                else{
                    return this.dataList.intro;
                }
            }
        },
        methods: {
            unfold: function() {
                this.folder = false;
            },
            toPoint: function(percent){
                let str=percent.replace("%","");
                str= str/100;
                return str;
            }
        },
        
    }
</script>
<style scoped>
h1 {
    font-size: 1.38rem;
    font-weight: normal;

    /* word-wrap: break-word; */
    display: block;
    margin: 0;
    padding: 0 0 15px 0;
    line-height: 1.1;
    color: #fff;
}
#wrapper {
    /* width: 950px; */
    margin: 0 auto;
    padding: 1.2rem .9rem .9rem;
    /* margin-top: 40px; */
}
a img {
    width: 6rem;
    height: 8.4rem;
    border-radius: .24rem;
    border: .06rem solid rgba(0,0,0,0.05);
    box-shadow: 0 5px 10px rgb(0 0 0 / 15%);
}
.subject {
    /* width: 500px; */
    display: flex;
    min-height: 9.9rem;
}
.subjectwrap{
    /* display: flex; */
    padding: 1.2rem .9rem .9rem;
    background-color: rgb(127, 126, 106);
}

h2 {
    font-size: .9rem;
    color: #818181;
    margin-bottom: .9rem;
}
.intro p {
    text-indent: 2em;
    word-break: normal;
}

#mainpic {
    padding-right: .6rem;
}
#interest_sectl {
    color: #fff;
    background-color: rgba(0,0,0,0.1);
    border-radius: .12rem;
    padding: .6rem .9rem .78rem;
    margin-top: -.6rem;
    height: 4.2rem;
}
#interest_sectl .rating_num {
    display: inline-block;
    font-size: 2.16rem;
    line-height: 3rem;
    margin-right: 5px;
    color: #fff;
}

.power{
    display:inline-block;
    background: #ffd596 none repeat scroll 0 0;
    height: .3rem;
    border-radius: 3px;
    line-height: 7px;
    margin: 0 0 .3rem 0;
}
.power_wrap{
    margin-top: -.12rem;
    height:.6rem;
}
.rating_right{
    display:inline-block;
}
.pl{
    font-size: .66rem;
    margin: .6rem 0 .3rem;
    color: rgba(255,255,255,0.7);
}
.rating_wrap{
    display:flex;
}
.rating_people{
    color: rgba(255,255,255,0.7);
    display: inline-block;
    font-size: .72rem;
    transform: scale(0.9);
    font-style: normal;
}
.rating_logo{
    font-size: .66rem;
    line-height: 1.32rem;
    color: #fff;
    position: relative;
    margin-bottom: .24rem;
}
.rating_logo em{
    display: inline-block;
    font-size: .6rem;
    color: rgba(255,255,255,0.7);
    position: absolute;
    top: -1px;
    font-style: normal;
    transform: scale(0.7);
}
</style>