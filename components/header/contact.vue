<template>
  <div>
    <section class="bg-blue-50 dark:bg-slate-800" id="contact">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div class="mb-4">
          <div
            class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12"
          >
            <p
              class="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200"
            >
              Contact
            </p>
            <h2
              class="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl"
            >
              Get in Touch
            </h2>
            <p
              class="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400"
            >
              In hac habitasse platea dictumst
            </p>
          </div>
        </div>
        <div class="flex items-stretch justify-center">
          <div class="grid md:grid-cols-2">
            <div class="h-full pr-6">
              <p
                class="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400"
              ></p>
              <ul class="mb-6 md:mb-0">
                <li class="flex">
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path
                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                      ></path>
                    </svg>
                  </div>
                  <div class="ml-4 mb-4">
                    <h3
                      class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white"
                    >
                      Location
                    </h3>
                    <p class="text-gray-600 dark:text-slate-400">
                      Plt 559 Block C, Police City
                    </p>
                    <p class="text-gray-600 dark:text-slate-400">
                      East Legon Hills, Ashalley Botwe
                    </p>
                    <p class="text-gray-600 dark:text-slate-400">
                      Accra, Ghana
                    </p>
                  </div>
                </li>
                <a
                  href="https://www.linkedin.com/in/david-adu-tenkorang-b6119b77/"
                >
                  <li class="flex">
                    <div
                      class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50"
                    >
                      <font-awesome-icon :icon="['fab', 'linkedin']" />
                    </div>
                    <div class="ml-4 mb-4 pt-2">
                      <h1
                        class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white"
                      >
                        LinkedIn
                      </h1>
                    </div>
                  </li>
                </a>
                <a href="https://github.com/osahene">
                  <li class="flex">
                    <div
                      class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50"
                    >
                      <font-awesome-icon :icon="['fab', 'github']" />
                    </div>
                    <div class="ml-4 mb-4 pt-2">
                      <h1
                        class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white"
                      >
                        Github
                      </h1>
                    </div>
                  </li>
                </a>
                <a href="https://x.com/Bra_Kwameadu">
                  <li class="flex">
                    <div
                      class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50"
                    >
                      <font-awesome-icon :icon="['fab', 'x-twitter']" />
                    </div>
                    <div class="ml-4 mb-4 pt-2">
                      <h1
                        class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white"
                      >
                        X
                      </h1>
                    </div>
                  </li>
                </a>
                <a href="https://wa.me/233506053020" _blank="true">
                  <li class="flex">
                    <div
                      class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50"
                    >
                      <font-awesome-icon :icon="['fab', 'whatsapp']" />
                    </div>
                    <div class="ml-4 mb-4 pt-2">
                      <h1
                        class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white"
                      >
                        WhatsApp
                      </h1>
                    </div>
                  </li>
                </a>
              </ul>
            </div>
            <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 class="mb-4 text-2xl font-bold dark:text-white">
                Ready to Get Started?
              </h2>
              <form id="contactForm">
                <div class="mb-6">
                  <div class="mx-0 mb-1 sm:mb-4">
                    <div class="mx-0 mb-1 sm:mb-4">
                      <label
                        for="name"
                        class="pb-1 text-xs uppercase tracking-wider"
                      ></label
                      ><input
                        type="text"
                        id="name"
                        autocomplete="given-name"
                        placeholder="Your name"
                        class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="name"
                      />
                    </div>
                    <div class="mx-0 mb-1 sm:mb-4">
                      <label
                        for="email"
                        class="pb-1 text-xs uppercase tracking-wider"
                      ></label
                      ><input
                        type="email"
                        id="email"
                        autocomplete="email"
                        placeholder="Your email address"
                        class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="email"
                      />
                    </div>
                  </div>
                  <div class="mx-0 mb-1 sm:mb-4">
                    <label
                      for="textarea"
                      class="pb-1 text-xs uppercase tracking-wider"
                    ></label
                    ><textarea
                      id="textarea"
                      name="textarea"
                      cols="30"
                      rows="5"
                      placeholder="Write your message..."
                      class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    ></textarea>
                  </div>
                </div>
                <div class="text-center">
                  <button
                    type="submit"
                    class="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row"
      >
        <p class="text-sm text-gray-600">
          © Copyright 2020 Lorem Inc. All rights reserved.
        </p>
        <ul
          class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row"
        >
          <li>
            <a
              href="/"
              class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >F.A.Q</a
            >
          </li>
          <li>
            <a
              href="/"
              class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >Privacy Policy</a
            >
          </li>
          <li>
            <a
              href="/"
              class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >Terms &amp; Conditions</a
            >
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
