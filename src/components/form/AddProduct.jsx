import React, { useState } from "react";

import { addProduct } from "../../service/product";

const AddProduct = () => {
  const [values, setValues] = useState({
    name: "",
    category,
    productImage,
    dimension: "",
    color: "",
    price: "",
    actualPrice: "",
    buildBy: "",
    location: "",
    status: "",
    message: "",
    error,
    loading,
    didRedirect,
  });

  const {
    name,
    category,
    productImage,
    dimension,
    color,
    price,
    actualPrice,
    buildBy,
    location,
    status,
    message,
    error,
    loading,
    didRedirect,
  } = values;

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    addProduct({
      name,
      category,
      productImage,
      dimension,
      color,
      price,
      actualPrice,
      buildBy,
      location,
      status,
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
          console.log("Add Product Detail =====> ", data);
        }
      })
      .catch(console.log("Login request failed"));
  };

  const handleChange = (name) => (event) => {
    console.log("=====>   ", name + "    =======>   ", event.target.value);

    setValues({ ...values, error: false, [name]: event.target.value });
  };

  return (
    <div className='container mt-3'>
      <h2 className=''>Add Product</h2>
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
                onChange={handleChange("name")}
                value={name}
              />
            </div>

            <div className='col-md-12 mb-3'>
              <label htmlFor='category' className='form-label'>
                Category
              </label>
              <select class='form-control'>
                <option selected>BED</option>
                <option>SOFA</option>
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
                onChange={handleChange("dimension")}
                value={dimension}
              />
            </div>
          </div>
          <div className='col-md-6'>
            <label htmlFor='productImage' class='form-label'>
              Product Image
            </label>
            <input
              class='form-control'
              type='file'
              id='productImage'
              multiple
              onChange={handleChange("productImage")}
              value={productImage}
            />
          </div>
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
                onChange={handleChange("color")}
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
                onChange={handleChange("price")}
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
                onChange={handleChange("actualPrice")}
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
                className='form-control form-control'
                onChange={handleChange("buildBy")}
                value={buildBy}>
                <option selected>Selected...</option>
                <option>Rajesh Sharma</option>
                <option>Manoj Sharma</option>
              </select>
            </div>

            <div className='col-md-12 mb-3'>
              <label htmlFor='status' className='form-label'>
                Status
              </label>
              <select
                id='status'
                className='form-control form-control'
                onChange={handleChange("status")}
                value={status}>
                <option selected>Initiated</option>
                <option>InProgress</option>
                <option>Polish</option>
                <option>Kushan</option>
                <option>Dispatched</option>
                <option>Dilevered</option>
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
                onChange={handleChange("message")}
                value={message}
              />
            </div>
          </div>
        </div>

        <div className='center mb-3 mx-auto'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
