<template>
    <div id="content">
        <h1>豆瓣读书 Top 250</h1>
        <div class="review-list chart ">
            <div class="article">
                <ul width="100%" v-for="(item,index) in items" :key="index">
                    <li>
                        <div class="item" >
                            <div width="100" class="cover">
                                <a class="nbg" href="https://book.douban.com/subject/1007305/"
                                    onclick="moreurl(this,{i:'0'})">
                                    <img src="https://img1.doubanio.com/view/subject/s/public/s1070959.jpg" width="90">
                                </a>
                            </div>
                            <div >
                                <div class="pl2">
                                    <a href="https://book.douban.com/subject/1007305/"
                                        onclick="&quot;moreurl(this,{i:'0'})&quot;" title="红楼梦">
                                        红楼梦
                                    </a>
                                </div>
                                <p class="pl">[清] 曹雪芹 著 / 人民文学出版社 / 1996-12 / 59.70元</p>
                                <div class="star clearfix">
                                    <span class="allstar50"></span>
                                    <span class="rating_nums">9.6</span>
                                    <span class="pl">(
                                        313178人评价
                                        )</span>
                                </div>
                                <p class="quote" style="margin: 10px 0; color: #666">
                                    <span class="inq">都云作者痴，谁解其中味？</span>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    
    </div>
</template>

<script>
    import SectionNav from './sectionNav.vue'
    export default{
        name:"review",
        data(){
            return{
                items : [...Array(20).keys()],

            }
        },
        
    }
</script>
<style scoped>
ul {
    padding: 0;
    margin: 0 ;
    border-bottom: 1px dashed #DDDDDD;
}
.item{
    margin: 15px auto;
    width: 660px;
    display: flex;
}
.cover{
    margin: 0 10px 0 0;
}
h1{
    margin: 40px auto 15px auto;
    width: 660px;
}
.pl {
    font: 12px Arial, Helvetica, sans-serif;
    line-height: 150%;
    color: #666666;
}
</style>