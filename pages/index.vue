<template>
  <div>
    <div class="loader df aic jcc">
      <div>
        <h1>Loading</h1>
        <h2 class="loader--text">0%</h2>
      </div>
    </div>
    <div class="demo-wrapper">
      <header class="df aic jcc">
        <div>
          <h1>ScrollTrigger</h1>
          <h2>demo</h2>
        </div>
      </header>
      <section class="demo-text">
        <div class="wrapper text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
      </section>
      <section class="demo-gallery">
        <ul class="wrapper">
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=42"
              width="1240"
            />
          </li>
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=77"
              width="1240"
            />
          </li>
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=73"
              width="1240"
            />
          </li>
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=1"
              width="1240"
            />
          </li>
        </ul>
      </section>
      <section class="demo-gallery">
        <ul class="wrapper">
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=136"
              width="1240"
            />
          </li>
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=125"
              width="1240"
            />
          </li>
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=160"
              width="1240"
            />
          </li>
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=181"
              width="1240"
            />
          </li>
        </ul>
      </section>
      <section class="demo-gallery">
        <ul class="wrapper">
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=82"
              width="1240"
            />
          </li>
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=119"
              width="1240"
            />
          </li>
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=26"
              width="1240"
            />
          </li>
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=21"
              width="1240"
            />
          </li>
        </ul>
      </section>
      <section class="demo-gallery">
        <ul class="wrapper">
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=95"
              width="1240"
            />
          </li>
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=92"
              width="1240"
            />
          </li>
          <li>
            <img
              height="874"
              src="https://source.unsplash.com/random/1240x874?sig=184"
              width="1240"
            />
          </li>
        </ul>
      </section>
      <section class="demo-text">
        <div class="wrapper text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
      </section>
      <footer class="df aic jcc">
        <p>Images from <a href="https://unsplash.com/">Unsplash</a></p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import imagesLoaded from "imagesloaded";
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const images = gsap.utils.toArray("img");
  const loader = document.querySelector(".loader--text");
  const updateProgress = (instance) =>
    (loader.textContent = `${Math.round(
      (instance.progressedCount * 100) / images.length
    )}%`);

  const showDemo = () => {
    document.body.style.overflow = "auto";
    document.scrollingElement.scrollTo(0, 0);
    gsap.to(document.querySelector(".loader"), { autoAlpha: 0 });

    gsap.utils.toArray("section").forEach((section, index) => {
      const w = section.querySelector(".wrapper");
      const [x, xEnd] =
        index % 2
          ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
          : [w.scrollWidth * -1, 0];
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
          },
        }
      );
    });
  };
  imagesLoaded(images).on("progress", updateProgress).on("always", showDemo);
});
</script>

<style>
@import url("~/assets/css/main.css");
</style>
