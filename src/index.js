import "./styles.css";
import { showMain } from "./main-page";
import { showMenu } from "./menu-page";
import { showAbout } from "./about-page";

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-button");

homeButton.addEventListener("click", showMain);
menuButton.addEventListener("click", showMenu);
aboutButton.addEventListener("click", showAbout);

showMain();