<template>
    <div class="nav">
        <h2 class="h">
            <span>{{title}}</span>
            <slot></slot>
        </h2>
        <div class="slideControls" v-if="slide">
            <div class="slidedots" >
            <li :class="selectIndex===0?'select-dot':'unselect-dot'">
                <a dataIndex="1" href="#"  ></a>
            </li>
            <li :class="selectIndex===1?'select-dot':'unselect-dot'">
                <a dataIndex="2" href="#" ></a>
            </li>
            <li :class="selectIndex===2?'select-dot':'unselect-dot'">
                <a dataIndex="3" href="#"></a>
            </li>
            <li :class="selectIndex===3?'select-dot':'unselect-dot'">
                <a dataIndex="4" href="#" ></a>
            </li>
            </div>
            <div class="slideBtns">
            <a class="prev" @click="$emit('renderul', 'prev')">
                &#8249;
            </a>
            <a class="prev" @click="$emit('renderul', 'next')">
                &#8250;
            </a>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"SectionNav",
        data(){
            return{
            }
        },
        props:{
            title:{
                type: String,
            },
            slide:{
                type: Boolean,
                default: false,
            },
            selectIndex:{
                type: Number,
                default: 0,
            },
        }
    }
</script>

<style scoped>
    .h{
        margin: 0;
        line-height: 150%;
        flex:1;
        font-size: 18px;
    }
    .link-more{
        font-size: 13px;
        color: #3377aa;
        margin-left: 15px;
    }
    .link-more a{
        color: #3377aa;
    }
    .link-more a:hover{
        background-color: #37a;
        color: white;
    }
    .prev{
        color: #fff;
        width: 18px;
        height: 18px;
        display: inline-block;
        *display: inline;
        zoom: 1;
        font: 100 16px Arial;
        font-weight: 100;
        line-height: normal;
        text-align: center;
        line-height: 16px;
        margin-left: 4px;
        outline: none;
        border-radius: 9px;
        background: #9b9a8e;
        cursor: pointer;
    }
    a.prev:hover {
        background-color: #afaea5;
    }
    .slideControls{
        flex:1;
        justify-content: flex-end;
        display: flex;
        align-items:center;
        line-height: 150%;
    }
    .slideBtns{
        display:  inline-block;
    }
    .slideBtns a{
        text-decoration: none;
    }
    .slidedots{
        list-style: none;
        margin: 0;
        display:  inline-block;
    }
    .slidedots li{
        display: inline-block;
        margin: 0;
    }
    .slidedots a{
        width: 5px;
        height: 5px;
        display: inline-block;
        margin-left: 8px;
        border-radius: 5px;
        background: #dfdfdf;
    }
    .select-dot a{
        background: #9b9a8f;
    }
    .unselect-dot a{
        background: #dfdfdf;
    }
    .nav {
        display: flex;
        border-bottom: 1px solid #e5ebe4;
        /* margin-top: 40px; */
        padding-bottom: 3px;
        margin-bottom: 16px;
    
    }
</style>