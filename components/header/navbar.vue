<!-- Navbar.vue -->
<template>
  <div>
    <nav :class="['barra-menu', { fixed: isNavFixed }]">
      <div class="menu-container">
        <div>
          <a class="" href="#home">
            <img class="w-[50px] h-[50px] ml-6" src="/svg/ant.svg" alt="" />
          </a>
        </div>

        <button
          @click="toggleMenu"
          class="block md:hidden p-2 mr-2 rounded focus:outline-none focus:ring"
        >
          <svg
            v-if="!isMenuOpen"
            class="w-6 h-6 ham"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
          <svg
            v-else
            class="w-6 h-6 cross"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <ul
          :class="[
            'menu-container__menu',
            { hidden: !isMenuOpen, block: isMenuOpen },
            'md:flex',
          ]"
          class="mr-8"
        >
          <li class="menu-container__menu__item">
            <a class="menu-container__menu__item__link" href="#home">Home</a>
          </li>
          <li class="menu-container__menu__item">
            <a class="menu-container__menu__item__link" href="#acts"
              >Activities</a
            >
          </li>
          <li class="menu-container__menu__item">
            <a class="menu-container__menu__item__link" href="#projs"
              >Projects</a
            >
          </li>
          <li class="menu-container__menu__item">
            <a class="menu-container__menu__item__link" href="#contact"
              >Contact</a
            >
          </li>
        </ul>
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
const isNavFixed = ref(false);

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
  tl.to(".menu-container__menu", {
    right: 0,
    duration: 0.8,
  });
  tl.from(".menu-container__menu__item", {
    x: 150,
    duration: 0.7,
    stagger: 0.2,
  });
  tl.from(".ham", {
    duration: 0.4,
  });

  const nav = document.querySelector(".barra-menu");

  gsap.to(nav, {
    scrollTrigger: {
      trigger: ".first-page",
      start: "top top",
      end: "+=1",
      onEnter: () => {
        isNavFixed.value = true;
        gsap.set(nav, {
          position: "fixed",
          top: 0,
          backgroundColor: "rgb(148, 163, 184)",
        });
      },
      onLeaveBack: () => {
        isNavFixed.value = false;
        gsap.set(nav, {
          position: "relative",
          backgroundColor: "#fff",
        });
      },
    },
  });
});
</script>

<style scoped>
.barra-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  left: 0;
  bottom: 0;
  width: 100%;
  margin: 0;
  padding: 0px;
  height: 65px;
  line-height: 61px;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
  z-index: 10;
}

.fixed {
  position: fixed !important;
  top: 0 !important;
}

.menu-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.menu-container__logo__link {
  color: #fff;
  background: #47525e;
  padding: 0.1em 0.5em;
  border-radius: 4px;
  font-size: 2em;
}

.menu-container__menu {
  list-style: none;
  /* margin: 0;
  padding: 0; */
}

.menu-container__menu__item {
  margin: 0;
  display: inline-block;
  padding: 0rem;
}

.menu-container__menu__item__link {
  color: #47525e;
  text-decoration: none;
  display: block;
  padding: 0rem 1rem;
  font-size: 1.6em;
}

.menu-container__menu__item__link:hover {
  color: #000;
}
</style>
