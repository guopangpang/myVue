import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// import Two from '../module/two'
import Home from '../module/home'
import One from '../module/one.vue'
import Two from '../module/two.vue'
import Three from '../module/three.vue'
import Four from '../module/four.vue'
import Five from '../module/five.vue'

const router = new Router({
    routes: [
        {name: 'home', path: '/', component: Home},
        {
            name: 'aaa', path: '/one', component: One,
            children: [
                {path: '/one/three', component: Three},
                {path: '/one/four', components: {default: Four, helper: Five}},
            ]
        },
        {name: 'bbb', path: '/two', component: Two},
    ]
});
export default router