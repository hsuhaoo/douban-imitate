<template>
    <div class="market-books">
        <SectionNav title="豆瓣书店">
        </SectionNav>
        <div class="bd">
          
          <div class="top">
            <div class="cover">
              <a href="https://market.douban.com/book/rickandmorty?utm_campaign=book_freyr_section&amp;utm_source=douban&amp;utm_medium=pc_web">
                <div class="pic"></div>
              </a>
            </div>
            <div id="market_books_header_info" class="promBook">
              <p class="title">平行宇宙的艺术
                <span class="price">￥117.60</span>
              </p>
              <p class="desc indent-paragraph" data-row="4">Rick and Morty首部官方设定集，主题贴纸限量送</p>
            </div>
          </div>
          <ul class="list-col list-col5" >
              
              <li v-for="(item,index) in items" :key="index" ref="li" @touchstart="movestart($event)" @touchmove.prevent="secondmoving($event)">
                <div class="cover">
                  <a :href="dataList[index].href" target="_blank">
                    <img :src="'../picture/' + dataList[index].src.match(/[0-9]+.jpg/i).slice(-1)" width="106" height="140" :alt="dataList[index].title"/>
                  </a>
                </div>
                <div class="info">
                  <div class="title">
                    <a :href="dataList[index].href" target="_blank">{{dataList[index].title}}</a>
                  </div>
                  <div class="price">{{dataList[index].price}}</div>
                </div>
              </li>
          </ul>
        </div>
      </div>
</template>

<script>
    import SectionNav from './sectionNav.vue'
    let dataList = require('../data/marketBook')
    export default{
        name:"Market",
        data(){
            return{
                items : [...Array(5).keys()],
                currentLeft: 0,
                dataList: dataList,
            }
        },
        components:{
            SectionNav,
        },
        methods:{
            movestart (event) {
                this.startx = event.changedTouches[0].clientX
            },
            secondmoving (event) {
                this.movingx = event.changedTouches[0].clientX
                this.distance = (this.movingx - this.startx)/20;
                this.currentLeft += this.distance;
                this.currentLeft = Math.max(this.currentLeft, -200);
                
                this.currentLeft = Math.min(this.currentLeft, 10);

                this.$refs.li.forEach((list)=>{
                    list.style.left = this.currentLeft + 'px';
                })
                // if (this.distance > 0) {
                //     //左滑
                //     this.currentLeft =  currentLeft - this.distance
                //     this.$refs.li.style.left = currentLeft + this.distance) + 'px'
                // }
                // if (this.distance < 0) {
                //     //右滑
                //     this.$refs.li.style.left = this.distance + 'px'
                // }  
            },
        },
    }
    </script>

<style scoped>
ul {
    width: 100%;
    display: flex;
    align-items: flex-start;
    overflow: hidden;
}
.list-col li:first-child {
    margin-left: 1.12rem;
}
li{
  position: relative;
  margin-left: 0.48rem;
  min-width: 100px;
}
/* li{
  width: 120px;
  padding-right: 12px;
}
li :nth-last-child(1){
  padding-right:0px;
} */
.info .title{
  max-width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.info .title a{
  text-decoration: none;
  color: #000000;
}
.top .title{
  font-size: 19px;
  margin: 10px 0;
}
.top{
  display: flex;
  margin-bottom: 30px;
  margin-left: 1.12rem;
}
.pic{
  width: 130px;
  height: 172px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('../assets/6882.png');
}
img{
  width: 100px;  
  height: auto;
}

/* .info .title a:hover{
    background-color: #37a;
    color: white;
} */
.list-col{
  border-bottom: 1px solid #F2F2F2;
  /* padding: 15px 0 43px 0; */
}
.indent-paragraph{
  font-size: 13px;
  font-weight: 300;
  line-height: 1.5;
  color: #9B9B9B;
}
/* .promBook{
  width:100%;
  margin-left: 1.12rem;
} */
.promBook .price {
  float: right;
  color: #E76648;
  font-size: 16px;
  line-height: 22px;
  padding-right:15px;
}
.info .price {
  color: #818181;
  line-height: .94rem;
  margin-top: .3rem;
  font-size: .72rem;
}
</style>