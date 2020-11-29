<template>
    <div>
        <SectionNav title='新书速递' slide="true">
            <span class="link-more">
                <a class="" href="/latest?icn=index-latestbook-all">更多»</a>
            </span>
        </SectionNav>
        <ul class="list5">
            <li v-for="(item,index) in items" :key="index">
                <div class="cover">
                <a
                    href="https://book.douban.com/subject/35076023/?icn=index-latestbook-subject"
                >
                    <img src="../assets/1.png" class="img" alt="信" />
                </a>
                </div>
                <div class="info">
                    <div class="title">
                        <a
                        href="https://book.douban.com/subject/35076023/?icn=index-latestbook-subject"
                        title="信"
                        >
                        信
                        </a>
                    </div>
                    <div class="author">[日] 东野圭吾</div>
                    <!-- <div class="left-triangle"></div> -->
                    <div class="moreMeta">
                        <h4 class="title">信</h4>
                        <p>
                        <span class="author">[日] 东野圭吾</span>/
                        <span class="year">2020-10-15</span>/
                        <span class="publisher">北京联合出版公司</span>
                        </p>
                        <p class="abstract">
                        “哥哥，你好吗？这是我写给你的最后一封信……从你离去之后，这个社会开始对我复仇……”
                        武岛直贵，一个与社会格格不入的青年——父母双亡后，他和哥哥相依为命。为了给直贵筹措学费，哥哥闯入民宅偷窃，却因盗窃杀人而入狱服刑。从此，兄弟俩只能用书信沟通。犯罪的分明是哥哥，无辜的直贵却因此失去了他的全部。学业、求职、恋爱、生活、梦想，他苦苦地追求，社会...
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import SectionNav from './sectionNav.vue'
    export default{
        name:"NewBook",
        data(){
            return{
                items : [...Array(10).keys()],
                infos : ['下载豆瓣客户端', '登录/注册']
            }
        },
        components:{
            SectionNav,
        }
    }
    </script>

<style scoped>
.list5 {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-column-gap: 9px;

}

.img{
    width: 100px;  
    height: auto;
}
li{
    position: relative;
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
/* .left-triangle{
    display: none;
    position: relative;
    top:30px;
    left: 100px;
    width:400px;
    height:200px;
    padding:8px;
    background-color: #FFFFFF;
    border: #cccccc solid 1px;
    border-radius: 3px;
}
.left-triangle:before{
    box-sizing: content-box;
    width: 0px;
    height: 0px;
    position: absolute;
    top: 23px;;
    left: -16px;
    padding:0;
    border-right: 8px solid #FFFFFF;
    border-top:8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left:8px solid transparent;
    display: block;
    content:'';
    z-index: 12;
}
.left-triangle:after{
    box-sizing: content-box;
    width: 0px;
    height: 0px;
    position: absolute;
    top: 22px;;
    left: -18px;
    padding:0;
    border-right: 9px solid #cccccc;
    border-top:9px solid transparent;
    border-bottom:9px solid transparent;
    border-left:9px solid transparent;
    display: block;
    content:'';
    z-index:10
}
li .cover:hover + .info .moreMeta{
    display: block;
} */

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
