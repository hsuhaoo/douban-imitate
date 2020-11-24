<template>
    <div>
        <SectionNav title='新书速递' slide="true">
            <span class="linkMore">
                <a class="" href="/latest?icn=index-latestbook-all">更多»</a>
            </span>
        </SectionNav>
        <div class="list5">
            <div class="li" v-for="(item,index) in items" :key="index">
                <div class="cover">
                <a
                    href="https://book.douban.com/subject/35076023/?icn=index-latestbook-subject"
                    title="信"
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
            </div>
        </div>
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
.moreMeta{
        display: none;
}
.linkMore{
        font-size: 13px;
        color: #3377aa;
        margin: 15px;
}
</style>
