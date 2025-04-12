export default function loadContact() {
    const content = document.getElementById('content');
    content.innerText = '';

    const contactDiv = document.createElement('div');

    const heading = document.createElement('h2');
    heading.textContent = 'Contact';

    const adress = document.createElement('p');
    adress.textContent = 'Restaurant Street 1, 12345 Restaurant City';

    const phone = document.createElement('p');
    phone.textContent = 'Tel: 0123 456789';

    // Contact form

    const form = document.createElement('form');
    form.innerHTML = `
    <label>Name:<br><input type="text" required></label><br><br>
    <label>Nachricht:<br><textarea rows="4" required></textarea></label><br><br>
    <button type="submit">Absenden</button>
  `;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Thank you for your message!");
      form.reset(); // optional: clear fields
    })

    contactDiv.appendChild(heading);
    contactDiv.appendChild(adress);
    contactDiv.appendChild(phone);
    contactDiv.appendChild(form);

    content.appendChild(contactDiv);
}