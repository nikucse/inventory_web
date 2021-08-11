import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { addClient, updateClient } from '../../service/ClientService';

const AddClient = () => {
  let history = useHistory();

  const [values, setValues] = useState({
    fullName: '',
    emailId: '',
    organization: '',
    address: '',
    primaryContactNo: '',
    secondaryContactNo: '',
    country: '',
    state: '',
    city: '',
    zip: '',
    other: '',
    error: '',
    loading: false,
    didRedirect: false,
    isEdit: false,
  });

  const {
    fullName,
    emailId,
    organization,
    address,
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

    addClient({
      fullName,
      emailId,
      organization,
      address,
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
          history.push('/app/clients');
          console.log('Add Client Detail =====> ', data);
        }
      })
      .catch(console.log('Login request failed'));
  };

  const onUpdate = (event) => {
    event.preventDefault();
    console.log('values', values);
    updateClient(values)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          setValues({
            ...values,
            didRedirect: true,
          });
          history.push('/app/clients');

          console.log('Edit Client Detail =====> ', data);
        }
      })
      .catch((err) => console.log('Add Product request failed', err));
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  return (
    <div className='container'>
      <br />
      {isEdit ? (
        <h2 className='text-center'>Edit Client</h2>
      ) : (
        <h2 className='text-center'>Add Client</h2>
      )}
      <form className='row g-3'>
        <div className='col-md-5 mb-3'>
          <label htmlFor='fullName' className='form-label'>
            Full Name
          </label>
          <input
            type='text'
            className='form-control'
            id='fullName'
            placeholder='Enter Full Name'
            onChange={handleChange('fullName')}
            value={fullName}
          />
        </div>
        <div className='col-md-5 mb-3'>
          <label htmlFor='emailId' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            id='emailId'
            placeholder='Enter Email Id'
            onChange={handleChange('emailId')}
            value={emailId}
          />
        </div>
        <div className='col-md-5 mb-3'>
          <label htmlFor='organization' className='form-label'>
            Organization Name
          </label>
          <input
            type='text'
            className='form-control'
            id='organization'
            placeholder='Organization Name'
            onChange={handleChange('organization')}
            value={organization}
          />
        </div>
        <div className='col-md-5 mb-3'>
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
        <div className='col-md-5 mb-3'>
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
        <div className='col-md-5 mb-3'>
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
        <div className='col-md-5 mb-3'>
          <label htmlFor='other' className='form-label'>
            Message
          </label>
          <textarea
            type='text'
            className='form-control'
            id='other'
            placeholder='Enter Some Extra Info'
            onChange={handleChange('other')}
            value={other}
          />
        </div>

        <div className='col-5 mb-3'>
          <label htmlFor='address' className='form-label'>
            Address
          </label>
          <textarea
            type='text'
            className='form-control'
            id='address'
            placeholder='Apartment, studio, or floor'
            onChange={handleChange('address')}
            value={address}
          />
        </div>
        <div className='col-md-5 mb-3'>
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
        <div className='col-md-5 mb-3'>
          <label htmlFor='country' className='form-label'>
            Country
          </label>
          <select
            id='country'
            className='form-control'
            onChange={handleChange('country')}
            value='test'>
            <option>INDIA</option>
            <option>...</option>
          </select>
        </div>
        <div className='col-md-5 mb-3'>
          <label htmlFor='state' className='form-label'>
            State
          </label>
          <select
            id='state'
            className='form-control'
            onChange={handleChange('state')}
            value='test'>
            <option>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className='col-md-12 text-center p-3'>
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

export default AddClient;
