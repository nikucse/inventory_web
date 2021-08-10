import React, { useState } from 'react';
import ImageUploader from '../../components/ImageUploader';
import { addProduct } from '../../service/ProductService';
import { convertBase64 } from '../../util/BasicUtils';

const AddBill = () => {
  const [values, setValues] = useState({
    billType: '',
    uploadBill: '',
    message: '',
    status: '',
    error: '',
    loading: false,
    didRedirect: false,
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
          console.log('Upload Bill Detail =====> ', data);
        }
      })
      .catch(console.log('Failed to Upload bill'));
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
    console.log(values);
  };

  const setImageData = async (imageData) => {
    const base64 = await convertBase64(imageData);
    console.log('base64 = ', base64);
    setValues({ ...values, error: false, uploadBill: base64 });
  };

  const getBillTemplate = () => (
    <div className='container'>
      <br />
      <h2 className="text-center">Upload Bill</h2>
      <br />
      <form className='row g-3'>
        <div className='col-md-6 p-3'>
          <label htmlFor='billType' className='form-label'>
            Bill Type
          </label>
          <input
            type='text'
            className='form-control'
            id='billType'
            placeholder='Bill type'
            onChange={handleChange('billType')}
            value={billType}
          />
        </div>
        <div className='col-md-6'>
          <ImageUploader
            parentImageSet={setImageData}
            fieldLabel='Bill Upload'
            field='uploadBill'
          />
        </div>
        <div className='form-floating col-md-6'>
          <label htmlFor='billType' className='form-label'>
            Message
          </label>
          <textarea
            type='text'
            className='form-control'
            id='billType'
            placeholder='Message'
            onChange={handleChange('message')}
            value={message}
          />
        </div>
        <div className='col-md-6 p-3'>
          <label htmlFor='status' className='form-label'>
            Status
          </label>
          <input
            type='text'
            className='form-control'
            id='status'
            placeholder='Bill type'
            onChange={handleChange('status')}
            value={status}
          />
        </div>
        <div className='col-12 text-center p-3'>
            <button type='submit' className='btn btn-primary btn-lg col-md-6' onClick={onSubmit}>
              Submit
            </button>
        </div>
      </form>
    </div>
  );

  return <div>{getBillTemplate()}</div>;
};

export default AddBill;
