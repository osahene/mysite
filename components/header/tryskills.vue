<template>
  <div>
    <div>
      <div class="bg-slate-300 pl-5">
        <h1 class="ml-1 mt-4 text-6xl text-slate-400">Skills</h1>
      </div>
      <div class="overflow-hidden bg-slate-300 p-5">
        <div class="flex flex-col gap-6">
          <div class="will flex items-center gap-6">
            <div
              class="flex flex-shrink-0 animate-right items-start justify-between gap-6"
            >
              <!-- base card -->
              <div
                v-for="(item, i) in skills"
                :key="i"
                class="flex flex-shrink-0 items-center gap-4 whitespace-nowrap rounded-[14px] bg-white py-3.5 pl-5 pr-6 shadow-[0px_6px_50px_-32px_rgba(107,110,148,0.15)] dark:bg-white/15"
              >
                <div class="aspect-square w-full max-w-[64px] rounded-full">
                  <img class="w-[70px] h-[70px]" :src="item.image" />
                </div>
                <div>
                  <span
                    class="block font-satoshi text-lg font-bold text-dark dark:text-white"
                    >{{ item.title }}</span
                  ><span
                    class="font-satoshi text-base font-medium text-body after:mx-2.5 after:inline-block after:h-2.5 after:w-px after:bg-gray-4 last-of-type:after:hidden dark:text-gray-5"
                    >{{ item.des }}</span
                  >
                </div>
              </div>
            </div>
            <!-- base card end -->
          </div>
          <div class="will flex items-center gap-6">
            <div
              class="flex flex-shrink-0 animate-left items-start justify-between gap-6"
            >
              <!-- base card starts -->
              <div
                v-for="(item, i) in skillset"
                :key="i"
                class="flex flex-shrink-0 items-center gap-4 whitespace-nowrap rounded-[14px] bg-white py-3.5 pl-5 pr-6 shadow-[0px_6px_50px_-32px_rgba(107,110,148,0.15)] dark:bg-white/15"
              >
                <div class="aspect-square w-full max-w-[64px] rounded-full">
                  <img class="w-[70px] h-[70px]" :src="item.image" />
                </div>
                <div>
                  <span
                    class="block font-satoshi text-lg font-bold text-dark dark:text-white"
                    >{{ item.title }}</span
                  ><span
                    class="font-satoshi text-base font-medium text-body after:mx-2.5 after:inline-block after:h-2.5 after:w-px after:bg-gray-4 last-of-type:after:hidden dark:text-gray-5"
                    >{{ item.des }}</span
                  >
                </div>
              </div>
              <!-- base card 2 ends -->
            </div>
          </div>
        </div>
        <div class="mt-5 justify-around flex">
          <button
            @click.prevent="viewSkill"
            class="px-5 py-2.5 text-sm font-medium text-white bg-slate-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-slate-800 dark:hover:bg-slate-500 dark:focus:ring-blue-800"
          >
            <span class="text-lg font-bold">View all</span>
            <span class="ml-4">
              <font-awesome-icon
                :icon="['fas', 'arrow-right']"
                fade
                size="lg"
              />
            </span>
          </button>
        </div>
        <skillComp :card="isDialogOpen" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
const skills = ref([
  {
    title: "Python",
    des: "A high-level, general purpose programming language.",
    image: "/mysite/svg/python.svg",
  },
  {
    title: "Django",
    des: "A python-based web framework that runs on a web server.",
    image: "/mysite/svg/django.svg",
  },
  {
    title: "Microsoft Excel",
    des: "A spreadsheet editor for calculations, graphing, etc.",
    image: "/mysite/svg/excel.svg",
  },
  {
    title: "Google Sheets",
    des: "Google's web-based spreadsheet editor for calculations, graphing, pivot tables, etc.",
    image: "/mysite/svg/sheets.svg",
  },
  {
    title: "Azure",
    des: "Microsoft cloud computing platform.",
    image: "/mysite/svg/azure.svg",
  },
  {
    title: "Flask",
    des: "Python micro web framework for Object Relational Mapping (ORM).",
    image: "/mysite/svg/flask.svg",
  },
  {
    title: "Vue",
    des: "A progressive javascript framework built on HTML, CSS, and Javascript.",
    image: "/mysite/svg/vue.svg",
  },
  {
    title: "Quasar",
    des: "Frontend framework built on Vue for building PWA, SSR, desktop apps, etc",
    image: "/mysite/svg/quasar.svg",
  },
  {
    title: "SQL",
    des: "A standard language for accessing and manipulating database.",
    image: "/mysite/svg/sql.svg",
  },
]);
const skillset = ref([
  {
    title: "Nuxt",
    des: "A javascript library built on Vue.js, Nitro and vite for frontend tasks.",
    image: "/mysite/svg/nuxt.svg",
  },
  {
    title: "PostgreSQL",
    des: "An open-source relational database management system (RDBMS) for handling structured data.",
    image: "/mysite/svg/postgresql.svg",
  },
  {
    title: "Tailwind CSS",
    des: "A utility-first CSS framework for rapidly executing frontend tasks.",
    image: "/mysite/svg/tailwind.svg",
  },
  {
    title: "Tensorflow",
    des: "An open-source library for machine learning and artificial intelligence.",
    image: "/mysite/svg/tensorflow.svg",
  },
  { title: "Jupyter", image: "/mysite/svg/jupyter.svg" },
]);
const isDialogOpen = ref(false);

