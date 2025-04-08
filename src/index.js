import './style.css';
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";



function clearContent() {
  const content = document.querySelector("#content");
  content.innerText = "";
}

function addNavListeners() {
  document.getElementById("homeBtn").addEventListener("click", () => {
    console.log("Nav-Buttons wurden verbunden");

    clearContent();
    loadHome();
  });

document.getElementById("menuBtn").addEventListener("click", () => {
    clearContent();
    loadMenu();
});
  
  document.getElementById("contactBtn").addEventListener("click", () => {
    clearContent();
    loadContact();
  });
}
// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  loadHome();
  addNavListeners();
});
