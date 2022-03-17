<script setup>
const props=defineProps(['project']);
</script>

<template>
	<router-link
		to="/projects/single-project"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-Slate-50 dark:bg-Slate-900"
		aria-label="Single Project"
	>
		<div>
			<img
				:src="project.img"
				:alt="project.title"
				class="rounded-t-xl border-none"
			/>
		</div>
		<div class="text-center px-4 py-6">
			<p
				class="text-xl text-Slate-800 dark:text-Slate-100 font-semibold mb-2"
			>
				{{ project.title }}
			</p>
			<span
				class="font-medium text-lg text-Slate-800 dark:text-Slate-100"
				>{{ project.category }}</span
			>
		</div>
	</router-link>
</template>

<style  scoped></style>
