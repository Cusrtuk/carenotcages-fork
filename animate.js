// window.alert("Hello! I am an alert box!!");

// let tl = gsap.timeline();
// tl.from(".first-title", { x: 100, duration: 2 });

gsap.from(".first-title", {
  scrollTrigger: ".first-title",
  y: -50,
  opacity: 0,
  duration: 1,
});

gsap.from(".title-info", {
  scrollTrigger: ".title-info",
  y: -50,
  opacity: 0,
  delay: 2,
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
    toggleActions: "restart none none none",
  },
  y: -50,
  opacity: 0,
  duration: 3,
});

gsap.from(".fade3", {
  scrollTrigger: {
    trigger: ".fade3",
    toggleActions: "restart none none none",
  },
  y: -50,
  opacity: 0,
  duration: 3,
});

gsap.from(".fade4", {
  scrollTrigger: {
    trigger: ".fade4",
    toggleActions: "restart none none none",
  },
  y: -50,
  opacity: 0,
  duration: 3,
});

gsap.from(".sam", {
  scrollTrigger: {
    trigger: ".sam",
    toggleActions: "restart none none none",
  },
  y: -100,
  opacity: 0,
  duration: 1.5,
});

gsap.from(".study-left", {
  scrollTrigger: {
    trigger: ".study-left",
    toggleActions: "restart none none none",
  },
  x: -150,
  opacity: 0.5,
  duration: 1,
});

gsap.from(".study-right", {
  scrollTrigger: {
    trigger: ".study-right",
    toggleActions: "restart none none none",
  },
  x: 150,
  opacity: 0.5,
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

gsap.from(".last", {
  scrollTrigger: {
    trigger: ".last",
    toggleActions: "restart none none none",
  },
  border: "10px solid rgba(39, 128, 245, 0)",
  duration: 6,
});
