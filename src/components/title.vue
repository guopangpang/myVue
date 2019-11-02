<template>
    <div>
        <div class="title_text">{{title}}</div>
    </div>
</template>

<script>
    export default {
        name: "title",
        data(){
            return {
                title:'title'
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    .title_text{
        height: 30px;
        line-height: 30px;
        color: #ff0000;
        text-align: center;
    }
</style>