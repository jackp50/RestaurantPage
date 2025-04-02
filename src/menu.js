export function loadMenu() {
    const container = document.getElementById("content");
    container.innerHTML = "";

    const menuContainer = document.createElement("div");
    const menuName = document.createElement("h1");
    menuName.innerHTML = "Menu:";

    const menuDescription = document.createElement("p");
    menuDescription.innerHTML = "Steak, Burger, Awesome Sauce" 

    menuContainer.appendChild(menuName);
    menuContainer.appendChild(menuDescription);
    container.appendChild(menuContainer);

}