<script setup>
const props=defineProps(['project']);

</script>

<template>
	<a
		:href="project.link"
		class=" rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-Sky-100 dark:bg-gray-200 transform duration-300 hover:-translate-y-1 hover:scale-110"
		aria-label="Single Project"
		:target="(project.link!='javascript:void(0)')?'_blank':''"
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
				class="text-xl text-Slate-800 dark:text-Slate-600 font-semibold mb-2"
			>
				{{ project.title }}
			</p>
			<span
				class="font-medium text-lg text-Slate-800 dark:text-Slate-600"
				>{{ project.category }}</span
			>
		</div>
	</a>
</template>

<style  scoped></style>
