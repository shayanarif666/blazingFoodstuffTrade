// Get Params
const id = window.location.search.slice(4);

// Variables
const productDetails = document.querySelector("#productDetails .row");
const bannerTitle = document.querySelector("#bannerTitle");
const productTitle = document.querySelector("#productTitle");

// Function To Handle Product Details
const handleProductDetails = (id) => {
    const findProduct = products.find((product) => product.id === parseInt(id));
    bannerTitle.innerText = findProduct.category[0].toUpperCase() + findProduct.category.slice(1);
    productTitle.innerText = findProduct.title;
    productDetails.innerHTML = `
       <div class="col-md-6">
            <div class="product-img">
                <img src="${findProduct.thumbnail}"
                    alt="">
            </div>
        </div>
        <div class="col-md-6">
                        <div class="product-info">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                            aria-expanded="false" aria-controls="flush-collapseOne">
                                            Description
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">${findProduct.description}</div>
                                    </div>
                                </div>
                                <div class="accordion-item mt-4">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                            aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Package Specification
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <div class="row">
                                                <div class="col-12">
                                                    <ol>
                                                        ${findProduct.specification.map((specification, idx) => (
                                                            `<li key="${idx}" class="p-2">${specification}</li>`
                                                        )).join("")}
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
    `
}
handleProductDetails(id);
