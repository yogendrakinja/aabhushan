<script setup>
const { $gsap } = useNuxtApp();
const isLoading = ref(true);
const { $ScrollSmoother } = useNuxtApp();

onMounted(() => {
  $ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.5, // Seconds it takes to "catch up" to scroll position
    effects: true, // Enables data-speed and data-lag attributes
  });
  if (document.readyState === "complete") {
    isLoading.value = false;
  } else {
    window.addEventListener(
      "load",
      () => {
        isLoading.value = false;
      },
      { once: true },
    );

    // fallback if the load event doesn’t happen (SPA route changes)
    setTimeout(() => {
      if (isLoading.value) isLoading.value = false;
    }, 3000);
  }
});
</script>
<template>
  <div class="layout-with-loader">
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <p class="loading-text">Loading…</p>
    </div>
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <UApp :toaster="{ expand: false }" :class="{ blurred: isLoading }">
          <AppHeader />
          <UMain>
            <slot />
          </UMain>
          <AppFooter />
        </UApp>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loading-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255);
  color: rgb(41, 41, 41);
  z-index: 9999;
}

.loading-spinner {
  width: 48px;
  height: 48px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top-color: #272727;
  border-radius: 9999px;
  animation: spin 0.75s linear infinite;
}

.loading-text {
  margin-top: 12px;
  font-weight: 600;
  letter-spacing: 0.03em;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.blurred {
  filter: blur(2px);
  pointer-events: none;
  user-select: none;
}
</style>
