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
    <!-- Scroll to top -->
		<BackToTop
			visibleoffset="500"
			right="30px"
			bottom="20px"
			class="shadow-lg p-3 rounded-full bg-Cyan-500 dark:bg-Indigo-700 text-white"
		>
			<fa :icon="['fa','chevron-up']"/>
		</BackToTop>
    <div class="container mx-auto px-5">
    <Footer></Footer>
    </div>
    </div>
    
  </div>
</template>
<style>

</style>
