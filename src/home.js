import restaurantImage from './assets/restaurant.jpg';

export default function loadHome() {
    const content = document.getElementById('content');
    content.innerText = '';

    const homeDiv = document.createElement('div');

    const heading = document.createElement('h2');
    heading.textContent = "Welcome to La Tavola";

    const text = document.createElement('p');
    text.textContent = "Fine Italian cuisine prepared with love.";

    const image = document.createElement('img');
    image.src = restaurantImage;
    image.alt = 'Our Restaurant';

    homeDiv.appendChild(heading);
    homeDiv.appendChild(text);
    homeDiv.appendChild(image);

    content.appendChild(homeDiv);
}