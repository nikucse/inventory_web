import React, { useState, useEffect } from 'react';
import { addProduct, updateProduct } from '../../service/ProductService';
import { useHistory } from 'react-router-dom';
import ImageUploader from '../../components/ImageUploader';
import { convertBase64 } from '../../util/BasicUtils';
import { getAllEmployee } from '../../service/EmployeeService';
import FileViewer from '../../util/FileViewer';
import {
  categoryOptionData,
  statusOptionData,
} from '../../constant/CommonOptions';
import './AddProduct.css';

const AddProduct = () => {
  let history = useHistory();
  const [employees, setEmployees] = useState([]);

  const [values, setValues] = useState({
    productName: '',
    category: '0',
    productImageLink: '',
    dimension: '',
    color: '',
    price: '',
    actualPrice: '',
    buildBy: '0',
    location: '',
    status: '0',
    message: '',
    isEdit: false,
  });

  const {
    productName,
    category,
    productImageLink,
    dimension,
    color,
    price,
    actualPrice,
    buildBy,
    location,
    status,
    message,
    isEdit,
  } = values;

  const loadAllEmployee = () => {
    getAllEmployee().then((data) => {
      setEmployees(data);
      console.log(data);
    });
  };

  useEffect(() => {
    loadAllEmployee();
    if (history.location.state && history.location.state.productName)
      setValues({ ...values, ...history.location.state, isEdit: true });
    history.push({
      state: {},
    });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('values', values);
    addProduct(values)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          setValues({
            ...values,
            didRedirect: true,
          });

          history.push('/app/products');
          console.log('Add Product Detail =====> ', data);
        }
      })
      .catch((err) => console.log('Add Product request failed', err));
  };

  const onUpdate = (event) => {
    event.preventDefault();
    console.log('values', values);
    updateProduct(values)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          setValues({
            ...values,
            didRedirect: true,
          });
          history.push('/app/products');

          console.log('Add Product Detail =====> ', data);
        }
      })
      .catch((err) => console.log('Add Product request failed', err));
  };
  const handleChange = (name) => (event) => {
    console.log(event.target.value);
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const setImageData = async (imageData) => {
    const base64 = await convertBase64(imageData);
    setValues({ ...values, error: false, productImageLink: base64 });
  };

  return (
    <div className='container mt-3'>
      {isEdit ? (
        <h2 className=''>Edit Product</h2>
      ) : (
        <h2 className=''>Add Product</h2>
      )}
      <form className='g-3'>
        <div className='row'>
          <div className='col-md-6 pl-0'>
            <div className='col-md-12 mb-3'>
              <label htmlFor='name' className='form-label'>
                Product Name
              </label>
              <input
                type='text'
                className='form-control'
                id='name'
                placeholder='Product Name'
                onChange={handleChange('productName')}
                value={productName}
                required
              />
            </div>

            <div className='col-md-12 mb-3'>
              <label htmlFor='category' className='form-label'>
                Category
              </label>
              <select
                id='category'
                className='form-control'
                onChange={handleChange('category')}
                value={category}>
                {categoryOptionData.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.lable}
                  </option>
                ))}
              </select>
            </div>

            <div className='col-md-12 mb-3'>
              <label htmlFor='dimension' className='form-label'>
                Dimension
              </label>
              <input
                type='text'
                className='form-control'
                id='dimension'
                placeholder='6X6*4'
                onChange={handleChange('dimension')}
                value={dimension}
                required
              />
            </div>
          </div>
          {isEdit ? (
            <FileViewer
              productUrl={productImageLink}
              width={'450'}
              height={'250'}
            />
          ) : (
            <ImageUploader
              parentImageSet={setImageData}
              fieldLabel='Upload Product Image'
              field='productImageLink'
            />
          )}
        </div>
        <div className='row'>
          <div className='col-md-6 pl-0'>
            <div className='col-md-12 mb-3'>
              <label htmlFor='color' className='form-label'>
                Color
              </label>
              <input
                type='text'
                className='form-control'
                id='color'
                placeholder='water color, rust'
                onChange={handleChange('color')}
                value={color}
              />
            </div>
            <div className='col-md-12 mb-3'>
              <label htmlFor='price' className='form-label'>
                Price
              </label>
              <input
                type='Number'
                className='form-control'
                id='price'
                placeholder='27800'
                onChange={handleChange('price')}
                value={price}
              />
            </div>
            <div className='col-md-12 mb-3'>
              <label htmlFor='actualPrice' className='form-label'>
                Actual Price
              </label>
              <input
                type='Number'
                className='form-control'
                id='actualPrice'
                placeholder='24800'
                onChange={handleChange('actualPrice')}
                value={actualPrice}
              />
            </div>
          </div>
          <div className='col-md-6 pl-0'>
            <div className='col-md-12 mb-3'>
              <label htmlFor='buildBy' className='form-label'>
                Build By
              </label>
              <select
                id='buildBy'
                className='form-control'
                onChange={handleChange('buildBy')}
                value={buildBy}>
                <option key='0' value='0'>
                  Select
                </option>
                {employees.map((employee) => (
                  <option key={employee.id} value={employee.fullName}>
                    {employee.fullName}
                  </option>
                ))}
              </select>
            </div>

            <div className='col-md-12 mb-3'>
              <label htmlFor='status' className='form-label'>
                Status
              </label>
              <select
                id='status'
                className='form-control form-control'
                onChange={handleChange('status')}
                value={status}>
                {statusOptionData.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.lable}
                  </option>
                ))}
              </select>
            </div>

            <div className='col-md-12 mb-3'>
              <label htmlFor='message' className='form-label'>
                Message
              </label>
              <input
                type='text'
                className='form-control'
                id='message'
                placeholder='Enter Some Extra Info'
                onChange={handleChange('message')}
                value={message}
              />
            </div>
          </div>
        </div>

        <div className='col-12 text-center'>
          {isEdit ? (
            <button
              type='submit'
              className='btn btn-primary btn-lg col-md-6'
              onClick={onUpdate}>
              Update
            </button>
          ) : (
            <button
              type='submit'
              className='btn btn-primary btn-lg col-md-6'
              onClick={onSubmit}>
              Add Product
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
