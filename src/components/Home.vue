<script setup>
import { useStore } from 'vuex';
import { computed} from '@vue/runtime-core';
const store=useStore();
const Theme=computed(()=>store.state.user.currentTheme);
</script>

<template>
  <div class="container mx-auto">
    <section
		class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"
	>
		<!-- Banner left contents -->
		<div class="w-full md:w-3/5 text-left">
			<h1
				class="font-extra-bold  text-3xl md:text-3xl xl:text-6xl text-center sm:text-left  dark:text-Slate-50 uppercase"
			>
				<span class="hover:text-Sky-500 duration-300">H</span>
				<span class="hover:text-Sky-500 duration-300">i</span>
				<span class="hover:text-Sky-500 duration-300">,</span> 
				<span class="hover:text-Sky-500 duration-300"> I</span>
				<span class="hover:text-Sky-500 duration-300">'</span>
				<span class="hover:text-Sky-500 duration-300">m</span> 
				<span class="hover:text-Sky-500 duration-300"> M</span>
				<span class="hover:text-Sky-500 duration-300">o</span>
				<span class="hover:text-Sky-500 duration-300">h</span>
				<span class="hover:text-Sky-500 duration-300">a</span>
				<span class="hover:text-Sky-500 duration-300">m</span>
				<span class="hover:text-Sky-500 duration-300">m</span>
				<span class="hover:text-Sky-500 duration-300">e</span>
				<span class="hover:text-Sky-500 duration-300">d</span>
				<span class="hover:text-Sky-500 duration-300"> M</span>
				<span class="hover:text-Sky-500 duration-300">o</span>
				<span class="hover:text-Sky-500 duration-300">u</span>
				<span class="hover:text-Sky-500 duration-300">t</span>
				<span class="hover:text-Sky-500 duration-300">a</span>
				<span class="hover:text-Sky-500 duration-300">w</span>
				<span class="hover:text-Sky-500 duration-300">a</span>
				<span class="hover:text-Sky-500 duration-300">k</span>
				<span class="hover:text-Sky-500 duration-300">k</span>
				<span class="hover:text-Sky-500 duration-300">i</span>
				<span class="hover:text-Sky-500 duration-300">l</span>
			</h1>
			<p
				class="font-medium mt-2 text-lg sm:text-xl  xl:text-2xl text-center sm:text-left leading-none text-gray-400"
			>
				Api / Full-Stuck Developer who speaks @vuejs && @laravel. 
			</p>
			<div class="flex justify-center sm:block">
				<a
					download="Stoman-Resume.pdf"
					href="/files/Stoman-Resume.pdf"
					class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-Indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-Indigo-50 focus:ring-1 focus:ring-Sky-500 hover:bg-Sky-500 focus:dark:ring-Indigo-900 hover:dark:bg-Indigo-900 text-gray-500 hover:text-white duration-500"
					aria-label="Download Resume"
				>
					<fa :icon="['fab','github']" class="mr-3"/>
					<span
						class="text-sm sm:text-lg font-medium duration-100"
						>Github Profil</span
					></a
				>
			</div>
		</div>

		<!-- Banner right illustration -->
		<div class="w-full md:w-2/5 text-right float-right">
			<img
				:src="(Theme==='light')?'/src/assets/images/background_light.svg':'/src/assets/images/background_dark.svg'"
				alt="Developer"
			/>
		</div>
	</section>
  </div>
</template>

<style scoped>
</style>
