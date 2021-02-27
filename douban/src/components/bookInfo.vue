<template>
    <div>
        <SectionNav title='图书资讯' slide="slide" @renderul='renderul' :selectIndex="barCount"></SectionNav>
        <div class="infoContent" v-if="ready">
            <!-- <a :href="newData.href"> -->
            <router-link :to="'/review/'+newData.href.split('/').slice(-2)[0]">
            <div class="content">
                <span class="title">{{newData.title}}</span>
                <span class="meta">{{newData.meta}}</span>
                <p class="abstract">
                {{newData.abstract}}
                </p>
            </div>
            <div class="cover" :style="newData.style"
            ></div>
            </router-link>
        </div>
    </div>
</template>
<script>
    import SectionNav from './sectionNav.vue'
    import store from "../store.js"

    export default{
        name:"BookInfo",
        data(){
            return{
                slide : true,    
                barCount: 0,
                ready: false,
                sharedState: store.state,
            }
        },
        mounted() {
            // this.uriProcess();
            this.$axios
                .get("http://localhost:8081/indexData/bookInfo", {
                    responseType: "json",
                })
                .then((response) => {
                    this.info_list = response.data;
                    if(store.debug){
                        console.log(this.dataList);
                    }
                    this.info_list.forEach(data=>{
                        try {
                            let uri = data.style.match(/https:.*(webp|jpg)/i)[0];
                            data.style = data.style.replace(uri,"http://localhost:8080/picture/"+uri.split('/').slice(-1));
                        }
                        catch(err){
                            console.log(err);
                        }
                    });
                    this.ready = true;
                });
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
        },
        computed: {
            newData:  function(){
                // console.log(info_list);
                // info_list.forEach(data=>{
                //     try {
                //         let uri = data.style.match(/https:.*[webp|jpg]/i)[0];
                //         data.style = data.style.replace(uri,"http://127.0.0.1:8080/picture/"+uri.split('/').slice(-1));
                //     }
                //     catch(err){
                //         console.log(err);
                //     }
                // });
                // console.log(info_list);
                return this.info_list[this.barCount];
            }
        }
    }
</script>
<style scoped>
    .cover{
        width: 96px;
        height: 96px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center bottom;
        display: inline-block;
    }
    a {
        display: flex;
        text-decoration: none;
    }
    .content{
        display: inline-block;
        width: 507px;
    }
    .infoContent{
        border: solid 1px #ddd;
        border-radius: 2px;
        padding: 25px;
        box-sizing: border-box;
        margin-bottom: 4px;
        
    }
    .section{
        margin-top: 40px;
        width: 675px;
    }
    .title{
        line-height: 1.38;
        font-size: 15px;
        color: #37a;
        display: block;
    }
    .meta{
        display: block;
        color: #aaa;
        font-size: 13px;
        line-height: 1;
        margin-top: 8px;
    }
    .abstract {
        color: #494949;
        line-height: 1.5;
        margin: 8px 0 0 0;
        font-size: 13px;
    }
</style>
