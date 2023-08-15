import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout";
import { ElectronicsPage, loader as electronicsLoader } from "./Pages/Electronics/ElectronicsPage";
import { JewelleriesPage, loader as jewelleryLoader } from "./Pages/Jewelleries/JewelleriesPage";
import { MenPage } from "./Pages/MenPage";
import { WomenPage } from "./Pages/WomenPage";
import { BasketPage } from "./Pages/BasketPage";
import { ElectronicProductPage, loader as electronicProductLoader } from "./Pages/Electronics/ElectronicProductPage";
import { JewelleryProductPage, loader as jewelleryProductLoader } from "./Pages/Jewelleries/JewelleryProductPage";

const router = createBrowserRouter([
  {
    path: "/", element: <Layout />, children: [
      { index: true, element: <ElectronicsPage />, loader: electronicsLoader },
      { path: "/electronicproduct/:id", element: <ElectronicProductPage />, loader: electronicProductLoader },
      { path: "/jewelleries", element: <JewelleriesPage />, loader: jewelleryLoader },
      { path: "/jewelleries/jewelleryproduct/:id", element: <JewelleryProductPage />, loader: jewelleryProductLoader },
      { path: "/men", element: <MenPage /> },
      { path: "/women", element: <WomenPage /> },
      
      // Should I'd rather create another NavBar for basket, about, contacts?
      { path: "/basket", element: <BasketPage /> }
    ],
  }
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
