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
    console.log(rect);
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
// let sections = gsap.utils.toArray(".portfolio-wrapper > div");
// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#portfolio",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     end: () => "+=" + document.querySelector("#portfolio").offsetWidth
//   }
// });

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


 const aboutSection = document.getElementById("about");
 aboutSection.addEventListener("mouseenter", () => {
  // Cursor grows + shows text
  cursor.classList.add("cursor-active");
  cursor.innerHTML = `<span class="text-xl text-black font-semibold w-full h-full flex items-center justify-center">
  View More
</span>
`;

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
  { scale: 2, opacity: 0.5 },
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


// gsap.to('#about img',{
//  top:20,
//  scale:1.5,
// })






const scrollTrack = document.getElementById("scroll-track");
const cards = gsap.utils.toArray(".scroll-card");

gsap.to(scrollTrack, {
  xPercent: -50,
  repeat: -1,
  duration: 20,
  ease: "linear ",

});

// animation  for services section

// services
// Animate each card individually as it enters viewport
  gsap.utils.toArray("#glass-ui .grid > div").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card, 
        
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
    
      opacity: 0,
      scale: 0.85,
      y: 40,
      duration: 0.6,
      ease: "power2.out",
      delay: i * 0.15, // staggered entrance
      scrub: true,
    });
  });



  // Hover effect for individual cards
  document.querySelectorAll("#why-chose .grid > div").forEach(card => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(161, 209, 26, 0.91)",
        duration: 0.3,
        ease: "power2.out"
      });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        scale: 1,
        boxShadow: "0 4px 6px rgba(60, 119, 221, 0.4)",
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

 gsap.to(".top", {
    height: "100%", // full height (fill up)
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#portfolio",
      start: "top center",
      end: "bottom top",
      scrub: true, // smooth scroll control
    },
  });



  //  new code of services
// Downward loop
// Downward infinite scroll (left column)
gsap.to(".down-column", {
  y: "+=100",           // move downward
  duration: 5,
  repeat: -1,
  ease: "none"
  , toggleActions: "play none none reverse"

});

// Upward infinite scroll (right column)
gsap.to(".up-column", {
  y: "-=100",           // move upward
  duration: 5,
  repeat: -1,
  ease: "none"
});





 gsap.from("footer .flex a", {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out"
      });

      gsap.from("footer h3, footer h2", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        stagger: 0.15
      });

      gsap.from("footer ul li", {
        opacity: 0,
        x: -20,
        duration: 1,
        delay: 0.5,
        stagger: 0.05
      });

      gsap.from("footer p", {
        opacity: 0,
        y: 10,
        duration: 1,
        delay: 1
      });

      document.querySelectorAll(".project-item").forEach((item, i) => {
      const imgOverlay = item.querySelector(".overlay");
      const content = item.querySelector(".content");

      // Slide overlay away to reveal image
      gsap.to(imgOverlay, {
        y: "-100%",
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "top 30%",
          scrub: true
        }
      });

      // Fade in the content
      gsap.to(content, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 75%",
          end: "top 50%",
        }
      });
    });

    // CTA reveals
    gsap.to("section#portfolio h2", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "section#portfolio h2",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    gsap.to("section#portfolio p", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "section#portfolio p",
        start: "top 88%",
        toggleActions: "play none none none"
      }
    });
    document.querySelectorAll(".card").forEach((card) => {
        const color = card.dataset.color;

        let glowColor;
        if (color === "blue") glowColor = "rgba(0, 136, 255, 0.6)";
        if (color === "red") glowColor = "rgba(255, 50, 50, 0.6)";
        if (color === "green") glowColor = "rgba(50, 255, 100, 0.6)";

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.07,
            boxShadow: `0 0 40px 5px ${glowColor}`,
            borderColor: glowColor,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            boxShadow: "0 0 0px rgba(0,0,0,0)",
            borderColor: "rgba(255,255,255,0.1)",
            duration: 0.3,
            ease: "power2.inOut",
          });
        });
      });


       gsap.to(".contact-left", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
      },
    });

    // Animate form
    gsap.to(".contact-form", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
      },
    });

    // Floating animation for image
    gsap.to(".contact-img", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });


    const testimonials = [
        {
          name: "Arjun Malhotra",
          role: "Founder, PixelCraft Studio",
          img: "https://randomuser.me/api/portraits/men/12.jpg",
          text: "“These guys took our brand to the next level! Their design precision and animation work made our website stand out globally.”",
        },
        {
          name: "Priya Nair",
          role: "Marketing Head, NovaTech",
          img: "https://randomuser.me/api/portraits/women/45.jpg",
          text: "“The collaboration was smooth, creative, and efficient. We saw a 50% engagement increase within a month of launch.”",
        },
        {
          name: "Rohan Mehta",
          role: "CEO, SkyLabs",
          img: "https://randomuser.me/api/portraits/men/24.jpg",
          text: "“Outstanding UI/UX quality! They perfectly understood our product vision and turned it into a stunning experience.”",
        },
        {
          name: "Ayesha Khan",
          role: "Product Designer, BloomTech",
          img: "https://randomuser.me/api/portraits/women/32.jpg",
          text: "“Their team worked like an extension of ours — creative, fast, and dedicated. Highly recommend for modern web design.”",
        },
      ];

      let current = 0;
      const img = document.getElementById("client-img");
      const nameEl = document.getElementById("client-name");
      const roleEl = document.getElementById("client-role");
      const textEl = document.getElementById("client-text");

      const updateTestimonial = (index) => {
        const t = testimonials[index];
        gsap.to("#testimonial", {
          opacity: 0,
          y: 20,
          duration: 0.4,
          onComplete: () => {
            img.src = t.img;
            nameEl.textContent = t.name;
            roleEl.textContent = t.role;
            textEl.textContent = t.text;
            gsap.fromTo(
              "#testimonial",
              { opacity: 0, y: -20 },
              { opacity: 1, y: 0, duration: 0.5 }
            );
          },
        });
      };

      document.getElementById("nextBtn").addEventListener("click", () => {
        current = (current + 1) % testimonials.length;
        updateTestimonial(current);
      });

      document.getElementById("prevBtn").addEventListener("click", () => {
        current = (current - 1 + testimonials.length) % testimonials.length;
        updateTestimonial(current);
      });



