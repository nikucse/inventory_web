import React, { useState, useEffect } from 'react';
import { Form, Formik } from 'formik';
import FormikControl from '../formik/FormikControl';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { uploadBill } from '../../service/BillService';
import { convertBase64 } from '../../util/BasicUtils';
import {
  billStatusOptions,
  billTypeOptions,
  paymentModeOptions,
} from '../../constant/CommonOptions';
import ImageUploader from '../../components/ImageUploader';
import { getAllClient } from '../../service/ClientService';
import Base from '../core/Base';

const AddBill = () => {
  let history = useHistory();
  const [clients, setClients] = useState([]);
  const clientListOptions = [{ value: '', key: 'Select Client' }];
  const [billImageLink, setBillImageLink] = useState('');

  clients.map((client) => {
    clientListOptions.push({ key: client.fullName, client: client.fullName });
  });

  const initialValues = {
    clientName: '',
    billType: '',
    paymentMode: '',
    billImageLink: '',
    amount: '',
    status: '',
    message: '',
  };
  const validationSchema = Yup.object().shape({
    amount: Yup.string().required('Please Enter Amount'),
    status: Yup.string().required('Please Select Status'),
    clientId: Yup.string().required('Please Select Client'),
    billType: Yup.string().required('Please Select Bill Type'),
    paymentMode: Yup.string().required('Please Select Mode Of Payment'),
  });

  const loadAllClient = () => {
    getAllClient().then((data) => {
      setClients(data);
    });
  };

  useEffect(() => {
    loadAllClient();
  }, []);

  const onSubmit = (values) => {
    uploadBill(values).then((data) => {
      if (data.error) {
        alert('Error ', data.reason);
      } else {
        history.push('/app/bills');
      }
    });
  };

  const setImageData = async (imageData) => {
    const base64 = await convertBase64(imageData);
    setBillImageLink(base64);
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
                  <h1 className='fs-4 card-title fw-bold mb-4'>Upload Bill</h1>
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
                                control='select'
                                label='Client'
                                name='category'
                                options={clientListOptions}
                              />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='select'
                                label='Bill Type'
                                name='billType'
                                options={billTypeOptions}
                              />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <ImageUploader
                                parentImageSet={setImageData}
                                fieldLabel='Upload Bill Image'
                                field='billImageLink'
                              />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='select'
                                label='Status'
                                name='status'
                                options={billStatusOptions}
                              />
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='select'
                                label='Payment Mode'
                                name='paymentMode'
                                options={paymentModeOptions}
                              />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='input'
                                type='Number'
                                label='Amount'
                                name='amount'
                              />
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col'>
                              <FormikControl
                                control='input'
                                type='text'
                                label='Message'
                                name='message'
                              />
                            </div>
                          </div>
                          <div className='d-flex flex-row-reverse'>
                            <button type='submit' className='btn btn-primary'>
                              Add Product
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

export default AddBill;
