<template>
  <div>
    <div
      class="relative h-full flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0"
    >
      <div
        class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"
      >
        <svg
          class="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z"></path>
        </svg>
        <img
          class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="@/assets/img/bg-img.jpg"
          alt=""
        />
      </div>
      <div
        class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"
      >
        <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p
            class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400"
          >
            Hi,
          </p>
          <h2
            ref="introText"
            class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
          >
            I am
            <span class="inline-block text-deep-purple-accent-400"
              >David Adu-Tenkorang</span
            >
          </h2>
          <h2
            class="mb-5 font-sans text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
          >
            I <span class="mr-2"><em>design</em></span> and
            <span class="mr-2 inline-block text-deep-purple-accent-400"
              >develop</span
            >
            <span
              ref="projectText"
              class="inline-block text-deep-purple-accent-400"
              >{{ projects }}</span
            >
          </h2>
          <div class="flex items-center">
            <a
              href="/"
              class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >Get started</a
            >
            <a
              href="/"
              aria-label=""
              class="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >Learn more</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const projects = ref("webapp");
const projectText = ref(null);
const introText = ref(null);

const words = ["website", "database", "games", "dashboards"];
let wordIndex = 0;

onMounted(() => {
  // Animate the intro text
  gsap.from(introText.value, {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out",
  });

  const changeText = () => {
    gsap.to(projectText.value, {
      duration: 1.5,
      text: words[wordIndex],
      ease: "none",
      onComplete: () => {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(changeText, 2000); // Delay before the next word change
      },
    });
  };

  changeText();
});
</script>

<style scoped>
/* Add any necessary styles */
</style>
