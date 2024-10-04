AOS.init();

// Variables
const productElem = document.querySelector("#products .row");

// Function To Display Category Wise Products
const handleProducts = (products) => {
    const filteredProducts = products.filter((product) => product.id < 4);
    if (filteredProducts.length > 0) {
        filteredProducts.map((product) => {
            productElem.innerHTML += `
                <div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1000">
                    <div class="product-content card">
                        <img src="${product.thumbnail}" alt="">
                        <div class="card-body">
                            <div class="bd-txt">
                                <h5>${product.title}</h5>
                                <div class="text-end">
                                    <a href="productDetail.html?id=${product.id}" class="btn-main text-decoration-none">Read More</a>
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