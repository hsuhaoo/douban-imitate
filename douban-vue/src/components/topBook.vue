<template>
    <div class="section weekly-top">
        <SectionNav title="畅销图书榜">
        </SectionNav>
        <div class="bd">
            
                <ul class="list list-ranking" v-if="ready">
                    
                    <li class="item impression_track_chart" v-for="(item,index) in items" :key="index" :data-track="dataList[index].data_track">
                        <span class="rank-num">{{index+1}}.</span>
                        <div class="book-info">
                            <div class="author">{{dataList[index].author}}</div>
                        </div>
                        <a :href="dataList[index].href"><span class="buy-button">去购买</span></a>
                    </li>
                </ul>
        </div>
    </div>
</template>

<script>
    import SectionNav from './sectionNav.vue'
    // let dataList = require('../data/topBook')
    export default{
        name:"TopBook",
        data(){
            return{
                items : [...Array(10).keys()],
                dataList: null,
                ready: false,
            }
        },
        components:{
            SectionNav,
        },
        mounted() {
            // this.uriProcess();
            this.$axios
                .get("http://localhost:8081/indexData/topBook", {
                    responseType: "json",
                })
                .then((response) => {
                    this.dataList = response.data;
                    // console.log(this.dataList);
                    this.ready = true;
                });
        },
    }
    </script>

<style scoped>

.more-meta{
    display: none;
}
.rank-num{
    width: 20px;
    text-align: center;
    font-size: 14px;
}
.book-info{
    width: 223px;
    font-size: 14px;
    color: #666;
}
.book-info a:hover{
    background-color: #37a;
    color: white;
}
li{
    padding: 4px 0;
    border-bottom: 1px dashed #e5ebe4;
    display: flex;
    align-items: baseline;
}
li:hover{
    background-color: rgb(249, 249, 246);
}

li>a{
    font-size: 13px;
    padding: 6px 8px;
    color: #999;
}
li:hover>a{
    color: #d4bea7;
    border:  #d4bea7 solid 1px;
}
</style>