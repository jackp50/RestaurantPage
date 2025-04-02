export function loadHome() {
    const container = document.getElementById("content");
    container.innerHTML = "";

    const homeContainer = document.createElement("div");
    const restaurantName = document.createElement("h1");
    restaurantName.innerHTML = "Welcome to The Dunk Tank";

    const homeDescription = document.createElement("p");
    homeDescription.innerHTML = "We are The Dunk Tank. Serving the finest steaks this side of the state has ever seen." 

    homeContainer.appendChild(restaurantName);
    homeContainer.appendChild(homeDescription);
    container.appendChild(homeContainer);

}