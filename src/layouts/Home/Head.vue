<script setup>
import Description from '../../components/Description.vue';
import { useStore } from 'vuex';
import { computed} from '@vue/runtime-core';
const store=useStore();
const Theme=computed(()=>store.state.user.currentTheme);
</script>
<template>
    <section
		class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10 "
	>
		<!-- Banner left contents -->
		<div class="w-full md:w-3/5 text-left">
			<h1
				class="font-extra-bold text-center sm:text-left  dark:text-Slate-100 uppercase"
			>
				<Description>H</Description>
				<Description>i</Description>
				<Description>,</Description> 
				<Description> I</Description>
				<Description>'</Description>
				<Description>m</Description> 
				<Description> M</Description>
				<Description>o</Description>
				<Description>h</Description>
				<Description>a</Description>
				<Description>m</Description>
				<Description>m</Description>
				<Description>e</Description>
				<Description>d</Description>
				<Description> M</Description>
				<Description>o</Description>
				<Description>u</Description>
				<Description>t</Description>
				<Description>a</Description>
				<Description>w</Description>
				<Description>a</Description>
				<Description>k</Description>
				<Description>k</Description>
				<Description>i</Description>
				<Description>l</Description>
			</h1>
			<p
				class="font-medium mt-2 text-lg sm:text-xl  xl:text-2xl text-center sm:text-left leading-none text-gray-400"
			>
				Api / Full-Stuck Developer who use <span class="font-extra-bold text-green-700">@vuejs</span> && 
				<span class="font-extra-bold text-red-800">@laravel</span>. 
			</p>
			<div class="flex justify-center sm:block">
				<a
					download="Stoman-Resume.pdf"
					href="https://github.com/mohammedmoutawakkil"
					class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-Indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-Indigo-50 focus:ring-1 focus:ring-Sky-500 hover:bg-Sky-500 focus:dark:ring-Indigo-900 hover:dark:bg-Indigo-900 text-gray-500 hover:text-white duration-500"
					aria-label="Download Resume"
					target="_blank"
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
</template>
