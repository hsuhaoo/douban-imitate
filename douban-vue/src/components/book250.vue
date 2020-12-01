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
              <a onclick="" :href="dataList[index].href">
                <img :src="dataList[index].src" class="m_sub_img">
              </a>
            </dt>
            <dd>
              <a onclick="" :href="dataList[index].href">
                {{dataList[index].title}}
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
    let dataList = require('../data/book250')
    export default{
        name:"Book250",
        data(){
            return{
                items : [...Array(9).keys()],
                dataList: dataList,
            }
        },
        components:{
            SectionNav,
        }
    }
    </script>

<style scoped>
.content {
    width: 330px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-wrap: wrap;

}

img{
    width: 82px;  
    height: auto;
}
dd {
  margin: 0;
}
dd{
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
dd a:hover{
    background-color: #37a;
    color: white;
}

.link-more{
        font-size: 13px;
        color: #3377aa;
        margin: 15px;
}
.meta-label{
    color: white;
    background: #a1a1a1;
}

</style>