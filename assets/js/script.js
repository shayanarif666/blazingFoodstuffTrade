AOS.init();
import { data } from "./data.js";
$('#showcase .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// Variables
const asideMenuTab = document.querySelector("#asideMenuTab");
const navAsideMenuTab = document.querySelector("#navAsideMenuTab");
const navAsideTab = document.querySelector("#navAsideTab")
const navCloseTab = document.querySelector("#navCloseTab");
const asideTab = document.querySelector("#asideTab");
const closeTab = document.querySelector("#closeTab");
const mobileMenu = document.querySelector("#mobileMenu");
const asideBar = document.querySelector("#aside");

// Function To Display Slider Cards
const handleSliderCards = () => {
    data.map((product) => {
        const cardElem = document.createElement("div");
        cardElem.classList.add("item");

        cardElem.innerHTML += `
            <img src="${product.thumbnail}" alt="">
            <div class="showcase-content">
                <h5>${product.title}</h5>
                <button class="btn-main">View Product</button>
            </div>
        `

        const cardContainer = document.querySelector(`#${product.category}-items`);
        cardContainer.append(cardElem);

    })

    // Update Owl Carousel
    $('#categories .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        smartSpeed: 600,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })
}

// Function To Display Aside Menu Bar
const displayAsideMenu = (asideTab) => {
    asideTab.style.opacity = 1;
    asideTab.style.visibility = "visible";
}

const hideAsideMenu = (asideTab) => {
    asideTab.style.opacity = 0;
    asideTab.style.visibility = "hidden";
}

// Events Handling
asideMenuTab.addEventListener("click", () => { displayAsideMenu(asideTab) });
navAsideMenuTab.addEventListener("click", () => { displayAsideMenu(navAsideTab) });
closeTab.addEventListener("click", () => { hideAsideMenu(asideTab) });
navCloseTab.addEventListener("click", () => { hideAsideMenu(navAsideTab) });

window.addEventListener("load", handleSliderCards);