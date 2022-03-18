<script setup>
import { ref } from '@vue/reactivity';
import FooterCopyright from './FooterCopyright.vue';
const socials=ref([
				{
					id: 1,
					name: 'GitHub',
					icon: 'github',
					url: 'https://github.com/mohammedmoutawakkil',
                    class:'hover:dark:text-Slate-200 hover:text-Slate-800'
				},
				{
					id: 2,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/MWK_MOHAMMED',
                    class:'hover:text-Cyan-500'
				},
				{
					id: 3,
					name: 'Linkedin',
					icon: 'linkedin',
					url: 'https://www.linkedin.com/in/mohammed-moutawakkil-322ab81b3/',
                    class:'hover:text-Sky-500'
				},
				{
					id: 4,
					name: 'Gmail',
					icon: 'envelope',
					url: 'mailto:mohamedmoutawakkil1999@gmail.com',
                    class:'hover:text-red-500 dark:hover:text-red-400'
				},
				
			]);
</script>

<template>
	<div class="container mx-auto ">
		<div
			class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-Slate-200 dark:border-Slate-800"
		>
			<!-- Footer social links -->
			<div
				class="flex flex-col justify-center items-center mb-12 sm:mb-20"
			>
				<p
					class="font-general-semibold text-3xl sm:text-4xl font-semibold text-Slate-800 dark:text-gray-200 mb-5"
				>
					Follow me
				</p>
				<ul class="flex gap-4 sm:gap-8">
					<a
						v-for="social in socials"
						:key="social.id"
						:href="social.url"
						target="__blank"
                        :class="social.class"
						class="text-gray-400 hover:animate-bounce  cursor-pointer rounded-lg bg-gray-50 dark:bg-Slate-800 hover:bg-gray-100 shadow-sm p-4 duration-600"
					>
						<fa
							:icon="[(social.icon!='envelope')?'fab':'fas',social.icon]"
							class="w-5 sm:w-8 h-5 sm:h-8"
						/>
					</a>
				</ul>
			</div>

			<!-- Footer copyright -->
			<FooterCopyright />
		</div>
	</div>
</template>

<style scoped></style>
