<script setup>
import Head from '../layouts/Home/Head.vue';
import ProjectSection from '../layouts/Home/Body/ProjectSection.vue';
import ProjectsGridVue from '../components/projects/ProjectsGrid.vue';
</script>

<template>
  <div class="container mx-auto">
    <Head/>
    <ProjectSection/>
    <ProjectsGridVue />
    <!-- Load more projects button -->
		<div class="mt-10 sm:mt-20 flex justify-center">
			<router-link
				to="/projects"
				class="font-general-medium transition ease-in-out delay-150 flex items-center px-6 py-3 hover:-translate-y-1 hover:scale-110 rounded-lg shadow-lg hover:shadow-xl bg-Indigo-500 hover:bg-Indigo-600 focus:ring-1 focus:ring-Indigo-900 text-white text-lg sm:text-xl duration-300"
				aria-label="More Projects"
			>
				<button>More Projects</button>
			</router-link>
		</div>
  </div>
</template>

<style scoped>
</style>
