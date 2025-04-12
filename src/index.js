import './style.css';
import loadHome from './home.js';
import loadMenu from './menu.js'; 
import loadContact from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById("content");

  const nav = document.createElement("nav");
  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");

  homeBtn.textContent = "Home";
  menuBtn.textContent = "Menu";
  contactBtn.textContent = "Contact";

  homeBtn.addEventListener("click", () => loadHome());
  menuBtn.addEventListener("click", () => loadMenu());
  contactBtn.addEventListener("click", () => loadContact());

  // 🌙 Dark Mode Toggle-Button
  const darkToggle = document.createElement("button");
  darkToggle.textContent = "🌙 Dark Mode";

  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Update toggle icon/text
    const isDark = document.body.classList.contains('dark');
    darkToggle.textContent = isDark ?  "☀️ Light Mode" : "🌙 Dark Mode";
  });

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  nav.appendChild(darkToggle);

  document.body.insertBefore(nav, content);
  loadHome(); // Start with Home
});