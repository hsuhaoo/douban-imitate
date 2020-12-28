<template>
    <div id="content">
        <h1>豆瓣最受欢迎的书评</h1>
        <div class="grid-16-8 clearfix">
            <div class="article">
                <ul class="top-tab clearfix">
                    <li class=" selected"> <a href="javascript:;"> <span>最受欢迎的</span> </a> </li>
                    <li class=""> <a href="/review/latest?app_name=book"> <span>最新书评</span> </a> </li>
                </ul>
                <div class="review-list chart ">
                    <div data-cid="13071563" v-for="(item,index) in items" :key="index">
                        <div class="main review-item" id="13071563">
                            <a class="subject-img" href="https://book.douban.com/subject/30353862/"> <img alt="黑死病"
                                    title="黑死病" src="https://img9.doubanio.com/view/subject/m/public/s30023016.jpg"
                                    rel="v:image"> </a>
                            <header class="main-hd">
                                <a href="https://www.douban.com/people/atdelilah/" class="avator">
                                    <img width="24" height="24" src="https://img1.doubanio.com/icon/u52080104-9.jpg">
                                </a>
                                <a href="https://www.douban.com/people/atdelilah/" class="name">羽落弦</a>
                                <span class="allstar10 main-title-rating" title="很差"></span>
                                <span content="2020-12-20" class="main-meta">2020-12-20 20:28:17</span>
                            </header>
                            <div class="main-bd">
                                <h2><a href="https://book.douban.com/review/13071563/">如何精心毁掉一本历史著作</a></h2>
                                <div id="review_13071563_short" class="review-short" data-rid="13071563">
                                    <div class="short-content">
                                        首先一句话总结：毁掉这本书的并不是常见的翻译问题（相反，从译注可以看出译者很用心查资料），不是纸质或排版，而是“精心”的策划与图书设计。
                                        一开始，我是听说这本书里有大量史料图片才买的，它的宣传也都是在强调“选用了大量原始资料”“知名高校图书馆珍藏”。虽然豆瓣...
                                        &nbsp;(<a href="javascript:;" id="toggle-13071563-copy" class="unfold"
                                            title="展开">展开</a>)
                                    </div>
                                </div>

                                <div class="action">
                                    <a href="javascript:;;" class="fold hidden">收起</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="aside">
                <div class="sidebar-info-wrapper">
                    <div class="sidebar-copy">
                        <p>如果你觉得一篇评论对你有帮助，请你点击“有用”。你的投票直接决定哪些评论出现在豆瓣首页和“豆瓣最受欢迎的评论”里，以及在书、电影和音乐介绍页里评论的排序。</p>
                        <p>所有“没用”的点击都是匿名的。</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default{
        name:"review",
        data(){
            return{
                items : [...Array(20).keys()],

            }
        },
        
    }
</script>
<style>
    
</style>