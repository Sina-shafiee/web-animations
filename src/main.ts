import "./css/style.css";
import { gsap } from "gsap";

// PROJECT 1 --------------------------------------------
/**
 * simple intro animation
 * gsap syntax and basics
 * UNCOMMENT coresponding html to see
 */
// const progressEl = document.getElementById("progress");
// const titleEl = document.getElementById("title");

// gsap.from(titleEl, {
//   yPercent: -120,
//   duration: 2,
//   ease: "elastic.out(1, 0.4)",
// });

// gsap.to(progressEl, {
//   width: "100%",
//   duration: 2,
//   ease: "power4.inOut",
// });

// gsap.to(progressEl, {
//   height: "100%",
//   top: 0,
//   backgroundColor: "#FFF",
//   translateY: 0,
//   duration: 1,
//   ease: "power4.inOut",
//   delay: 2,
// });
// END PROJECT 1 ----------------------------------------------

// PROJECT 2 --------------------------------------------------
/**
 * animation instances and play on hover
 */
// const boxEl = document.getElementById("box");

// const boxTwin = gsap.to(boxEl, {
//   height: "18vw",
//   borderRadius: "8px",
//   duration: 1,
//   ease: "power4.inOut",
//   paused: true,
// });

// const contentTwin = gsap.to("#content", {
//   opacity: 1,
//   translateY: 0,
//   duration: 0.5,
//   ease: "power4.inOut",
//   paused: true,
// });

// boxEl?.addEventListener("mouseover", () => {
//   boxTwin.play();
//   contentTwin.play();
// });

// boxEl?.addEventListener("mouseout", () => {
//   boxTwin.reverse();
//   contentTwin.reverse();
// });

// END PROJECT 2 ----------------------------------------------

// PROJECT 3 --------------------------------------------------
/**
 * staggered animations
 * set function from gsap to set initial state
 * using gsap.utils.toArray()
 */
// const images = gsap.utils.toArray("img");
// const paragraphs = gsap.utils.toArray("p");

// gsap.set(images, { yPercent: -100 });
// gsap.set(paragraphs, { opacity: 0, y: -20 });

// gsap.to(images, {
//   yPercent: 0,
//   scale: 1.2,
//   stagger: 0.2,
//   duration: 1.5,
//   ease: "power4.out",
//   onComplete: scaleDownAndFadeIn,
// });

// function scaleDownAndFadeIn() {
//   gsap.to(images, {
//     scale: 1,
//     duration: 1.3,
//     ease: "power4.out",
//   });

/**
   
  gsap.to(paragraphs, {
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power4.out",
  });
  */

//   gsap.fromTo(
//     paragraphs,
//     {
//       opacity: 0,
//       y: -22,
//       x: -10,
//     },
//     {
//       opacity: 1,
//       y: 0,
//       x: 0,
//       ease: "power4.out",
//       stagger: 0.3,
//     }
//   );
// }

// END PROJECT 3 ----------------------------------------------

// CHALLANGE 1 --------------------------------------------------

const titleEl = document.getElementById("title");
const lineEl = document.getElementById("line");
const ballIconEl = document.getElementById("ballIcon");

gsap.set(titleEl, {
  y: -40,
  opacity: 0,
});
gsap.set(ballIconEl, {
  yPercent: -200,
});
gsap.set(lineEl, {
  scaleX: 0,
});

gsap.to(ballIconEl, {
  yPercent: -50,
  duration: 1.5,
  ease: "elastic.out(1.4,0.3)",
  onComplete: revalLineAndTitle,
});

function revalLineAndTitle() {
  gsap.to(titleEl, {
    y: 0,
    opacity: 1,
    ease: "power4.out",
    duration: 1,
  });

  gsap.to(lineEl, {
    scaleX: "100%",
    ease: "power4.out",
    duration: 1.5,
  });
}

// END CHALLANGE 1 ----------------------------------------------
