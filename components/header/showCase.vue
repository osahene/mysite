<template>
  <div class="text-gray-600 bg-slate-800 body-font overflow-hidden">
    <div class="absolute flex items-center pointer-events-none cert">
      <div class="head text-9xl text-slate-700 uppercase">Projects</div>
    </div>
    <div v-for="(project, index) in projects" :key="index" class="card-wrapper">
      <div
        class="rounded-b-lg before:bg-teal-600 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0 before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 card-content bg-gradient-to-t from-black to-transparent card-contents"
      >
        <img :src="project.image" />
        <div class="card-description">
          <h1>{{ project.title }}</h1>
          <p>{{ project.para }}</p>
        </div>
      </div>
    </div>

    <!-- <div class="spacer"></div> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = ref([
  {
    title: "Black X Sheets",
    para: "An innovative school management system that leverages on the powers of Google Sheet and Microsoft Excel.",
    image: "/img/bxs.jpg",
  },
  {
    title: "Clever Bell",
    para: "Supported in the creation of the clever bell project.",
    image: "/img/bell.jpg",
  },
  {
    title: "Aklowa Drum Band",
    para: "A website designed for a global cultural troupe.",
    image: "/img/aklowalogo.png",
  },
  {
    title: "Product Authentication Quick Scan",
    para: "Designed and developed the frontend and majority part of the backend.",
    image: "/img/main-01.svg",
  },
]);

onMounted(() => {
  gsap.fromTo(
    ".cert",
    { x: "100%" },
    {
      x: "0%",
      scrollTrigger: {
        trigger: ".cert",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        reverse: true,
      },
    }
  );
  let cards = gsap.utils.toArray(".card-wrapper");

  let stickDistance = 0;

  let firstCardST = ScrollTrigger.create({
    trigger: cards[0],
    start: "center center",
  });

  let lastCardST = ScrollTrigger.create({
    trigger: cards[cards.length - 1],
    start: "bottom bottom",
  });

  cards.forEach((card, index) => {
    var scale = 1 - (cards.length - index) * 0.025;
    let scaleDown = gsap.to(card, {
      scale: scale,
      "transform-origin": '"50% ' + (lastCardST.start + stickDistance) + '"',
    });

    ScrollTrigger.create({
      trigger: card,
      start: "center center",
      end: () => lastCardST.start + stickDistance,
      pin: true,
      pinSpacing: false,
      ease: "none",
      animation: scaleDown,
      toggleActions: "restart none none reverse",
    });
  });
});
</script>

<style scoped>
.card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.card-contents {
  position: relative;
  width: 500px;
  height: 300px;
  background-color: #000;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

img {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  opacity: 0.8;
  object-fit: cover;
}

.card-description {
  position: absolute;
  bottom: 10px;
  left: 0;
  z-index: 100;
  color: white;
}
.card-description h1,
.card-description p {
  margin: 0;
  text-align: left;
  margin-left: 20px;
}

.spacer {
  width: 100%;
  height: 100vh;
}
</style>
