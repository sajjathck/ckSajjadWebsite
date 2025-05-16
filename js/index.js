let mybutton = document.getElementById("btn-back-to-top");
const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

// Load theme from localStorage
const savedTheme = localStorage.getItem("theme") || "light";
htmlElement.setAttribute("data-bs-theme", savedTheme);
themeToggle.innerHTML = savedTheme === "light" ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

// Theme toggle event listener
themeToggle.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  
  htmlElement.setAttribute("data-bs-theme", newTheme);
  themeToggle.innerHTML = newTheme === "light" ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  localStorage.setItem("theme", newTheme);
});

// Scroll-to-top functionality
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animations
gsap.timeline()
  .from(".animate-text", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
  })
  .from(".animate-image", {
    opacity: 0,
    scale: 0.8,
    rotation: 10,
    duration: 1,
    ease: "elastic.out(1, 0.3)"
  }, "-=0.5")
  .from(".animate-icon", {
    opacity: 0,
    x: -20,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out"
  }, "-=0.5");

// Navbar Animation
gsap.from(".animate-nav", {
  opacity: 0,
  y: -20,
  duration: 0.8,
  stagger: 0.1,
  ease: "power2.out"
});

// Scroll-Triggered Animations for Sections
gsap.utils.toArray(".animate-section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reset"
    }
  });
});

// Service Cards Animation
gsap.utils.toArray(".animate-card").forEach((card) => {
  gsap.from(card, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reset"
    }
  });
});

// Project Cards Animation
gsap.utils.toArray(".animate-project").forEach((project) => {
  gsap.from(project, {
    opacity: 0,
    x: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: project,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reset"
    }
  });
});

// Contact Form Inputs Animation
gsap.utils.toArray(".animate-input").forEach((input) => {
  gsap.from(input, {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: input,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reset"
    }
  });
});

// Hover Animation for .animate-image
const profileImage = document.querySelector(".animate-image");
profileImage.addEventListener("mouseover", () => {
  gsap.to(".animate-image", {
    opacity: 1,
    scale: 0.8,
    rotation: 0,
    duration: 1,
    ease: "elastic.out(1, 0.3)"
  });
});

profileImage.addEventListener("mouseout", () => {
  gsap.to(".animate-image", {
    opacity: 1,
    scale: 1,
    rotation: 0,
    duration: 1,
    ease: "elastic.out(1, 0.3)"
  });
});