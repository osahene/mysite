<template>
  <section
    class="text-gray-600 bg-slate-800 p-0 md:p-8 body-font overflow-hidden"
  >
    <!-- Header -->
    <div class="cert-container">
      <div
        class="will-change-transform absolute flex items-center pointer-events-none cert"
      >
        <div
          class="head md:text-9xl ml-1 mt-4 text-4xl text-slate-700 uppercase"
        >
          Works Done
        </div>
      </div>
    </div>
    <!-- Articles -->
    <div class="will-change-transform container px-5 py-24 mx-auto">
      <div class="-my-8 divide-y-2 divide-gray-100">
        <div
          v-for="(article, index) in articles"
          :key="index"
          class="py-8 flex flex-wrap md:flex-nowrap article"
        >
          <ul class="edu_body">
            <li class="edu_body_content">
              <div class="marker"></div>
              <div class="md:w-100 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span
                  class="font-semibold text-stone-100 title-font text-2xl text-gray-700"
                >
                  {{ article.category }}
                </span>
                <span class="text-stone-100 mt-1 text-sm">{{
                  article.date
                }}</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-4xl font-medium text-stone-100 title-font mb-2">
                  {{ article.title }}
                </h2>
                <p class="text-stone-100 leading-relaxed text-2xl">
                  {{ article.content }}
                </p>
                <!-- <a class="text-indigo-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a> -->
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const articles = ref([
  {
    category: "Osahene Tech Lab",
    date: "January, 2022 - to present",
    title: "Lead Software Developer",
    content:
      "A startup company created by myself. So far, I have four projects to my credit.",
  },
  {
    category: "Temple Christian International School",
    date: "Jan, 2021 - January, 2024",
    title: "Modern Language tutor and Administrative Assistant",
    content:
      "Taught IGCSE French language and English Literature. I doubled as an administrative assistant, where I developped a management system for generating academic report and transcripts for students.",
  },
  {
    category: "The Church of Pentecost",
    date: "May, 2018 - Jan, 2021",
    title: "Head of Statistics Team",
    content:
      "Designed and developped Microsoft Excel workbooks for the data collection, data analysis and generating of timely reports.",
  },
  {
    category: "Wioso Senior High School (Alma Mater Education)",
    date: "Oct, 2015 - Jan, 2021",
    title: "Modern Language tutor and Headmaster",
    content:
      "Taught WASSCE English language, French language and English Literature. I doubled as the headmaster where I saw to the day to day running of the school; schedule academic programs for the students, organize career guidance programs and also developed a school management system for generating academic reports and transcripts.",
  },
]);

onMounted(() => {
  const articles = document.querySelectorAll(".article");

  articles.forEach((article) => {
    gsap.set(article, { opacity: 0, y: 60 });

    ScrollTrigger.create({
      trigger: article,
      start: "top 80%",
      end: "top 20%",
      onEnter: () => {
        gsap.to(article, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
      },
      onLeaveBack: () => {
        gsap.to(article, { opacity: 0, y: 60, duration: 1, ease: "power2.in" });
      },
    });
  });

  gsap.fromTo(
    ".cert",
    { x: "0%" },
    {
      x: "0%",
      scrollTrigger: {
        trigger: ".cert",
        start: "1400vh bottom",
        end: "1450vh top",
        toggleActions: "restart none none reverse",
      },
    }
  );
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>

<style scoped>
.cert {
  transform: translateX(0);
}

.cert-container {
  overflow: hidden;
}
li {
  position: relative;
  margin-bottom: 5px;
  padding-bottom: 2.5em;
  padding-left: 1.5rem;
}

li:last-child {
  padding-bottom: 0;
}
.marker {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15px;
}
.marker:before {
  background: #1613d4;
  border: 3px solid transparent;
  border-radius: 100%;
  content: "";
  display: block;
  height: 15px;
  position: absolute;
  top: 4px;
  left: 0;
  width: 15px;
  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
}
.marker:after {
  content: "";
  width: 3px;
  background: #ccd5db;
  display: block;
  position: absolute;
  top: 24px;
  bottom: 0;
  left: 6px;
}
li:last-child .marker:after {
  content: "";
}

li:not(.period):hover .marker:before {
  background: transparent;
  border: 3px solid #ff6b6b;
}
</style>
