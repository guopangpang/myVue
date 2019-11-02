import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import Title1 from './components/title.vue'
Vue.config.productionTip = false;
// Vue.use(Title);
Vue.component("el-title", Title1);



// new Vue({
//     el:'#app',
//     render: h => h(App),
//     // router,
//     // component:{ App },
//     // template:'<App/>'
// });

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
