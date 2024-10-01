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
        category: "soft drinks",
        brand: "Coke"
    },
    {
        id: 11,
        title: "Red String",
        description: "Fresh Potato Chips With Chilli Flavour",
        specification: ["14 Pkt x 22 gm / Box", "20 Pkt x 22 gm / Bag", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn", "50 Pkt x 15 gm / Ctn"],
        thumbnail: "https://www.alishaihani.net/storage/files/fizi-tango_2.jpg",
        category: "soft drinks",
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

const productElem = document.querySelector("#products .row");

// Function To Display Category Wise Products
const handleProducts = (products) => {
    const filteredProducts = products.filter((product) => product.category === categoryURL.replace("-", " "));
    if (filteredProducts.length > 0) {
        filteredProducts.map((product) => {
            productElem.innerHTML += `
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="product-content">
                        <img src="${product.thumbnail}" alt="">
                        <div class="product-info">
                            <div class="bd-txt">
                                <h5>${product.title}</h5>
                                <div class="text-end">
                                    <button class="btn-main">View Product</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        } 
    )} else {
        productElem.innerHTML = `
        <div class="col-12">
            <img src="./assets/images/Banner/coming soon banner.png" style="width:100%; height: "100%" alt="">
        </div>
    `
    }
}

// Loading Window
window.addEventListener("load", () => {
    handleProducts(products);
});