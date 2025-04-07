function loadMenu() {
    const content = document.getElementById('content');
    content.innerText = '';

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    const heading = document.createElement('h1');
    heading.textContent = "Our menu";

    const menuList = document.createElement('ul');

    const dishes = [
        'Spaghetti Carbonara',
        'Pizza Margherita',
        'Lasagne',
        'Ceaser Salad',
        'Tiramisu'
    ];

    dishes.forEach(dish => {
        const listItem = document.createElement('li');
        listItem.textContent = dish;
        menuList.appendChild(listItem);
    });

    menuDiv.appendChild(heading);
    menuDiv.appendChild(menuList);
    content.appendChild(menuDiv);
}

export default loadMenu;