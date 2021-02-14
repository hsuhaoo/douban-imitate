<template>
    <div id="comments" class="comment-list">
        <div class="comments-app-wrapper">
        <div class="comment-list-wrapper">
            <div
            class="item comment-item"
            >
            <div class="comment-item-body" v-if="ready">
                <div class="comment-main" v-for="(item,index) in dataList">
                <div
                    class="meta-header"
                    style="background-color: rgb(248, 248, 244);"
                >
                    <a
                    title="item.authorid"
                    >{{item.authorid}}</a
                    ><time
                    >{{getDate(item.date)}}</time
                    >
                </div>
                <div class="comment-content">
                    <span class="text-wrapper">{{item.message}}</span>
                </div>
                <div class="comment-action-bar">
                    <div class="action-bar-group">
                    <a
                        rel="nofollow"
                        href="javascript:;"
                        style="display: inline;"
                        @click="deletecomment(index)"
                        >删除</a
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
                    v-model="message"
                ></textarea>
                </div>

            </div>
            <div class="form-foot">

                <div class="form-foot-item limit-count overflow"></div>
                <div class="form-foot-item"></div>
                <div class="form-foot-item">
                <button type="submit" class="comment-form-btn" @click="addcomment()">
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
</template>
<script>
import store from "../store.js"

export default {
  name: "Comment",
  data() {
    return {
      dataList: null,
      ready: false,
      message: "",
      sharedState: store.state,
    };
  },
  mounted() {
    this.update();
  },
  inject:['reload'],
  methods:{
    addcomment: function() {

    this.$axios
      .post("http://localhost:8081/addcomment/",{
          "id": this.$route.params.id,
          "message": this.message,
          "date": new Date().getTime(),
          "authorid": this.sharedState.id,
        })
      .then((response) => {
        this.update();
      });
    },
    deletecomment: function(item) {
        if(confirm("确定删除")){
            this.$axios
            .post("http://localhost:8081/deletecomment/",{
                "id": this.$route.params.id,
                "date": item.date,
                })
            .then((response) => {
                this.update();
            });
        }
    },
    sort:function(){
        this.dataList.sort(function(a,b){
            return a.date-b.date
        });
    },
    update: function() {
        this.$axios
        .get("http://localhost:8081/getcomment/"+this.$route.params.id,{
            responseType: "json",
        })
        .then((response) => {
            this.dataList = response.data;
            if(store.debug){
                console.log(this.dataList);
            }
            this.ready = true;
        });
    },
    dateFormat: function(fmt, date) {
        let ret;
        const opt = {
            "Y+": date.getFullYear().toString(),        // 年
            "m+": (date.getMonth() + 1).toString(),     // 月
            "d+": date.getDate().toString(),            // 日
            "H+": date.getHours().toString(),           // 时
            "M+": date.getMinutes().toString(),         // 分
            "S+": date.getSeconds().toString()          // 秒
            // 有其他格式化字符需求可以继续添加，必须转化成字符串
        };
        for (let k in opt) {
            ret = new RegExp("(" + k + ")").exec(fmt);
            if (ret) {
                fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
            };
        };
        return fmt;
    },
    getDate: function(value) {
        return this.dateFormat("YYYY-mm-dd HH:MM", new Date(value));
    }
  },
};
</script>
<style scoped>


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
/* .action-bar-group{
    visibility: hidden;
}
.comment-action-bar:hover .action-bar-group{
    visibility: visible;
} */
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

