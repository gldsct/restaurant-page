import "./styles.css";
import { showMain } from "./main-page";

const homeButton = document.querySelector("#home-button");

homeButton.addEventListener("click", showMain);

showMain();