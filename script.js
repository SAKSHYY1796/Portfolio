/* Typing Animation */
const roles = [
  "AI & Data Science Engineer",
  "Machine Learning Enthusiast",
  "Python & Java Developer",
  "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
const typing = document.querySelector(".typing");

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typing.textContent += roles[roleIndex][charIndex++];
    setTimeout(typeEffect, 90);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typing.textContent = roles[roleIndex].substring(0, --charIndex);
    setTimeout(eraseEffect, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 400);
  }
}

typeEffect();

/* GSAP Animations */
gsap.from(".reveal-text", {
  y: 70,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out"
});

gsap.from(".hero-image img", {
  scale: 0.85,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".skill-card", {
  scrollTrigger: { trigger: ".skills-grid", start: "top 80%" },
  y: 40,
  opacity: 0,
  stagger: 0.08,
  duration: 0.9
});

gsap.from(".project-card", {
  scrollTrigger: { trigger: ".project-card", start: "top 85%" },
  y: 50,
  opacity: 0,
  stagger: 0.2,
  duration: 1
});
