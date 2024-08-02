<template>
  <div>
    <nav class="barra-menu">
      <div class="menu-container">
        <div>
          <a class="" href="#home">
            <img class="w-[50px] h-[50px] ml-6" src="/svg/ant.svg" alt="" />
          </a>
        </div>

        <ul class="menu-container__menu">
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
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const nav = document.querySelector(".barra-menu");
  gsap.to(".barra-menu", {
    scrollTrigger: {
      trigger: nav,
      start: "top top",
      end: "+=1",
      onEnter: () => {
        gsap.set(nav, {
          position: "fixed",
          top: 0,
          backgroundColor: "rgb(148, 163, 184)",
        });
      },
      onLeaveBack: () => {
        gsap.set(nav, {
          position: "relative",
          display: "none",
          backgroundColor: "#fff",
        });
      },
    },
  });
});
</script>

<style scoped></style>
