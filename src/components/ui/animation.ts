import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

export const flightAnimation = () => {
  let ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cunt",
        start: "top 90%",
        //   markers: true,
      },
    });
    const text = new SplitType(".myText", { types: "lines" });
    const lines = text.lines;
    console.log(lines);
    tl.set(text.lines, { y: 150, opacity: 0 });
    tl.to(text.lines, {
      y: 0,
      opacity: 1,
      ease: "expo.out",
      duration: 1.5,
      stagger: 0.1,
    });
  });

  return () => ctx.revert();
};

export const imageSlide = () => {
  const imgTl = gsap.timeline({
    scrollTrigger: { trigger: ".main-area", start: "top center" },
  });
//   document.querySelectorAll(".area-section") => {
//     imgTl.set(element, {
//       y: 100,
//       opacity: 0,
//     });
//     imgTl.to(element, {
//       y: 0,
//       opacity: 1,
//       duration: 0.5,
//     });
//   });
imgTl.set('.area-section', {
    y: 100,
    opacity: 0,
  });
  imgTl.to('.area-section', {
    y: 0,
    opacity: 1,
    duration: 0.5,
  });
};
