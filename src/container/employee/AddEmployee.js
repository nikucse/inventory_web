import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { addEmployee, updateEmployee } from '../../service/EmployeeService';

const AddEmployee = () => {
  let history = useHistory();
  const [values, setValues] = useState({
    fullName: '',
    emailId: '',
    designation: '',
    perDayWages: '',
    address: '',
    panCardNo: '',
    adhaarCardNo: '',
    primaryContactNo: '',
    secondaryContactNo: '',
    country: '',
    state: '',
    city: '',
    zip: '',
    error: '',
    loading: false,
    didRedirect: false,
    isEdit: false,
  });

  const {
    fullName,
    emailId,
    designation,
    perDayWages,
    address,
    panCardNo,
    adhaarCardNo,
    primaryContactNo,
    secondaryContactNo,
    country,
    state,
    city,
    zip,
    isEdit,
  } = values;

  useEffect(() => {
    if (history.location.state && history.location.state.fullName)
      setValues({ ...values, ...history.location.state, isEdit: true });
    history.push({
      state: {},
    });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    addEmployee({
      fullName,
      emailId,
      designation,
      perDayWages,
      address,
      panCardNo,
      adhaarCardNo,
      primaryContactNo,
      secondaryContactNo,
      country,
      state,
      city,
      zip,
    })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          setValues({
            ...values,
            didRedirect: true,
          });
          history.push('/app/employees');
          console.log('Add Employee Detail =====> ', data);
        }
      })
      .catch((err) => {
        console.log('Login request failed');
        history.push('/app/employees');
      });
  };

  const onUpdate = (event) => {
    event.preventDefault();
    console.log('values', values);
    updateEmployee(values)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          setValues({
            ...values,
            didRedirect: true,
          });
          history.push('/app/employees');

          console.log('Edit Employee Detail =====> ', data);
        }
      })
      .catch((err) => console.log('Add Product request failed', err));
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  return (
    <div className='container'>
      {isEdit ? (
        <h2 className='text-center'>Update Employee</h2>
      ) : (
        <h2 className='text-center'>Add Employee</h2>
      )}
      <form className='row g-3'>
        <div className='col-md-6 mb-3'>
          <label htmlFor='fullName' className='form-label'>
            Full Name
          </label>
          <input
            type='text'
            className='form-control'
            id='fullName'
            placeholder='Full Name'
            onChange={handleChange('fullName')}
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
            placeholder='Email Id'
            onChange={handleChange('emailId')}
            value={emailId}
          />
        </div>
        <div className='col-md-6 mb-3'>
          <label htmlFor='designation' className='form-label'>
            Designation
          </label>
          <input
            type='text'
            className='form-control'
            id='designation'
            placeholder='Organization Name'
            onChange={handleChange('designation')}
            value={designation}
          />
        </div>

        <div className='col-6 mb-3'>
          <label htmlFor='perDayWages' className='form-label'>
            Per Day Wages
          </label>
          <input
            type='Number'
            className='form-control'
            id='perDayWages'
            placeholder='278'
            onChange={handleChange('perDayWages')}
            value={perDayWages}
          />
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
            onChange={handleChange('primaryContactNo')}
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
            onChange={handleChange('secondaryContactNo')}
            value={secondaryContactNo}
          />
        </div>
        <div className='col-md-6 mb-3'>
          <label htmlFor='panCardNo' className='form-label'>
            Pancard
          </label>
          <input
            type='text'
            className='form-control'
            id='panCardNo'
            placeholder='Enter Some Extra Info'
            onChange={handleChange('panCardNo')}
            value={panCardNo}
          />
        </div>
        <div className='col-md-6 mb-3'>
          <label htmlFor='adhaarCardNo' className='form-label'>
            Aadhaar
          </label>
          <input
            type='text'
            className='form-control'
            id='adhaarCardNo'
            placeholder='Enter Some Extra Info'
            onChange={handleChange('adhaarCardNo')}
            value={adhaarCardNo}
          />
        </div>
        <div className='col-7 mb-3'>
          <label htmlFor='address' className='form-label'>
            Address
          </label>
          <textarea
            // type='text'
            className='form-control'
            id='address'
            placeholder='Apartment, studio, or floor'
            onChange={handleChange('address')}
            value={address}
          />
        </div>
        <div className='col-md-6 mb-3'>
          <label htmlFor='country' className='form-label'>
            Country
          </label>
          <select
            id='country'
            className='form-control'
            onChange={handleChange('country')}
            value={country}>
            <option selected>INDIA</option>
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
            onChange={handleChange('state')}
            value={state}>
            <option selected>Choose...</option>
            <option value='delhi'>Delhi</option>
          </select>
        </div>
        <div className='col-md-6 mb-3'>
          <label htmlFor='city' className='form-label'>
            City
          </label>
          <input
            type='text'
            className='form-control'
            id='city'
            onChange={handleChange('city')}
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
            onChange={handleChange('zip')}
            value={zip}
          />
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
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
