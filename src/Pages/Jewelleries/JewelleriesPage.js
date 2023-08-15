import React from "react";
import { useLoaderData, Link } from "react-router-dom";

export const JewelleriesPage = () => {

    const jewelleryProductsData = useLoaderData();
    const allJewelleryProducts = jewelleryProductsData.map(product => {
        return <Link to={`/jewelleries/jewelleryproduct/${product.id}`} key={product.id}><div id={product.id} key={product.id}>
            <img src={product.image} alt="Product image"></img>
            <h2>{product.title}</h2>
            <h3>{product.price}$</h3>
            <h4>View more details</h4>
        </div></Link>
    })

    return <div>{allJewelleryProducts}</div>
}

export async function loader() {
    return fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res => res.json())
}