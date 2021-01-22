<template>
    <div>
        <SectionNav
            title="新书速递"
            :slide="slide"
            @renderul="renderul"
            :selectIndex="barCount"
        >
            <span class="link-more">
                <router-link class="" to="/page/new">更多»</router-link>
            </span>
        </SectionNav>
        <!-- <ul class="list5" ref="ul1" v-if="ready">
            <li v-for="(item, index) in ulData1" :key="index" ref="li">
                <div class="cover ">
                    <router-link
                        :to="
                            '/subject/' +
                                ulData1[index].href.split('/').slice(-2, -1)
                        "
                    >
                        <img
                            :src="
                                '../../picture/' +
                                    ulData1[index].src.split('/').slice(-1)
                            "
                            :alt="dataList[index].title"
                            @mouseenter="hover"
                            @mouseleave="hoverend"
                        />
                    </router-link>
                </div>
                <div class="info">
                    <div class="title">
                        <router-link
                            :to="
                                '/subject/' +
                                    ulData1[index].href.split('/').slice(-2, -1)
                            "
                            :title="ulData1[index].title"
                        >
                            {{ dataList[index].title }}
                        </router-link>
                    </div>
                    <div class="author">{{ dataList[index]["作者"] }}</div>
                    <div class="moreMeta">
                        <h4 class="title">{{ dataList[index].title }}</h4>
                        <p>
                            <span class="author">{{
                                dataList[index]["作者"]
                            }}</span
                            >/
                            <span class="year">{{
                                dataList[index]["出版年"]
                            }}</span
                            >/
                            <span class="publisher">{{
                                dataList[index]["出版社"]
                            }}</span>
                        </p>
                        <p class="abstract">
                            {{ dataList[index].introSummary }}
                        </p>
                    </div>
                </div>
            </li>
        </ul> -->
        <ul
            class="list5"
            ref="ul"
            v-for="(ul, ulindex) in ulData"
            :key="ulindex"
            v-if="ready"
        >
            <li v-for="(item, index) in ul" :key="index" ref="li">
                <div class="cover ">
                    <router-link
                        :to="'/subject/' + item.href.split('/').slice(-2, -1)"
                    >
                        <img
                            :src="
                                '../../picture/' + item.src.split('/').slice(-1)
                            "
                            :alt="item.title"
                            @mouseenter="hover"
                            @mouseleave="hoverend"
                        />
                    </router-link>
                </div>
                <div class="info">
                    <div class="title">
                        <router-link
                            :to="
                                '/subject/' + item.href.split('/').slice(-2, -1)
                            "
                            :title="item.title"
                        >
                            {{ item.title }}
                        </router-link>
                    </div>
                    <div class="author">{{ item.author }}</div>
                    <div class="moreMeta">
                        <h4 class="title">{{ item.title }}</h4>
                        <p>
                            <span class="author">{{ item.author }}</span
                            >/ <span class="year">{{ item.year }}</span
                            >/
                            <span class="publisher">{{ item.publisher }}</span>
                        </p>
                        <p class="abstract">
                            {{ item.abstract }}
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import SectionNav from "./sectionNav.vue";
let ul_list = require("../data/newBook");
export default {
    name: "NewBook",
    data() {
        return {
            // items: [...Array(20).keys()],
            slide: true,
            barCount: 0,
            opacity: [],
            dataList: [],
            getCount: 0,
            ready: false,
        };
    },
    mounted() {
        this.getData();
    },
    components: {
        SectionNav,
    },
    methods: {
        renderul: function(val) {
            if (val === "prev") {
                if (this.barCount > 0) {
                    this.barCount -= 1;
                } else {
                    this.barCount = 3;
                }
            } else {
                if (this.barCount < 3) {
                    this.barCount += 1;
                } else {
                    this.barCount = 0;
                }
            }
            this.$refs.li.forEach((list) => {
                list.style.opacity = "1";
            });
            this.animate(this.$refs.li);
            for(let i=0;i<=1;i++)
                this.$refs.ul[i].style.overflow = "hidden";
            // this.$refs.ul2.style.overflow = "hidden";
        },
        animate: function(li) {
            var offset = 660;
            var time = 300;
            var inteval = 10;
            var speed = offset / (time / inteval);
            var newLeft = -this.slideIndex * 660;
            // let range = (start, end) => Array(end - start).fill(0).map((v, i) => i + start);
            // let display = range(this.barCount*5,this.barCount*5+5).concat(range(this.barCount*5+20,this.barCount*5+25));
            let currentLeft = -this.slideIndex * 660 + 660;
            let go = () => {
                if (speed > 0 && currentLeft > newLeft) {
                    li.forEach((list) => {
                        list.style.left = currentLeft - speed + "px";
                    });
                    currentLeft = currentLeft - speed;
                    setTimeout(go, inteval);
                }
            };
            go();
        },
        hover: function() {
            let range = (start, end) =>
                Array(end - start)
                    .fill(0)
                    .map((v, i) => i + start);
            let display = range(
                this.barCount * 5,
                this.barCount * 5 + 5
            ).concat(range(this.barCount * 5 + 25, this.barCount * 5 + 30));
            this.$refs.li.forEach((list, index) => {
                if (!display.includes(index)) {
                    list.style.opacity = "0";
                } else {
                    list.style.opacity = "1";
                }
            });
            for(let i=0;i<=1;i++)
                this.$refs.ul[i].style.overflow = "visible";
            // this.$refs.ul2.style.overflow = "visible";
        },
        hoverend: function() {
            for(let i=0;i<=1;i++)
                this.$refs.ul[i].style.overflow = "hidden";
            // this.$refs.ul2.style.overflow = "hidden";
        },
        getData: function() {
            // this.$axios.all(this.ulData1.map(elem => {
            //     return this.$axios
            //         .get('http://localhost:8081/subject/' + elem.href.split('/').slice(-2, -1), {
            //             responseType: 'json'
            //         });
            // }))
            //     .then(response => {
            //         this.dataList = response.map(elem => elem.data);
            //         // console.log(this.dataList);
            //         this.ready = true;
            //     });
            this.$axios
                .get("http://localhost:8081/indexData/new", {
                    responseType: "json",
                })
                .then((response) => {
                    this.dataList = response.data;
                    // console.log(this.dataList);
                    this.ready = true;
                });
        },
    },
    computed: {
        ulData1: function() {
            let dataList = [];
            for (const ul of ul_list) {
                dataList = dataList.concat(ul.slice(0, 5));
            }
            let extra = dataList.slice(0, 5);
            for (const elem of extra) {
                dataList.push(elem);
            }
            return dataList;
        },
        ulData2: function() {
            let dataList = [];
            for (const ul of ul_list) {
                dataList = dataList.concat(ul.slice(5, 10));
            }
            // dataList.push(dataList.slice(0,5));
            // console.log(dataList);
            let extra = dataList.slice(0, 5);
            for (const elem of extra) {
                dataList.push(elem);
            }
            return dataList;
        },
        ulData: function() {
            let dataList = [];
            dataList[0] = this.dataList.slice(0, 20);
            dataList[1] = this.dataList.slice(20, 40);
            for (const data of dataList) {
                let extra = data.slice(0, 5);
                for (const elem of extra) {
                    data.push(elem);
                }
            }
            return dataList;
        },
        slideIndex: function() {
            if (this.barCount === 0) {
                return 4;
            }
            return this.barCount;
        },
    },
};
</script>

