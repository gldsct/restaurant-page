import foodImage from "./homepage-food.jpeg";

function showMain() {
    const mainSection = document.querySelector(".content");
    mainSection.classList.remove("menu-normal");
    mainSection.textContent = "";

    (function updateText() {
        const heroText = document.createElement("div");
        heroText.classList.add("hero-text");
    
        const heroHeader = document.createElement("h2");
        heroHeader.classList.add("home-header");
        heroHeader.textContent = "Delicious Food";
        const heroTextSpan = document.createElement("span");
        heroTextSpan.classList.add("hero-text-span");
        heroTextSpan.textContent = " for Food Lovers";
        heroHeader.appendChild(heroTextSpan);
        heroText.appendChild(heroHeader);
    
        const heroPara = document.createElement("p");
        heroPara.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit quis libero commodo aliquam. Pellentesque efficitur nunc turpis, vitae tempus ipsum placerat a.";
        heroText.appendChild(heroPara);
    
        const heroButton = document.createElement("button");
        heroButton.classList.add("explore-button");
        heroButton.textContent = "Explore Menu";
        heroText.appendChild(heroButton);

        mainSection.appendChild(heroText);
    })();

    (function updateImage () {
        const heroImageSection = document.createElement("div");
        heroImageSection.classList.add("hero-image");

        const heroImage = document.createElement("img");
        heroImage.src = foodImage;
        heroImage.alt = "A top-view image of a bowl of sweet potato fries at the center, flanked by smaller bowls of dipping sauce, guacamole, and beans";
        heroImage.height = "375";
        heroImage.width = "500";
        heroImageSection.appendChild(heroImage);

        mainSection.appendChild(heroImageSection);
    })();
}

export { showMain };
