import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addAttendance } from '../../service/AttendanceService';

const AddAttendance = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const [values, setValues] = useState({
    empId: '',
    date: null,
    totalHours: '',
    location: '',
    error: '',
    loading: false,
    didRedirect: false,
  });

  const { empId, date, totalHours, location, error, loading, didRedirect } =
    values;

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    addAttendance({
      empId,
      date: selectedDate,
      totalHours,
      location,
    })
      .then((data) => {
        console.log(data);
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          setValues({
            ...values,
            didRedirect: true,
          });
          console.log('Add Attendance Detail =====> ', data);
        }
      })
      .catch(console.log('Failed to Add Attenance ' + empId));
  };

  const handleChange = (name) => (event) => {
    console.log(name, event);
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  return (
    <div className='container'>
      <br />
      <h2 className='text-center'>Add Attendance</h2>
      <br />
      <form>
        <div className='row g-3 justify-content-center'>
          <div className='col-md-7 p-2'>
            <label htmlFor='empId' className='form-label'>
              Employee Name
            </label>
            <input
              type='text'
              className='form-control'
              id='empId'
              placeholder='Employee Name'
              onChange={handleChange('empId')}
              value={empId}
            />
          </div>
          <div className='form-floating col-md-4 p-2'>
            <label htmlFor='selectedDate' className='form-label'>
              Date
            </label>
            <br />
            <DatePicker
              id='selectedDate'
              className='form-control'
              selected={selectedDate}
              dateFormat='dd/MM/yyyy'
              maxDate={new Date()}
              showYearDropdown
              scrollableMonthYearDropdown
              onChange={(date) => setSelectedDate(date)}
            />
          </div>
          <div className='col-md-4 p-2'>
            <label htmlFor='totalHours' className='form-label'>
              Total Hours
            </label>
            <input
              type='number'
              className='form-control'
              id='totalHours'
              placeholder='Total Hours'
              onChange={handleChange('totalHours')}
              value={totalHours}
            />
          </div>
          <div className='col-md-7 p-2'>
            <label htmlFor='empId' className='form-label'>
              Location
            </label>
            <input
              type='text'
              className='form-control'
              id='location'
              placeholder='Location'
              onChange={handleChange('location')}
              value={location}
            />
          </div>

          <div className='col-md-7 text-center p-3'>
            <button
              type='submit'
              className='btn btn-primary btn-lg col-md-6'
              onClick={onSubmit}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAttendance;