<style scoped>
.list5 {
    width: 660px;
    display: flex;
    align-items: flex-end;
    /* flex-wrap: wrap; */
    height: 225px;
    overflow: hidden;
}

img {
    width: 100px;
    height: auto;
}

li {
    position: relative;
    margin: 0 40px 15px 0;
    width: 100px;
    /* left: -660px; */
    /* height: 200px; */
}
li:nth-child(5n) {
    margin: 0 0 15px 0;
    padding: 0;
}
li:nth-child(n + 6) {
    opacity: 0;
}
.info > .author,
.info > .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.moreMeta {
    display: none;
    position: absolute;
    top: -60px;
    left: 100px;
    right: 0;
    z-index: 1;
    background: #f9f9f7;
    width: 300px;
    color: #666;
    border: #acacac solid 1px;
    padding: 15px;
}
.moreMeta .title {
    font-size: 14px;
    margin-bottom: 6px;
}

.moreMeta:before {
    box-sizing: content-box;
    width: 0px;
    height: 0px;
    position: absolute;
    top: 83px;
    left: -16px;
    padding: 0;
    border-right: 8px solid #f9f9f7;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid transparent;
    display: block;
    content: "";
    z-index: 12;
}
.moreMeta:after {
    box-sizing: content-box;
    width: 0px;
    height: 0px;
    position: absolute;
    top: 82px;
    left: -18px;
    padding: 0;
    border-right: 9px solid #acacac;
    border-top: 9px solid transparent;
    border-bottom: 9px solid transparent;
    border-left: 9px solid transparent;
    display: block;
    content: "";
    z-index: 10;
}
li .cover:hover + .info .moreMeta {
    display: block;
}

h4 {
    margin: 0;
}
.abstract {
    margin: 0;
}
.title a:hover {
    background-color: #37a;
    color: white;
}
</style>
