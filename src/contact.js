export function loadContact() {
    const container = document.getElementById("content");
    container.innerHTML = "";

    const contactContainer = document.createElement("div");
    const contactName = document.createElement("h1");
    contactName.innerHTML = "Contact Us:";

    const contactDescription = document.createElement("p");
    contactDescription.innerHTML = "Email: thedunktank@gmail.com" 

    contactContainer.appendChild(contactName);
    contactContainer.appendChild(contactDescription);
    container.appendChild(contactContainer);

}