import React, { useState, useEffect } from 'react';
import { Form, Formik } from 'formik';
import FormikControl from '../formik/FormikControl';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { addClient } from '../../service/ClientService';
import { countryList } from '../../constant/CountryList';
import { indiaStateList } from '../../constant/IndiaStateList';
import Base from '../core/Base';

const AddClient = ({ history, match }) => {
  const { id } = match.params;
  const isAddMode = !id;
  const [formValues, setFormValues] = useState(null);

  useEffect(() => {
    if (history.location.state && history.location.state.fullName) {
      setFormValues({
        ...history.location.state,
      });
    }
  }, []);
  const initialValues = {
    fullName: '',
    emailId: '',
    organization: '',
    primaryContactNo: '',
    secondaryContactNo: '',
    country: '',
    state: '',
    pinCode: '',
    address: '',
    message: '',
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Please Enter a Name'),
    emailId: Yup.string()
      .email('Invalid Email format i.e abc@xyz.com')
      .required('Required'),
    organization: Yup.string().required('Please Enter Organization'),
    address: Yup.string().required('Please Enter Address'),
    primaryContactNo: Yup.string().required('Please Enter Contact No'),
    country: Yup.string().required('Please Select Country'),
    state: Yup.string().required('Please Select State'),
  });

  const onSubmit = (values) => {
    addClient(values).then((data) => {
      if (data.error) {
        alert('Error ', data.reason);
      } else {
        history.push('/app/clients');
      }
    });
  };

  return (
    <Base>
      <div className='h-100'>
        <div className='container h-100'>
          <div className='row justify-content-sm-center h-100'>
            <div className='col-lg-8 col-md-10 col-sm-12'>
              <div className='text-center mt-5'></div>
              <div className='card shadow-lg'>
                <div className='card-body p-5'>
                  <h1 className='fs-4 card-title fw-bold mb-4'>
                    {isAddMode ? 'Add Client' : 'Edit Client'}
                  </h1>
                  <Formik
                    initialValues={formValues || initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    enableReinitialize>
                    {(formik) => {
                      return (
                        <Form autoComplete='off'>
                          <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='input'
                                label='Full Name'
                                name='fullName'
                                autoFocus
                              />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='input'
                                label='Email Id'
                                name='emailId'
                              />
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='input'
                                label='Organization'
                                name='organization'
                              />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='input'
                                type='Number'
                                label='Primary Contact-No'
                                name='primaryContactNo'
                              />
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='input'
                                type='Number'
                                label='Secondary Contact-No'
                                name='secondaryContactNo'
                              />
                            </div>
                            <div className='col-lg-3 col-md-4 col-sm-12'>
                              <FormikControl
                                control='select'
                                label='Country'
                                name='country'
                                options={countryList}
                              />
                            </div>
                            <div className='col-lg-3 col-md-4 col-sm-12'>
                              <FormikControl
                                control='select'
                                label='State'
                                name='state'
                                options={indiaStateList}
                              />
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-lg-3 col-md-4 col-sm-12'>
                              <FormikControl
                                control='input'
                                type='Number'
                                label='Pincode'
                                name='pinCode'
                              />
                            </div>
                            <div className='col-lg-9 col-md-8 col-sm-12'>
                              <FormikControl
                                control='input'
                                label='Address'
                                name='address'
                              />
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col'>
                              <FormikControl
                                control='input'
                                label='Message'
                                name='message'
                              />
                            </div>
                          </div>

                          <div className='d-flex flex-row-reverse'>
                            <button type='submit' className='btn btn-primary'>
                              {isAddMode ? 'Submit' : 'Update'}
                            </button>
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default AddClient;
