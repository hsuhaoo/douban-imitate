<template>
    <div id="content">
        <h1>豆瓣图书标签: 小说</h1>
        <div class="article">
            <div id="subject_list">
                <div class="rr greyinput">
                    综合排序
                    &nbsp;/&nbsp;
                    <a href="/tag/%E5%B0%8F%E8%AF%B4?type=R">按出版日期排序</a>
                    &nbsp;/&nbsp;
                    <a href="/tag/%E5%B0%8F%E8%AF%B4?type=S">按评价排序</a>
                </div>
                <ul class="subject-list" v-if="ready">
                    <li class="subject-item" v-for="(item,index) in items" :key="index">
                        <div class="pic">
                            <a class="nbg" :href="dataList[index].href"
                                onclick="moreurl(this,{i:'0',query:'',subject_id:'4913064',from:'book_subject_search'})">
                                <!-- <img class="" :src="dataList[index].src"
                                   > -->
                                   <img :src="picList[index]">
                            </a>
                        </div>
                        <div class="info">
                            <h2 class="">
                                <a :href="dataList[index].href" :title="dataList[index].title"
                                    onclick="moreurl(this,{i:'0',query:'',subject_id:'4913064',from:'book_subject_search'})">
                                    {{dataList[index].title}}
                                </a>
                            </h2>
                            <div class="pub">
                               {{dataList[index].pub}}
                            </div>
                            <div class="star clearfix">
                                <span class="allstar45"></span>
                                <span class="rating_nums">{{dataList[index].rating}}</span>
                                <span class="pl">
                                    {{dataList[index].pl}}
                                </span>
                            </div>

                            <p>{{dataList[index].abstract}}
                            </p>
                            <div class="ft">
                                <div class="collect-info">
                                </div>
                                <div class="cart-actions">
                                    <span class="market-info" v-if="typeof(dataList[index].buylinks) == 'undefined'">
                                        <a :href="dataList[index].buyhref"
                                            target="_blank">在豆瓣购买</a>
                                    </span>
                                </div>
                                <span class="buy-info" v-if="typeof(dataList[index].buylinks) != 'undefined'">
                                    <a :href="dataList[index].buylinks">
                                        {{dataList[index].price}}
                                    </a>
                                </span>
                            </div>
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
    const axios = require('axios');
    export default{
        name:"Stag",
        data(){
            return{
                items : [...Array(20).keys()],
                ready : false,
                picList: [],
            }
        },
        mounted() {
            let dataList = require('../data/tag_json/'+this.$route.params.id+'.json');
            this.dataList = dataList;
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
            this.ready = true;
        }
    }
    </script>

<style scoped>
h2{
    
    font-size: 14px;
    margin:0 0 6px;
}
#content {
      width: 1040px;
      margin: 0 auto;
  }
.greyinput{
    text-align:right;
}

#subject_list{
    width: 675px;
    margin-left: 20px;
}
li{
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
img{
    width: 90px;
    height: auto;
}

.pic{
    display: inline-block;
    vertical-align:top;
}
.info{
    display: inline-block;
    width: 565px;
    margin-left: 15px;
}
.buy-info a{
    color: #bbb;
}
.market-info a:hover, .buy-info a:hover{
    background-color: #37a;
    color: white;
}

</style>