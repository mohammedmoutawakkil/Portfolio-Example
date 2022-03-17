<template>
  <div >
    <div>
      <nav
        class="
          px-6
          py-8
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
      <div class="max-w-6xl md:ml-64 px-4">
        <div class="flex items-center justify-between">
          
          <router-link
            :to="{name:'Home'}"
            class="
              text-xl
              font-bold
              dark:text-Slate-100
              text-gray-800
              md:text-2xl
              hover:text-blue-400
              jo
            "
            >M.W.K
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-600
                dark:text-Slate-100
                hover:text-gray-400
              "
            >
              <fa :icon="['fa','bars']" />
            </button>
          </div>
        </div>
      </div>


        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
            md:mr-64 
            bg-Slate-200 
            dark:bg-Slate-900
            rounded-tr-full
            rounded-bl-full
            py-5 
            px-9 shadow-lg
          "
        >
          <li class="text-center sm:text-lg">
            <router-link :to="{name:'Home'}"  class="text-center text-gray-600 dark:text-Slate-100 font-medium hover:text-Sky-500 hover:dark:text-Indigo-700 transition duration-300 hover:border-b-4 hover:border-Sky-500 hover:dark:border-Indigo-700">Home</router-link>
          </li>
          <li class="text-center sm:text-lg">
            <router-link :to="{name:'Projects'}"  class="text-center text-gray-600 dark:text-Slate-100 font-medium hover:text-Sky-500 hover:dark:text-Indigo-700 transition duration-300 hover:border-b-4 hover:border-Sky-500 hover:dark:border-Indigo-700">Projects</router-link>
          </li>
          <li class="text-center sm:text-lg">
            <router-link :to="{name:'About'}"  class="text-center text-gray-600 dark:text-Slate-100 font-medium hover:text-Sky-500 hover:dark:text-Indigo-700 transition duration-300 hover:border-b-4 hover:border-Sky-500 hover:dark:border-Indigo-700">About</router-link>
          </li>
          <li class="text-center text-lg">
            <router-link :to="{name:'ContactUS'}"  class="text-center text-gray-600 dark:text-Slate-100 font-medium hover:text-Sky-500 hover:dark:text-Indigo-700 transition duration-300 hover:border-b-4 hover:border-Sky-500 hover:dark:border-Indigo-700">Contact Us</router-link>
          </li>
          <li class="text-center text-2xl">
            <a href="#" @click="toggleTheme" class="text-center text-gray-600 dark:text-Slate-100 font-medium hover:dark:text-Yellow-400  transition duration-300 cursor-pointer" ><fa :icon="['fa',(Theme=='dark')?'sun':'moon']"  /></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { computed, ref } from '@vue/runtime-core';
//Mobile Vue
const showMenu=ref(false);
const store=useStore();
const Theme=computed(()=>store.state.user.currentTheme);
function toggleTheme() {
    store.dispatch({type:'toggleTheme',store:Theme.value});
}
</script>

