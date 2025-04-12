export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerText = '';

    const menuDiv = document.createElement('div');

    const heading = document.createElement('h2');
    heading.textContent = 'Menu';

    const list = document.createElement('ul');
    ['pizza Margherita', 'Spaghetti Carbonara', 'Lasagne', 'Tiramisu'].forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });

    menuDiv.appendChild(heading);
    menuDiv.appendChild(list);
    content.appendChild(menuDiv);
}