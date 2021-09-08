import React from 'react';
import { Form, Formik } from 'formik';
import FormikControl from '../formik/FormikControl';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { addEmployee } from '../../service/EmployeeService';
import Base from '../core/Base';
import { countryList } from '../../constant/CountryList';
import { indiaStateList } from '../../constant/IndiaStateList';
import { employeeDesignationOptions } from '../../constant/CommonOptions';

const AddEmployee = () => {
  let history = useHistory();

  const initialValues = {
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
    pinCode: '',
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Required'),
    emailId: Yup.string().email('Invalid E-mail format ').required('Required'),
    designation: Yup.string().required('Required'),
    perDayWages: Yup.number().required('Required'),
    address: Yup.string().required('Required'),
    primaryContactNo: Yup.number().required('Required'),
    country: Yup.string().required('Please Select Country'),
    state: Yup.string().required('Please Select State'),
    pinCode: Yup.number().required('Required'),
  });

  const onSubmit = (values) => {
    addEmployee(values).then((data) => {
      if (data.error) {
        alert('Error ', data.reason);
      } else {
        history.push('/app/employees');
      }
    });
  };

  return (
    <Base>
      <div className='h-100'>
        <div className='container h-100'>
          <div className='row justify-content-sm-center h-100'>
            <div className='col-lg-8 col-md-10 col-sm-12'>
              <div className='text-end my-5'></div>
              <div className='card shadow-lg'>
                <div className='card-body p-5'>
                  <h2 className='fs-4 card-title fw-bold mb-4'>Add Employee</h2>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                    {(formik) => {
                      return (
                        <Form autoComplete='off'>
                          <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='input'
                                label='Enter Full Name'
                                name='fullName'
                              />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='input'
                                label='Enter Email-Id '
                                name='emailId'
                              />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='select'
                                label='Designation'
                                name='designation'
                                options={employeeDesignationOptions}
                              />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='input'
                                type='Number'
                                label='Per Day Wages'
                                name='perDayWages'
                              />
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='input'
                                label='Contact No 1'
                                name='primaryContactNo'
                              />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='input'
                                type='Number'
                                label='Contact No 2'
                                name='secondaryContactNo'
                              />
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='input'
                                label='Pan Card'
                                name='panCardNo'
                              />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='input'
                                type='Number'
                                label='Adhaar No'
                                name='adhaarCardNo'
                              />
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='input'
                                label='Adress'
                                name='address'
                              />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='select'
                                label='Country'
                                name='country'
                                options={countryList}
                              />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='select'
                                label='State'
                                name='state'
                                options={indiaStateList}
                              />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='input'
                                label='Pincode'
                                name='pinCode'
                              />
                            </div>
                          </div>

                          <div className='d-flex flex-row-reverse'>
                            <button type='submit' className='btn btn-primary'>
                              Add Employee
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

export default AddEmployee;
