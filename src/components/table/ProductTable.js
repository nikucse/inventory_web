import React, { useState, useEffect } from 'react';
import Products from '../../container/product/Products';
import { getAllProduct } from '../../service/ProductService';
import FileViewer from '../../util/FileViewer';

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  const loadAllProducts = () => {
    getAllProduct().then((data) => {
      setProducts(data);
    });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  const productList =
    products &&
    products.map((product) => (
      <tr scope='row' key={product.id}>
        <td>{product.productName}</td>
        <td>
          {product.productImageLink === undefined ||
          product.productImageLink === '' ? (
            ''
          ) : (
            <FileViewer
              productUrl={product.productImageLink}
              width={'96'}
              height={'65'}
            />
          )}
        </td>
        <td>{product.dimension}</td>
        <td>{product.status}</td>
        <td>{product.date.substring(0, 10)}</td>
        <td>
          {product.completedDate ? product.completedDate.substring(0, 10) : ''}
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
