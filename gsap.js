document.body.style.overflow = 'hidden';
gsap.set(".hero-text", { scale: 0.5, rotation: -10, x: -20 });
var tl = gsap.timeline({delay: 0.25});
tl.to(".hero-text", { duration: 0, scale: 1, rotation: 10, x: 20 }, 0.5);
tl.to(".hero-text", { duration: 0, scale: 1.5, rotation: 0, x: 0 }, 1);
function skipAnimation() {
  tl.progress(1);
  document.body.style.overflow = 'auto';
  document.querySelector(".container").style.visibility = 'visible';
  document.getElementById("skip-text").style.display = 'none';
  document.removeEventListener('mousedown', onMouseDownSkip);
}
function onMouseDownSkip(e) {
  if (e.button === 0) {
    skipAnimation();
  }
}
document.addEventListener('mousedown', onMouseDownSkip);
tl.eventCallback("onComplete", function() {
  document.body.style.overflow = 'auto';
  document.querySelector(".container").style.visibility = 'visible';
  document.getElementById("skip-text").style.display = 'none';
  document.removeEventListener('mousedown', onMouseDownSkip);
});

gsap.from(".hero-img", {
  duration: 1.5,
  opacity: 0,
  scale: 0.5,
  ease: "back.out(1.7)"
});

gsap.set(".about", { scale: 0.5, rotation: -10, x: -20 });
var aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "top 100%",
    toggleActions: "play pause resume reset"
  }
});
aboutTl.to(".about", { duration: 0, scale: 0.8, rotation: 10, x: 20 }, 0.5);
aboutTl.to(".about", { duration: 0, scale: 1.2, rotation: 0, x: 0 }, 1);

gsap.set(".skills", { scale: 0.5, rotation: 0, x: 0  });
var skillsTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills",
    start: "top 100%",
    toggleActions: "play pause resume reset"
  }
});

skillsTl.to(".skills", { 
  duration: 0.5, 
  scale: 0.8, 
  rotation: 0, 
  x: 0, 
  ease: "steps(1)" 
}, 0.5);
skillsTl.to(".skills", { 
  duration: 0.5, 
  scale: 1.2, 
  rotation: 0, 
  x: 0, 
  ease: "steps(1)" 
}, 1);

gsap.set(".project-card", { scale: 0.5, rotation: -10, x: -20, opacity: 0 });
var projectTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".project-list",
    start: "top 90%",
    toggleActions: "play pause resume reset"
  }
});
projectTl.to(".project-card", { duration: 0.3, scale: 1, rotation: 10, x: 20, opacity: 1, stagger: 0.2 }, 0);
projectTl.to(".project-card", { duration: 0.3, scale: 1, rotation: 0, x: 0, stagger: 0.2 }, "-=0.2");


gsap.from(".contacts", {
  duration: 1,
  delay: 2,
  y: 50,
  opacity: 0,
  ease: "power1.out"
});

document.querySelector(".gsap-skill").addEventListener("click", function() {
  gsap.fromTo(this, { rotation: 0 }, { rotation: 720, duration: 0.4, ease: "power2.out" });
});

document.querySelector(".html-css-skill").addEventListener("click", function() {
  this.classList.add("rainbow-active");
  this.blur();
  setTimeout(() => {
    this.classList.remove("rainbow-active");
  }, 2000);
});


document.querySelector(".gsap-skill").addEventListener("click", function() {
  gsap.fromTo(this, { rotation: 0 }, { rotation: 720, duration: 0.4, ease: "power2.out" });
});
document.querySelector(".html-css-skill").addEventListener("click", function() {
  this.classList.add("rainbow-active");
  this.blur();
  setTimeout(() => {
    this.classList.remove("rainbow-active");
  }, 2000);
});

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", function() {
    const link = this.getAttribute("data-link");
    if (link && link.trim() !== "") {
      window.open(link, "_blank");
    }
  });
});
