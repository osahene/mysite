<template>
  <div>
    <div
      v-if="card"
      id="modal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden "
    >
      <div class="relative p-4 w-full max-w-2xl max-h-full">
        <div class="relative border-4 border-cyan-400 bg-white rounded-lg shadow dark:bg-gray-700">
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Skills
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              @click="closeModal"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div class="p-4 md:p-5 space-y-4">
            <p
              class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
            >
            <div>
              <span class="text-gray-500">{</span
              >
            </div>
              <span class="ml-4 text-base leading-relaxed text-gray-500 dark:text-gray-400"
                >Python, Django, Flask, Microsoft Excel, Google sheets, Azure, 
              </span>
              <div>

                <span class="ml-4 text-base leading-relaxed text-gray-500 dark:text-gray-400"
                  >Vue, SQL, PostgreSQL, Nuxt, Tailwind CSS, Tensorflow, 
                </span>
              </div>
              <div>

                <span class="ml-4 text-base leading-relaxed text-gray-500 dark:text-gray-400"
                  >PyTorch, Machine Learning, Power BI, GitHub, Progressive Web App, Tensorflow, 
                </span>
              </div>
              <div>

                <span class="ml-4 text-base leading-relaxed text-gray-500 dark:text-gray-400"
                  >Mongo DB
                </span>
              </div>
              <div>
              <span class="text-gray-500">}</span
              ></div>
            </p>
           
          </div>
          <div
            class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              @click="closeModal"
            >
              Close
            </button>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from "vue";

const props = defineProps({
  card: Boolean,
});

const emit = defineEmits(["update:card"]);

const modal = ref(false);

watch(
  () => props.card,
  (newVal) => {
    modal.value = newVal;
  }
);

const closeModal = () => {
  modal.value = false;
  emit("update:card", false); // Emit an event to update the parent component
  console.log("act", modal.value);
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
