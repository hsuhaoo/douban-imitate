<template>
    <div>
        <SectionNav title='新书速递' :slide="slide" @renderul='renderul' :selectIndex="barCount">
            <span class="link-more">
                <a class="" href="/latest?icn=index-latestbook-all">更多»</a>
            </span>
        </SectionNav>
        <ul class="list5" ref="ul1" v-if="ready">
            <li v-for="(item,index) in items" :key="index" ref="li">
                <div class="cover " >
                <router-link
                    :to="'/mobile/subject/'+ulData1[index].href.split('/').slice(-2,-1)"
                >
                    <img :src="'../../picture/'+ulData1[index].src.split('/').slice(-1)"  :alt="ulData1[index].title" />
                </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import SectionNav from './sectionNav.vue';
    let ul_list = require('../data/newBook');
    export default{
        name:"NewBook",
        data(){
            return{
                items : [...Array(20).keys()],
                slide : true, 
                barCount: 0,
                opacity: [],
                dataList: [],
                getCount: 0,
                ready:false,
            }
        },
        mounted(){
            // this.getData();
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
            getData: function () {
                this.$axios.all(this.ulData1.map(elem => {
                    return this.$axios
                        .get('http://localhost:8081/subject/' + elem.href.split('/').slice(-2, -1), {
                            responseType: 'json'
                        });
                }))
                    .then(response => {
                        this.dataList = response.map(elem => elem.data);
                        console.log(this.dataList);
                        this.ready = true;
                    });
            },
            secondmoving (event) {
                this.movingx = event.changedTouches[0].clientX
                this.distance = this.movingx - this.startx 
                if (this.distance > 0) {
                    //左滑
                    this.$refs.li.style.left = (-innerWidth + this.distance) + 'px'
                }
                if (this.distance < 0) {
                    //右滑
                    this.$refs.li.style.left = this.distance + 'px'
                }  
            },
        },
        computed: {
            ulData1:  function(){
                let dataList = [];
                for(const ul of ul_list){
                    dataList = dataList.concat(ul.slice(0,5))
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
