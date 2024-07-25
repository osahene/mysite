<template>
  <div>
    <div class="intro-header">
      <div class="intro-name">
        <div>o</div>
        <div>s</div>
        <div>a</div>
      </div>
      <div class="intro-name">
        <div>h</div>
        <div>e</div>
        <div>n</div>
        <div>e</div>
      </div>
    </div>
    <div class="main-page">
      <div class="first-page">
        <Hero />
      </div>
      <div>
        <Nav />
      </div>
      <div class="content-page">
        <div class="pages">
          <SectionView />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const contentHolderHeight =
    document.querySelector(".content-page").offsetHeight;
  const imgHolderHeight = window.innerHeight;
  const addScrollHeight = window.innerHeight;

  const totalBody = contentHolderHeight + imgHolderHeight + addScrollHeight;
  document.body.style.height = `${totalBody}px`;

  ScrollTrigger.create({
    trigger: ".main-page",
    start: "top top",
    end: "bottom bottom",
    onEnter: () => {
      gsap.set(".main-page", { position: "absolute", top: "195%" });
    },
    onLeaveBack: () => {
      gsap.set(".main-page", { position: "fixed", top: "0%" });
    },
  });

  gsap.to(".intro-header .intro-name:first-child", {
    x: () => -innerWidth * 3,
    scale: 10,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".intro-header",
      start: "top top",
      end: `+=200%`,
      scrub: 1,
    },
  });

  gsap.to(".intro-header .intro-name:last-child", {
    x: () => -innerWidth * 3,
    scale: 10,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".intro-header",
      start: "top top",
      end: `+=200%`,
      scrub: 1,
    },
  });

  gsap.to(".first-page", {
    rotate: 0,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".first-page",
      start: "top top",
      end: `+=200%`,
      scrub: 1,
    },
  });

  gsap.to(".first-page div", {
    scale: 1,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".first-page",
      start: "top top",
      end: `+=200%`,
      scrub: 1,
    },
  });
});
</script>
<style lang="scss" scoped></style>
