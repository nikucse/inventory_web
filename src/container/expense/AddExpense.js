import React, { useState } from "react";

import { addProduct } from "../../service/ProductService";

const AddExpense = () => {
  const [values, setValues] = useState({
    givenTo: "",
    givenBy: "",
    category: "",
    advanceAmount: "",
    givenAmount: "",
    balance: "",
    message: "",
    error,
    loading,
    didRedirect,
  });

  const {
    givenTo,
    givenBy,
    category,
    advanceAmount,
    givenAmount,
    balance,
    message,
    error,
    loading,
    didRedirect,
  } = values;

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    addProduct({
      givenTo,
      givenBy,
      category,
      advanceAmount,
      givenAmount,
      balance,
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
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  return (
    <div className='container'>
      <h1 className='text-center'>Daily expense</h1>
      <form className='row g-2'>
        <div className='col-md-4'>
          <label htmlFor='givenTo' className='form-label'>
            Given To
          </label>
          <select
            id='givenTo'
            className='form-select'
            onChange={handleChange("givenTo")}
            value='givenTo'>
            <option>SELECT</option>
            <option>Pankaj Bisht</option>
            <option>Gaurav</option>
          </select>
        </div>
        <div className='col-md-4'>
          <label htmlFor='givenBy' className='form-label'>
            Given By
          </label>
          <select
            id='givenBy'
            className='form-select'
            onChange={handleChange("givenTo")}
            value='givenTo'>
            <option>SELECT</option>
            <option>Pankaj Bisht</option>
            <option>Gaurav</option>
          </select>
        </div>
        <div className='col-md-4'>
          <label htmlFor='givenBy' className='form-label'>
            Category
          </label>
          <select
            id='givenBy'
            className='form-select'
            onChange={handleChange("givenTo")}
            value='givenTo'>
            <option>SELECT</option>
            <option>Tool</option>
            <option>Tea</option>
            <option>Advance</option>
          </select>
        </div>
        <div className='col-md-4'>
          <label htmlFor='amount' className='form-label'>
            Amount
          </label>
          <input
            type='number'
            className='form-control'
            id='amount'
            placeholder='2000'
          />
        </div>

        <div className='col-md-4'>
          <label htmlFor='message' className='form-label'>
            Message
          </label>
          <input
            type='text'
            className='form-control'
            id='message'
            placeholder='Message'
          />
        </div>
        <div className='col-md-4'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
