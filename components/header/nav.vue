<template>
  <div>
    <nav class="barra-menu">
      <div class="menu-container">
        <div class="menu-container__logo">
          <a class="menu-container__logo__link" href="javascript:;">
            <i class="fa fa-code"></i>
          </a>
        </div>
        <div class="menu-container__botao">
          <i class="fa fa-align-right"></i>
        </div>
        <ul class="menu-container__menu">
          <li class="menu-container__menu__item">
            <a class="menu-container__menu__item__link" href="#sobre">Sobre</a>
          </li>
          <li class="menu-container__menu__item">
            <a class="menu-container__menu__item__link" href="javascript:;"
              >Skills</a
            >
          </li>
          <li class="menu-container__menu__item">
            <a class="menu-container__menu__item__link" href="javascript:;"
              >Portifólio</a
            >
          </li>
          <li class="menu-container__menu__item">
            <a class="menu-container__menu__item__link" href="javascript:;"
              >Contato</a
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
    // backgroundColor: "red",
    scrollTrigger: {
      trigger: nav,
      start: "top top",
      end: "+=1",
      onEnter: () => {
        gsap.set(nav, { position: "fixed", top: 0, backgroundColor: "red" });
      },
      onLeaveBack: () => {
        gsap.set(nav, { position: "relative", backgroundColor: "#fff" });
      },
    },
  });
});
</script>

<style lang="scss" scoped></style>