//   const images = document.querySelectorAll(".process-img");

//   steps.forEach((step, i) => {
//     ScrollTrigger.create({
//       trigger: "#process",
//       start: `${i * 100}vh top`,
//       end: `${(i + 1) * 100}vh top`,
//       onEnter: () => updateStep(step),
//       onEnterBack: () => updateStep(step)
//     });
//   });

//   function updateStep(step) {
//     document.getElementById("step-number").textContent = step.number;
//     document.getElementById("step-title").textContent = step.title;
//     document.getElementById("step-desc").textContent = step.desc;

//     images.forEach((img, i) => {
//       gsap.to(img, {
//         opacity: i === step.imageIndex ? 1 : 0,
//         duration: 0.6,
//         ease: "power2.out"
//       });
//     });
//   }


// gsap.utils.toArray(".process-img").forEach((img, i) => {
//   ScrollTrigger.create({
//     trigger: img,
//     start: `${i * 100}vh top`,
//     end: `${(i + 1) * 100}vh top`,
//     onEnter: () => updateStep(i),
//     onEnterBack: () => updateStep(i),
//   });
// });

// function updateStep(index) {
//   const step = steps[index];
//   document.getElementById("step-number").textContent = step.number;
//   document.getElementById("step-title").textContent = step.title;
//   document.getElementById("step-desc").textContent = step.desc;

//   gsap.to(".process-img", { opacity: 0, duration: 0.5 });
//   gsap.to(".process-img", { opacity: (el, i) => (i === index ? 1 : 0), duration: 0.5 });
// }


// gsap.utils.toArray(".process-img").forEach((img, i) => {
//   ScrollTrigger.create({
//     trigger: img,
//     start: `${i * 100}vh top`,
//     end: `${(i + 1) * 100}vh top`,
//     onEnter: () => updateStep(i),
//     onEnterBack: () => updateStep(i),
//   });
// });

// function updateStep(index) {
//   const step = steps[index];
//   document.getElementById("step-number").textContent = step.number;
//   document.getElementById("step-title").textContent = step.title;
//   document.getElementById("step-desc").textContent = step.desc;

//   gsap.to(".process-img", { opacity: 0, duration: 0.5 });
//   gsap.to(".process-img", {
//     opacity: (el, i) => (i === index ? 1 : 0),
//     duration: 0.5,
//   });
// }

// button  animation
const mainBtn = document.getElementById("mainbtn");
mainBtn.addEventListener("onclick",()=>{
  console.log("button clicked");
})



gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
      number: "1",
      title: "Strategic Call",
      desc: "We ask you 50–60 deep-dive questions to understand your brand’s goals, audience, and voice.",
      img: "https://images.unsplash.com/photo-1659353219596-80cd21857b52?w=500&auto=format&fit=crop&q=60"
    },
    {
      number: "2",
      title: "Profile Optimization",
      desc: "We refine your brand presence across platforms to ensure strong, consistent communication.",
      img: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=870&auto=format&fit=crop"
    },
    {
      number: "3",
      title: "Content Funnel",
      desc: "We craft scroll-stopping content tailored to convert attention into engagement.",
      img: "https://plus.unsplash.com/premium_vector-1744201400607-99dddccd0180?w=500&auto=format&fit=crop"
    },
    {
      number: "4",
      title: "Content Roadmap",
      desc: "We develop a timeline and publishing flow to maintain steady, strategic growth.",
      img: "https://plus.unsplash.com/premium_vector-1720507938681-7d683d11f3a2?q=80&w=1074&auto=format&fit=crop"
    },
    {
      number: "5",
      title: "Design Approval",
      desc: "You approve creative visuals that embody your brand’s essence and message.",
      img: "https://images.unsplash.com/photo-1710799885122-428e63eff691?q=80&w=1287&auto=format&fit=crop"
    },
    {
      number: "6",
      title: "Analytics & Reporting",
      desc: "We measure performance, track ROI, and refine strategy to maximize results.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop"
    },
  ];

  const wrapper = document.querySelector(".wrapper");

  steps.forEach((step, i) => {
    const card = document.createElement("div");
    card.className =
      "process flex flex-col md:flex-row items-center h-92 gap-6 md:gap-10 px-6 py-10";
    card.innerHTML = `
      <img src="${step.img}" alt="${step.title}" class="w-full md:w-1/2 h-60 object-cover rounded-xl">
      <div class="flex flex-col text-center md:text-left">
        <span class="text-4xl md:text-5xl font-extrabold text-red-500 mb-2">${step.number}</span>
        <h3 class="text-2xl md:text-3xl font-semibold mb-3">${step.title}</h3>
        <p class="text-gray-300 leading-relaxed">${step.desc}</p>
      </div>
    `;
    wrapper.appendChild(card);

    // Scroll stacking animation
    gsap.to(card, {
      y: -i * 100,
      scale: 1 - i * 0.05,
      scrollTrigger: {
        trigger: card,
        start: "top center",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false
      }
    });
  });