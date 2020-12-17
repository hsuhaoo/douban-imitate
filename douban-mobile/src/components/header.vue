<template>
    <div class="TalionNav-primary"><a href="/home_guide" class="logo">
            <h1 style="font-size: 0px;">豆瓣</h1>
        </a>
        <form action="/search" class="search-box" method="GET"><input class="search-input" name="query" type="search"
                placeholder="搜索"></form>
        <div class="nav-btns"><a class="nav-btn-item to_pc" href="/to_pc/?url=https%3A%2F%2Fm.douban.com%2Fbook%2F"></a>
        </div>
    </div>
</template>

<script>
export default{
    name:"Header",
    data(){
        return{

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
    padding: 6px 0 6px;
    position: relative;
}

.navItems {
    margin: 0;
    padding: 5px 0;
    overflow: hidden;
    display: flex;
    height: 18px;
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
.book-cart {
    padding-left: 5px;
    margin-left: 12px;
    background-image: url(http://img3.doubanio.com/dae/accounts/resources/19870c3/book/assets/icon_myorders.png);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 15px;
    
}
.book-cart a{
    /* margin-left: 18px; */
}
</style>