<template>
    <div class="section ebook-area">
        <SectionNav title="电子图书">
            <span class="link-more">
                <a class="" href="https://read.douban.com/ebooks?dcs=book-intro&amp;dcm=douban" target="_blank">查看全部»</a>
            </span>
        </SectionNav>
    
        <div class="sub-section ">
            <h3>
                热门电子图书
                <span class="more-info">
                    <a href="https://read.douban.com/kind/1/?sort=hot&amp;dcs=book-hot&amp;dcm=douban&amp;dct=read-more"
                        target="_blank">
                        更多»
                    </a>
                </span>
            </h3>
            <ul class="list-col5">
                <li class="" v-for="(item,index) in items" :key="index">
                    <div class="cover">
                        <a href="https://read.douban.com/ebook/163314997/?dcs=book-hot&amp;dcm=douban&amp;dct=read-subject"
                            target="_blank" title="人类善恶小史">
                            <img src="https://img1.doubanio.com/view/ark_article_cover/retina/public/163314997.jpg?v=1604977761"
                                alt="人类善恶小史" width="106px" height="158px">
                        </a>
                    </div>
                    <div class="info">
                        <div class="title">
                            <a href="https://read.douban.com/ebook/163314997/?dcs=book-hot&amp;dcm=douban&amp;dct=read-subject"
                                title="人类善恶小史" target="_blank">
                                人类善恶小史
                            </a>
                        </div>
                        <div class="price">
                            17.99元
                        </div>
                        <div class="more-meta">
                            <h4 class="title">
                                人类善恶小史
                            </h4>
                            <p>
                                <span class="author">
                                    Tsevan Rabtan / Alejandra Acosta
                                </span> / <span class="year">
                                    2020-10
                                </span> / <span class="publisher">
                                    浦睿文化·湖南⼈民出版社
                                </span> / <span class="price">

                                    17.99元

                                </span>
                            </p>
                            <p class="abstract">
                                人类史上既有侵略、屠杀、殖民在内的种种罪恶行径，又有闪耀着救援、互助、传承等光辉的动人故事。《人类善恶小史》以30余位大人物在关键时刻的抉择切入，检视人类的善恶抉择以及导致的结果。
                                1940年，多国外交官顶着纳粹德国的巨大压力，为犹太人提供进入本国的签证，挽救了万千犹太人的性命。1862年，因解放黑奴名垂千史的林肯，在一封信中写道：“如果我能拯救联...
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import SectionNav from './sectionNav.vue'
    export default{
        name:"EBook",
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
.list-col5 {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-column-gap: 9px;

}

.img{
    width: 100px;  
    height: auto;
}
.more-meta{
        display: none;
}
.link-more{
        font-size: 13px;
        color: #3377aa;
        margin: 15px;
}
</style>
