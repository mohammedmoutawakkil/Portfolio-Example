<script setup>
import { ref } from '@vue/reactivity';
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
					url: 'mailto:yasserth19@gmail.com',
                    class:'hover:text-red-500 dark:hover:text-red-400'
				},
			]);
</script>

<template>
  <div class="block sm:flex sm:gap-10 lg:px-48 lx:px-48 md:px-48 mt-10 sm:mt-20">
		<!-- About details -->
		<div class="w-full sm:w-6/12 text-left">
			<h1 class="text-5xl font-semibold dark:text-Slate-200">Contact Details</h1>
          <p class="break-all text-xl text-gray-600">Hi 👋 How are you? Thank you for visiting My Portfolio. If you have any inquiries or feedback, please don't hesitate to reach out. I am available at the following social media outlets:</p>
          <!-- Footer social links -->
			<div
				class="flex flex-col justify-center items-left  my-9 sm:my-16"
			>
				<ul class="flex gap-4 sm:gap-8">
					<a
						v-for="social in socials"
						:key="social.id"
						:href="social.url"
						target="__blank"
                        :class="social.class"
						class="text-gray-400 cursor-pointer rounded-lg  p-4 duration-600"
					>
						<fa
							:icon="[(social.icon!='envelope')?'fab':'fas',social.icon]"
							class="w-5 sm:w-8 h-5 sm:h-8"
						/>
					</a>
				</ul>
			</div>
          <p class="break-all text-xl text-gray-600">Also, currently available for freelance work. My scope of work includes but not limited to:</p>
          <ul class="pl-10 list-disc dark:text-Slate-400">
              <li>Full-stack Development</li>
              <li>Application Programming Interface(API)</li>
              <li>Backend Development</li>
              <li>Code Review &amp; Testing</li>
              <li>Frontend Development</li>
          </ul>
		</div>
    <!-- About profile image -->
		<div class="sm:w-6/12">
      <iframe class="rounded-xl w-full  mb-7 sm:mb-0 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105994.76966671569!2d-5.608060329985909!3d33.88098518728597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda044d23bfc49d1%3A0xfbbf80a99e4cde18!2sMeknes!5e0!3m2!1sen!2sma!4v1647539302306!5m2!1sen!2sma" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
		</div>
	</div>
</template>

<style scoped>

</style>
