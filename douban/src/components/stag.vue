<template>
  <div id="content">
    <h1>豆瓣图书标签: 小说</h1>
    <div class="article">
      <div id="subject_list">
        <div class="rr greyinput">
          <a
            href="javascript:;"
            :class="{ selected: isDate }"
            @click="sortYear()"
            >按出版日期排序</a
          >
          &nbsp;/&nbsp;
          <a
            href="javascript:;"
            :class="{ selected: isScore }"
            @click="sortScore()"
            >按评价排序</a
          >
        </div>
        <ul class="subject-list" v-if="ready">
          <li
            class="subject-item"
            v-for="(item, index) in dataList"
            :key="index"
          >
            <div class="pic">
              <router-link
                class="nbg"
                :to="'/subject/' + item.href.split('/').slice(-2)[0]"
              >
                <!-- <img class="" :src="dataList[index].src"
                                   > -->
                <img
                  :src="
                    '../picture/' + dataList[index].src.split('/').slice(-1)
                  "
                />
              </router-link>
            </div>
            <div class="info">
              <h2 class="">
                <router-link
                  :to="'/subject/' + item.href.split('/').slice(-2)[0]"
                  :title="dataList[index].title"
                >
                  {{ dataList[index].title }}
                </router-link>
              </h2>
              <div class="pub">
                {{ dataList[index].pub }}
              </div>
              <div class="star clearfix">
                <span class="allstar45"></span>
                <span class="rating_nums">{{ dataList[index].rating }}</span>
                <Star :score="dataList[index].rating / 2" />
                <span class="pl">
                  {{ dataList[index].pl }}
                </span>
              </div>

              <p>{{ dataList[index].abstract }}</p>
              <div class="ft">
                <div class="collect-info"></div>
                <div class="cart-actions">
                  <span
                    class="market-info"
                    v-if="typeof dataList[index].buylinks == 'undefined'"
                  >
                    <a :href="dataList[index].buyhref" target="_blank"
                      >在豆瓣购买</a
                    >
                  </span>
                </div>
                <span
                  class="buy-info"
                  v-if="typeof dataList[index].buylinks != 'undefined'
                  "
                >
                  <a :href="dataList[index].buylinks">
                    {{ dataList[index].price }}
                  </a>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="aside"></div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import Star from "./star.vue";
import store from "../store.js";

export default {
    name: "Stag",
    data() {
        return {
        ready: false,
        picList: [],
        isScore: false,
        isDate: true,
        sharedState: store.state,
        };
    },
    components: {
        Star,
    },
    mounted() {
        let dataList = require("../data/tag_json/" +
        this.$route.params.id +
        ".json");
        this.dataList = dataList;
        if(store.debug){
            console.log(this.dataList);
        }
        this.ready = true;
    },
    methods: {
        sortYear: function() {
        this.dataList.sort(function(a, b) {
            return (
            Date.parse(a.pub.split("/").slice(2, 3)[0]) -
            Date.parse(b.pub.split("/").slice(2, 3)[0])
            );
        });
        console.log(this.dataList);
        this.isScore = false;
        this.isDate = true;
        },
        sortScore: function() {
        this.dataList.sort(function(a, b) {
            return a.rating - b.rating;
        });
        console.log(this.dataList);
        this.isScore = true;
        this.isDate = false;
        },
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

#subject_list {
  width: 675px;
  margin-left: 20px;
}
li {
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
.buy-info a {
  color: #bbb;
}
.market-info a:hover,
.buy-info a:hover {
  background-color: #37a;
  color: white;
}
.selected,
.selected a {
  color: #111;
  cursor: default;
}
</style>
