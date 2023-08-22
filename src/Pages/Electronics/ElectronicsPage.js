// import React from "react";
// import { useLoaderData, Link } from "react-router-dom";
// import getProductsInCategory from "./getProductsInCategory";

// export const ElectronicsPage = () => {

//     const electronicsProductsData = useLoaderData();

//     const allElectronicsProducts = electronicsProductsData.map(product => {
//         return <Link to={`/electronicproduct/${product.id}`} key={product.id}><div id={product.id} key={product.id} data-testid="id">
//             <img src={product.image} alt="Product image"></img>
//             <h2>{product.title}</h2>
//             <h3>{product.price}$</h3>
//             <h4>View more details</h4>
//         </div></Link>
//     })

//     return (
//         <div>{allElectronicsProducts}</div>
//     )
// }

import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import getProductsInCategory from "./getProductsInCategory";

export const ElectronicsPage = () => {

    const electronicsProductsData = useLoaderData();

    if (!Array.isArray(electronicsProductsData)) {
        return <div>Loading...</div>;
    }

    const allElectronicsProducts = electronicsProductsData.map(product => {
        return (
            <Link to={`/electronicproduct/${product.id}`} key={product.id}>
                <div id={product.id} key={product.id} data-testid="id">
                    <img src={product.image} alt="Product image"></img>
                    <h2>{product.title}</h2>
                    <h3>{product.price}$</h3>
                    <h4>View more details</h4>
                </div>
            </Link>
        );
    });

    return (
        <div>{allElectronicsProducts}</div>
    );
}


// export async function loader() {
//     const data = await getProductsInCategory("electronics")
//     return data || [];
// }

export async function loader() {
    try {
        const data = await getProductsInCategory("electronics");
        return data || [];
    } catch (error) {
        console.error("Error fetching electronics products:", error);
        return [];
    }
}