const skillComp = defineAsyncComponent(() =>
  import("@/components/header/skillsModal.vue")
);

const viewSkill = () => {
  isDialogOpen.value = true;
  console.log("dialog", isDialogOpen);
  console.log("dialog", isDialogOpen.value);
};
</script>

<style scoped>
*,
:after,
:before {
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
}
:after,
:before {
  --tw-content: "";
}
:disabled {
  cursor: default;
}

*,
:after,
:before {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-scroll-snap-strictness: proximity;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
}
.block {
  display: block;
}
.flex {
  display: flex;
}
.aspect-square {
  aspect-ratio: 1/1;
}
.w-full {
  width: 100%;
}
.max-w-\[64px\] {
  max-width: 64px;
}
.flex-shrink-0 {
  flex-shrink: 0;
}
.animate-left {
  animation: left 70s linear infinite alternate;
}
.animate-right {
  animation: right 70s linear infinite alternate;
}
.flex-col {
  flex-direction: column;
}
.items-start {
  align-items: flex-start;
}
.items-center {
  align-items: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-4 {
  gap: 1rem;
}
.gap-6 {
  gap: 1.5rem;
}
.overflow-hidden {
  overflow: hidden;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.rounded-\[14px\] {
  border-radius: 14px;
}
.rounded-\[30px\] {
  border-radius: 30px;
}
.rounded-full {
  border-radius: 9999px;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.bg-\[linear-gradient\(90deg\2c \#F7E8F3_0\%\2c \#E0E0FC_100\%\)\] {
  background-image: linear-gradient(90deg, #f7e8f3, #e0e0fc);
}
.p-10 {
  padding: 2.5rem;
}
.py-3\.5 {
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
}
.pl-5 {
  padding-left: 1.25rem;
}
.pr-6 {
  padding-right: 1.5rem;
}
.font-satoshi {
  font-family: Satoshi, sans-serif;
}
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.font-bold {
  font-weight: 700;
}
.font-medium {
  font-weight: 500;
}
.text-body {
  --tw-text-opacity: 1;
  color: rgb(100 116 139 / var(--tw-text-opacity));
}
.text-dark {
  --tw-text-opacity: 1;
  color: rgb(28 39 76 / var(--tw-text-opacity));
}
.shadow-\[0px_6px_50px_-32px_rgba\(107\2c 110\2c 148\2c 0\.15\)\] {
  --tw-shadow: 0px 6px 50px -32px rgba(107, 110, 148, 0.15);
  --tw-shadow-colored: 0px 6px 50px -32px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.after\:mx-2\.5:after {
  content: var(--tw-content);
  margin-left: 0.625rem;
  margin-right: 0.625rem;
}
.after\:inline-block:after {
  content: var(--tw-content);
  display: inline-block;
}
.after\:h-2\.5:after {
  content: var(--tw-content);
  height: 0.625rem;
}
.after\:w-px:after {
  content: var(--tw-content);
  width: 1px;
}
.after\:bg-gray-4:after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}
/*! CSS Used keyframes */
@keyframes left {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  to {
    transform: translateZ(0);
  }
}
@keyframes right {
  0% {
    transform: translateZ(0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
}

.will {
  will-change: contents, transform;
}
</style>
