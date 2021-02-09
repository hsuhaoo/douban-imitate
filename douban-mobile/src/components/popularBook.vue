<template>
    <div class="popular-books" v-if="ready">
        <SectionNav :title="title">
            <span class="link-more">
                <router-link :to="pathMore">更多»</router-link>
            </span>
        </SectionNav>
        <div class="bd">
          <ul class="list-col"
             @touchstart="movestart($event)" @touchmove.prevent="secondmoving($event)">
            <li class="" v-for="(item,index) in items" :key="index" ref="li">
                <div class="cover">
                <router-link :to="'/subject/'+dataList[index].href.split('/').slice(-2)[0]">
                    <img :src="'../picture/'+dataList[index].src.split('/').slice(-1)"
                    :alt="dataList[index].title" class="">
                </router-link>
                </div>
                <div class="info">
                    <h4 class="title">
                        <router-link
                        :to="'/subject/'+dataList[index].href.split('/').slice(-2)[0]" class="">{{dataList[index].title}}</router-link>
                    </h4>
                    <p class="entry-star-small">
                        <Star :score="dataList[index].score/2"/>
                        <span class="average-rating">
                            {{dataList[index].score}}
                        </span>
                    </p>
                </div>
            </li>
          </ul>
        </div>
      </div>
</template>
<script>
    import SectionNav from './sectionNav.vue'
    import Star from './star.vue'
    // let dataList = require('../data/real')
    export default{
        name:"PopularBook",
        data(){
            return{
                items : [...Array(10).keys()],
                // dataList: dataList,
                currentLeft: 0,
                ready: false,
            }
        },
        components:{
            SectionNav,
            Star,
        },
        methods:{
            movestart (event) {
                this.startx = event.changedTouches[0].clientX
            },
            secondmoving (event) {
                this.movingx = event.changedTouches[0].clientX
                this.distance = (this.movingx - this.startx)/20;

                this.currentLeft += this.distance;
                this.currentLeft = Math.max(this.currentLeft, -600);
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
        // computed:{
        //     reviewData:  function(){
        //         let a = this.dataList.map(function(data){
        //             return data.reviews.slice(0,-2);
        //         });
        //         console.log(a);
        //         return this.dataList;
        //     }
        // },
        mounted() {

            // this.$axios
            // .get("http://localhost:8081/review/" + this.$route.params.id, {
            //     responseType: "json",
            // })
            // .then((response) => {
            //     this.dataList = response.data;
            //     this.ready = true;
            // });
            // console.log(this.dataList);
            // let scrollEvent=()=>{
            //     let position = Math.max(100, 50+window.scrollY)
            //     this.$refs.float.style.top=position+"px";
            // }
            if(this.fiction){
                this.dataList = require('../data/unreal');
                this.pathMore = "/page/unreal"
            }
            else {
                this.dataList = require('../data/real');
                this.pathMore = "/page/real"
            }
            this.ready = true;
        },
        props:{
            title:{
                type: String,
            },
            fiction:{
                type: Boolean,
            }
        }
    }
    </script>

<style scoped>
.list-col {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    /* align-items: flex-start; */
    overflow: hidden;
}
.cover{
    /* height: 140px; */
}
.link-more a{
    color: #42bd56;
}
.list-col li:first-child {
    margin-left: 1.12rem;
}
.list-col li{
    position: relative;
    /* margin: 0 20px 15px 0; */
    margin-left: 0.48rem;
    /* width: 100%; */
    min-width: 100px;
}

.entry-star-small{
    display: flex;
}
p{
    margin: 0;
}

img{
    width: 100px;  
    height: 142px;
}
.title{
    height: auto;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.title a{
    font-size: .94rem;
    text-align: center;
    text-decoration: none;
    color: #000000;
    margin-top: .6rem;
    line-height: .94rem;
}
.average-rating{
    color: #818181;
}
/* .title a:hover, .reviews a:hover{
    background-color: #37a;
    color: white;
} */
</style>
