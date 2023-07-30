import React, { useState } from "react";

function AddProduct({ addProduct }) {
  const [product, setProducts] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newProduct = { ...product, [name]: value };
    setProducts(newProduct);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter Name..."
        />
        <input
          type="text"
          name="price"
          onChange={handleChange}
          placeholder="Enter price..."
        />
        <button>Thêm mới</button>
      </form>
    </div>
  );
}

export default AddProduct;
