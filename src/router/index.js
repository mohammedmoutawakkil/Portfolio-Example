import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import About from '/src/views/About.vue'
import Contact from '/src/views/Contact.vue'
import Projects from '/src/views/Projects.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/contactus',
        name: 'ContactUS',
        component: Contact,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        redirect: { name: 'Home'}
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
