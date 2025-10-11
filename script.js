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
const blob = document.getElementById("blob");

window.addEventListener("mousemove", (e) => {
  // Cursor follows mouse
  gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });

  // Blob follows slower with offset
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
 gsap.from("#about h2, #about p", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
    y: 80,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out",
  });

  // Animate all images inside the about section
  gsap.from("#about img", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
    },
    scale: 0.9,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
    ease: "power2.out",
  });

  // Animate all sub-headings (WHO WE ARE, OUR MISSION)
  gsap.from("#about h3", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 75%",
    },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.25,
    ease: "power3.out",
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
  const mobileMenu = document.getElementById("mobileMenu");
  let open = false;

  menuBtn.addEventListener("click", () => {
    open = !open;

    if (open) {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("flex");
      mobileMenu.classList.add("animate-slideDown");
      menuBtn.innerHTML = '<i class="ri-close-line"></i>';
    } else {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
      menuBtn.innerHTML = '<i class="ri-menu-3-line"></i>';
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
  gsap.utils.toArray(".card").forEach((card, i) => {
  gsap.fromTo(card, 
    { opacity: 0.6, scale: 0.85, y: 0 }, 
    { 
      opacity: 0, 
      scale: 1.3, 
      y: 20, 
      duration: 1, 
      ease: "power1.inOut", 
      repeat: Infinity,    // infinite loop
        // smooth back and forth
      delay: i * 0.02 // stagger start
    }
  );
});

  });



  // Hover effect for individual cards
  document.querySelectorAll("#why-chose .grid > div").forEach(card => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(70, 141, 233, 0.91)",
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
      start: "bottom",
      end: " top",
      scrub: 0.4, // smooth scroll control
    },
  });



  //  new code of services






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
        if (color === "red") glowColor = "rgba(146, 215, 90, 0.6)";
        if (color === "green") glowColor = "rgba(0, 251, 63, 0.82)"; 
        if (color === "purple") glowColor = "rgba(200, 100, 255, 0.6)";

        // Hover glow effect

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



//   
// button  animation
const mainBtn = document.getElementById("mainbtn");
mainBtn.addEventListener("onclick",()=>{
  console.log("button clicked");
})





gsap.registerPlugin(ScrollTrigger);

const steps = [
  { title: "Strategic Call", desc: "We ask 50–60 deep-dive questions to map your goals.", img: "https://images.unsplash.com/photo-1659353219596-80cd21857b52?w=800" },
  { title: "Profile Optimization", desc: "We refine your presence to make communication consistent.", img: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800" },
  { title: "Content Funnel", desc: "We craft scroll-stopping content that converts attention.", img: "https://plus.unsplash.com/premium_vector-1744201400607-99dddccd0180?w=800" },
  { title: "Content Roadmap", desc: "We plan a timeline to ensure continuous brand growth.", img: "https://plus.unsplash.com/premium_vector-1720507938681-7d683d11f3a2?w=800" },
  { title: "Design Approval", desc: "You approve designs reflecting your brand voice.", img: "https://images.unsplash.com/photo-1710799885122-428e63eff691?w=800" },
  { title: "Analytics & Reporting", desc: "We track performance and refine strategy.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" },
];

const container = document.querySelector(".process-stack");

steps.forEach((step, i) => {
  const card = document.createElement("div");
  card.className = `
    process-card relative bg-[#0d0d0d] rounded-3xl shadow-2xl overflow-hidden
    text-white p-10 md:p-14 flex flex-col md:flex-row items-center gap-8
  `;
  const reverse = i % 2 !== 0 ? "md:flex-row-reverse" : "";

  card.innerHTML = `
    <div class="w-full md:w-1/2 h-72 md:h-96 overflow-hidden rounded-2xl">
      <img src="${step.img}" class="w-full h-full object-cover scale-110 transition-transform duration-700 hover:scale-100" />
    </div>
    <div class="w-full md:w-1/2 ${reverse}">
      <h3 class="text-3xl font-bold mb-3">${step.title}</h3>
      <p class="text-gray-400 text-lg leading-relaxed">${step.desc}</p>
    </div>
  `;

  container.appendChild(card);

  // Stack scroll animation
  gsap.fromTo(
    card,
    { yPercent: 100, scale: 0.95, opacity: 0 },
    {
      yPercent: 0,
      scale: 1,
      opacity: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=200",
        end: "top center",
        scrub: true,
      },
    }
  );

  // Pin + stack effect
  ScrollTrigger.create({
    trigger: card,
    start: "top top+=200",
    end: "+=300%",
    pin: true,
    pinSpacing: false,
    scrub: true,
    markers: false,
  });
});


// const teamRow = document.getElementById("teamScroll");

//   gsap.to(teamRow, {
//     x: "-50%", // adjust based on card count
//     duration: 30,
//     ease: "linear",
//     repeat: -1
//   });
  AOS.init({ duration: 1000, once: true });