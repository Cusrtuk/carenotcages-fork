// window.alert("Hello! I am an alert box!!");

// let tl = gsap.timeline();
// tl.from(".first-title", { x: 100, duration: 2 });

gsap.from(".first-title", {
  scrollTrigger: { trigger: ".first-title", scrub: true },
  y: -50,
  opacity: 0,
  //   duration: 1,
});

gsap.from(".title-info", {
  scrollTrigger: {
    trigger: ".title-info",
    // scrub: true,
    start: "center bottom",
  },
  y: -50,
  opacity: 0,
  delay: 1,
  duration: 1,
});

gsap.from(".fade1", {
  scrollTrigger: {
    trigger: ".fade1",
    toggleActions: "restart none none none",
  },
  y: -50,
  opacity: 0,
  duration: 1,
});

gsap.from(".fade2", {
  scrollTrigger: {
    trigger: ".fade2",
    // scrub: true,
    // toggleActions: "restart none none none",
  },
  y: -50,
  opacity: 0,
  duration: 1,
});

gsap.from(".fade3", {
  scrollTrigger: {
    trigger: ".fade3",
    // toggleActions: "restart none none none",
  },
  y: -50,
  opacity: 0,
  duration: 3,
});

gsap.from(".sam", {
  scrollTrigger: {
    trigger: ".sam",
    scrub: true,
    // toggleActions: "restart none none none",
  },
  y: -150,
  opacity: 0,
  //   duration: 1.5,
});

gsap.from(".fade4", {
  scrollTrigger: {
    trigger: ".fade4",
    // scrub: true,
    // toggleActions: "restart none none none",
  },
  y: -50,
  opacity: 0,
  duration: 3,
});

gsap.from(".study-left", {
  scrollTrigger: {
    trigger: ".study-left",
    start: "top 70%",
    // toggleActions: "restart none none none",
  },
  x: -150,
  opacity: 0.5,
  duration: 1,
});

gsap.from(".study-right", {
  scrollTrigger: {
    trigger: ".study-right",
    start: "top 70%",
    // toggleActions: "restart none none none",
  },
  x: 250,
  opacity: 0,
  duration: 1,
});

gsap.from(".ray", {
  scrollTrigger: {
    trigger: ".ray",
    toggleActions: "restart none none none",
  },
  opacity: 0,
  duration: 1,
});

// gsap.from(".event", {
//   scrollTrigger: {
//     trigger: ".event",
//     toggleActions: "restart none none none",
//   },
//   y: 100,
//   opacity: 0,
//   delay: 0.5,
//   duration: 1,
// });

// gsap.from(".event", {
//   scrollTrigger: {
//     trigger: ".event",
//     toggleActions: "restart none none none",
//   },
//   scale: 1.2,
//   opacity: 0,
//   duration: 2,
// });

// gsap.from(".fade7", {
//   scrollTrigger: {
//     trigger: ".fade7",
//     toggleActions: "restart none none none",
//   },
//   x: -100,
//   opacity: 0,
//   duration: 2,
// });

gsap.from(".heart", {
  scrollTrigger: {
    trigger: ".heart",
    scrub: true,
    start: "center bottom",
    end: "top center",
    toggleActions: "restart none none none",
  },
  x: -100,
  //   duration: 2,
});

gsap.from(".house", {
  scrollTrigger: {
    trigger: ".house",
    scrub: true,
    start: "center bottom",
    end: "top center",
    toggleActions: "restart none none none",
  },
  x: -50,
  //   duration: 2,
});

gsap.from(".head", {
  scrollTrigger: {
    trigger: ".head",
    scrub: true,
    start: "center bottom",
    end: "top center",
    toggleActions: "restart none none none",
  },
  x: 50,
  //   duration: 2,
});

gsap.from(".conflict", {
  scrollTrigger: {
    trigger: ".conflict",
    scrub: true,
    start: "center bottom",
    end: "top center",
    toggleActions: "restart none none none",
  },
  x: 100,
  //   duration: 2,
});

gsap.from(".last", {
  scrollTrigger: {
    trigger: ".last",
    toggleActions: "restart none none none",
  },
  border: "10px solid rgba(39, 128, 245, 0)",
  duration: 20,
});
