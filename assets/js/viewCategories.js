// Get Params
const categoryURL = window.location.search.slice(10);

// List Categories
const categories = [
    { category: "Chips", slug: "chips" },
    { category: "Corns", slug: "corns" },
    { category: "Snacks", slug: "snacks" },
    { category: "Soft Drinks", slug: "soft-drinks" },
    { category: "Papers", slug: "papers" },
]


// Icons Related To Each Category
const categoryIcons = {
    chips: "./assets/images/crisps.png",
    corns: "./assets/images/corn-snacks.png",
    snacks: "./assets/images/snack.png",
    'soft-drinks': "./assets/images/cola.png",
    papers: "./assets/images/tissue-box.png"
};

// Function To Display Categories
const displayCategories = () => {
    const asideCategory = document.querySelector(".aside-categories");
    categories.map(({ category, slug }) => {
        asideCategory.innerHTML += `
        <a href="productCategory.html?category=${slug}">
            <div class="category-menu ${slug === categoryURL ? "active-aside-icon" : ""}">
                <img src="${categoryIcons[slug]}" class="aside-icon-width" alt="">
                <h6>${category}</h6>
            </div>
        </a>
        `
    })
}

window.addEventListener("load", displayCategories);