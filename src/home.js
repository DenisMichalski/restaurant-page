export default function loadHome() {
    const content = document.querySelector('#content');
    const homeDiv = document.createElement('div');
    homeDiv.innerText = `
    <h1>Welcome to La Tavola!</h1>
    <p>Fine Italian cuisine in the heart of the city.</p>
    <img src="https://via.placeholder.com/400x200" alt="Restaurant">
    `;
    content.appendChild(homeDiv);
}
 
