<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="-my-8 divide-y-2 divide-gray-100">
        <div
          v-for="(article, index) in articles"
          :key="index"
          class="py-8 flex flex-wrap md:flex-nowrap article"
        >
          <ul class="edu_body">
            <li class="edu_body_content">
              <div class="marker"></div>
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">
                  {{ article.category }}
                </span>
                <span class="mt-1 text-gray-500 text-sm">{{
                  article.date
                }}</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  {{ article.title }}
                </h2>
                <p class="leading-relaxed">{{ article.content }}</p>
                <a class="text-indigo-500 inline-flex items-center mt-4">
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
                </a>
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

const articles = ref([
  {
    category: "Microsoft",
    date: "July, 2023",
    title: "Microsoft Certified: Azure Data Scientist Associate",
    content:
      "Design and prepare a machine learning solution, Explore data and train models, Prepare a model for deployment, Deploy and retrain a model",
  },
  {
    category: "WorldQuant University",
    date: "Dec, 2022",
    title: "Applied Data Science Lab",
    content:
      "Earners of this badge have completed eight end-to-end, applied data science projects. In each project, they accessed data from files, SQL and NoSQL databases and APIs. They have demonstrated their ability to explore and clean data, create functions and ETL pipelines to prepare training sets. They have built machine learning models for supervised and unsupervised learning tasks, and have created visualizations to explain data characteristics and model predictions for non-technical audiences.",
  },
  {
    category: "University of Education, Winneba",
    date: "Aug, 2017",
    title: "Master of Education in French",
    content:
      "The Master of Education in French programme is designed to offer higher professional training to teachers of French for the pre-tertiary levels in Ghana. Graduates from the programme are expected to be competent and professionally trained teachers of French.",
  },
  {
    category: "University of Education, Winneba",
    date: "Jul, 2013",
    title: "Bachelor of Arts in French Education",
    content:
      "The programme is designed to produce competent and professionally trained teachers who shall be able to teach French at the pre-tertiary levels in Ghana, conduct research, disseminate knowledge and influence policies on French Education in Ghana.",
  },
]);

onMounted(() => {
  const articles = document.querySelectorAll(".article");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  articles.forEach((article) => {
    gsap.set(article, { opacity: 0, y: 50 });
    observer.observe(article);
  });
});

onBeforeUnmount(() => {
  observer.disconnect();
});
</script>

<style scoped>
li {
  position: relative;
  margin-bottom: 5px;
  padding-bottom: 2.5em;
  padding-left: 3rem;
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
