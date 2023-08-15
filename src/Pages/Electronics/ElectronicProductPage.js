import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Button } from "../../Buttons/Button";

export const ElectronicProductPage = () => {
   // const { id } = useParams();
    const singleElectronicProductData = useLoaderData();

    return <div id={singleElectronicProductData.id} key={singleElectronicProductData.id}>
        <img src={singleElectronicProductData.image} alt="Product image"></img>
        <h2>{singleElectronicProductData.title}</h2>
        <h3>{singleElectronicProductData.price}$</h3>
        <h4>{singleElectronicProductData.description}</h4>
        <Button />
    </div>
}

export async function loader(match) {
    debugger;
    const { id } = match.params;
    return fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
}


    /* 
    When the ElectronicProductPage component gets rendered due to the route match, it receives several props from react-router-dom, one of which is the match prop.
    So the name of the prop is match. It provides an object that has some properties like params, isExact, path, and url.
    params: An object containing key-value pairs parsed from the URL corresponding to the dynamic parts of the route. In this case, it would have the structure like { id: 'some-value' }.
    isExact: A boolean indicating whether the entire URL matched the route exactly.
    path: The route template used to match, e.g., /products/:id.
    url: The matched portion of the URL. For instance, if the path is /products/:id and the current URL is /products/1, then the URL would be /products/1.
    Without destructuring, you would obtain the entire params object and then access its id property like this:

    const params = useParams(); 
    const id = params.id;

    useParams() - litterally use parameteres that were passed to the component which is a function
    */
   /* Your understanding is correct when considering the structure of the match object. When you use react-router-dom, and a component is rendered via a <Route>, it receives the match prop, which has a params property inside of it.

In a more traditional setup, without hooks, you'd indeed go through a process like this:

javascript
Copy code
function ComponentName(props) {
  const id = props.match.params.id;
}
Or, using destructuring:

javascript
Copy code
function ComponentName({ match }) {
  const id = match.params.id;
}
However, hooks in react-router-dom (like useParams) are provided for convenience, to allow components to directly access certain bits of route data without having to receive and drill through the match prop.

The useParams hook abstracts away the need to access match and then params. It directly gives you the params object. Thus, when you use:

javascript
Copy code
const { id } = useParams();
You're directly destructuring the id property from the params object, without having to first access match.

It's a shorthand, making it more concise and easier to get just the pieces of route data you need in functional components.*/
