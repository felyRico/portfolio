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

//About Section
gsap.set(".about", { scale: 0.5, rotation: -10, x: -20 });
var aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "top 100%",
    toggleActions: "play pause resume reset"
  }
});
aboutTl.to(".about", { duration: 0, scale: 1, rotation: 10, x: 20 }, 0.5);
aboutTl.to(".about", { duration: 0, scale: 1.5, rotation: 0, x: 0 }, 1);

// Skills Section
gsap.set(".skills", { scale: 0.2, rotation: -10, x: -20 });
var aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills",
    start: "top 100%",
    toggleActions: "play pause resume reset"
  }
});
aboutTl.to(".skills", { duration: 0, scale: 0.5, rotation: 10, x: 20 }, 0.5);
aboutTl.to(".skills", { duration: 0, scale: 1, rotation: 0, x: 0 }, 1);

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

//Link(s)
gsap.from(".links", {
  duration: 1,
  delay: 2,
  y: 50,
  opacity: 0,
  ease: "power1.out"
});