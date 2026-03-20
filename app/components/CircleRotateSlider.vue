<script setup lang="ts">
const { $gsap } = useNuxtApp();
onMounted(() => {
  const cards = $gsap.utils.toArray(".card");
  const totalCards = cards.length;
  const angleStep = 360 / 26; // Spread cards across a portion of the circle3

  cards.forEach((card, i) => {
    $gsap.set(card, {
      rotation: i * angleStep - (angleStep * (totalCards - 1)) / 2,
    });
  });

  // 2. Rotate the entire container on scroll
  $gsap.to(".circle-container", {
    rotation: -0.1, // How much the circle turns as you scroll
    ease: "none",
    duration: 4,
    scrollTrigger: {
      trigger: ".scene",
      start: "top top",
      end: "+=800", // Length of the scroll
      scrub: 1, // Smoothly follows scroll position
      pin: true, // Locks the section in place
      markers: true, // Show start/end markers for debugging
    },
  });
});
</script>
<template>
  <section class="scene">
    <div class="circle-container">
      <div class="card" v-for="i in 7" :key="i">
        <img
          :src="`https://source.unsplash.com/random/300x400?sig=${i}`"
          alt="Random Image"
        />
      </div>
    </div>
  </section>
</template>
<style lang="css" scoped>
.scene {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111;
}

/* The actual circle */
.circle-container {
  position: absolute;
  width: 3000px; /* Diameter */
  height: 3000px; /* Diameter */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%) rotate(80deg);
  /* Move the circle down so only the top arc is visible */
  top: 20%;
}

.card {
  position: absolute;
  width: 250px;
  height: 320px;
  background: #222;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border: 1px solid #444;
  /* THE KEY: Anchor the card to the circle's center */
  /* Radius is half of .circle-container width (400px) */
  transform-origin: center 1500px;
  top: -180px;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}
</style>
