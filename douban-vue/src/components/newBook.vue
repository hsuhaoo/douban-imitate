<template>
    <div>
        <SectionNav title='新书速递' :slide="slide" @renderul='renderul' :selectIndex="barCount">
            <span class="link-more">
                <a class="" href="/latest?icn=index-latestbook-all">更多»</a>
            </span>
        </SectionNav>
        <ul class="list5" ref="ul1">
            <li v-for="(item,index) in items" :key="index" ref="li">
                <div class="cover " >
                <router-link
                    :to="'/subject/'+ulData1[index].href.split('/').slice(-2,-1)"
                >
                    <img :src="'../../picture/'+ulData1[index].src.split('/').slice(-1)"  :alt="ulData1[index].title" @mouseenter='hover' @mouseleave='hoverend'/>
                </router-link>
                </div>
                <div class="info">
                    <div class="title">
                        <router-link
                        :to="'/subject/'+ulData1[index].href.split('/').slice(-2,-1)"
                        :title="ulData1[index].title"
                        >
                        {{ulData1[index].title}}
                        </router-link>
                    </div>
                    <div class="author">{{ulData1[index].author}}</div>
                    <div class="moreMeta">
                        <h4 class="title">{{ulData1[index].title}}</h4>
                        <p>
                        <span class="author">{{ulData1[index].author}}</span>/
                        <span class="year">{{ulData1[index].year}}</span>/
                        <span class="publisher">{{ulData1[index].publisher}}</span>
                        </p>
                        <p class="abstract">
                        {{ulData1[index].abstrct}}
                        </p>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="list5" ref="ul2">
            <li v-for="(item,index) in items" :key="index" ref="li">
                <div class="cover " >
                <router-link
                    :to="'/subject/'+ulData2[index].href.split('/').slice(-2,-1)"
                >
                    <img :src="'../../picture/'+ulData2[index].src.split('/').slice(-1)"  :alt="ulData2[index].title" @mouseenter='hover' @mouseleave='hoverend'/>
                </router-link>
                </div>
                <div class="info">
                    <div class="title">
                        <router-link
                        :to="'/subject/'+ulData2[index].href.split('/').slice(-2,-1)"
                        :title="ulData2[index].title"
                        >
                        {{ulData2[index].title}}
                        </router-link>
                    </div>
                    <div class="author">{{ulData2[index].author}}</div>
                    <div class="moreMeta">
                        <h4 class="title">{{ulData2[index].title}}</h4>
                        <p>
                        <span class="author">{{ulData2[index].author}}</span>/
                        <span class="year">{{ulData2[index].year}}</span>/
                        <span class="publisher">{{ulData2[index].publisher}}</span>
                        </p>
                        <p class="abstract">
                        {{ulData2[index].abstrct}}
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import SectionNav from './sectionNav.vue'
    let ul_list = require('../data/newBook')
    export default{
        name:"NewBook",
        data(){
            return{
                items : [...Array(20).keys()],
                slide : true, 
                barCount: 0,
                opacity: [],
            }
        },
        components:{
            SectionNav,
        },
        methods: {
            renderul: function(val){
                if(val==='prev'){
                    if(this.barCount>0){
                        this.barCount -= 1;
                    }
                    else{
                        this.barCount = 3;
                    }
                }
                else{
                    if(this.barCount<3){
                        this.barCount += 1;
                    }
                    else{
                        this.barCount = 0;
                    }
                }
                this.$refs.li.forEach((list)=>{
                    list.style.opacity = "1";
                });
                this.animate(this.$refs.li);
                this.$refs.ul1.style.overflow = "hidden";
                this.$refs.ul2.style.overflow = "hidden";
            },
            animate: function(li){
                var offset = 660;
                var time = 300;
                var inteval = 10;
                var speed = offset / (time / inteval);
                var newLeft = -this.barCount*660;
                // let range = (start, end) => Array(end - start).fill(0).map((v, i) => i + start);
                // let display = range(this.barCount*5,this.barCount*5+5).concat(range(this.barCount*5+20,this.barCount*5+25));
                let currentLeft = -this.barCount*660 + 660;
                let go=()=>
                {
                    if ( (speed > 0 && currentLeft > newLeft)) {
                        
                        li.forEach((list)=>{
                            list.style.left = currentLeft - speed + 'px';
                        });
                        currentLeft = currentLeft - speed;
                        setTimeout(go, inteval);
                    }
                }
                go();

            },
            hover: function(){
                let range = (start, end) => Array(end - start).fill(0).map((v, i) => i + start);
                let display = range(this.barCount*5,this.barCount*5+5).concat(range(this.barCount*5+20,this.barCount*5+25));
                this.$refs.li.forEach((list, index)=>{
                    if(!display.includes(index)){
                        list.style.opacity = "0";
                    }
                    else{
                        list.style.opacity = "1";
                    }
                });
                this.$refs.ul1.style.overflow = "visible";
                this.$refs.ul2.style.overflow = "visible";
            },
            hoverend: function(){
                this.$refs.ul1.style.overflow = "hidden";
                this.$refs.ul2.style.overflow = "hidden";
            }
        },
        computed: {
            ulData1:  function(){
                let dataList = [];
                for(const ul of ul_list){
                    dataList = dataList.concat(ul.slice(0,5))
                }
                return dataList;
            },
            ulData2:  function(){
                let dataList = [];
                for(const ul of ul_list){
                    dataList = dataList.concat(ul.slice(5,10))
                }
                return dataList;
            },
        }
    }
    </script>

<style scoped>
.list5 {
    width: 660px;
    display: flex;
    align-items: flex-end;
    /* flex-wrap: wrap; */
    height: 225px;
    overflow: hidden;
}

img{
    width: 100px;  
    height: auto;
}

li{
    position: relative;
    margin: 0 40px 15px 0;
    width: 100px;
    /* left: -660px; */
    /* height: 200px; */
}
li:nth-child(5n){
    margin: 0 0 15px 0;
    padding: 0;
}
li:nth-child(n+6){
    opacity: 0;
}
.info > .author, .info > .title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.moreMeta{
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
.moreMeta .title{
    font-size: 14px;
    margin-bottom: 6px;
}

.moreMeta:before{
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
.moreMeta:after{
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
li .cover:hover + .info .moreMeta{
    display: block;
}

h4 {
    margin: 0;
}
.abstract {
    margin: 0;
}
.title a:hover{
    background-color: #37a;
    color: white;
}

</style>
