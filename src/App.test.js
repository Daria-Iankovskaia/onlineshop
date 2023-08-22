import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import store from "./Redux/store";
import { Provider } from "react-redux";


test("User can view product details, add them to the basket, and view the basket content", async () => {

    render(<Provider store={store}>
        <App />
    </Provider>);

    const productTitles = await screen.findAllByRole("heading", { level: 2 });
    expect(productTitles[0]).toHaveTextContent("WD 2TB Elements Portable External Hard Drive - USB 3.0");

    const productPrices = await screen.findAllByRole("heading", { level: 3 });
    expect(productPrices[0]).toHaveTextContent("64$");

    const productImages = await screen.findAllByRole("img");
    expect(productImages[0]).toHaveAttribute("src", "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg");

    // User can click on a product to see full details
    fireEvent.click(productImages[0]);


    const productDescription = await screen.findByText("USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system");
    expect(productDescription).toBeInTheDocument();

    const addToBasketButton = await screen.findByRole("button", { name: /add to basket/i });
    expect(addToBasketButton).toBeInTheDocument();

    // User can click on the button to add an item to the basket
    fireEvent.click(addToBasketButton);


    // User can go to the basket page to see its content
    expect(screen.getByText("Basket")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Basket"));


    const basketPageTotal = await screen.findAllByRole("heading", { level: 1 });
    expect(basketPageTotal[1]).toHaveTextContent("TOTAL items: 1");
    expect(basketPageTotal[2]).toHaveTextContent("TOTAL AMOUNT: 64$");

    const quantity = await screen.findAllByRole("heading", { level: 5 });
    expect(quantity[0]).toHaveTextContent("Quantity: 1");

});


// global.fetch = jest.fn(() =>
//     Promise.resolve({
//         json: () => Promise.resolve([{ 
//             id: 1, 
//             title: 'Phone', 
//             price: '$100', 
//             category: 'Electronics', 
//             description: 'New phone', 
//             image: '...' 
//         }])
//     })
// );

// import React from "react";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import store from "./Redux/store";
// import { Provider } from "react-redux";
// import App from "./App";

// describe("onlineshop-app", () => {
//     afterEach(() => {
//         jest.clearAllMocks();
//     });

//     test("User can view product details, add them to the basket, and view the basket content", async () => {
//         render(<Provider store={store}><App /></Provider>);

//         // ... rest of your test code

//         const heading2title = await screen.findByRole("heading", { level: 2 });
//         expect(heading2title).toHaveTextContent("Phone");
//     });
// });