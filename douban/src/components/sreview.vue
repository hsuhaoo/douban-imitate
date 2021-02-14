<template>
  <div id="content" v-if="ready">
    <div class="grid-16-8">
      <div class="article">
        <h1>
          <span property="v:summary">{{ dataList.dataTitle }}</span>
        </h1>
        <div>
          <div class="main">
            <header class="main-hd">
              <a>
                <span>{{ dataList.dataAuthor }}</span>
              </a>
              评论
              <router-link :to="'/subject/'+dataList.href.split('/').slice(-2)[0]">{{
                dataList.title
              }}</router-link>
              <span class="allstar50 main-title-rating"></span>
              <span class="main-title-hide">{{ dataList.score }}</span>
              <span class="main-meta">{{
                dataList.date
              }}</span>
            </header>
            <div id="link-report">
              <div
                class="review-content"
              >
                <p class="text-wrapper" >{{dataList.text.slice(1)}}</p>
              </div>
            </div>
          </div>
        </div>
        <Comment/>
      </div>
    </div>
    <div class="aside">
        <div class="float-content" ref="float">
      <div class="sidebar-info-wrapper">
        <div class="subject-title">
          <router-link :to="'/subject/'+dataList.href.split('/').slice(-2)[0]"
            >&gt;&nbsp;{{ dataList.title }}</router-link
          >
        </div>
        <div class="subject-img">
          <a>
            <img
              :alt="dataList.title"
              :title="dataList.title"
              :src="'../picture/' + dataList.src.split('/').slice(-1)"
              rel="v:image"
            />
          </a>
        </div>
        <div class="subject-info book-info">
          <ul class="info-list">
            <li
              class="info-item"
              v-for="(item, index) in dataList.info"
              :key="index"
            >
              <span class="info-item-key">{{ dataList.key[index] }}</span>
              <span class="info-item-val">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import Comment from './comment.vue'
import store from "../store.js"

export default {
  name: "Subject",
  data() {
    return {
      dataList: null,
      ready: false,
      sharedState: store.state,
    };
  },
  mounted() {
    this.$axios
      .get("http://localhost:8081/review/" + this.$route.params.id, {
        responseType: "json",
      })
      .then((response) => {
        this.dataList = response.data[0];
        if(store.debug){
            console.log(this.dataList);
        }
        this.ready = true;
        window.addEventListener('scroll', this.scroll);
      });
  },
  destroyed(){
    window.removeEventListener('scroll', this.scroll);
  },
  methods:{
    scroll: function() {
      let position = Math.max(200, 50+window.scrollY)
      this.$refs.float.style.top = position+"px";
    }
  },
  components:{
      Comment,
    },
};
</script>
<style scoped>
h1 {
  font-size: 26px;
  word-wrap: break-word;
  display: block;
  font-size: 25px;
  font-weight: bold;
  color: #494949;
  margin: 0;
  padding: 0 0 15px 0;
  line-height: 1.1;
}
#content {
  width: 1040px;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
}
.aside {
  width: 300px;
}
.info-list {
  width: 300px;
}
.info-item-key {
  color: #999;
  padding-right: 5px;
}
.main .main-hd,
.main .main-title-tip {
  margin-bottom: 20px;
  line-height: 1.4;
  font-size: 13px;
  color: #999;
  overflow: hidden;
}
.main .main-meta {
  margin: 0 0 0 5px;
  color: #999;
}
.review-content p {
  margin: 0;
}
.sidebar-info-wrapper .subject-img img {
  max-height: 200px;
  max-width: 100px;
}
.form-area {
    display: block;
    width: 100%;
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 10px 8px;
    outline: none;
    font-size: 13px;
}
.comment-form-btn {
    height: 30px;
    line-height: 28px;
    padding: 0;
    width: 66px;
    border-radius: 3px;
    border: 1px solid #c0c0c0;
    outline: none;
}
.comment-form-btn:hover{
    cursor: pointer;
}
.comment-editor .form-foot {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}
.form-input-wrapper {
    position: relative;
    border: 1px solid #D9D9D9;
    border-radius: 3px;
}
.comment-action-bar {
    color: #bbb;
    font-size: 13px;
    text-align: right;
    min-height: 21px;
}

.action-bar-group a:link, .dev .action-bar-group a:link {
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
}
.action-bar-group{
    visibility: hidden;
}
.comment-action-bar:hover .action-bar-group{
    visibility: visible;
}
.float-content{
    /* width:100px;
	height:100px; */
    position:absolute;
}
.article {
    width: 675px;
}
.text-wrapper {
  white-space: pre-wrap;
}
</style>
