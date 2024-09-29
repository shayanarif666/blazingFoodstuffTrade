import { data } from "./data.js";

// Get All Products / Search Products / Category Wise Products
export const fetchProducts = (category = "", search = "") => {
    try {
        if (category) {
            const filteredProducts = data.filter(({ category }) => category === categ);
            return filteredProducts;
        } else if (search) {
            const filteredProducts = data.filter(({ title }) => title.includes(search));
            return filteredProducts;
        } else {
            return data;
        }
    } catch (error) {
        console.log("Error While Fetching Products :: ", error)
    }
}

// Get Single Product
export const fetchProduct = (prodID) => {
    try {
        const isProductFound = data.find(({ id }) => id === prodID);
        return isProductFound;
    } catch (error) {
        console.log("Error While Fetching Single Product :: ", error)
    }
}

// Create Product
export const createProduct = (product) => {
    try {
        data.push(product);
        return data;
    } catch (error) {
        console.log("Error While Fetching Create Product :: ", error)
    }
}

// Update Product
export const updateProduct = (prodID) => {
    try {
        const isProductFound = data.findIndex(({ id }) => id === prodID);
        return data[isProductFound]
        // return data;
    } catch (error) {
        console.log("Error While Fetching Update Product :: ", error)
    }
}

// Delete Product
export const deleteProduct = (prodID) => {
    try {
        const isProductFound = data.find(({ id }) => id === prodID);
        return isProductFound;
        // return data;
    } catch (error) {
        console.log("Error While Fetching Delete Product :: ", error)
    }
}