<template>
  <div id="content">
    <h1>豆瓣图书标签</h1>

    <div class="grid-16-8 clearfix">
      <div class="article">
        <div class="">
          <div class="" v-for="(ritem, rindex) in dataList" :key="rindex">
              <h2 style="padding-top:10px">{{ritem.title}}</h2>
            <div class="tagRow">
                <div class="tagCol" v-for="(citem,cindex) in ritem.tag_list" :key="cindex">
                    <router-link :to="'/tag/'+citem" >{{citem}}</router-link><b>{{ritem.num_list[cindex]}}</b>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="aside">
        <h2>
          <span>标签直达</span>
          &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
        </h2>

        <form
          name="tsp_form"
          method="GET"
        >
          <input
            class="j a_search_text greyinput"
            type="text"
            size="24"
            maxlength="36"
            title="去其他标签"
            value=""
            v-model="message"
          />
          <input class="butt" type="submit" value="进入" @click="jump()"/>
        </form>

        <br /><br />
      </div>
    </div>
  </div>
</template>

<script>
let dataList = require('../data/alltag')
export default {
  name: "Alltag",
  props: {
    info: {
      type: String,
    },
  },
  data() {
    return {
      ready: false,
    //   items: Array(4).fill(0),
      picList: [],
      dataList: dataList,
      isScore: false,
      isDate: true,
    };
  },
  mounted() {
    // this.$axios
    //   .get("http://localhost:8081/page/" + this.$route.params.id, {
    //     responseType: "json",
    //   })
    //   .then((res) => {
    //     this.dataList = res.data;
    //     console.log(this.dataList);
    //     this.ready = true;
    //   });
    console.log(this.dataList);
  },
  computed: {
  },
  methods: {
    jump: function() {
      this.$router.push('/tag/'+this.message);
    }
  },
};
</script>

<style scoped>
h2 {
  font-size: 14px;
  margin: 0 0 6px;
}

#content {
  width: 1040px;
  margin: 0 auto;
}

.greyinput {
  text-align: right;
}

.article {
  width: 675px;
  margin-left: 20px;
}

li {
  border-top: 1px dashed #ddd;
  padding: 20px 0 10px;
}

.grid-16-8{
    display:flex;
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
img {
  width: 90px;
  height: auto;
}

.pic {
  display: inline-block;
  vertical-align: top;
}

.info {
  display: inline-block;
  width: 565px;
  margin-left: 15px;
}
.tagRow{
}
a {
    font-size:14px;
    font-weight: normal;
}
a:hover {
    background-color: #3377aa;
    color: white;
}
.tagCol{
    display: inline-block;
    width: 168px;
}
h2 {
    color: #111;
    font-size: 16px;
    font-weight: normal;
}
.tagCol b{
    font-weight: normal;
    color: #aaa;
}
</style>
