<template>
    <div class="block5">    
        <SectionNav title="豆瓣图书250">
            <span class="link-more">
                <a class="" href="/top250?icn=index-book250-all">更多»</a>
            </span>
        </SectionNav>
          
        <div class="content clearfix s" id="book_rec" data-dstat-areaid="58" data-dstat-mode="click,expose">
                
          <dl v-for="(item,index) in items" :key="index">
            <dt>
              <a onclick="" href="https://book.douban.com/subject/1963912/?icn=index-book250-subject">
                <img src="https://img3.doubanio.com/view/subject/s/public/s1993421.jpg" class="m_sub_img">
              </a>
            </dt>
            <dd>
              <a onclick="" href="https://book.douban.com/subject/1963912/?icn=index-book250-subject">
                正见
              </a>
              <p class="extra-info">
                
                <span class="meta-label">
                    有电子书
                  </span>
              </p>
            </dd>
          </dl>
      
        </div>
        </div>
</template>

<script>
    import SectionNav from './sectionNav.vue'
    export default{
        name:"Book250",
        data(){
            return{
                items : [...Array(9).keys()],
                infos : ['下载豆瓣客户端', '登录/注册']
            }
        },
        components:{
            SectionNav,
        }
    }
    </script>

<style scoped>
.content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 33.3%);
    grid-column-gap: 9px;

}

img{
    width: 82px;  
    height: auto;
}
dd {
  margin: 0;
}
.more-meta{
        display: none;
}
.link-more{
        font-size: 13px;
        color: #3377aa;
        margin: 15px;
}
.meta-label{
  display: none;
}
</style>