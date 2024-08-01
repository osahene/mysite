<template>
  <div>
    <div class="tickerwrapper" v-for="(item, index) in tickerData" :key="index">
      <ul class="list p-8">
        <li
          class="listitem"
          v-for="(subItem, subIndex) in item.split(' ')"
          :key="subIndex"
        >
          <span>{{ subItem }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";

const tickerData = [
  "HTML CSS Javascript Python Django Flask SQL Postgres",
  "Vue Quasar Nuxt Tailwind MicrosoftExcel GoogleSheets",
];

const marqueAnimation = () => {
  document.querySelectorAll(".tickerwrapper").forEach((wrapper) => {
    const list = wrapper.querySelector("ul.list");
    const clonedList = list.cloneNode(true);
    clonedList.classList.add("cloned");
    wrapper.appendChild(clonedList);

    let listWidth = 0;
    list.querySelectorAll("li").forEach((item) => {
      listWidth += item.offsetWidth;
    });

    list.style.width = `${listWidth}px`;
    clonedList.style.width = `${listWidth}px`;

    const timeline = gsap.timeline({ repeat: -1, paused: true });
    const time = 20;

    timeline
      .fromTo(
        list,
        { x: 0 },
        { x: -listWidth, ease: "none", duration: time },
        0
      )
      .fromTo(
        clonedList,
        { x: listWidth },
        { x: 0, ease: "none", duration: time },
        0
      )
      .set(list, { x: listWidth })
      .to(clonedList, { x: -listWidth, ease: "none", duration: time }, time)
      .to(list, { x: 0, ease: "none", duration: time }, time)
      .progress(1)
      .progress(0)
      .play();

    wrapper.addEventListener("mouseenter", () => {
      timeline.pause();
    });

    wrapper.addEventListener("mouseleave", () => {
      timeline.play();
    });
  });
};

onMounted(() => {
  marqueAnimation();
});
</script>

<style scoped>
.tickerwrapper {
  position: relative;
  width: 100%;
  height: 120px;
  white-space: nowrap;
  cursor: pointer;
  overflow: hidden;
}

.tickerwrapper ul.list {
  position: relative;
  display: inline-block;
  list-style: none;
  padding: 0;
  margin: 0;
}

.tickerwrapper ul.list.cloned {
  position: absolute;
  top: 0;
  left: 0;
}

.tickerwrapper ul.list li {
  float: left;
  font-size: 120px !important;
  color: #e51313;
}

.tickerwrapper ul.list li span {
  font-size: 120px !important;
  text-transform: uppercase;
  color: #000000;
  height: 190px;
}
</style>
