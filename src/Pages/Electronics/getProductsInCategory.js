// function getProductsInCategory(category) {
//     return fetch(`https://fakestoreapi.com/products/category/${category}`)
//         .then(res => res.json())
// }

// export default getProductsInCategory;


function getProductsInCategory(category) {
    return fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error fetching category ${category}: ${res.statusText}`);
            }
            return res.json();
        });
}

export default getProductsInCategory;