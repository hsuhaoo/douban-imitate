<template>
    <div class="popular-books">
        <SectionNav title="最受关注图书榜">
            <span class="link-more">
                <router-link to="/page/unreal">虚构类»</router-link>
              </span>
              <span class="link-more">
                <router-link to="/page/real">非虚构类»</router-link>
            </span>
        </SectionNav>
        <div class="bd">
          <ul class="list-col"
            data-dstat-areaid="61" data-dstat-mode="click,expose">
            <li class="" v-for="(item,index) in dataList" :key="index">
                <div class="cover">
                <router-link onclick="" :to="'/subject/'+dataList[index].href.split('/').slice(-2)[0]">
                    <img :data-src="'../picture/'+dataList[index].src.split('/').slice(-1)"
                    :alt="dataList[index].title" class="" ref="img">
                </router-link>
                </div>
                <div class="info">
                    <h4 class="title">
                        <router-link onclick=""
                        :to="'/subject/'+dataList[index].href.split('/').slice(-2)[0]" class="">{{dataList[index].title}}</router-link>
                    </h4>
                    <p class="entry-star-small">
                        <Star :score="dataList[index].rating/2"/>
                        <span class="average-rating">
                            {{dataList[index].rating}}
                        </span>
                    </p>
                    <p class="author">
                        {{dataList[index].author}}
                    </p>
                    <p class="book-list-classification">
                        {{dataList[index].classification}}
                    </p>
                    <p class="extra-info">
                        <span class="meta-label" v-if="dataList[index].extra">
                            有电子书
                          </span>
                    </p>
                </div>
                    <p class="reviews">
                    {{dataList[index].reviews.replace("()","")}}
                    (<a onclick="moreurl(this, {from:'pop_fiction'})" :href="dataList[index].reviews_href">{{dataList[index].reviews_text}}</a>)
                    </p>
            </li>
          </ul>
        </div>
      </div>
</template>
<script>
    import SectionNav from './sectionNav.vue'
    import Star from './star.vue'
    // let dataList = require('../data/popularBook')
    import store from "../store.js"
    import lazyload from "../lazyload.js"


    export default{
        name:"PopularBook",
        data(){
            return{
                dataList: null,
                sharedState: store.state,
                ready:false,
                num: 0,
            }
        },
        components:{
            SectionNav,
            Star,
        },
        mounted() {
            // this.uriProcess();
            this.$axios
                .get("http://localhost:8081/indexData/popularBook", {
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
        // methods:{
        //     lazyload: function(){
        //     // const imgs = document.getElementsByTagName('img')
        //     for(let i=this.num; i<this.$refs.img.length; i++) {
        //         // 用可视区域高度减去元素顶部距离可视区域顶部的高度
        //         window.console.log("testlazy");
        //         let distance = window.innerHeight - this.$refs.img[i].getBoundingClientRect().top
        //         // 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
        //         if(distance >= 0 ){
        //             // 给元素写入真实的src，展示图片
        //             this.$refs.img[i].src = this.$refs.img[i].getAttribute('data-src')
        //             // 前i张图片已经加载完毕，下次从第i+1张开始检查是否露出
        //             this.num = i + 1;
        //         }
        //     }
        //     }
        // }
        // computed:{
        //     reviewData:  function(){
        //         let a = this.dataList.map(function(data){
        //             return data.reviews.slice(0,-2);
        //         });
        //         console.log(a);
        //         return this.dataList;
        //     }
        // },
    }
    </script>

<style scoped>
.list-col {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 660px;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
}
.cover{
    height: 120px;
}
a{
    color: #3377aa;
}
.list-col li{
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;
}
.info {
    margin: 0 20px;
    max-width: 200px;
    height: 120px;
}
.star{
    display: inline-block;
}
.star li {
    width: 13px;
    display: inline-block;
}
p{
    margin: 0;
}
.reviews{
    flex-basis: 100%;
    color: #666;
    padding-top: 15px;
}
img{
    width: auto;  
    height: 120px;
}
.moreMeta{
    display: none;
}
.title {
    font-size: 15px;
    height: auto;
    margin: 0;
}
.title a:hover, .reviews a:hover{
    background-color: #37a;
    color: white;
}
.meta-label{
    color: white;
    background: #a1a1a1;
}
</style>
