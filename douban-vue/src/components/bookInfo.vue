<template>
    <div>
        <SectionNav title='图书资讯' slide='true'></SectionNav>
        <div class="infoContent">
            <a href="https://book.douban.com/review/12941655/">
            <div class="content">
                <span class="title">我完成我以完成你</span>
                <span class="meta">乐府文化</span>
                <p class="abstract">
                文：郭初阳 成为语文老师纯属偶然。
                小学的时候我拔尖的是数学，那会儿有珠算课，上学放学除了书包还要带一个算盘，用一根带子串起两头，斜跨在肩上颇为威风，仿佛一杆冲锋枪——我的算盘打得飞快，从一开始，加...
                </p>
            </div>
            <div class="cover" style="background-image: url(https://img1.doubanio.com/view/subject/l/public/s33705199.jpg)"
            ></div>
            </a>
        </div>
    </div>
</template>
<script>
    import SectionNav from './sectionNav.vue'
    export default{
        name:"BookInfo",
        data(){
            return{

            }
        },
        components:{
            SectionNav,
        }
    }
</script>
<style scoped>
    /* .cover{
    background-image: url(https://img1.doubanio.com/view/subject/l/public/s33705199.jpg)
    } */
    a {
        display: flex;
    }
    .infoContent{
        width: 100%;
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
    }
</style>
