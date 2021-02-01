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
              <a href="https://book.douban.com/subject/35267458/">{{
                dataList.title
              }}</a>
              <span class="allstar50 main-title-rating"></span>
              <span class="main-title-hide">{{ dataList.score }}</span>
              <span content="2020-12-23" class="main-meta">{{
                dataList.date
              }}</span>
            </header>
            <div id="link-report">
              <div
                class="review-content clearfix"
                :data-author="dataList.dataAuthor"
                data-url="https://book.douban.com/review/13077015/"
                data-original="1"
              >
                <p v-html="dataList.text.slice(1).replace(/\n/g, '<br>')"></p>
              </div>
            </div>
            <div id="comments" class="comment-list">
              <div class="comments-app-wrapper">
                <div class="comment-list-wrapper">
                  <div
                    class="item comment-item"
                    data-cid="13587023"
                    data-target_id="13042091"
                    data-target_kind="1012"
                  >
                    <div class="comment-item-body">
                      <div class="comment-main">
                        <div
                          class="meta-header"
                          style="background-color: rgb(248, 248, 244);"
                        >
                          <a
                            title="Kha_Ngan"
                            >Kha_Ngan</a
                          ><time datetime="2020-12-08 22:04:38"
                            >2020-12-08 22:04:38</time
                          >
                        </div>
                        <div class="comment-content">
                          <span>我都没收到！</span>
                        </div>
                        <div class="comment-action-bar">
                          <div class="action-bar-group">
                            <a
                              rel="nofollow"
                              title="回应Kha_Ngan"
                              href="javascript:;"
                              style="display: inline;"
                              >回应</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="comment-editor">

                  <form class="form-field">
                    <div class="form-input-wrapper">
                      <div class="form-area-wrap">
                        <textarea
                          class="form-area"
                          placeholder="添加回应"
                          rows="4"
                          cols="64"
                        ></textarea>
                      </div>

                    </div>
                    <div class="form-foot">

                      <div class="form-foot-item limit-count overflow"></div>
                      <div class="form-foot-item"></div>
                      <div class="form-foot-item">
                        <button type="submit" class="comment-form-btn">
                          加上去
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="notification-bar comment-notification-bar">
                  <div class="notification-bar-wrapper">
                    <span class="notification-bar-message"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="aside">
        <div class="float-content" ref="float">
      <div class="sidebar-info-wrapper">
        <div class="subject-title">
          <a href="https://book.douban.com/subject/35267458/"
            >&gt;&nbsp;{{ dataList.title }}</a
          >
        </div>
        <div class="subject-img">
          <a :href="'../picture/' + dataList.src.split('/').slice(-1)">
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
export default {
  name: "Subject",
  data() {
    return {
      dataList: null,
      ready: false,
    };
  },
  mounted() {
    this.$axios
      .get("http://localhost:8081/review/" + this.$route.params.id, {
        responseType: "json",
      })
      .then((response) => {
        this.dataList = response.data;
        this.ready = true;
      });
    // console.log(this.dataList);
    // let scrollEvent=()=>{
    //     let position = Math.max(100, 50+window.scrollY)
    //     this.$refs.float.style.top=position+"px";
    // }
    window.addEventListener('scroll',()=>{
        let position = Math.max(200, 50+window.scrollY)
        this.$refs.float.style.top = position+"px";
    });
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

</style>
