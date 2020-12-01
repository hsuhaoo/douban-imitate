<template>
    <div>
        <SectionNav title='新书速递' :slide="slide" @renderul='renderul' :selectIndex="barCount">
            <span class="link-more">
                <a class="" href="/latest?icn=index-latestbook-all">更多»</a>
            </span>
        </SectionNav>
        <ul class="list5">
            <li v-for="(item,index) in items" :key="index">
                <div class="cover " >
                <a
                    :href="newData[index].href"
                >
                    <img :src="newData[index].src"  :alt="newData[index].title" />
                </a>
                </div>
                <div class="info">
                    <div class="title">
                        <a
                        :href="newData[index].href"
                        :title="newData[index].title"
                        >
                        {{newData[index].title}}
                        </a>
                    </div>
                    <div class="author">{{newData[index].author}}</div>
                    <div class="moreMeta">
                        <h4 class="title">{{newData[index].title}}</h4>
                        <p>
                        <span class="author">{{newData[index].author}}</span>/
                        <span class="year">{{newData[index].year}}</span>/
                        <span class="publisher">{{newData[index].publisher}}</span>
                        </p>
                        <p class="abstract">
                        {{newData[index].abstrct}}
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
                items : [...Array(10).keys()],
                slide : true, 
                barCount: 0,
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
            }
        },
        computed: {
            newData:  function(){
                return ul_list[this.barCount];
            }
        }
    }
    </script>

<style scoped>
.list5 {
    width: 660px;
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    height: 450px;
}

img{
    width: 100px;  
    height: auto;
}
li{
    position: relative;
    margin: 0 40px 15px 0;
    width: 100px;
    /* height: 200px; */
}
li:nth-child(5n){
    margin: 0 0 15px 0;
    padding: 0;
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
