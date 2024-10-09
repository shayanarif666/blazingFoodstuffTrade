// Variables
const asideMenuTab = document.querySelector("#asideMenuTab");
const navAsideMenuTab = document.querySelector("#navAsideMenuTab");
const navAsideTab = document.querySelector("#navAsideTab")
const navCloseTab = document.querySelector("#navCloseTab");
const asideTab = document.querySelector("#asideTab");
const closeTab = document.querySelector("#closeTab");
const menuBar = document.querySelector("#mobileMenu");
const asideBar = document.querySelector("#aside");
let isAsideOpen = true;

// Function To Toggle Aside Menu Tab
const toggleMenu = (menuElement, shouldShow) => {
    menuElement.style.opacity = shouldShow ? 1 : 0;
    menuElement.style.visibility = shouldShow ? "visible" : "hidden";
};

// Function To Toggle Aside bar
const handleAsideBar = (isOpen) => {
    if (isOpen) {
        asideBar.style.left = "0%";
        isAsideOpen = false;
    } else {
        asideBar.style.left = "-50%";
        isAsideOpen = true;
    }
}

// Events Handling
asideMenuTab.addEventListener("click", () => toggleMenu(asideTab, true));
navAsideMenuTab.addEventListener("click", () => toggleMenu(navAsideTab, true));
closeTab.addEventListener("click", () => toggleMenu(asideTab, false));
navCloseTab.addEventListener("click", () => toggleMenu(navAsideTab, false));
menuBar.addEventListener("click", () => handleAsideBar(isAsideOpen));