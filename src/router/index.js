
import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/home/HomePage.vue";
import Register from "@/home/RegisterSection.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path:'/',
            name: 'Home',
            component: HomePage
        },
        {
            path:'/register',
            name: 'Register',
            component: Register
        }
    ]
});

