import loadHome from './home.js';

function clearContent() {
    const content = document.querySelector('#content');
    content.innerText = '';
}

document.addEventListener('DOMContentLoaded', () => {
    loadHome();

    document.getElementById('homeBtn').addEventListener('click', () => {
        clearContent();
        loadHome();
    });

    document.getElementById('menuBtn').addEventListener('click', () => {
        clearContent();
        import('./menu.js').then(module => module.default());
    });
    document.getElementById('contactBtn').addEventListener('click', () => {
        clearContent();
        import('./contact.js').then(module => module.default());
    });

});