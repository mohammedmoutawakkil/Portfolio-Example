<script setup>
import ProjectsFilter from './ProjectsFilter.vue';
import ProjectSingle from './ProjectSingle.vue';
import projects from '../../data/projects';
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';

const selectedCategory=ref('');
const searchProject=ref('');
const filteredProjects=computed(()=>{
	if (selectedCategory.value) {
			return filterProjectsByCategory();
		} else if (searchProject.value) {
			return filterProjectsBySearch();
		}
		return projects;
});
function filterProjectsByCategory() {
	return  projects.filter((item) => {
		let category =
			item.category.charAt(0).toUpperCase() +
			item.category.slice(1);
		return category.includes(selectedCategory.value);
	});
}
function filterProjectsBySearch() {
	let project = new RegExp(searchProject.value, 'i');
	return projects.filter((el) => el.title.match(project));
}
</script>

<template>
	<!-- Projects grid -->
	<section class="pt-10 sm:pt-14">
		<!-- Filter and search projects -->
		<div class="mt-10 sm:mt-10">
			<h3
				class="font-general-regular
					text-center text-secondary-dark
					dark:text-ternary-light
					text-md
					sm:text-xl
					font-normal
					mb-4
					dark:text-Slate-100
				"
			>
				Search projects by title or filter by category
			</h3>
			<div
				class="
					grid grid-cols-6 gap-4
					border-b border-Slate-100
					dark:border-Slate-800
					pb-3
				"
			>
				<div class="col-start-1 col-end-2 flex justify-between gap-2">
					<span
						class="
							hidden
							sm:block
							bg-Slate-100
							dark:bg-Slate-800
							p-2.5
							shadow-sm
							rounded-xl
							cursor-pointer
							order-first
							"
					>
					<fa  :icon="['fa','search']" class="text-Slate-800 dark:text-Slate-100" />
					</span>
					<input
						v-model="searchProject"
						class="font-general-medium
						pl-3
						pr-1
						sm:px-4
						py-2
						border-1 border-gray-200
						dark:border-Slate-800
						rounded-lg
						text-sm
						sm:text-md
						bg-Slate-100
						dark:bg-Slate-800
						text-Slate-800
						dark:text-Slate-100
						"
						id="name"
						name="name"
						type="text"
						required=""
						placeholder="Search Projects"
						aria-label="Name"
					/>
				</div>
				<ProjectsFilter class="col-end-7 col-span-2 " @filter="selectedCategory = $event" />
			</div>
		</div>

		<!-- Projects grid -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"
		>
			<ProjectSingle
				v-for="project in filteredProjects"
				:key="project.id"
				:project="project"
			/>
		</div>
	</section>
</template>

<style scoped></style>
