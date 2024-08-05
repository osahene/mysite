<template>
  <div>
    <nav ref="navbar" class="navbar bg-white border-gray-200 dark:bg-black">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a href="#home" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/svg/ant.svg"
            class="w-[50px] h-[50px] ml-6"
            alt="Osahene"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Osahene</span
          >
        </a>
        <button
          @click="toggleMenu"
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            v-if="!isMenuOpen"
            class="w-5 h-5 ham"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
          <svg
            v-else
            class="w-5 h-5 cross"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div
          :class="['menu', { hidden: !isMenuOpen, block: isMenuOpen }]"
          class="w-full shadow-2xl md:block md:w-auto"
          id="navbar-default"
        >
          <ul
            class="menu-item font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-slate-400 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-inherit dark:border-gray-700"
          >
            <li>
              <a
                href="#home"
                class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-white"
                aria-current="page"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#acts"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >What I do</a
              >
            </li>
            <li>
              <a
                href="#projs"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Projects</a
              >
            </li>

            <li>
              <a
                href="#contact"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    tl.play();
  } else {
    tl.reverse();
  }
};

let tl;

onMounted(() => {
  tl = gsap.timeline({ paused: true });
  tl.to(".menu", {
    right: 0,
    duration: 0.8,
  });
  tl.from(".menu-item", {
    y: -10,
    duration: 0.7,
    stagger: 0.2,
  });

  tl.from(".ham", {
    duration: 0.4,
  });
  tl.to(
    ".menu-item",
    {
      stagger: 0.2,
      duration: 0.7,
    },
    "<"
  );

  const navbar = document.querySelector(".navbar");

  ScrollTrigger.create({
    trigger: navbar,
    start: "top top",
    end: "+=99999",
    pin: true,
    pinSpacing: false,
    onEnter: () => {
      gsap.to(navbar, {
        backgroundColor: "rgb(51, 65, 85)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      });
    },
    onLeaveBack: () => {
      gsap.to(navbar, {
        backgroundColor: "transparent",
        color: "rgb(51, 65, 85)",
        boxShadow: "none",
      });
    },
  });
});
</script>

<style scoped>
.navbar {
  width: 100%;
  z-index: 10;
}
</style>
