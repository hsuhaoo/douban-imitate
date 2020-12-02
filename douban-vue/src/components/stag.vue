<template>
    <div id="content">
        <h1>豆瓣图书标签: 小说</h1>
        <div class="article">
            <div id="subject_list">
                <div class="rr greyinput">
                    综合排序
                    &nbsp;/&nbsp;
                    <a href="/tag/%E5%B0%8F%E8%AF%B4?type=R">按出版日期排序</a>
                    &nbsp;/&nbsp;
                    <a href="/tag/%E5%B0%8F%E8%AF%B4?type=S">按评价排序</a>
                </div>
                <ul class="subject-list">
                    <li class="subject-item" v-for="(item,index) in items" :key="index">
                        <div class="pic">
                            <a class="nbg" href="https://book.douban.com/subject/4913064/"
                                onclick="moreurl(this,{i:'0',query:'',subject_id:'4913064',from:'book_subject_search'})">
                                <img class="" src="https://img3.doubanio.com/view/subject/s/public/s29053580.jpg"
                                    width="90">
                            </a>
                        </div>
                        <div class="info">
                            <h2 class="">
                                <a href="https://book.douban.com/subject/4913064/" title="活着"
                                    onclick="moreurl(this,{i:'0',query:'',subject_id:'4913064',from:'book_subject_search'})">
                                    活着
                                </a>
                            </h2>
                            <div class="pub">
                                余华 / 作家出版社 / 2012-8-1 / 20.00元
                            </div>
                            <div class="star clearfix">
                                <span class="allstar45"></span>
                                <span class="rating_nums">9.4</span>
                                <span class="pl">
                                    (540457人评价)
                                </span>
                            </div>

                            <p>《活着(新版)》讲述了农村人福贵悲惨的人生遭遇。福贵本是个阔少爷，可他嗜赌如命，终于赌光了家业，一贫如洗。他的父亲被他活活气死，母亲则在穷困中患了重病，福贵...
                            </p>
                            <div class="ft">
                                <div class="collect-info">
                                </div>
                                <div class="cart-actions">
                                    <span class="market-info">
                                        <a href="https://book.douban.com/subject/4913064/?channel=subject_list&amp;platform=web"
                                            target="_blank">在豆瓣购买</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="aside">
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:"Stag",
        data(){
            return{
                items : [...Array(20).keys()],
            }
        },
    }
    </script>

<style scoped>
h2{
    
    font-size: 14px;
    margin:0 0 6px;
}
#content {
      width: 1040px;
      margin: 0 auto;
  }
.greyinput{
    text-align:right;
}

#subject_list{
    width: 675px;
    margin-left: 20px;
}
li{
    border-top: 1px dashed #ddd;
    padding: 20px 0 10px;
}
.subject-item .pub {
    margin: 6px 0 8px;
}
.subject-item .info {
    color: #666;
}
/* .aside{
    flex:1;
}  */
.pic{
    display: inline-block;
    vertical-align:top;
}
.info{
    display: inline-block;
    width: 565px;
    margin-left: 15px;
    /* vertical-align:top; */
}

</style>