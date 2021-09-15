import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addOrder } from '../../service/OrderService';
import { getAllProduct } from '../../service/ProductService';
import { getAllClient } from '../../service/ClientService';
import { paymentModeOptions } from '../../constant/CommonOptions';
import { format } from 'date-fns';

import { Form, Formik } from 'formik';
import FormikControl from '../formik/FormikControl';
import * as Yup from 'yup';
import Base from '../core/Base';

const AddOrder = ({ history, match }) => {
  const { id } = match.params;
  const isAddMode = !id;
  const [formValues, setFormValues] = useState(null);

  const initialValues = {
    productName: '',
    clientName: '',
    quantity: '',
    advance: '',
    pendingAmount: '',
    amount: '',
    advance: '',
    paymentMode: '',
    deliveryDate: '',
  };

  const validationSchema = Yup.object().shape({
    productName: Yup.string().required("Product name can't be Empty"),
    clientName: Yup.string().required("Client name can't be Empty"),
    amount: Yup.string().required('Please Enter Actual Amount'),
    paymentMode: Yup.string().required('Please Select Mode Of Payment'),
  });

  useEffect(() => {
    if (history.location.state && history.location.state.productId) {
      setFormValues({
        ...history.location.state,
        deliveryDate: new Date(history.location.state.deliveryDate),
      });
    }
  }, []);

  const onSubmit = (values) => {
    addOrder(values).then((data) => {
      if (data.error) {
        alert('False');
      } else {
        history.push('/app/orders');
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
                  <h2 className='fs-4 card-title fw-bold mb-4'>
                    {isAddMode ? 'Add Order' : 'Edit Order'}
                  </h2>
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
                                label='Enter Product Name'
                                name='productName'
                                readOnly
                              />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='input'
                                type='Number'
                                label='Advance Amount'
                                name='advance'
                              />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='date'
                                label='Delivery Date'
                                name='deliveryDate'
                                minDate={new Date()}
                                showYearDropdown
                                scrollableMonthYearDropdown
                              />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='input'
                                type='Number'
                                label='Quantity'
                                name='quantity'
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

export default AddOrder;
