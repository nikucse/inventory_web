import React, { useState } from "react";
import { addProduct } from "../../service/product";

const AddEmployee = () => {
  const [values, setValues] = useState({
    fullName: "",
    emailId: "",
    organization: "",
    address: "",
    productId: "",
    primaryContactNo: "",
    secondaryContactNo: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    other: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const {
    fullName,
    emailId,
    organization,
    address,
    productId,
    primaryContactNo,
    secondaryContactNo,
    country,
    state,
    city,
    zip,
    other,
    error,
    loading,
    didRedirect,
  } = values;

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    addProduct({
      fullName,
      emailId,
      organization,
      address,
      productId,
      primaryContactNo,
      secondaryContactNo,
      country,
      state,
      city,
      zip,
      other,
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
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  return (
    <div className='container'>
      <h1 className=''>Add Customer</h1>
      <form className='row g-3'>
        <div className='col-md-6 mb-3'>
          <label htmlFor='fullName' className='form-label'>
            Full Name
          </label>
          <input
            type='text'
            className='form-control'
            id='fullName'
            placeholder='Enter Full Name'
            onChange={handleChange("fullName")}
            value={fullName}
          />
        </div>
        <div className='col-md-6 mb-3'>
          <label htmlFor='emailId' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            id='emailId'
            placeholder='Enter Email Id'
            onChange={handleChange("email")}
            value={emailId}
          />
        </div>
        <div className='col-md-6 mb-3'>
          <label htmlFor='organization' className='form-label'>
            Organization Name
          </label>
          <input
            type='text'
            className='form-control'
            id='organization'
            placeholder='Organization Name'
            onChange={handleChange("organization")}
            value={organization}
          />
        </div>
        
        <div className='col-md-6 mb-3'>
          <label htmlFor='productId' className='form-label'>
            Product Item
          </label>
          <select
            id='productId'
            className='form-control'
            onChange={handleChange("productId")}
            value='test'>
            <option>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className='col-md-6 mb-3'>
          <label htmlFor='primaryContactNo' className='form-label'>
            Primary Contact No
          </label>
          <input
            type='text'
            className='form-control'
            id='primaryContactNo'
            placeholder='999999999'
            onChange={handleChange("primaryContactNo")}
            value={primaryContactNo}
          />
        </div>
        <div className='col-md-6 mb-3'>
          <label htmlFor='secondaryContactNo' className='form-label'>
            Secondary Contact No
          </label>
          <input
            type='text'
            className='form-control'
            id='secondaryContactNo'
            placeholder='999999999'
            onChange={handleChange("secondaryContactNo")}
            value={secondaryContactNo}
          />
        </div>
        <div className='col-md-7 mb-3'>
          <label htmlFor='other' className='form-label'>
            Other
          </label>
          <textarea
            type='text'
            className='form-control'
            id='other'
            placeholder='Enter Some Extra Info'
            onChange={handleChange("other")}
            value={other}
          />
        </div>
        
        <div className='col-7 mb-3'>
          <label htmlFor='address' className='form-label'>
            Address
          </label>
          <textarea
            type='text'
            className='form-control'
            id='address'
            placeholder='Apartment, studio, or floor'
            onChange={handleChange("address")}
            value={address}
          />
        </div>
        <div className='col-md-6 mb-3'>
          <label htmlFor='city' className='form-label'>
            City
          </label>
          <input
            type='text'
            className='form-control'
            id='city'
            onChange={handleChange("city")}
            value={city}
          />
        </div>
        <div className='col-md-6 mb-3'>
          <label htmlFor='zip' className='form-label'>
            Zip Code
          </label>
          <input
            type='text'
            className='form-control'
            id='zip'
            onChange={handleChange("zip")}
            value={zip}
          />
        </div>
        <div className='col-md-6 mb-3'>
          <label htmlFor='country' className='form-label'>
            Country
          </label>
          <select
            id='country'
            className='form-control'
            onChange={handleChange("country")}
            value='test'>
            <option>INDIA</option>
            <option>...</option>
          </select>
        </div>
        <div className='col-md-6 mb-3'>
          <label htmlFor='state' className='form-label'>
            State
          </label>
          <select
            id='state'
            className='form-control'
            onChange={handleChange("state")}
            value='test'>
            <option>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className='col-12 center mb-3'>
          <button type='submit' className='btn btn-primary'>
            Add Customer
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
