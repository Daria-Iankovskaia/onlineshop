import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {

    return (
        <nav>
            <ul>
                <Link to="/">Electronics</Link>
                <Link to="/jewelleries">Jewelleries</Link>
                <Link to="/men">Men</Link>
                <Link to="/women">Women</Link>
                <Link to="/basket">Basket</Link>
            </ul>
        </nav>
    )
}
