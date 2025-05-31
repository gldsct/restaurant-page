import pancakeImage from "./pancake.jpg";
import burgerImage from "./burger-and-fries.jpg";
import spaghettiImage from "./pasta.jpg";
import fishImage from "./fish.jpg";
import steakImage from "./steak.jpg";
import dumplingsImage from "./dumplings.jpg";

function showMenu() {
    const mainSection = document.querySelector(".content");
    mainSection.classList.add("menu-normal");
    mainSection.textContent = "";

    (function updateHeader() {
        const menuHeader = document.createElement("h2");
        menuHeader.classList.add("menu-header");
        menuHeader.textContent = "Our ";

        const menuHeaderSpan = document.createElement("span");
        menuHeaderSpan.classList.add("menu-header-span");
        menuHeaderSpan.textContent = "Menu";
        menuHeader.appendChild(menuHeaderSpan);
        
        mainSection.appendChild(menuHeader);
    })();

    (function updateMenu () {
        const menuItemContainer = document.createElement("div");
        menuItemContainer.classList.add("menu-item-container");

        (function createPancake () {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");

            const menuItemImage = document.createElement("img");
            menuItemImage.src = pancakeImage;
            menuItemImage.alt = "Pancake topped with sliced strawberries and syrup, and a smaller desert cup containing whipped cream next to it";
            menuItemImage.height = "195";
            menuItemImage.width = "320";
            menuItem.appendChild(menuItemImage);

            const menuItemHeader = document.createElement("h3");
            menuItemHeader.textContent = "Pancake";
            menuItem.appendChild(menuItemHeader);

            const menuItemPrice = document.createElement("p");
            menuItemPrice.textContent = "$17.00";
            menuItem.appendChild(menuItemPrice);

            menuItemContainer.appendChild(menuItem);
        })();

        (function createBurger () {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");

            const menuItemImage = document.createElement("img");
            menuItemImage.src = burgerImage;
            menuItemImage.alt = "Burger with bacon, lettuce, and sauce, served with a side of french fries and dipping sauces";
            menuItemImage.height = "195";
            menuItemImage.width = "320";
            menuItem.appendChild(menuItemImage);

            const menuItemHeader = document.createElement("h3");
            menuItemHeader.textContent = "Burger";
            menuItem.appendChild(menuItemHeader);
            
            const menuItemPrice = document.createElement("p");
            menuItemPrice.textContent = "$24.00";
            menuItem.appendChild(menuItemPrice);
            
            menuItemContainer.appendChild(menuItem);
        })();

        (function createSpaghetti () {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");

            const menuItemImage = document.createElement("img");
            menuItemImage.src = spaghettiImage;
            menuItemImage.alt = "Spaghetti with tomato and basil, being picked up with a fork";
            menuItemImage.height = "195";
            menuItemImage.width = "320";
            menuItem.appendChild(menuItemImage);

            const menuItemHeader = document.createElement("h3");
            menuItemHeader.textContent = "Spaghetti";
            menuItem.appendChild(menuItemHeader);

            const menuItemPrice = document.createElement("p");
            menuItemPrice.textContent = "$13.00";
            menuItem.appendChild(menuItemPrice);

            menuItemContainer.appendChild(menuItem);
        })();

        (function createFish () {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");

            const menuItemImage = document.createElement("img");
            menuItemImage.src = fishImage;
            menuItemImage.alt = "Fish salad, served with tomato, lemon, avocado and lettuce";
            menuItemImage.height = "195";
            menuItemImage.width = "320";
            menuItem.appendChild(menuItemImage);

            const menuItemHeader = document.createElement("h3");
            menuItemHeader.textContent = "Fish Salad";
            menuItem.appendChild(menuItemHeader);

            const menuItemPrice = document.createElement("p");
            menuItemPrice.textContent = "$29.00";
            menuItem.appendChild(menuItemPrice);

            menuItemContainer.appendChild(menuItem);
        })();

        (function createSteak () {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");

            const menuItemImage = document.createElement("img");
            menuItemImage.src = steakImage;
            menuItemImage.alt = "Juicy steak served on a white plate, garnished with carrots, onions and other vegetables";
            menuItemImage.height = "195";
            menuItemImage.width = "320";
            menuItem.appendChild(menuItemImage);
            
            const menuItemHeader = document.createElement("h3");
            menuItemHeader.textContent = "Steak";
            menuItem.appendChild(menuItemHeader);
            
            const menuItemPrice = document.createElement("p");
            menuItemPrice.textContent = "$34.00";
            menuItem.appendChild(menuItemPrice);

            menuItemContainer.appendChild(menuItem);
        })();


        (function createDumplings () {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");

            const menuItemImage = document.createElement("img");
            menuItemImage.src = dumplingsImage;
            menuItemImage.alt = "Dumplings served with soup in a blue-and-white ceramic bowl, with brown wooden chopsticks next to the bowl";
            menuItemImage.height = "195";
            menuItemImage.width = "320";
            menuItem.appendChild(menuItemImage);

            const menuItemHeader = document.createElement("h3");
            menuItemHeader.textContent = "Dumplings";
            menuItem.appendChild(menuItemHeader);

            const menuItemPrice = document.createElement("p");
            menuItemPrice.textContent = "$15.00";
            menuItem.appendChild(menuItemPrice);

            menuItemContainer.appendChild(menuItem);
        })();

        mainSection.appendChild(menuItemContainer);
    })();
}

export { showMenu };