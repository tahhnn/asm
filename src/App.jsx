import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes, redirect, useNavigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import Detail from "./pages/Detail";

function App() {
  const [data, getData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => getData(data));
  }, []);

  const history = useNavigate();

  const addProduct = (product) => {
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    }).then(() => history("/"));
  };
  const removeProduct = (id) => {
    const filter = data.filter((item) => item.id !== +id);
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => getData(filter));
  };
  console.log(data);
  return (
    <>
      <Routes>
        <Route
          index
          path="/"
          element={<Dashboard product={data} removeProduct={removeProduct} />}
        />
        <Route
          path="/dashboard/detail/:id"
          element={<Detail product={data} />}
        />
        <Route
          path="/dashboard/add"
          element={<AddProduct addProduct={addProduct} />}
        />
      </Routes>
    </>
  );
}

export default App;
