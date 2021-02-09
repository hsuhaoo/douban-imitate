
<template>
<div id="nav">
    <ul class ="itemWrap">
        <li><a class="
        items" href="sites[index]" target="_blank" v-for="(item,index) in items" :key="index">{{item}}</a></li>
    </ul>
    <ul class="infoWrap">
        <li class="download-nav"><a class="items" href="https://www.douban.com/doubanapp/app?channel=top-nav" >下载豆瓣客户端</a>
            <div class="top-nav-doubanapp">
                <div id="top-nav-appintro" class="more-items">
                  <p class="appintro-title">豆瓣</p>
                  <p class="qrcode">扫码直接下载</p>
                  <div class="download">
                    <a href="https://www.douban.com/doubanapp/redirect?channel=top-nav&direct_dl=1&download=iOS">iPhone</a>
                    <span>·</span>
                    <a href="https://www.douban.com/doubanapp/redirect?channel=top-nav&direct_dl=1&download=Android" class="download-android">Android</a>
                  </div>
                </div>
              </div>
        </li>
        <li><router-link to="/login" class="items" v-if="sharedState.id.length===0">登录/注册</router-link></li>
        <li><a class="items" v-if="sharedState.id.length>0">{{sharedState.id}}的账号</a></li>
    </ul>
</div>
</template>

<script>
import store from "../store.js"

export default{
    name:"Nav",
    data(){
        return{
            items : ['豆瓣', '读书', '音乐', '同城', '小组','阅读','时间'],
            sites : ["https://www.douban.com",
                    "https://book.douban.com",
                    "https://movie.douban.com",
                    "https://music.douban.com",
                    "https://www.douban.com/location",
                    "https://www.douban.com/group",
                    "https://read.douban.com&#47;?dcs=top-nav&amp;dcm=douban",
                    "https://douban.fm&#47;?from_=shire_top_nav",
                    "https://time.douban.com&#47;?dt_time_source=douban-web_top_nav",
                    "https://market.douban.com&#47;?utm_campaign=douban_top_nav&amp;utm_source=douban&amp;utm_medium=pc_web"
                    ],
            sharedState: store.state,
        }
    }
}
</script>
<style scoped>
ul{
    list-style:none;
    margin:0;
    padding: 0;
}
li{
    display:flex;
}
.items{
    display: block;
    color: #d5d5d5;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    padding: 0 12px;
    line-height: 28px;
}
.itemWrap{
    display:flex;
    justify-content: flex-start;
    flex: 1;

}
#nav{
    display: flex;
    background-color: #545652;
    height: 28px;
}
.infoWrap{
    display:flex;
    justify-content: flex-end;
    flex: 1;
}

.items:hover{
    color: white;
    cursor: pointer;

}
.top-nav-doubanapp{
    display: none;
    position: absolute;
    top: 28px;
    left: -76px;
    width: 211px;
    z-index: 1;
    background: white; 
    padding: 10px 20px 30px;
}
.download-nav{
    position: relative;
}
.download-nav:hover .top-nav-doubanapp{
    display: block;
}
.download {
    text-align:center;
}
.appintro-title{
    text-align:center;
}
.top-nav-doubanapp .more-items .appintro-title {
    padding-top: 170px;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 24px;
    font-weight: 400;
    background: url(http://img3.doubanio.com/dae/accounts/resources/19870c3/shire/assets/nav_doubanapp_6.png) no-repeat center;
}
.top-nav-doubanapp .more-items .qrcode {
    padding-top: 160px;
    margin-top: 30px;
    font-size: 0;
    background: url(http://img3.doubanio.com/dae/accounts/resources/19870c3/shire/assets/nav_doubanapp_6_qrcode.png) no-repeat center;
}
</style>

