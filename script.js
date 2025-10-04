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


// gsap.to("#about img",{
//   scrollTrigger:{
//     trigger:"#about img",
//     start:"top 80%"
//   },
//   scale:1.7,
//   duration:1,
//   ease:"power3.out",
//   delay:1,
//   opacity:1,
//   stagger:0.3,
//   ease:"power3.out",
//   scrub:true,
  


// })



///  hero  video  container animation

gsap.registerPlugin(ScrollTrigger);

gsap.to("#video-container video", {
  scrollTrigger: {
    trigger: "#video-container",
start: "top 80%",
opacity:1,
    end: "botttom 10%",
    scrub: true,
    markers: false
  },
  scale:10,
  duration: 1,
  ease: "power3.out"
});
gsap.to("#hero #videoContainer", {
  scrollTrigger: {
    trigger: "#video-container",  
start: "top 80%",


    end: "botttom 10%",
    scrub: true,
    markers: false
  },
  opacity:0,
  duration: 1,
  ease: "power3.out"
});

// 
gsap.to(videoContainer, {
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    end: "bottom center",
    scrub: 1.5,
  },
  scale: 20,
  opacity: 0.8,     // slightly fade
  ease: "power2.inOut"
});
//

  // gsap.from("#about h2", {
  //   opacity: 0,
  //   scale: 0.8,
  //   duration: 1.2,
  //   scrollTrigger: {
  //     trigger: "#about",
  //     start: "top 80%",
  //   },
  // });



  // // about page animation
  // gsap.from("#about h2", {
  //   scrollTrigger: {
  //     trigger: "#about",
  //     start: "top 80%",
  //   },
  //   y: 80,
  //   opacity: 0,
  //   duration: 1,
  //   ease: "power3.out"
  // });

  // Paragraph
  // gsap.from("#about p", {
  //   scrollTrigger: {
  //     trigger: "#about",
  //     start: "top 70%",
  //   },
  //   y: 60,
  //   opacity: 0,
  //   duration: 1.2,
  //   delay: 0.2,
  //   ease: "power2.out"
  // });

  // Image + text reveal
  // gsap.from("#about .group", {
  //   scrollTrigger: {
  //     trigger: "#about .group",
  //     start: "top 75%",
  //   },
   
  //   opacity: 0,
  //   duration: 1.2,
  //   ease: "power3.out",
  //   delay: 0.4,
  //   stagger: 0.3,
  //   scrub: true,
  //   reverse: true

  // });
// gsap.registerPlugin(ScrollTrigger);

// // Zoom In + Out on #about img
// gsap.to("#about img", {
//   scrollTrigger: {
//     trigger: "#about img",
//     start: "top 80%",
//     end: "bottom 20%",
//     scrub: true,
//   },
//   scale: 1.7,
//   opacity: 1,
//   ease: "power3.out"
// });

// const imgZoomTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#about img",
//     start: "top 80%",
//     end: "bottom 20%",
//     scrub: true,
//   }
// });

// imgZoomTl.to("#about img", {
//   scale: 1.7,
//   opacity: 1,
//   ease: "power3.out"
// });

 // 
 const aboutSection = document.getElementById("about");
 aboutSection.addEventListener("mouseenter", () => {
  // Cursor grows + shows text
  cursor.classList.add("cursor-active");
  cursor.innerHTML = `<span class="text-xl  text-black font-semibold w-full ">View More</span>`;

  // Blob changes to fire glow
  blob.classList.add("blob-active");
});

aboutSection.addEventListener("mouseleave", () => {
  // Reset cursor
  cursor.classList.remove("cursor-active");
  cursor.innerHTML = "";

  // Reset blob
  blob.classList.remove("blob-active");
});
// anime
gsap.fromTo(blob, 
  { scale: 0.8, opacity: 0.5 },
  {
    scale: 1.2,
    opacity: 0.9,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#about",
      start: "top center",
      toggleActions: "play reverse play reverse"
    }
  }
);






// Left column cards animate UP
gsap.from(".service-card-up", {
  scrollTrigger: {
    trigger: "#services",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true
  },
  y: 100,
  opacity: 0,
  stagger: 0.2,
  ease: "power4.out"
});

// Right column cards animate DOWN
gsap.from(".service-card-down", {
  scrollTrigger: {
    trigger: "#services",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true
  },
  y: -100,
  opacity: 0,
  stagger: 0.2,
  ease: "power4.out"
});gsap.registerPlugin(ScrollTrigger);

const scrollTrack = document.getElementById("scroll-track");
const cards = gsap.utils.toArray(".scroll-card");

gsap.to(scrollTrack, {
  xPercent: -50,
  repeat: -1,
  duration: 20,
  ease: "linear"
});


