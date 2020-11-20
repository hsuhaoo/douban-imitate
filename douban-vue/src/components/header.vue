<template>
    <div id="header">
        <div class="navWrap">
            <div class="navPrimary">
                <div class="navLogo">
                    <a href="https:&#47;&#47;book.douban.com">豆瓣读书</a>
                </div>
                <div class="navSearch">
                    <form action="" method="get" accept-charset="utf-8">
                        <div class="inp"><input placeholder="书名、作者、ISBN" value=""></div>
                        <div class="inpBtn"></div>
                    </form>
                </div>
            </div>
        </div>
        <div class="navSecondary">
            <ul class="navItems">
                <li><a href="https://book.douban.com/cart/">购书单</a></li>
                <li><a href="https://read.douban.com/ebooks/?dcs=book-nav&dcm=douban" target="_blank"
                    >电子图书</a>
                </li>
                <li    ><a href="https://market.douban.com/book?utm_campaign=book_nav_freyr&utm_source=douban&utm_medium=pc_web"
                    >豆瓣书店</a>
                </li>
                <li    ><a href="https://book.douban.com/annual/2019?source=navigation"
                        target="_blank"
                    >2019年度榜单</a>
                </li>
                <li    ><a href="https://m.douban.com/standbyme/annual2019?source=navigation"
                        target="_blank"
                    >2019书影音报告</a>
                </li>
                <li          class=" book-cart"
                ><a href="https://market.douban.com/cart/?biz_type=book&utm_campaign=book_nav_cart&utm_source=douban&utm_medium=pc_web"
                        target="_blank"
                    >购物车</a>
                </li>
            </ul>
        </div>
        <a href="https://book.douban.com/annual/2019?source=book_navigation" class="bookannual"></a>
    </div>
</template>

<script>
export default{
    name:"Header",
    data(){
        return{
            // items : ['豆瓣', '读书', '音乐', '同城', '小组','阅读','时间'],
            // infos : ['下载豆瓣客户端', '登录/注册']
        }
    }
}
</script>
<style scoped>
ul{
    list-style:none;
    margin:0;
    padding: 0;
    display: flex;
}
/* li{
    display:flex;
} */
.navLogo {
    height: 56px;
    width: 145px;
    margin: 0 13px 0 0; 
    background: url(../assets/lg_book_a11_1.png) no-repeat 0 12px;
}
.navLogo a {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    line-height: 100em; 
}
#header {
    width: 100%;
    min-width: 1040px;
    margin-bottom: 40px;
    background: #f6f6f1;
    margin: 0 auto;
    position: relative;
} 
.navWrap {
    border-bottom: 1px solid #e5ebe4;
}
.navPrimary {
    width: 1040px;
    margin: 0 auto;
    height: 59px;
    padding: 10px 0 5px;
    display: flex;
}
.navSearch form{
    padding: 10px 0px;
    display: flex;

}
.inp input{
    width: 470px;
    height: 30px;
    outline: none;
    border: 0;
    /* border-radius: 5px; */
    box-shadow: 0px 1px 0px #DCDCDC;
    padding: 0px 0px 0px 10px;
}

.inpBtn{
    width: 37px;
    height: 34px;
    background: url(../assets/nav_bk_bg.png) no-repeat 0 -40px; 
    border-radius: 1px;
    cursor: pointer;
}
.navSecondary {
    width: 1040px;
    margin: 0 auto;
    padding: 10px 0 5px;
    position: relative;
}

.navItems {
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    height: 28px;
}
.navItems a {
    text-decoration: none;
    display: block;
    color: #614e3c;
    text-align: center;
    text-decoration: none;
    margin: 0 12px;
    font-size: 14px;
    cursor: pointer;
}
.navItems a:hover {
    background-color: #614e3c;
    color: white;
}
.bookannual {
    position: absolute;
    width: 186px;
    height: 96px;
    top: 10px;
    left: 50%;
    margin-left: 320px;
    background: url(../assets/annual_2019.png) center/contain no-repeat; 
}
</style>