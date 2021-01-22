<template>
    <div id="wrapper">
        <h1>
            <span property="v:itemreviewed">{{dataList.title}}</span>
            <div class="clear"></div>
        </h1>
        <div id="content">
            <div class="grid-16-8 clearfix">
                <div class="article" v-if="ready">
                    <div class="indent">
                        <div class="subjectwrap clearfix">
                            <div class="subject clearfix">
                                <div id="mainpic" class="">
                                    <a class="nbg" 
                                        :title="dataList.title">
                                        <img :src="dataList.src"
                                            title="点击看大图" :alt="dataList.title" rel="v:photo">
                                    </a>
                                </div>
                                <div id="info" class="">
                                    <span v-for="(item,index) in dataList.info" :key="index"> <span class="pl">{{item.split(":")[0]+":"}}</span> {{item.split(":")[1]}}<br></span>
                                </div>
                            </div>
                            <div id="interest_sectl" class="">
                                <div class="rating_wrap clearbox" rel="v:rating">
                                    <div class="rating_logo">豆瓣评分</div>
                                    <div class="rating_self clearfix" typeof="v:Rating">
                                        <strong class="ll rating_num " property="v:average"> {{dataList.score}} </strong>
                                        <span property="v:best" content="10.0"></span>
                                        <div class="rating_right ">
                                            <div class="ll bigstar40"></div>
                                            <div class="rating_sum">
                                                <span class="">
                                                    <a href="comments" class="rating_people"><span
                                                            property="v:votes">{{dataList.vote}}</span></a>
                                                </span>
                                                <Star :score="dataList.vote/2"/>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="stars5 starstop" title="力荐">
                                        5星
                                    </span>
                                    <div class="power" style="width:48px"></div>
                                    <span class="rating_per">{{dataList.ratingPer[0]}}</span>
                                    <br>
                                    <span class="stars4 starstop" title="推荐">
                                        4星
                                    </span>
                                    <div class="power" style="width:64px"></div>
                                    <span class="rating_per">{{dataList.ratingPer[1]}}</span>
                                    <br>
                                    <span class="stars3 starstop" title="还行">
                                        3星
                                    </span>
                                    <span class="rating_per">{{dataList.ratingPer[2]}}</span>
                                    <br>
                                    <span class="stars2 starstop" title="较差">
                                        2星
                                    </span>
                                    <span class="rating_per">{{dataList.ratingPer[3]}}</span>
                                    <br>
                                    <span class="stars1 starstop" title="很差">
                                        1星
                                    </span>
                                    <span class="rating_per">{{dataList.ratingPer[4]}}</span>
                                    <br>
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
                                    <p>{{dataList.introSummary}}</p>
                                    <p><a href="javascript:void(0)" class="j a_show_full">(展开全部)</a></p>
                                </div>
                            </span>
                            <span class="all hidden" v-if="dataList.intro.length>0">
                                <div class="">
                                    <div class="intro">
                                        <p>{{dataList.intro}}</p>
                                    </div>

                                </div>
                            </span>
                        </div>
                        <div class="indent " v-if="dataList.authorIntro.length>0">
                            <h2>
                                <span>作者简介</span>
                                &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
                            </h2>
                            <div class="">
                                <div class="intro" >
                                    <p>{{dataList.authorIntro}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="indent" v-if="dataList.dir!==null">
                            <h2>
                                <span>目录</span>
                                  &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
                            </h2>
                            <span v-html="dataList.dir.slice(1,-9).replace(/\n/g,'<br>')"></span>
                        (<a href="javascript:$('#dir_35219823_short').hide();$('#dir_35219823_full').show();$.get('/j/subject/j_dir_count',{id:35219823});void(0);">更多</a>)
                    </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<script>
    const axios = require('axios');
    import Star from './star.vue'

    export default{
        name:"Subject",
        data(){
            return{
                ready:false,
                dataList: {}
            }
        },
        mounted(){
            axios
            .get('http://localhost:8081/subject/'+this.$route.params.id,{
                responseType: 'json'
                })
            .then(response => {
                console.log(typeof response.data);
                this.dataList = response.data;
                this.ready = true;
            });
            console.log(this.dataList);
        },
        components:{
            Star,
        },
        
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
#wrapper {
    width: 950px;
    margin: 0 auto;
    margin-top: 40px;
}
a img {
    border-width: 0;
    vertical-align: middle;
    max-width: 135px;
    max-height: 200px;
}
.subject {
    width: 500px;
    display: flex;
}
.subjectwrap{
    display: flex;
}

h2 {
    font: 15px Arial, Helvetica, sans-serif;
    color: #072;
    margin: 0 0 12px 0;
    line-height: 150%;
    margin-top: 24px;
    margin-bottom: 3px;
    font-size: 16px;
}
.intro p {
    text-indent: 2em;
    word-break: normal;
}
#info {
    max-width: 333px;
}
#mainpic {
    margin: 3px 0 0 0;
    text-align: center;
    margin: 3px 12px 0 0;
    max-width: 155px;
    overflow: hidden;
}
#interest_sectl {
    width: 155px;
    margin: 2px 0 0 0;
    padding: 0 0 0 15px;
    border-left: 1px solid #eaeaea;
    color: #9b9b9b;
}
#interest_sectl .rating_num {
    color: #494949;
    padding: 0;
    min-width: 30%;
    font-size: 28px;
}
</style>