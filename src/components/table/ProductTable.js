import React, { useState, useEffect } from "react";
import { getAllProduct } from "../../service/product";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState([]);

  const loadAllProducts = () => {
    getAllProduct().then((data) => {
      setProducts(data);
      console.log(data);
    });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
    </div>
  );
};

export default ProductTable;
