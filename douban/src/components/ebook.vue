<template>
    <div class="section ebook-area">
        <SectionNav title="电子图书">
            <span class="link-more">
                <a class="" href="https://read.douban.com/ebooks?dcs=book-intro&amp;dcm=douban" target="_blank">查看全部»</a>
            </span>
        </SectionNav>
    
        <div class="sub-section ">
            <h3>
                热门电子图书
                <span class="more-info">
                    <a href="https://read.douban.com/kind/1/?sort=hot&amp;dcs=book-hot&amp;dcm=douban&amp;dct=read-more"
                        target="_blank">
                        更多»
                    </a>
                </span>
            </h3>
            <ul class="list-col5" v-if="ready">
                <li class="" v-for="(item,index) in dataList" >
                    <div class="cover">
                        <a :href="dataList[index].href"
                            target="_blank" >
                            <img :data-src="'../picture/'+dataList[index].src.split('/').slice(-1)"
                                :alt="dataList[index].title" width="106px" height="158px" ref="img">
                        </a>
                    </div>
                    <div class="info">
                        <div class="title">
                            <a :href="dataList[index].href"
                                :title="dataList[index].title" target="_blank">
                                {{dataList[index].title}}
                            </a>
                        </div>
                        <div class="price">
                            {{dataList[index].price}}
                        </div>
                        <div class="more-meta">
                            <h4 class="title">
                                {{dataList[index].title}}
                            </h4>
                            <p>
                                <span class="author">
                                    Tsevan Rabtan / Alejandra Acosta
                                </span> / <span class="year">
                                    {{dataList[index].year}}
                                </span> / <span class="publisher">
                                    {{dataList[index].publisher}}
                                </span> / <span class="price">

                                    {{dataList[index].price}}

                                </span>
                            </p>
                            <p class="abstract">
                                {{dataList[index].abstract}}
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import SectionNav from './sectionNav.vue'
    import store from "../store.js"
    import lazyload from "../lazyload.js"


    export default{
        name:"EBook",
        data(){
            return{
                dataList: null,
                ready: false,
                sharedState: store.state,
                num: 0,
            }
        },
        components:{
            SectionNav,
        },
        mounted() {
            this.$axios
                .get("http://localhost:8081/indexData/eBook", {
                    responseType: "json",
                })
                .then((response) => {
                    this.dataList = response.data;
                    if(store.debug){
                        console.log(this.dataList);
                    }
                    let lazy = lazyload(this);
                    window.addEventListener('scroll', lazy, false);
                    this.ready = true;
                });
        },
    }
    </script>

<style scoped>
.list-col5 {
    width: 660px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

}

li{
    min-width: 120px;
    margin-bottom: 20px;
}
li .info .title{
  max-width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
h3 {
    font-weight: normal;
    font-size: 15px;
}

.more-info a{
    font-size: 15px;
    color: #3377aa;
    margin-left: 15px;
}
.more-info a:hover, .title a:hover{
    background-color: #37a;
    color: white;
}

li{
    position: relative;
}
.more-meta{
    display: none;
    position: absolute;
    top: -60px;
    left: 100px;
    right: 0;
    z-index: 1;
    background: #f9f9f7;
    width: 300px; 
    color: #666;
    border: #acacac solid 1px;
    padding: 15px;
}
.more-meta .title{
    font-size: 14px;
    margin-bottom: 6px;
}

.more-meta:before{
    box-sizing: content-box;
    width: 0px;
    height: 0px;
    position: absolute;
    top: 83px;;
    left: -16px;
    padding:0;
    border-right: 8px solid #f9f9f7;
    border-top:8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left:8px solid transparent;
    display: block;
    content:'';
    z-index: 12;
}
.more-meta:after{
    box-sizing: content-box;
    width: 0px;
    height: 0px;
    position: absolute;
    top: 82px;;
    left: -18px;
    padding:0;
    border-right: 9px solid #acacac;
    border-top:9px solid transparent;
    border-bottom:9px solid transparent;
    border-left:9px solid transparent;
    display: block;
    content:'';
    z-index:10
}
li .cover:hover + .info .more-meta{
    display: block;
}

</style>
