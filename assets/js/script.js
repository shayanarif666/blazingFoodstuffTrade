AOS.init();

$('#showcase .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3500,
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
        let cardElem = document.createElement("div");
        cardElem.classList.add("item");
        cardElem.setAttribute("data-aos", "fade-up");
        cardElem.setAttribute("data-aos-duration", "1000");
        cardElem.setAttribute("data-aos-once", "true")

        cardElem.innerHTML += `
            <img src="${product.thumbnail}" alt="">
            <div class="showcase-content">
                <h5>${product.title}</h5>
                <a href="productDetail.html?id=${product.id}" class="btn-main text-decoration-none">View Product</a>
            </div>
        `
        const cardContainer = document.querySelector(`#${product.category.replace(" ", "-")}-items`);

        // Check if the container exists
        if (cardContainer) {
            cardContainer.append(cardElem);
        } else {
            console.error(`Container for category "${product.category}" not found`);
        }
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

