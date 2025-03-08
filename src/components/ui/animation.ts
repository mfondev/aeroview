import SplitType from "split-type";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
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
    tl.set(text.lines, { y: 50, opacity: 0 });
    tl.to(text.lines, {
      y: 0,
      opacity: 1,
      ease: "expo.out",
      duration: 1,
      stagger: 0.1,
    });
    // tl.fromTo("",{},{})
  });

  return () => ctx.revert();
};

export const modalSlide = () => {
  const tl = gsap.timeline({
    scrollTrigger: { trigger: ".main-area", start: "top center" },
  });
  tl.to(".head-text1", { y: -35, duration: 1 });
  tl.to(".head-text2", { y: -34, duration: 0.5 });
  tl.fromTo(
    ".area-section",
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "ease.in",
    },
    "-=1"
  );
};

export const summaryAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: { trigger: ".summary-area", start: "top 20%" },
  });
  tl.fromTo(
    ".flight-summary",
    {
      y: 60,
      opacity: 0,
      height: "400px",
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      height: "449px",
      ease: "ease.in",
    }
  );
  tl.fromTo(
    "#first-text",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "ease.in",
    },
    "-=0.5"
  );
  tl.fromTo(
    "#second-text",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "ease.in",
    },
    "-=0.5"
  );
};

export const ctaAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: { trigger: "#cta-area", start: "top 20%" },
  });
  tl.fromTo(
    "#cta-text",
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "ease.in",
    }
  );
  tl.fromTo(
    ".cta-img",
    { width: "50px", height: "50px", borderRadius: "5px", opacity: 0 },
    {
      width: "420px",
      height: "360px",
      borderRadius: "20px",
      opacity: 1,
      duration: 0.7,
      ease: "power.out",
    }
  );
};

export const faqAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: { trigger: ".faq-container", start: "top center" },
  });
  tl.fromTo(
    "#faq-header",
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "ease.in",
    }
  );
  document.querySelectorAll("#question").forEach((faq, index) => {
    tl.fromTo(
      faq,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "ease.in",
      }
    );
  });
};

export const tstAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: { trigger: ".tst-container", start: "top center" },
  });
  tl.fromTo(
    "#tst-text",
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "ease.in",
    }
  );
  tl.fromTo(
    ".tst-img",
    { opacity: 0, scale: 1.5 },
    { opacity: 1, scale: 1, duration: 1.5, ease: "expo.out" },
    "-=0.5"
  );
};

export const footerAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#footer",
      start: "top 60%",
    },
  });
  tl.fromTo(
    ".ftr-element",
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "ease.in",
    }
  );
};


// grid items 
