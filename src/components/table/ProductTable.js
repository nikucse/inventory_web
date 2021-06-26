import React, { useState, useEffect } from "react";
import { getAllProduct } from "../../service/ProductService";
const ProductTable = () => {
  const [products, setProducts] = useState([]);

  const loadAllProducts = () => {
    getAllProduct().then((data) => {
      setProducts(data.slice(0, 5));
      console.log(data);
    });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  const productList = products.map((product) => (
    <tr scope='row' key={product.id}>
      <td>{product.productName}</td>
      <td>{product.productImageLink}</td>
      <td>{product.dimension}</td>
      <td>{product.status}</td>
      <td>{product.date.substring(0, 10)}</td>
      <td>
        {product.completedDate ? product.completedDate.substring(0, 10) : ""}
      </td>
    </tr>
  ));

  return (
    <div>
      <table className='table'>
        <thead>
          <tr className='bg-primary'>
            <th scope='col'>Name</th>
            <th scope='col'>Image</th>
            <th scope='col'>Dimension</th>
            <th scope='col'>Status</th>
            <th scope='col'>Order Date</th>
            <th scope='col'>Last Date</th>
          </tr>
        </thead>
        <tbody>{productList}</tbody>
      </table>
    </div>
  );
};

export default ProductTable;
