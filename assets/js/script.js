const data = [
    {
        id: 1,
        title: "Classic Lays",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/chipsoman-thub.png",
        category: "chips",
        brand: "Lays"
    },
    {
        id: 2,
        title: "Masala Lays",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/chipsoman-3-1.jpg",
        category: "chips",
        brand: "Lays"
    },
    {
        id: 3,
        title: "BBQ Wavy",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/sohar-chips_3.jpg",
        category: "chips",
        brand: "Lays"
    },
    {
        id: 4,
        title: "BBQ Wavy Party",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/salad_6.jpg",
        category: "chips",
        brand: "Lays"
    },
    {
        id: 5,
        title: "Sky Chips",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/sky.jpg",
        category: "chips",
        brand: "Lays"
    },
    {
        id: 6,
        title: "Tasty Chips",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/tasty_3.jpg",
        category: "chips",
        brand: "Lays"
    },
    {
        id: 7,
        title: "Tasty Chips",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/nano_3.jpg",
        category: "chips",
        brand: "Lays"
    },
    {
        id: 8,
        title: "Cafe Buisket",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/pofak-oman_10.jpg",
        category: "corns",
        brand: "Mayfair"
    },
    {
        id: 9,
        title: "Sooper Buisket",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/majid-crisoy_3.jpg",
        category: "corns",
        brand: "Peekfreens"
    },
    {
        id: 10,
        title: "Coca Cola 1.5L",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/shami-strwberry_2.jpg",
        category: "soft-drinks",
        brand: "Coke"
    },
    {
        id: 11,
        title: "Red String",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/fizi-tango_2.jpg",
        category: "soft-drinks",
        brand: "String"
    },
    {
        id: 12,
        title: "Snack Pack",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/ringo_6.jpg",
        category: "snacks",
        brand: "Sara Snack"
    }
]


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
const mobileMenuBar = document.querySelector("#mobileMenu");
const asideBar = document.querySelector("#aside");

let isAsideOpen = false;

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
mobileMenuBar.addEventListener("click", () => handleAsideBar(isAsideOpen));
window.addEventListener("load", handleSliderCards);