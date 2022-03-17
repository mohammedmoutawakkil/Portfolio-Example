<script setup>
const props = defineProps({select: {
			type: String,
			default: 'projects',
			required: true,
		},selectOptions: {
			type: Array,
			default: () => [
				'Web Application',
				'Desktop Application',
				'UI',
			],
		},});
</script>

<template>
	<select
		@change="$emit('filter', $event.target.value)"
		:name="select"
		:id="select"
		class="font-medium
				px-4
				py-2
				border-1 border-gray-200
				dark:border-white
				rounded-lg
				text-sm
				sm:text-md 
				bg-Sky-500
				dark:bg-Indigo-500
				text-Slate-100
			"
	>
		<option value class="text-sm sm:text-md">All Projects</option>
		<option
			v-for="option in selectOptions"
			:key="option"
			:value="option"
			class="sm:text-md"
		>
			{{ option }}
		</option>
	</select>
</template>

<style scoped></style>
