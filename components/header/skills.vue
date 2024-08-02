<template>
  <div>
    <div class="bg-slate-300 pl-8">
      <h1 class="text-9xl text-slate-400">Skill</h1>
    </div>
    <div class="relative overflow-hidden">
      <div id="page2" class="relative">
        <div id="move" class="max-w-fit bg-slate-300 flex">
          <div
            v-for="(item, i) in skills"
            :key="i"
            class="marque flex items-center"
          >
            <img class="w-[70px] h-[70px]" :src="item.image" />
            <h1 class="text-xl ml-2">{{ item.title }}</h1>
          </div>
        </div>
      </div>
      <div
        class="absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-slate-800 to-transparent pointer-events-none"
      ></div>
      <div
        class="absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-slate-800 to-transparent pointer-events-none"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = ref([
  { title: "Python", image: "/svg/python.svg" },
  { title: "Django", image: "/svg/django.svg" },
  { title: "Excel", image: "/svg/excel.svg" },
  { title: "Flask", image: "/svg/flask.svg" },
  { title: "Vue", image: "/svg/vue.svg" },
  { title: "Quasar", image: "/svg/quasar.svg" },
  { title: "SQL", image: "/svg/sql.svg" },
  { title: "Nuxt", image: "/svg/nuxt.svg" },
  { title: "Postgres", image: "/svg/postgresql.svg" },
  { title: "Tailwind", image: "/svg/tailwind.svg" },
  { title: "Tensorflow", image: "/svg/tensorflow.svg" },
  { title: "Javascript", image: "/svg/javascript.svg" },
  { title: "Python", image: "/svg/python.svg" },
]);

function marqueAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const scrollingText = gsap.utils.toArray(".marque");

  let totalWidth = 0;
  scrollingText.forEach((el) => {
    const computedStyle = getComputedStyle(el);
    const marginRight = parseFloat(computedStyle.marginRight);
    totalWidth += el.offsetWidth + marginRight;
  });

  document.getElementById("move").style.width = `${totalWidth}px`;

  const tl = horizontalLoop(scrollingText, { repeat: -1 });

  let speedTween;

  ScrollTrigger.create({
    trigger: "#move",
    start: "top bottom",
    end: "bottom top",
    onUpdate: (self) => {
      speedTween && speedTween.kill();
      speedTween = gsap
        .timeline()
        .to(tl, {
          timeScale: 3 * self.direction,
          duration: 0.25,
        })
        .to(
          tl,
          {
            timeScale: 1 * self.direction,
            duration: 1.5,
          },
          "+=0.5"
        );
    },
    // markers: true,
  });

  function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () =>
          tl.totalTime(tl.rawTime() + tl.duration() * 100),
      }),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      xPercents = [],
      curIndex = 0,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap =
        config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
      totalWidth,
      curX,
      distanceToStart,
      distanceToLoop,
      item,
      i;
    gsap.set(items, {
      xPercent: (i, el) => {
        let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
        let computedStyle = window.getComputedStyle(el);
        let marginRight = parseFloat(computedStyle.marginRight);
        xPercents[i] = snap(
          (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
            gsap.getProperty(el, "xPercent") +
            marginRight
        );
        return xPercents[i];
      },
    });
    gsap.set(items, { x: 0 });
    totalWidth =
      items[length - 1].offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      items[length - 1].offsetWidth *
        gsap.getProperty(items[length - 1], "scaleX") +
      (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
      item = items[i];
      curX = (xPercents[i] / 100) * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop =
        distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0
      )
        .fromTo(
          item,
          {
            xPercent: snap(
              ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
            ),
          },
          {
            xPercent: xPercents[i],
            duration:
              (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond
        )
        .add("label" + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index, vars) {
      vars = vars || {};
      Math.abs(index - curIndex) > length / 2 &&
        (index += index > curIndex ? -length : length);
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex) {
        vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      curIndex = newIndex;
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
    }
    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true);
    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }
    return tl;
  }
}

onMounted(() => {
  marqueAnimation();
});
</script>

<style scoped>
body {
  overflow-x: hidden;
  background-color: #111;
}

#move {
  display: flex;

  padding: 2vw 0;
  overflow: hidden;
}

.marque {
  display: flex;
  align-items: center;
  gap: 1vw;
  padding: 0 1.5vw;
  flex-shrink: 0;
  text-transform: uppercase;
  transform: translate(-100%);
}
</style>
