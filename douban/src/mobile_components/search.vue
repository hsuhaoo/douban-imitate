<template>
    <div id="content" v-if="ready">
        <h1>搜索{{$route.params.message}}</h1>
        <div class="article">
            <div id="subject_list" >
                <div class="rr greyinput" v-if="dataList.length>0">
                    <a href = "javascript:void(0);" @onclick="sortYear">按出版日期排序</a>
                    &nbsp;/&nbsp;
                    <a href = "javascript:void(0);" @onclick="sortScore">按评价排序</a>
                </div>
                <ul class="subject-list">
                    <li
                        class="subject-item"
                        v-for="(item, index) in dataList"
                        :key="index"
                    >
                        <div class="pic">
                            <router-link
                                :to="
                                    '/mobile/subject/' +
                                        dataList[index].id
                                "
                                class="nbg"
                            >
                                <img
                                    :src="
                                        '../picture/' +
                                            dataList[index].src
                                                .split('/')
                                                .slice(-1)
                                    "
                                />
                            </router-link>
                        </div>
                        <div class="info">
                            <h2 class="">
                                <router-link
                                    :to="
                                        '/mobile/subject/' +
                                            dataList[index].id
                                    "
                                    :title="dataList[index].title"
                                >
                                    {{ dataList[index].title }}
                                </router-link>
                            </h2>
                            <div class="pub">
                                <span class="main-meta">{{dataList[index]["作者"]}}/</span>
                                <span class="main-meta">{{dataList[index]["出版社"]}}/</span>
                                <span class="main-meta">{{dataList[index]["出版年"]}}</span>
                            </div>
                            <div class="star">
                                <span class="allstar45"></span>
                                <span class="rating_nums">{{
                                    dataList[index].score
                                }}</span>
                                <Star :score="dataList[index].score/2"/>
                                <span class="pl">
                                    {{ dataList[index].vote }}
                                </span>
                            </div>

                            <p>{{ dataList[index].abstract }}</p>
                        </div>
                    </li>
                </ul>
                <div class="_62cnaxip" v-if="dataList.length==0">没有找到关于 “{{$route.params.message}}” 的书，换个搜索词试试吧。</div>
            </div>
            <div class="aside"></div>
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
        },
    },
    data() {
        return {
            items: [...Array(20).keys()],
            ready: false,
            picList: [],
            dataList: [],
        };
    },
    components: {
            Star,
    },
    mounted() {
            this.$axios.get('http://localhost:8081/search/'+encodeURIComponent(this.$route.params.message),{
                    responseType: 'json'
                })
                .then(res => {
                    this.dataList = res.data;
                    console.log(this.dataList);
                    this.ready = true;
                }
            );

        // let dataList = require('../data/'+this.info+'.json');
        // this.dataList = dataList;
        // let id = encodeURI(encodeURI(this.$route.params.id));
        // axios
        // .get('http://localhost:8081/pic/'+id,{
        //     responseType: 'json'
        //     })
        // .then(response => {
        //     console.log(response.data);
        //     let reader = new FileReader()
        //     reader.onload = (e) => {
        //         this.picList.push(e.target.result);
        //     }
        //     for(let data of JSON.parse(response.data)){
        //         reader.readAsDataURL(data);
        //     }
        // });
        // axios
        // .get('https://img3.doubanio.com/view/subject/s/public/s27264181.jpg',{
        //     responseType: 'blob'
        //     })
        // .then(response => {
        //     console.log(response);
        //     let reader = new FileReader()
        //     reader.onload = (e) => {
        //     this.pic = e.target.result
        //     }
        //     reader.readAsDataURL(response.data);
        //     }
        // )
        // .catch(function (error) { // 请求失败处理
        //     console.log(error);
        // });
    },
    methods: {
        sortYear:function(){
        this.dataList.sort(function(a,b){
            return a["出版年"]-b["出版年"]});
        },
        sortScore:function(){
        this.dataList.sort(function(a,b){
            return a.score-b.score});
        },
    },

    computed: {},
};
</script>

<style scoped>
h2 {
    font-size: 14px;
    margin: 0 0 6px;
}

#content {
    /* width: 1040px; */
    margin: 0 auto;
}

.greyinput {
    text-align: right;
}


#subject_list {
    /* width: 675px; */
    margin-left: 20px;
}

li {
    border-top: 1px dashed #ddd;
    padding: 20px 0 10px;
}

.subject-item{
  display:flex;
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
