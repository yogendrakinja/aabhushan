<script setup lang="ts">
const props = defineProps<{
  title?: string;
  description?: string;
  whyChooseUs?: { icon: string; title: string; description: string }[];
}>();
</script>
<template>
  <div
    class="w-full flex flex-col justify-center items-center relative isolate"
  >
    <HeroBackground />
    <div class="w-full lg:w-10/12 grid grid-cols-1 md:grid-cols-2 gap-3 mt-56">
      <div class="basis-1/2">
        <ClientOnly>
          <h1
            v-gsap-timeline-split
            class="playfair text-[8rem] leading-[0.8] font-bold uppercase"
          >
            {{ props.title }}
          </h1>
        </ClientOnly>
        <p class="text-2xl font-extralight">{{ props.description }}</p>
      </div>
    </div>
    <div class="w-full lg:w-[80%] mt-44 grid grid-cols-2 lg:grid-cols-4">
      <div
        class="p-4 text-center border border-primary/30"
        v-for="data in props.whyChooseUs"
      >
        <UIcon :name="`i-lucide-${data.icon}`" class="size-8 text-primary" />
        <h4 class="text-2xl playfair uppercase">{{ data.title }}</h4>
        <p class="text-sm font-extralight">{{ data.description }}</p>
      </div>
    </div>
  </div>
</template>
