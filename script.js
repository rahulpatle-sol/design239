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

//        const steps = [
//     {
//       number: "1",
//       title: "Onboarding Call",
//       desc: "We ask you 50–60 questions about your personal and professional life to help us get into your shoes and understand your stories.",
//       imageIndex: 0
//     },
//     {
//       number: "2",
//       title: "Profile Optimization",
//       desc: "Our team will then work on your headline, bio, banner etc and give you your optimisation in the next 24 hours.",
//       imageIndex: 1
//     },
//     {
//       number: "3",
//       title: "Content Pillars",
//       desc: "We will be using our infamous funnel – TOFU, MOFU, BOFU to give you the perfect mix of topics that you will love.",
//       imageIndex: 2
//     },
//     {
//       number: "4",
//       title: "Content Calendar",
//       desc: "We share a notion board with you with content every Monday. Which means 0 follow ups. Only 15–20 mins of your time to approve content.",
//       imageIndex: 3
//     },
//     {
//       number: "5",
//       title: "Graphics Approval",
//       desc: "To communicate with you in real-time & churn content as per your requirements, we create a WhatsApp/slack group to communicate with you faster.",
//       imageIndex: 4
//     },
//     {
//       number: "6",
//       title: "Progress Report",
//       desc: "We track your progress weekly to understand what's working & then deep dive every month to give you a detailed analysis.",
//       imageIndex: 5
//     }
//   ];

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
    title: "streatgic Call",
    desc: "We ask you 50–60 questions...",
    img: "https://images.unsplash.com/photo-1659353219596-80cd21857b52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hcmtldGluZyUyMHN0cmF0ZWd5JTIwY2FsbHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    number: "2",
    title: "profile Optimization",
    desc: "We define your brand’s voice...",
    img: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    number: "3",
    title: "content funnel",
    desc: "We build the experience...",
    img: "https://plus.unsplash.com/premium_vector-1744201400607-99dddccd0180?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29udGVudCUyMGZ1bm5lbHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    number: "4",
    title: "content roadmap",
    desc: "We test across devices...",
    img: "https://plus.unsplash.com/premium_vector-1720507938681-7d683d11f3a2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    number: "5",
    title: "design approvel",
    desc: "We go live with impact...",
    img: "https://images.unsplash.com/photo-1710799885122-428e63eff691?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    number: "6",
    title: "Progress Analytics &Reporting",
    desc: "We track performance...",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

steps.forEach((step, i) => {
  ScrollTrigger.create({
    trigger: ".process-images",
    start: `${i * 100}vh top`,
    end: `${(i + 1) * 100}vh top`,
    onEnter: () => updateStep(i),
    onEnterBack: () => updateStep(i),
  });
});

function updateStep(i) {
  document.getElementById("step-number").textContent = steps[i].number;
  document.getElementById("step-title").textContent = steps[i].title;
  document.getElementById("step-desc").textContent = steps[i].desc;
  document.querySelector(".process-card img").src = steps[i].img;
}
 gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray("#about img, #about h2, #about h3, #about p").forEach((el) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: "top 85%" },
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });
  });