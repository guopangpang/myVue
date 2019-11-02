<template>
    <div>
        <div @click="openNewPage_one">home</div>
        <div @click="textAxios">425555</div>
    </div>

</template>

<script>
    import axios from 'axios'
    export default {
        name: "home",
        data(){
            return{

            }
        },
        methods:{
            openNewPage_one(){
                this.$router.push('/one')
            },
            textAxios(){
                axios.post('http://127.0.0.1:8082/login.io')
            }
        }
    }
</script>

<style scoped>

</style>