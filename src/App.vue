<script setup>
import NavbarVue from './layouts/Navbar.vue';
import { useStore } from 'vuex';
import { computed} from '@vue/runtime-core';
const store=useStore();
const Theme=computed(()=>store.state.user.currentTheme);

</script>

<template>
  <div :class="(Theme==='dark')?'dark ':''">
    <div  class="dark:bg-Slate-800 transition duration-700">   
    <NavbarVue></NavbarVue>
    <router-view></router-view>
    </div>
  </div>
</template>
<style>

</style>
