<template>
  <div
    class="flex flex-col h-screen bg-slate-800 md:flex-row space-y-8 md:space-y-0 md:space-x-8"
  >
    <div class="absolute w-full flex items-end pointer-events-none what-i-do">
      <div class="head text-9xl text-slate-700 uppercase">What I do</div>
    </div>

    <div class="hidden lg:flex flex-1 justify-center items-center cube-section">
      <div class="cont">
        <div class="cube">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </div>
      </div>
    </div>

    <div class="flex-1 p-8">
      <div v-for="(act, i) in acts" :key="i" class="mb-4 act-item">
        <div
          class="p-5 rounded-b-lg before:bg-teal-600 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0 before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 flex items-center space-x-4"
        >
          <div class="text-stone-100 num text-2xl font-bold">{{ act.num }}</div>
          <div class="text-stone-100 content text-4xl">{{ act.cat }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const acts = ref([
  {
    num: "1",
    cat: "Actualizing the thought provoking website or web application with vue and python (django and flask)",
  },
  {
    num: "2",
    cat: "Delivering data analytical works based on the budget at hand. I develop data analytics dashboards and reports with PowerBI, Microsoft Excel or Google Sheets. These power tools make life easy ",
  },
  {
    num: "3",
    cat: "Starting a new series on automobiles. ",
  },
]);

onMounted(() => {
  gsap.fromTo(
    ".what-i-do",
    { x: "100%" },
    {
      x: "0%",
      scrollTrigger: {
        trigger: ".what-i-do",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        reverse: true,
        // markers: true,
      },
    }
  );

  gsap.utils.toArray(".act-item").forEach((item, i) => {
    gsap.fromTo(
      item,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: item,
          start: "top bottom-=100",
          end: "bottom top+=100",
          scrub: true,
          reverse: true,
          //markers: true,
        },
      }
    );
  });

  //   gsap.fromTo(
  //     ".cube-section",
  //     { y: "100%" },
  //     {
  //       y: "0%",
  //       scrollTrigger: {
  //         trigger: ".cube-section",
  //         start: "top bottom",
  //         end: "bottom top",
  //         scrub: true,
  //         reverse: true,
  //       },
  //     }
  //   );
});
</script>

<style scoped>
div {
  transform-style: preserve-3d;
  box-sizing: border-box;
}

.cont {
  --clr: hsl(var(--hue) 80% 80%);
  --hue2: calc(var(--hue) + 90deg);
  --clr2: hsl(var(--hue2) 80% 80%);
  color: var(--clr);
  filter: drop-shadow(0 0 1.5vmin currentcolor);
  animation: clr-chg infinite 10s linear;
}

.cube {
  width: 20vmin;
  aspect-ratio: 1;
  position: relative;
  rotate: 1 1 1 45deg;
  animation: rot infinite 20s linear;
}
.cube:hover {
  animation-play-state: paused;
}
.cube:hover .side {
  --clr2: color-mix(in lab, var(--clr), #fff);
  box-shadow: 0 0 2vmin currentcolor;
}

.side {
  --ang: 45deg;
  position: absolute;
  inset: 0;
  font-size: 3rem;
  background-image: repeating-linear-gradient(
    var(--ang),
    #0000 0 9%,
    var(--clr) 0 14%,
    #0000 0 23%,
    var(--clr2) 0 27%,
    #0000 0
  );
}

.side:nth-of-type(1) {
  translate: 0 0 10vmin;
}

.side:nth-of-type(2) {
  rotate: y 90deg;
  translate: 10vmin;
  transform: rotatez(270deg);
}

.side:nth-of-type(3) {
  rotate: y 90deg;
  translate: -10vmin;
  transform: rotatez(90deg);
}

.side:nth-of-type(4) {
  rotate: x 90deg;
  translate: 0 10vmin;
  transform: rotatez(270deg);
}

.side:nth-of-type(5) {
  rotate: x 90deg;
  translate: 0 -10vmin;
  --ang: 135deg;
}

.side:nth-of-type(6) {
  translate: 0 0 -10vmin;
  transform: rotatez(180deg);
}

@keyframes rot {
  to {
    transform: rotatex(1080deg) rotatey(360deg) rotatez(720deg);
  }
}
@keyframes clr-chg {
  from {
    --hue: 0deg;
  }
  to {
    --hue: 360deg;
  }
}
</style>
