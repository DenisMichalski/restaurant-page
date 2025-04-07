function loadHome() {
  const content = document.getElementById("content");

  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to our restaurant!";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Enjoy an unforgettable experience in our restaurant, with excellent cuisine and friendly service.";

  const img = document.createElement("img");
    img.src = "path/to/your-image.jpg"; // Ersetze mit dem Bildpfad
    img.alt = 'Restaurant Page';

    homeDiv.appendChild(heading);
    homeDiv.appendChild(paragraph);
    homeDiv.appendChild(img);

    content.appendChild(homeDiv);
}

export default loadHome;
 
