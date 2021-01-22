<template>
    <div id="content" v-if="ready">
        <h1>{{}}</h1>
        <div class="article">
            <div id="subject_list">
                <div class="rr greyinput">
                    综合排序 &nbsp;/&nbsp;
                    <a href = "javascript:void(0);" @onclick="sortYear">按出版日期排序</a>
                    &nbsp;/&nbsp;
                    <a href = "javascript:void(0);" @onclick="sortScore">按评价排序</a>
                </div>
                <ul class="subject-list">
                    <li
                        class="subject-item"
                        v-for="(item, index) in items"
                        :key="index"
                    >
                        <div class="pic">
                            <router-link
                                :to="
                                    '/subject/' +
                                        dataList[index].href
                                            .split('/')
                                            .slice(-2, -1)
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
                                        '/subject/' +
                                            dataList[index].href
                                                .split('/')
                                                .slice(-2, -1)
                                    "
                                    :title="dataList[index].title"
                                >
                                    {{ dataList[index].title }}
                                </router-link>
                            </h2>
                            <div class="pub">
                                {{ dataList[index].publisher }}
                            </div>
                            <div class="star clearfix">
                                <span class="allstar45"></span>
                                <span class="rating_nums">{{
                                    dataList[index].score
                                }}</span>
                                <span class="pl">
                                    {{ dataList[index].vote }}
                                </span>
                            </div>

                            <p>{{ dataList[index].abstract }}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="aside"></div>
        </div>
    </div>
</template>

<script>
const axios = require("axios");
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
    mounted() {
        this.$axios
            .get("http://localhost:8081/search", {
                responseType: "json",
                params: {
                    "info":info,
                }
            })
            .then((res) => {
                this.dataList = res.data;
                this.ready = true;
            });

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
            return a.year-b.year});
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
