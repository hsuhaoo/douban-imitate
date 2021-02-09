<template>
    <div class="section-content">  
        <SectionNav title="分类浏览">
        </SectionNav>
        <ul class="type-list">
            <li><router-link to="/page/unreal">虚构类图书<span></span></router-link></li>
            <li><router-link to="/page/real">非虚构类图书<span></span></router-link></li>
            <li><router-link to="/page/new">新书速递<span></span></router-link></li>
            <li><router-link to="/page/top">top250<span></span></router-link></li>
        </ul>
    </div>
</template>
<script>
    import SectionNav from './sectionNav.vue'
    // let dataList = require('../data/real')
    export default{
        name:"Cate",
        data(){
            return{
            }
        },
        components:{
            SectionNav,
        },
        

    }
    </script>
<style>
.type-list{
    display:flex;
    flex-wrap: wrap;
}
.type-list li {
    width: 45%;
    border-top: solid 1px #eee;
    border-right: solid 1px #eee;
    padding-right: 1.12rem;
    height: 2.64rem;
}
.type-list li a {
    color: #42bd56;
    text-decoration: none;
}
</style>