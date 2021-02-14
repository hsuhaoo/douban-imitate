<template>
    <div class="nav">
        <h2 class="h">
            <span>{{title}}</span>
            <slot></slot>
        </h2>
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
        float: right;
        /* font-size: 13px; */
        color: #3377aa;
        /* margin-left: 15px; */
        font-size: .9rem;
        line-height: 1.5rem;
    }
    .h span{
        font-weight: normal;
    }
    .link-more a{
        color: #3377aa;
    }
    
    .nav {
        display: flex;
        padding: 0 1.12rem;
        margin-bottom: 16px;
    
    }
</style>