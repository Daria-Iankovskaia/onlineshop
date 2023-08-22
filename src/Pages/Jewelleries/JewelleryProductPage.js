import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Button } from "../../Buttons/Button";

export const JewelleryProductPage = () => {
    const { id } = useParams();
    const singleJewelleryProductData = useLoaderData();

    return <div id={singleJewelleryProductData.id} key={singleJewelleryProductData.id}>
        <img src={singleJewelleryProductData.image} alt="Product image"></img>
        <h2>{singleJewelleryProductData.title}</h2>
        <h3>{singleJewelleryProductData.price}$</h3>
        <h4>{singleJewelleryProductData.description}</h4>
        <Button productDetails={singleJewelleryProductData} />
    </div>
}

export async function loader({ params }) {
    const { id } = params;
    return fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
}