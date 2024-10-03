// Fake Data
const products = [
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
    autoplayTimeout: 3700,
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


// Function To Display Slider Cards
const handleSliderCards = () => {
    products.map((product) => {
        const cardElem = document.createElement("div");
        cardElem.classList.add("item");

        cardElem.innerHTML += `
            <img src="${product.thumbnail}" alt="">
            <div class="showcase-content">
                <h5>${product.title}</h5>
                <a href="productDetail.html?id=${product.id}" class="btn-main text-decoration-none">View Product</a>
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

// Loading Window
window.addEventListener("load", handleSliderCards);
