import React, { useState, useEffect } from 'react';
import { FaEdit, FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { getAllEmployee } from '../../service/EmployeeService';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({});
  const [error, setError] = useState([]);
  let history = useHistory();

  const loadAllEmployee = () => {
    getAllEmployee().then((data) => {
      setEmployees(data);
      console.log(data);
    });
  };

  useEffect(() => {
    loadAllEmployee();
  }, []);

  const onEditEmployee = (employee) => {
    console.log(employee);
    history.push({
      pathname: '/app/add-employee',
      state: employee,
    });
  };

  const employeeList = employees.map((employee) => (
    <tr key={employee.id}>
      <td>{employee.fullName}</td>
      <td>{employee.designation}</td>
      <td>{employee.perDayWages}</td>
      <td>{employee.primaryContactNo}</td>
      <td>{employee.joiningDate.substring(0, 10)}</td>
      <td>{employee.totalAmount}</td>
      <td>{employee.state}</td>
      <td>{employee.adhaarCardNo}</td>
      <td className='text-primary' onClick={() => onEditEmployee(employee)}>
        <FaEdit />
      </td>
    </tr>
  ));

  return (
    <div className='container-fluid py-5'>
      <div className='row'>
        <div className='col-md-6 m-2'>
          <h2 className='heading-section'>Employee List</h2>
        </div>
        <div className='col-md-4 justify-content-center m-2'>
          <div className='input-group my-2 mr-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Search Employee'
            />
            <button
              className='btn btn-primary'
              type='button'
              id='button-addon2'>
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-md-12'>
          <table className='table'>
            <thead className='bg-primary text-light'>
              <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Wages</th>
                <th>Contact No-1</th>
                <th>Joining Date</th>
                <th>Total Amount</th>
                <th>State</th>
                <th>Adhar Card</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>{employeeList}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employees;