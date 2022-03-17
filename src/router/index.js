import { createRouter, createWebHistory } from "vue-router";
import Home from '/src/components/Home.vue';
import About from '/src/components/About.vue';
import Contact from '/src/components/Contact.vue';
import Blogs from '/src/components/Blogs.vue';
const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
}, {
    path: '/About',
    name: 'About',
    component: About,
}, {
    path: '/ContactUS',
    name: 'ContactUS',
    component: Contact,
}, {
    path: '/Blogs',
    name: 'Blogs',
    component: Blogs,
}, ];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router