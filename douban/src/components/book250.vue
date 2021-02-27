<template>
    <div class="block5">    
        <SectionNav title="豆瓣图书250">
            <span class="link-more">
                <router-link class="" to="/page/top">更多»</router-link>
            </span>
        </SectionNav>
          
        <div class="content clearfix s" id="book_rec" data-dstat-areaid="58" data-dstat-mode="click,expose">
                
          <dl v-for="(item,index) in dataList" :key="index">
            <dt>
              <a onclick="" :href="dataList[index].href">
                <img :data-src="'../picture/'+dataList[index].src.split('/').slice(-1)" class="m_sub_img" ref="img">
              </a>
            </dt>
            <dd>
              <a onclick="" :href="dataList[index].href">
                {{dataList[index].title}}
              </a>
              <p class="extra-info">
                
                <span class="meta-label"  v-if="dataList[index].extra">
                    有电子书
                  </span>
              </p>
            </dd>
          </dl>
      
        </div>
        </div>
</template>

<script>
    import SectionNav from './sectionNav.vue'
    // let dataList = require('../data/book250')
    import store from "../store.js"
    import lazyload from "../lazyload.js"

    export default{
        name:"Book250",
        data(){
            return{
                items : [...Array(9).keys()],
                dataList: null,
                ready: false,
                num: 0,
            }
        },
        components:{
            SectionNav,
        },
        mounted() {
            // this.uriProcess();
            this.$axios
                .get("http://localhost:8081/indexData/book250", {
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
.content {
    width: 330px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-wrap: wrap;

}

img{
    width: 82px;  
    height: auto;
}
dd {
  margin: 0;
}
dd{
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
dd a:hover{
    background-color: #37a;
    color: white;
}

.link-more{
        font-size: 13px;
        color: #3377aa;
        margin: 15px;
}
.meta-label{
    color: white;
    background: #a1a1a1;
}

</style>