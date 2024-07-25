<template>
  <div>
    <section class="main-body">
      <h2>Scroll To Begin</h2>
    </section>
    <div class="box">
      <h2 class="text1">Scroll Trigger is Awesome</h2>
      <h2 class="text2">This is My First Code</h2>
      <h2 class="text3">How it is?</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Google_Lens_-_new_logo.png/600px-Google_Lens_-_new_logo.png"
        alt=""
        class="logo"
      />
    </div>
    <div class="box2">
      <h2 class="text4">Stay Tuned</h2>
      <h2 class="text5">For more Videos</h2>
      <h2 class="text6">Thanks for Watching :)</h2>
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
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".box",
        start: "center center",
        end: "bottom top",
        markers: false,
        scrub: true,
        pin: true,
      },
    })
    .from(".text1", { x: innerWidth * 1 })
    .from(".text2", { x: innerWidth * -1 })
    .from(".text3", { x: innerWidth * 1 })
    .from(".logo", { y: innerHeight * 1, rotate: 360 });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".box2",
        start: "center center",
        end: "bottom top",
        markers: false,
        scrub: false,
        pin: false,
      },
    })
    .from(".box2", { opacity: 0 })
    .from(".text4", { y: innerHeight * 1 })
    .from(".text5", { y: innerHeight * 1 })
    .from(".text6", { y: innerHeight * 1 });
});
</script>
