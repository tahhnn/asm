import React from "react";
import { Link } from "react-router-dom";

function Dashboard({ product, removeProduct }) {
  const handleDelete = (id) => {
    removeProduct(id);
  };
  console.log(product);
  return (
    <>
      <table>
        <thead>
          <th>ID</th>
          <th>NAME</th>
          <th>PRICE</th>
          <th>ACTION</th>
        </thead>
        <tbody>
          {product.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <Link to={`/dashboard/detail/${item.id}`}>
                    Chi tiết sản phẩm
                  </Link>
                  <button onClick={() => handleDelete(item.id)}>Xóa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Dashboard;
