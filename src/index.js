import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

const homeButton = document.getElementById('homeButton');
const menuButton = document.getElementById('menuButton');
const contactButton = document.getElementById('contactButton');


homeButton.addEventListener('click', () => {
  loadHome;
});

menuButton.addEventListener('click', () => {
  loadMenu;
});

contactButton.addEventListener('click', () => {
  loadContact;
});

loadHome();

// function clearContent() {
//   const content = document.querySelector("#content");
//   content.innerText = "";
// }

// document.addEventListener("DOMContentLoaded", () => {
//   loadHome();

//   document.getElementById("homeBtn").addEventListener("click", () => {
//     clearContent();
//     loadHome();
//   });

//   document.getElementById("menuBtn").addEventListener("click", () => {
//     clearContent();
//     import("./menu.js").then((module) => module.default());
//   });
//   document.getElementById("contactBtn").addEventListener("click", () => {
//     clearContent();
//     import("./contact.js").then((module) => module.default());
//   });
// });
