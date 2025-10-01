gsap.registerPlugin(ScrollTrigger);

// Hero text split animation
gsap.from(".hero-text span", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  stagger: 0.2,
  ease: "power4.out"
});

// Cursor effect
const cursor = document.getElementById("cursor");
window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.2 });
});

// Blob follows cursor
const blob = document.getElementById("blob");
window.addEventListener("mousemove", (e) => {
  gsap.to(blob, { x: e.clientX - 200, y: e.clientY - 200, duration: 2, ease: "expo.out" });
});

// Magnetic button hover
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { x: 0, y: 0, duration: 0.3 });
  });
});
// Text Split Animation (About Section)
gsap.from(".about-text span, .about-text", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 70%"
  },
  y: 80,
  opacity: 0,
  duration: 1.2,
  stagger: 0.2,
  ease: "power4.out"
});

// Services Cards Reveal
gsap.from(".service-card", {
  scrollTrigger: {
    trigger: "#services",
    start: "top 80%"
  },
  x: (i) => i % 2 === 0 ? -200 : 200,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out"
});

// Horizontal Scroll for Portfolio
let sections = gsap.utils.toArray(".portfolio-wrapper > div");
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#portfolio",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector("#portfolio").offsetWidth
  }
});

// Fullscreen Menu Animation
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
let menuOpen = false;

const menuTl = gsap.timeline({ paused: true })
  .fromTo("#menu", { display: "none", opacity: 0 }, { display: "flex", opacity: 1, duration: 0.5 })
  .from(".menu-link", { y: 100, opacity: 0, stagger: 0.1, ease: "power4.out" }, "-=0.3");

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuTl.play();
    menuOpen = true;
    menuBtn.textContent = "×";
  } else {
    menuTl.reverse();
    menuOpen = false;
    menuBtn.textContent = "☰";
  }
});
