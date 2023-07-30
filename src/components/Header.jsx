import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <Link to={"/"}>DashBoard</Link>
      <Link to={"/dashboard/add"}>AddProduct</Link>
    </>
  );
}

export default Header;
