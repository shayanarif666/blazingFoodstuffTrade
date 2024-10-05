// variables 
const searchBarContainer = document.querySelector("#searchBar");

// Fucntion To Navigate Search Result
const handleSearchBar = (e) => {
    if (e.keyCode === 13) {
        window.location.href = `search.html?search=${e.target.value.replace(" ", "_")}`
    }
}

searchBarContainer.addEventListener("keyup", handleSearchBar)