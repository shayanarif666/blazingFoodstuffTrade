AOS.init()

// Variables
const productElem = document.querySelector("#products .row");

// Function To Display Category Wise Products
const handleProducts = (products) => {
    let filteredProducts;
    if (categoryURL) {
        if (categoryURL === "food") {
            filteredProducts = products.filter((product) => product.category !== "soft drinks");
            createDOM(filteredProducts);
        } else {
            filteredProducts = products.filter((product) => product.category === categoryURL);
            createDOM(filteredProducts);
        }
    }
    else {
        productElem.innerHTML = `
        <div class="col-12">
            <img src="./assets/images/Banner/coming soon banner.png" style="width:100%; height: "100%" alt="">
        </div>
    `
    }
}

// Function To Create UI DOM
const createDOM = (products) => {
    products.map((product) => {
        productElem.innerHTML += `
            <div class="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <div class="product-content">
                    <img src="${product.thumbnail}" alt="">
                    <div class="product-info">
                        <div class="bd-txt">
                            <h5>${product.title}</h5>
                            <div class="text-end">
                                <a href="productDetail.html?id=${product.id}" class="btn-main text-decoration-none">View Product</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
}

// Loading Window
window.addEventListener("load", () => {
    handleProducts(products);
});