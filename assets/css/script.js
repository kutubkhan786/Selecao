// class GridItem {
//     constructor(el) {
//         this.DOM = { el: el };
//         this.move();
//     }
//     move() {
//         // amount to move in each axis
//         let translationVals = { tx: 0, ty: 0 };
//         // get random start and end movement boundaries
//         const xstart = getRandomNumber(15, 60);
//         const ystart = getRandomNumber(15, 60);

//         // infinite loop
//         const render = () => {
//             // Calculate the amount to move.
//             // Using linear interpolation to smooth things out.
//             // Translation values will be in the range of [-start, start] for a cursor movement from 0 to the window's width/height
//             translationVals.tx = lerp(
//                 translationVals.tx,
//                 map(mousepos.x, 0, winsize.width, -xstart, xstart),
//                 0.07
//             );
//             translationVals.ty = lerp(
//                 translationVals.ty,
//                 map(mousepos.y, 0, winsize.height, -ystart, ystart),
//                 0.07
//             );

//             gsap.set(this.DOM.el, { x: translationVals.tx, y: translationVals.ty });
//             requestAnimationFrame(render);
//         };
//         requestAnimationFrame(render);
//     }
// }

// class Grid {
//     constructor(el) {
//         this.DOM = { el: el };
//         this.gridItems = [];
//         this.items = [this.DOM.el.querySelectorAll(".grid__item")];
//         this.items.forEach((item) => this.gridItems.push(new GridItem(item)));
//         console.log("hello")
//         this.showItems();
//     }
//     showItems() {
//         gsap
//             .timeline()
//             .set(this.items, { scale: 0.7, opacity: 0 }, 0)
//             .to(
//                 this.items, {
//                     duration: 2,
//                     ease: "Expo.easeOut",
//                     scale: 1,
//                     stagger: { amount: 0.6, grid: "auto", from: "center" },
//                 },
//                 0
//             )
//             .to(
//                 this.items, {
//                     duration: 3,
//                     ease: "Power1.easeOut",
//                     opacity: 0.4,
//                     stagger: { amount: 0.6, grid: "auto", from: "center" },
//                 },
//                 0
//             );
//     }
// }

// const grid = new Grid(document.querySelector(".grid"));

// document.addEventListener("mousemove", parallax);

// function parallax(event) {
//     this.querySelectorAll(".mouse").forEach((shift) => {
//         const position = shift.getAttribute("value");
//         const x = (window.innerWidth - event.pageX * position) / 90;
//         const y = (window.innerHeight - event.pageY * position) / 90;

//         shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
//     });
// }

// ( function( $ ) {

// 	"use strict";

//   $(".card").tilt({
//     maxTilt: 15,
//     perspective: 1400,
//     easing: "cubic-bezier(.03,.98,.52,.99)",
//     speed: 1200,
//     glare: true,
//     maxGlare: 0.2,
//     scale: 1.04
//   });
  
// }( jQuery ) );

