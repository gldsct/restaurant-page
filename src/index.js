import "./styles.css";
import { showMain } from "./main-page";
import { showMenu } from "./menu-page";
import { showAbout } from "./about-page";

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-button");

function showMainPage () {
    showMain();
    const exploreButton = document.querySelector(".explore-button");
    exploreButton.addEventListener("click", showMenu);
};

homeButton.addEventListener("click", showMainPage);
menuButton.addEventListener("click", showMenu);
aboutButton.addEventListener("click", showAbout);

showMainPage ();