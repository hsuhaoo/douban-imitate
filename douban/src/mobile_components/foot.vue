<template>
    <div class="download-app">
            <div class="info">
                <img src="../assets/douban-app-logo.png" width="48">
                <div class="info-content">
                    <strong>豆瓣</strong>
                </div>
            </div>
                <a href="https://www.douban.com/doubanapp/card/log?category=book_home&amp;cid=&amp;action=click_download&amp;ref=https%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_book_home%26direct_dl%3D1" rel="nofollow">免费下载 iOS / Android 版客户端</a>
    </div>
</template>
<script>
    // let dataList = require('../data/real')
    export default{
        name:"Foot",
        data(){
            return{
            }
        },
    }
    </script>
<style>
.download-app {
    padding: 0 0 20px 0;
    margin-top: 50px;
    margin-bottom: 30px;
    text-align: center;
    font-size: 15px;
}
.download-app .info {
    margin: 0 auto 15px;
    overflow: hidden;
    text-align: left;
    font-size: 14px;
    display: flex;
    color: #191919;
    width: 120px;
}
.download-app .info+a {
    display: block;
}
a {
    color: #42bd56;
    text-decoration: none;
}
.download-app .info img {
  margin-right: 12px;
}
.download-app .info strong {
    font-size: 24px;
    font-weight: normal;
    line-height: 48px;
}
</style>