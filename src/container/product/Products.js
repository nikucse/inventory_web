import React, { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import { getAllProduct } from '../../service/ProductService';
import { useHistory } from 'react-router-dom';
import MonthList from '../../components/common/MonthList';
import './products.css';
import FileViewer from '../../util/FileViewer';

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [error, setError] = useState([]);
  let history = useHistory();

  const loadAllProducts = () => {
    getAllProduct().then((data) => {
      setProducts(data);
      console.log(data);
    });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  const onEditProduct = (product) => {
    console.log(product);
    history.push({
      pathname: '/app/add-product',
      state: product,
    });
  };

  const displayImage = (imageUrl) => {
    console.log(imageUrl);
  };

  const productList = products.map((product) => (
    <tr key={product.id}>
      <td>{product.productName}</td>
      <td>{product.dimension}</td>
      <td onClick={() => displayImage(product.productImageLink)}>
        {product.productImageLink === '' ||
        product.productImageLink == undefined ? (
          ''
        ) : (
          <FileViewer
            productUrl={product.productImageLink}
            width={'96'}
            height={'65'}
          />
        )}
      </td>
      <td>{product.price}</td>
      <td>{product.actualPrice}</td>
      <td>{product.buildBy}</td>
      <td>{product.location}</td>
      <td>{product.status}</td>
      <td>{product.message}</td>
      <td>{product.date.substring(0, 10)}</td>
      <td>{product.completedDate}</td>
      <td className='text-primary' onClick={() => onEditProduct(product)}>
        <FaEdit />
      </td>
    </tr>
  ));

  return (
    <div className='container-fluid py-5'>
      <div className='row justify-content-center'>
        <div className='col-md-6 text-center m-2'>
          <h2 className='heading-section'>Product List</h2>
        </div>
        <MonthList />
      </div>
      <div className='row justify-content-center'>
        <div className='col-md-12'>
          <table className='table'>
            <thead className='bg-primary text-light'>
              <tr>
                <th>Name</th>
                <th>Dimension</th>
                <th>Photo</th>
                <th>Price</th>
                <th>Actual Price</th>
                <th>Build By</th>
                <th>Location</th>
                <th>Status</th>
                <th>Message</th>
                <th>Order Date</th>
                <th>Completed Date</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>{productList}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
