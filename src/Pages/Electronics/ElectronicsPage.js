import React from "react";
import { useLoaderData, Link } from "react-router-dom";

export const ElectronicsPage = () => {

    const electronicsProductsData = useLoaderData();

    const allElectronicsProducts = electronicsProductsData.map(product => {
        return <Link to={`/electronicproduct/${product.id}`} key={product.id}><div id={product.id} key={product.id}>
            <img src={product.image} alt="Product image"></img>
            <h2>{product.title}</h2>
            <h3>{product.price}$</h3>
            <h4>View more details</h4>
        </div></Link>
    })

    return (
        <div>{allElectronicsProducts}</div>
    )
}

export async function loader() {
    return fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res => res.json())
}

