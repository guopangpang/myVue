<template>
    <div>
        <el-title></el-title>
        <div @click="openNewPage_Two">
            {{name}}
        </div>
        <div @click="openNewPage_four">4</div>
        <div @click="openNewPage_five">5</div>
        <router-view></router-view>
        <router-view name="helper"></router-view>
    </div>
</template>

<script>
    export default {
        name: "one",
        data(){
            return{
                name:'one'
            }
        },
        methods:{
            openNewPage_Two(){
                this.$router.push('/two');
            },
            openNewPage_four(){
                this.$router.push('/one/three');
            },
            openNewPage_five(){
                this.$router.push('/one/four');
            }
        }
    }
</script>

<style scoped>

</style>