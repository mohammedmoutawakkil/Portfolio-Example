<script setup>
import NavbarVue from './layouts/Navbar/Navbar.vue';
import { useStore } from 'vuex';
import { computed} from '@vue/runtime-core';
import Footer from './layouts/Footer/Footer.vue';
const store=useStore();
const Theme=computed(()=>store.state.user.currentTheme);

</script>

<template>
  <div :class="(Theme==='dark')?'dark ':''">
    <div  class="bg-gradient-to-r dark:from-Slate-800 dark:to-Slate-900 transition duration-700">   
    <NavbarVue></NavbarVue>
    <router-view></router-view>
    <div class="container mx-auto px-5">
    <Footer></Footer>
    </div>
    </div>
    
  </div>
</template>
<style>

</style>
