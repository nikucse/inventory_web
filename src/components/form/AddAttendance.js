import React, { useState } from "react";

import { addProduct } from "../../service/product";

const AddAttendance = () => {
  const [values, setValues] = useState({
    empId: "",
    date: "",
    totalHours: "",
    location: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { empId, date, totalHours, location, error, loading, didRedirect } =
    values;

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    addProduct({
      empId,
      date,
      totalHours,
      location,
      error,
      loading,
      didRedirect,
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
      <h1 className='text-center'>Attendance</h1>
      <form className='row g-2'>
        <div className='col-md-4'>
          <label htmlFor='empId' className='form-label'>
            Employee Name
          </label>
          <select
            id='empId'
            className='form-select'
            onChange={handleChange("empId")}
            value={empId}>
            <option value={false}>SELECT</option>
            <option value='5467ywdgv'>Pankaj Bisht</option>
            <option value='cfsadeuy6'>Gaurav</option>
          </select>
        </div>
        <div className='row g-2'>
          <div className='col-md-4'>
            <label htmlFor='date' className='form-label'>
              Date
            </label>
            <input
              className='form-control'
              type='date'
              id='date'
              onChange={handleChange("date")}
              value={date}
            />
          </div>
        </div>
        <div className='row g-2'>
          <div className='col-md-4'>
            <label htmlFor='location' className='form-label'>
              Location
            </label>
            <input
              onChange={handleChange("location")}
              value={location}
              type='text'
              className='form-control'
              id='location'
              placeholder='Factory'
            />
          </div>
        </div>
        <div className='row g-2'>
          <div className='col-md-4'>
            <label htmlFor='totalHours' className='form-label'>
              Total Hours
            </label>
            <input
              onChange={handleChange("totalHours")}
              value={totalHours}
              type='number'
              className='form-control'
              id='totalHours'
              placeholder='Total Working Hours'
            />
          </div>
        </div>
        <div className='row g-2'>
          <div className='col-md-4'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAttendance;
