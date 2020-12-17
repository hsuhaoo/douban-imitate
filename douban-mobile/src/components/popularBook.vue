<template>
    <div class="popular-books">
        <SectionNav :title="title">
            <span class="link-more">
                <a href="/chart?subcat=F&amp;icn=index-topchart-fiction">更多»</a>
            </span>
        </SectionNav>
        <div class="bd">
          <ul class="list-col"
            data-dstat-areaid="61" data-dstat-mode="click,expose">
            <li class="" v-for="(item,index) in items" :key="index">
                <div class="cover">
                <a onclick="" :href="dataList[index].href">
                    <img :src="dataList[index].src"
                    :alt="dataList[index].title" class="">
                </a>
                </div>
                <div class="info">
                    <h4 class="title">
                        <a onclick=""
                        :href="dataList[index].href" class="">{{dataList[index].title}}</a>
                    </h4>
                    <p class="entry-star-small">
                        <Star :score="dataList[index].rating/2"/>
                        <span class="average-rating">
                            {{dataList[index].rating}}
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
    let dataList = require('../data/popularBook')
    export default{
        name:"PopularBook",
        data(){
            return{
                items : [...Array(10).keys()],
                dataList: dataList,
            }
        },
        components:{
            SectionNav,
            Star,
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
        props:{
            title:{
                type: String,
            },
        }
    }
    </script>

<style scoped>
.list-col {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: flex-start;
}
.cover{
    height: 120px;
}
.link-more a{
    color: #42bd56;
}
.list-col li{
}
.info {
    max-width: 100px;
}
.entry-star-small{
    display: flex;
}
p{
    margin: 0;
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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
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
