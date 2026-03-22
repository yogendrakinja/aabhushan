import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(SplitText);
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("gsap-timeline-split", {
    mounted(el, binding) {
      const { scroll, ...options } = binding.value || {};
      SplitText.create(el, {
        type: "words, lines",
        wordsClass: "word",
        linesClass: "line",
        autoSplit: true,
        onSplit: (self) => {
          return gsap.from(binding.arg == "lines" ? self.lines : self.words, {
            y: 150,
            stagger: 0.3,
            duration: 1,
            ...options,
            ...(scroll || {
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }),
          });
        },
      });
    },
    getSSRProps() {
      return {};
    },
  });
});
