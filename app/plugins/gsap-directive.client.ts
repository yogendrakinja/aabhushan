import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("gsap", {
    mounted(el, binding) {
      const { scroll, ...options } = binding.value || {};

      gsap?.from(el, {
        opacity: 0,
        y: 50,
        duration: 1,
        ...options,
        ...(scroll && {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }),
      });
    },
    getSSRProps() {
      return {};
    }
  });
});
