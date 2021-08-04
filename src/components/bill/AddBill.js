import React, { useState } from "react";

import { addProduct } from "../../service/ProductService";

const AddBill = () => {
  const [values, setValues] = useState({
    billType,
    uploadBill,
    message,
    status,
    error,
    loading,
    didRedirect,
  });

  const { billType, uploadBill, status, message, error, loading, didRedirect } =
    values;

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    addProduct({
      billType,
      uploadBill,
      message,
      status,
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
      <h1 className='text-center'>Upload Bill</h1>
      <form className='row g-3'>
        <div className=' form-group col-md-6'>
          <label htmlFor='billType' className='form-label'>
            Build By
          </label>
          <select
            id='billType'
            className='form-select'
            onChange={handleChange("billType")}
            value={billType}>
            <option value={""}>Selected...</option>
            <option value='In'>In</option>
            <option value='Out'>Out</option>
          </select>
        </div>
        <div className='row g-2'>
          <div className='col-md-6'>
            <label htmlFor='formFileMultiple' className='form-label'>
              Upload bill file
            </label>
            <input
              className='form-control'
              type='file'
              id='formFileMultiple'
              multiple
            />
          </div>
        </div>
        <div className='row g-2'>
          <div className='col-md-6'>
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
        </div>
        <div className='row g-2'>
          <div className='col-md-6'>
            <label htmlFor='status' className='form-label'>
              Status
            </label>
            <select id='status' className='form-select'>
              <option>SELECT</option>
              <option>Pending</option>
              <option>Complete</option>
            </select>
          </div>
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

export default AddBill;
