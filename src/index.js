import "./styles.css";
import { showMain } from "./main-page";
import { showMenu } from "./menu-page";

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");

homeButton.addEventListener("click", showMain);
menuButton.addEventListener("click", showMenu);

showMain();