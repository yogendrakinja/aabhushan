<script setup lang="ts">
const props = defineProps<{
  title?: string;
  description?: string;
}>();
const { splitWords } = useTextSplitter();
const words = splitWords(props.title || "");
</script>
<template>
  <div
    class="w-full flex items-center justify-center h-screen relative isolate"
  >
    <div class="absolute w-full -top-px text-primary">
      <svg
        viewBox="0 0 1440 181"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="pointer-events-none"
      >
        <mask id="path-1-inside-1_414_5526" fill="white">
          <path d="M0 0H1440V181H0V0Z"></path>
        </mask>
        <path
          d="M0 0H1440V181H0V0Z"
          fill="url(#paint0_linear_414_5526)"
          fill-opacity="0.22"
        ></path>
        <path
          d="M0 2H1440V-2H0V2Z"
          fill="url(#paint1_linear_414_5526)"
          mask="url(#path-1-inside-1_414_5526)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_414_5526"
            x1="720"
            y1="0"
            x2="720"
            y2="181"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="currentColor"></stop>
            <stop offset="1" stop-color="currentColor" stop-opacity="0"></stop>
          </linearGradient>
          <linearGradient
            id="paint1_linear_414_5526"
            x1="0"
            y1="90.5"
            x2="1440"
            y2="90.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="currentColor" stop-opacity="0"></stop>
            <stop offset="0.395" stop-color="currentColor"></stop>
            <stop offset="1" stop-color="currentColor" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="w-[80%] flex">
      <h1
        v-gsap-timeline
        class="basis-1/2 text-[7.5rem] leading-tight font-bold uppercase"
      >
        <div
          class="overflow-hidden inline-block mr-3 word"
          :key="index"
          v-for="(word, index) in words"
        >
          <p data-animate>{{ word }}</p>
        </div>
      </h1>
      <div></div>
    </div>
    <!-- <p class="text-lg text-muted">{{ props.description }}</p> -->
  </div>
</template>
