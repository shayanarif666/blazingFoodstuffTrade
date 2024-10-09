AOS.init();

// Variables
const productElem = document.querySelector("#products .row");
const bannerTitle = document.querySelector("#bannerTitle");

const query = window.location.search.slice(8);

// Function To Display Category Wise Products
const handleProducts = (products) => {
    const filteredProducts = products.filter((product) => product.category === query.replace("_", " ") || product.title.toLowerCase().includes(query));

    if (filteredProducts.length > 0) {
        filteredProducts.map((product) => {
            productElem.innerHTML += `
                <div class="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1000">
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
        }
        )
    } else {
        productElem.innerHTML = `
        <div class="col-12 text-center">
            <p class="text-dark py-5">No Items Found In Search Result</p>
        </div>
    `
    }
}

// Loading Window
window.addEventListener("load", () => {
    handleProducts(products);
});