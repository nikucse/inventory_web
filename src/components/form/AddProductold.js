import React, { useState } from "react";

import { addProduct } from "../../service/ProductService";

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
    <div className='container'>
      <h1 className='text-center'>Add Product</h1>
      <form className='row g-3'>
        <div className='col-md-4'>
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
        <div className='col-md-2'>
          <label htmlFor='category' className='form-label'>
            Category
          </label>
          <select
            id='country'
            className='form-select'
            onChange={handleChange("category")}
            value={category}>
            <option value={"Bed"}>BED</option>
            <option value={"Sofa"}>SOFA</option>
          </select>
        </div>
        <div className='col-md-4'>
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
        <div className='col-md-4'>
          <label htmlFor='productImage' className='form-label'>
            Product Image
          </label>
          <input
            className='form-control'
            type='file'
            id='productImage'
            multiple
            onChange={handleChange("productImage")}
            value={productImage}
          />
        </div>
        <div className='col-3'>
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
        <div className='col-2'>
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
        <div className='col-2'>
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
        <div className='col-md-3'>
          <label htmlFor='buildBy' className='form-label'>
            Build By
          </label>
          <select
            id='buildBy'
            className='form-select'
            onChange={handleChange("buildBy")}
            value={buildBy}>
            <option value={""}>Selected...</option>
            <option value={"Rajesh Sharma"}>Rajesh Sharma</option>
            <option value={"Manoj Sharma"}>Manoj Sharma</option>
          </select>
        </div>

        <div className='col-md-3'>
          <label htmlFor='location' className='form-label'>
            Location
          </label>
          <select
            id='location'
            className='form-select'
            onChange={handleChange("location")}
            value={location}>
            <option value={""}>Selected...</option>
            <option value={"Factory"}>Factory</option>
            <option value={"Site"}>Site</option>
          </select>
        </div>

        <div className='col-md-3'>
          <label htmlFor='status' className='form-label'>
            Status
          </label>
          <select
            id='status'
            className='form-select'
            onChange={handleChange("status")}
            value={status}>
            <option value={"Initiated"}>Initiated</option>
            <option value={"InProgress"}>InProgress</option>
            <option value={"Polish"}>Polish</option>
            <option value={"Kushan"}>Kushan</option>
            <option value={"Dispatched"}>Dispatched</option>
            <option value={"Dilevered"}>Dilevered</option>
          </select>
        </div>
        <div className='col-md-4'>
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

        <div className='col-12 center'>
          <button type='submit' className='btn btn-primary' onClick={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
