import React, { useState, useEffect } from 'react';
import { Form, Formik } from 'formik';
import FormikControl from '../formik/FormikControl';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { addExpense } from '../../service/ExpenseService';
import {
  expenseCategoryOptionData,
  expensePaymentStatusOptions,
} from '../../constant/CommonOptions';
import Base from '../core/Base';
import { format } from 'date-fns';
const AddExpense = ({ history, match }) => {
  const { id } = match.params;
  const isAddMode = !id;
  const [formValues, setFormValues] = useState(null);

  useEffect(() => {
    console.log(history.location.state);
    if (history.location.state && history.location.state.expenseDate) {
      setFormValues({
        ...history.location.state,
        expenseDate: new Date(history.location.state.expenseDate),
      });
    }
  }, []);

  const initialValues = {
    purpose: '',
    category: '',
    amount: '',
    expenseDate: '',
    paymentStatus: '',
    message: '',
  };

  const validationSchema = Yup.object().shape({
    purpose: Yup.string().required("Can't be Blank"),
    category: Yup.string().required('Please Select Category'),
    amount: Yup.string().required('Please Enter Amount Price'),
    paymentStatus: Yup.string().required('Please Select Status'),
    expenseDate: Yup.string().required('Please Select Expense Date'),
  });

  const onSubmit = (values) => {
    console.log(values);

    addExpense(values).then((data) => {
      if (data.error) {
        alert('Error  ====>  ', data.reson);
      } else {
        history.push('/app/expenses');
        console.log('Add Expense Detail =====> ', data);
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
                    {isAddMode ? 'Add Expense ' : 'Edit Expense '}
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
                                control='date'
                                dateFormat='dd/MM/yyyy'
                                label='Enter Expense Date'
                                name='expenseDate'
                                maxDate={new Date()}
                                showYearDropdown
                                scrollableMonthYearDropdown
                              />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='input'
                                type='text'
                                label='Purpose'
                                name='purpose'
                              />
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                              <FormikControl
                                control='select'
                                label='Category'
                                name='category'
                                options={expenseCategoryOptionData}
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
                                control='select'
                                label='Payment Status'
                                name='paymentStatus'
                                options={expensePaymentStatusOptions}
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

export default AddExpense;
