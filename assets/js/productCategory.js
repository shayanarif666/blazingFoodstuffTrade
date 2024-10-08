AOS.init();

// Variables
const productElem = document.querySelector("#products .row");
const bannerTitle = document.querySelector("#bannerTitle");

// Function To Display Category Wise Products
const handleProducts = (products) => {
    const filteredProducts = products.filter((product) => product.category === categoryURL.replace("-", " "));
    bannerTitle.innerText = filteredProducts.length > 0 ? filteredProducts[0].category[0].toUpperCase() + filteredProducts[0].category.slice(1) : "Coming Soon";
    
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