import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Navigation } from "./Navigation";

export const Layout = () => {
  return (
    <>
      <Link to="/"><h1>SHOP.</h1></Link>
      <Navigation />
      <Outlet />
    </>
  );
};
