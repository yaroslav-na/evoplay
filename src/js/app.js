import { isWebpSupported } from "./__plagin-helper/index.js";
import { createFormHandler } from "./createFormHandler.js";
import { createMenu } from "./createMenu.js";

isWebpSupported();

const page = document.querySelector(`[data-js="page"]`);
const header = document.querySelector(`[data-js="header"]`);
const burger = document.querySelector(`[data-js="burger"]`);
const burgerIcon = document.querySelector(`[data-js="burger-icon"]`);
const headerLinks = document.querySelectorAll(`[data-js="header-link"]`);
const form = document.querySelector(`[data-js="contact-form"]`);

const menu = createMenu(page, header, burgerIcon);

menu.hide();
window.addEventListener("resize", menu.hide);
burger.addEventListener("click", menu.toggle);

headerLinks.forEach((headerLinks) => {
  headerLinks.addEventListener("click", menu.hide);
});

form.addEventListener("submit", createFormHandler(form));
