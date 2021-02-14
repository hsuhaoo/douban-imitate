<template>
    <div id="content">
        <h1>新书速递</h1>
        <div class="grid-12-12 clearfix">
            <div class="article">
                <ul class="cover-col-4 clearfix">
                    <li v-for="(item,index) in items" :key="index">
                        <a class="cover" href="https://book.douban.com/subject/35251853/">
                            <img src="https://img3.doubanio.com/view/subject/s/public/s33759070.jpg">
                        </a>
                        <div class="detail-frame">
                            <h2>
                                <a href="https://book.douban.com/subject/35251853/">梦之囚徒：降维</a>
                            </h2>
                            <p class="rating">
                                <span class="allstar45"></span>
                                <span class="font-small  color-lightgray">
                                    9.3
                                </span>
                            </p>
                            <p class="color-gray">
                                [法] 马克-安托万·马修 / 后浪 | 上海文化出版社 / 2020-12
                            </p>
                            <p class="detail">
                                阿克法克是幽默部的一名普通职员。一天，他在自己的梦中又做了一个梦，在那里他弄丢了透视系统中的一个消失点，这导致真实世界从三维降到了二维……
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="aside">
                <ul class="cover-col-4 pl20 clearfix">
                    <li v-for="(item,index) in items" :key="index">
                        <a class="cover" href="https://book.douban.com/subject/35252039/">
                            <img src="https://img2.doubanio.com/view/subject/s/public/s33774903.jpg">
                        </a>
                        <div class="detail-frame">
                            <h2>
                                <a href="https://book.douban.com/subject/35252039/">阿拉·古勒的伊斯坦布尔</a>
                            </h2>
                            <p class="rating">
                                <span class="allstar50"></span>
                                <span class="font-small color-lightgray">
                                    9.5
                                </span>
                            </p>
                            <p class="color-gray">
                                [土耳其] 阿拉·古勒 摄影 [土耳其]奥尔罕·帕慕克 序 / 世纪文景|上海人民出版社 / 2020-11-30
                            </p>
                            <p>
                                本书包含153张照片，记录了1940年代到1980年代的伊斯坦布尔。透过“伊斯坦布尔之眼”阿拉•古勒精确的镜头，这个城市的忧郁之美在传统和现代之间震荡。
                            </p>
                        </div>
                    </li>
                </ul>
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