import React, { useState, useEffect } from 'react';
import { Form, Formik } from 'formik';
import FormikControl from '../formik/FormikControl';
import * as Yup from 'yup';
import {
  addProduct,
  updateProduct,
  getProductById,
} from '../../service/ProductService';
import ImageUploader from '../../components/ImageUploader';
import { convertBase64 } from '../../util/BasicUtils';
import { getAllEmployee } from '../../service/EmployeeService';
import FileViewer from '../../util/FileViewer';
import {
  categoryOptionData,
  statusOptionData,
} from '../../constant/CommonOptions';
import { getAllClient } from '../../service/ClientService';
import { paymentModeOptions } from '../../constant/CommonOptions';
import Base from '../core/Base';

const AddProduct = ({ history, match }) => {
  const { id } = match.params;
  const isAddMode = !id;
  const [formValues, setFormValues] = useState(null);

  const [employees, setEmployees] = useState([]);
  const [productImageLink, setProductImageLink] = useState('');
  const [clients, setClients] = useState([]);
  const buildByOptions = [{ value: '', key: 'Select Employee' }];
  const clientListOptions = [{ value: '', key: 'Select Client' }];

  employees.map((employee) => {
    buildByOptions.push({ key: employee.fullName, value: employee.fullName });
  });

  clients.map((client) => {
    clientListOptions.push({ key: client.fullName, client: client.fullName });
  });

  const initialValues = {
    productName: '',
    category: '',
    dimension: '',
    polish: '',
    price: '',
    actualPrice: '',
    buildBy: '',
    clientId: '',
    status: '',
    message: '',
    quantity: '1',
    deliveryDate: '',
    advance: '',
    paymentMode: '',
  };
  const validationSchema = Yup.object().shape({
    productName: Yup.string().required("Can't be Blank"),
    category: Yup.string().required('Please Select Category'),
    dimension: Yup.string().required('Please Enter Product Dimension'),
    price: Yup.string().required('Please Enter Product Price'),
    actualPrice: Yup.string().required('Please Enter Actual Price'),
    buildBy: Yup.string().required('Please Select Built By'),
    status: Yup.string().required('Please Select Status'),
    //paymentMode: Yup.string().required('Please Select Mode Of Payment'),
    clientId: Yup.string().required('Please Select Client'),
    deliveryDate: Yup.string().required('Please Select Delivery Date'),
  });

  const loadAllEmployeeAndClient = () => {
    getAllEmployee().then((data) => {
      setEmployees(data);
    });

    getAllClient().then((data) => {
      setClients(data);
    });
  };

  useEffect(() => {
    loadAllEmployeeAndClient();
    if (history.location.state && history.location.state.productName) {
      setFormValues({
        ...history.location.state,
        deliveryDate: new Date(history.location.state.deliveryDate),
      });
      setProductImageLink(history.location.state.productImageLink);
    }
  }, []);

  const onSubmit = (values) => {
    if (isAddMode) {
      addProduct({ ...values, productImageLink }).then((data) => {
        if (data.error) {
          alert('Error ', data.reason);
        }
        history.push('/app/products');
      });
    } else {
      updateProduct({ ...values, productImageLink }).then((data) => {
        if (data.error) {
          alert('Error ', data.reason);
        }
        history.push('/app/products');
      });
    }
  };

  const setImageData = async (imageData) => {
    const base64 = await convertBase64(imageData);
    setProductImageLink(base64);
  };

  const addProductForm = () => {
    return (
      <div className='h-100'>
        <div className='container h-100'>
          <div className='row justify-content-sm-center h-100'>
            <div className='col-lg-8 col-md-10 col-sm-12'>
              <div className='text-end my-5'></div>
              <div className='card shadow-lg'>
                <div className='card-body p-5'>
                  <h2 className='fs-4 card-title fw-bold mb-4'>
                    {isAddMode ? 'Add Product' : 'Edit Product'}
                  </h2>
                  <Formik
                    initialValues={formValues || initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    enableReinitialize>
                    {(formik) => {
                      return (
                        <Form autoComplete='off'>
                          <div className='row pb-5'>
                            <div className='col'>
                              <ImageUploader
                                parentImageSet={setImageData}
                                fieldLabel='Upload Product Image'
                                field='productImageLink'
                              />
                              {productImageLink.includes('base64') ? null : (
                                <FileViewer
                                  productUrl={productImageLink}
                                  width={'200'}
                                  height={'170'}
                                />
                              )}
                            </div>
                          </div>

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
                                control='select'
                                label='Select Category'
                                name='category'
                                options={categoryOptionData}
                              />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='input'
                                label='Enter Dimension'
                                name='dimension'
                              />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='input'
                                label='Polish'
                                name='polish'
                              />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-lg-3 col-md-3 col-sm-12'>
                              <FormikControl
                                control='input'
                                type='Number'
                                label='Product Price'
                                name='price'
                              />
                            </div>
                            {isAddMode}
                            <div className='col-lg-3 col-md-3 col-sm-12'>
                              <FormikControl
                                control='input'
                                type='Number'
                                label='Actual Amount'
                                name='actualPrice'
                              />
                            </div>
                            {isAddMode ? (
                              <div className='col-lg-3 col-md-3 col-sm-12'>
                                <FormikControl
                                  control='input'
                                  type='Number'
                                  label='Advance Amount'
                                  name='advance'
                                  disabled
                                />
                              </div>
                            ) : null}

                            {isAddMode ? (
                              <div className='col-lg-3 col-md-3 col-sm-12'>
                                <FormikControl
                                  control='input'
                                  type='Number'
                                  label='Total Quantity'
                                  name='quantity'
                                />
                              </div>
                            ) : null}
                          </div>

                          <div className='row'>
                            <div className='col-lg-6 col-md-4 col-sm-12'>
                              <FormikControl
                                control='select'
                                label='Select Build By'
                                name='buildBy'
                                options={buildByOptions}
                              />
                            </div>

                            <div className='col-lg-3 col-md-4 col-sm-12'>
                              <FormikControl
                                control='select'
                                label='Product Status'
                                name='status'
                                options={statusOptionData}
                              />
                            </div>
                            {isAddMode ? (
                              <div className='col-lg-3 col-md-4 col-sm-12'>
                                <FormikControl
                                  control='select'
                                  label='Mode Of Payment'
                                  name='paymentMode'
                                  options={paymentModeOptions}
                                />
                              </div>
                            ) : null}
                          </div>

                          <div className='row'>
                            <div className='col-lg-6 col-md-4 col-sm-12'>
                              <FormikControl
                                control='select'
                                label='Client Name'
                                name='clientId'
                                options={clientListOptions}
                              />
                            </div>
                            <div className='col-lg-6 col-md-4 col-sm-12'>
                              <FormikControl
                                control='date'
                                label='Delivery Date'
                                name='deliveryDate'
                                minDate={new Date()}
                                showYearDropdown
                                scrollableMonthYearDropdown
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
                              {isAddMode ? 'Add Product' : 'Update'}
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
    );
  };

  return <Base>{addProductForm()}</Base>;
};

export default AddProduct;
