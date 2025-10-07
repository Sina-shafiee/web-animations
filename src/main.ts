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
const boxEl = document.getElementById("box");

const boxTwin = gsap.to(boxEl, {
  height: "18vw",
  borderRadius: "8px",
  duration: 1,
  ease: "power4.inOut",
  paused: true,
});

const contentTwin = gsap.to("#content", {
  opacity: 1,
  translateY: 0,
  duration: 0.5,
  ease: "power4.inOut",
  paused: true,
});

boxEl?.addEventListener("mouseover", () => {
  boxTwin.play();
  contentTwin.play();
});

boxEl?.addEventListener("mouseout", () => {
  boxTwin.reverse();
  contentTwin.reverse();
});

// END PROJECT 2 ----------------------------------------------
