
<template>
<div id="nav">
    <ul class ="itemWrap">
        <li><a class="
        items" :href="site" target="_blank" v-for="(item,index) in items" :key="index">{{item}}</a></li>
    </ul>
    <ul class="infoWrap">
        <li><a class="items" :href="infosite" v-for="(item,index) in infos" :key="index">{{item}}</a></li>
    </ul>
</div>
</template>

<script>
export default{
    name:"Nav",
    data(){
        return{
            items : ['豆瓣', '读书', '音乐', '同城', '小组','阅读','时间'],
            infos : ['下载豆瓣客户端', '登录/注册']
        }
    }
}
</script>
<style scoped>
ul{
    list-style:none;
    margin:0;
    padding: 0;
}
li{
    display:flex;
}
.items{
    display: block;
    color: #d5d5d5;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    padding: 0 12px;
    line-height: 28px;
}
.itemWrap{
    display:flex;
    justify-content: flex-start;
    flex: 1;
}
#nav{
    display: flex;
    background-color: #545652;
    height: 28px;
}
.infoWrap{
    display:flex;
    justify-content: flex-end;
    flex: 1;
}

.items:hover{
    color: white;
    cursor: pointer;

}
</style>

