<template>
    <div id="wrapper">
        <div id="content">
            <h1>最受关注图书榜</h1>
            <div class="grid-16-8 clearfix">
                <div class="article">
                    <div class="clear"></div>
                    <div class="xbar">
                        <div>
                            <span class="now"><span>虚构类作品榜</span></span>
                            <a href="?subcat=I">非虚构类作品榜</a>
                        </div>
                    </div>
                    <div class="clear"></div>

                    <ul class="chart-dashed-list">

                        <li class="media clearfix" v-for="(item,index) in items" :key="index">
                            <div class="media__img">
                                <strong class="fleft green-num-box">1</strong>
                                <a href="https://book.douban.com/subject/35166649/"><img class="subject-cover"
                                        align="left"
                                        src="https://img9.doubanio.com/view/subject/s/public/s33734626.jpg"></a>
                            </div>
                            <div class="media__body">
                                <h2 class="clearfix">
                                    <a class="fleft" href="https://book.douban.com/subject/35166649/">记忆记忆</a>
                                </h2>
                                <p class="subject-abstract color-gray">
                                    [俄] 玛丽亚·斯捷潘诺娃 / 2020-11 / 中信出版集团 / 78.00 / 平装
                                </p>
                                <p class="clearfix w250">
                                    <span class="allstar45 star-img fleft"></span>
                                    <span class="font-small color-red fleft">8.9</span>
                                    <span class="fleft ml8 color-gray">(706人评价)</span>
                                </p>
                                <div class="clearfix w250 color-gray fleft">
                                    <span class="buy-info">
                                        <a href="https://book.douban.com/subject/35166649/buylinks">
                                            纸质版 55.10元
                                        </a>
                                    </span>
                                    <span class="cart-info">

                                        <span class="add2cartWidget ">
                                            <a class="j  add2cart a_show_login"
                                                href="https://www.douban.com/accounts/passport/login?source=book"
                                                rel="nofollow">
                                                <span>+ 加入购书单</span></a>
                                        </span>
                                    </span>
                                </div>
                                <div class="ll">
                                    <div class="ebook-link">
                                        <a target="_blank"
                                            href="https://read.douban.com/ebook/164727172/?dcs=shire-book-chart&amp;dcm=douban&amp;dct=35166649">去看电子版</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="aside">
                    <h2>
                        <span>新书速递</span>
                        &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
                        <span class="pl">&nbsp;(
                            <a href="/latest">全部</a>
                            ) </span>

                    </h2>
                    <ul class="entry-list-col3 clearfix">
                        <li v-for="(item,index) in items" :key="index">
                            <p>
                                <a href="https://book.douban.com/subject/35251853/"><img width="67px"
                                        src="https://img3.doubanio.com/view/subject/s/public/s33759070.jpg"></a>
                            </p>
                            <h2>
                                <a href="https://book.douban.com/subject/35251853/">梦之囚徒：降维</a>
                            </h2>
                        </li>
                    </ul>
                    <h2>
                        <span>豆瓣图书250</span>
                        <span class="pl">(随机显示)</span>
                        &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
                        <span class="pl">&nbsp;(
                            <a href="/top250">全部</a>
                            ) </span>

                    </h2>
                    <ul class="entry-list-col3 clearfix">
                        <li v-for="(item,index) in items" :key="index">
                            <p>
                                <a href="https://book.douban.com/subject/20424526/"><img width="67px"
                                        src="https://img1.doubanio.com/view/subject/s/public/s24516687.jpg"></a>
                            </p>
                            <h2>
                                <a href="https://book.douban.com/subject/20424526/">邓小平时代</a>
                            </h2>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"LatestBook",
        data(){
            return{
                items : [...Array(20).keys()],
                slide : true, 
                barCount: 0,
                opacity: [],
            }
        },
        
    }
</script>