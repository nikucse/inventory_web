import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import FormikControl from '../formik/FormikControl';
import * as Yup from 'yup';
import { paymentModeOptions } from '../../constant/CommonOptions';
import { addPurchasingProduct } from '../../service/PurchasingService';
import { purchasingProductOptions } from '../../constant/CommonOptions';
import Base from '../core/Base';

const AddPurchasingProduct = ({ history, match }) => {
  const { id } = match.params;
  const isAddMode = !id;
  const [formValues, setFormValues] = useState(null);

  useEffect(() => {
    if (history.location.state && history.location.state.productName) {
      setFormValues({
        ...history.location.state,
        purchaseDate: new Date(history.location.state.purchaseDate),
      });
    }
  }, []);

  const initialValues = {
    productName: '',
    shopName: '',
    paymentMode: '',
    category: '',
    amount: '',
    paidAmount: '',
    paymentStatus: '',
    purchaseDate: '',
    message: '',
  };

  const validationSchema = Yup.object().shape({
    productName: Yup.string().required("Product name can't be Empty"),
    category: Yup.string().required('Please Select Category'),
    shopName: Yup.string().required('Please Enter Shop Name'),
    paidAmount: Yup.string().required('Please Enter Paid Amount'),
    amount: Yup.string().required('Please Enter Actual Amount'),
    paymentMode: Yup.string().required('Please Select Mode Of Payment'),
    purchaseDate: Yup.string().required('Please Select Purchase Date'),
  });

  const onSubmit = (values) => {
    addPurchasingProduct(values).then((data) => {
      if (data && data.error) {
        alert('Message ===> ', data.message);
      } else {
        history.push('/app/purchasing-product-list');
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
                    {isAddMode
                      ? 'Add Purchasing Product'
                      : 'Edit Purchasing Product'}
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
                              />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='input'
                                label='Enter Shop Name'
                                name='shopName'
                              />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-lg-6 col-md-4 col-sm-12'>
                              <FormikControl
                                control='select'
                                label='Category'
                                name='category'
                                options={purchasingProductOptions}
                              />
                            </div>
                            <div className='col-lg-3 col-md-4 col-sm-12'>
                              <FormikControl
                                control='input'
                                type='Number'
                                label='Amount'
                                name='amount'
                              />
                            </div>
                            <div className='col-lg-3 col-md-4 col-sm-12'>
                              <FormikControl
                                control='input'
                                type='Number'
                                label='Paid Amount'
                                name='paidAmount'
                              />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='date'
                                dateFormat='dd/MM/yyyy'
                                label='Purchasing Date'
                                name='purchaseDate'
                                minDate={new Date()}
                                showYearDropdown
                                scrollableMonthYearDropdown
                              />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='select'
                                label='Mode Of Payment'
                                name='paymentMode'
                                options={paymentModeOptions}
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

export default AddPurchasingProduct;
