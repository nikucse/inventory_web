import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addAssignClient } from '../../service/ClientService';
import { getAllProduct } from '../../service/ProductService';

const AssignProduct = () => {
  const history = useHistory();
  const productIds = [];
  const [id, setId] = useState('');
  const [productId, setProductId] = useState([]);
  const [products, setProducts] = useState([]);
  const [values, setValues] = useState({
    message: '',
    error,
    loading,
    didRedirect,
  });

  const { message, error, loading, didRedirect } = values;

  const loadAllProduct = () => {
    getAllProduct().then((data) => {
      setProducts(data);
      console.log(data);
    });
  };

  useEffect(() => {
    loadAllProduct();
    if (history.location.state && history.location.state.id) {
      setId(history.location.state.id);
    }
    history.push({
      state: {},
    });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    addAssignClient({
      id,
      productId,
      message,
    })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          setValues({
            ...values,
            didRedirect: true,
          });
          history.push('/app/clients');
          console.log('Add Expense Detail =====> ', data);
        }
      })
      .catch((err) => {
        console.log('Failed to Add Expense', err);
        history.push('/app/clients');
      });
  };

  const handleChange = (name) => (event) => {
    if (name === 'productId') {
      console.log('======>  ', event.target.value);
      productIds.push(event.target.value);
      setProductId(productIds);
      console.log(productId);
    }
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  return (
    <div className='container pt-5'>
      <h2 className='text-center p-3'>Assign Product to Client</h2>
      <form className='row justify-content-center'>
        <div className='col-md-8'>
          <label htmlFor='productId' className='form-label'>
            Product Name
          </label>
          <select
            className='form-control'
            id='productId'
            onChange={handleChange('productId')}
            value={productId}>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.productName}
              </option>
            ))}
          </select>
        </div>

        <div className='col-md-8 p-3'>
          <label htmlFor='message' className='form-label'>
            Message
          </label>
          <input
            type='text'
            className='form-control'
            id='message'
            placeholder='Message'
            onChange={handleChange('message')}
            value={message}
          />
        </div>
        <div className='col-md-8 text-center p-3'>
          <button
            type='submit'
            className='btn btn-primary btn-lg col-md-6'
            onClick={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssignProduct;
