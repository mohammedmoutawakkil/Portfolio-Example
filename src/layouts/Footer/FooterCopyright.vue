<script setup>
import { ref } from '@vue/reactivity';
const copyrightDate= ref(new Date().getFullYear());
const projectName=ref('Vue.js & TailwindCSS Portfolio');
const author=ref('Moutawakkil Mohammed');
</script>

<template>
	<div class="flex justify-center items-center text-center">
		<div
			class="font-general-regular text-lg text-Slate-800 dark:text-gray-200"
		>
			&copy; {{ copyrightDate }}
			. Copyright <fa :icon="['fas','hand-point-right']" class="mx-3"/>
			<a
				href="https://github.com/mohammedmoutawakkil"
				target="__blank"
				class="font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
				>{{ author }}</a
			>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
