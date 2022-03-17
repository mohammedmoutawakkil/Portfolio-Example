import { createRouter, createWebHistory } from "vue-router";
import Home from '/src/views/Home.vue';
import About from '/src/views/About.vue';
import Contact from '/src/views/Contact.vue';
import Projects from '/src/views/Projects.vue';
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
    path: '/Projects',
    name: 'Projects',
    component: Projects,
}, ];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router