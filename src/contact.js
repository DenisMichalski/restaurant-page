// contact.js
function loadContact() {
  const content = document.getElementById("content");
  content.innerText = "";

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact");

  const heading = document.createElement("h1");
  heading.textContent = "Contact us";

  const adress = document.createElement("p");
  adress.textContent = "Address: Restaurantstraße 123, Essenstadt, DE";

  const phone = document.createElement("p");
  phone.textContent = "Telephone: 0123 456789";

  const form = document.createElement("form");

  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Name:";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";

  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email:";
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";

  const messageLabel = document.createElement("label");
  messageLabel.textContent = "Message:";
  const messageTextAreaa = document.createElement("textarea");
  messageTextAreaa.name = "message";

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";

  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(messageLabel);
  form.appendChild(messageTextAreaa);
  form.appendChild(submitButton);

  contactDiv.appendChild(heading);
  contactDiv.appendChild(adress);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(form);

  content.appendChild(contactDiv);
}

export default loadContact;
