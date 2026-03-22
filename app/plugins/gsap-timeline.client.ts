import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("gsap-timeline", {
    mounted(el, binding) {
      const { scroll, ...options } = binding.value || {};
      const tl = gsap?.timeline();
      const items = el.querySelectorAll("[data-animate]");
      tl.from(items, {
        // opacity: 0,
        y: 100,
        stagger: 0.2,
        skewY: 7,
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
    },
  });
});
