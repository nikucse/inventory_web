import React from "react";

const EmployeeTable = () => {
  return (
    <div>
      <table className='table'>
        <thead>
          <tr className='bg-primary'>
            <th scope='col'>Full Name</th>
            <th scope='col'>Contact No</th>
            <th scope='col'>Designation</th>
            <th scope='col'>Wages</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>Nikul Kumar</th>
            <td>9958597400</td>
            <td>Software Developer</td>
            <td>500</td>
          </tr>
          <tr>
            <th scope='row'>Nikul Kumar</th>
            <td>9958597400</td>
            <td>Software Developer</td>
            <td>500</td>
          </tr>
          <tr>
            <th scope='row'>Nikul Kumar</th>
            <td>9958597400</td>
            <td>Software Developer</td>
            <td>500</td>
          </tr>
          <tr>
            <th scope='row'>Nikul Kumar</th>
            <td>9958597400</td>
            <td>Software Developer</td>
            <td>500</td>
          </tr>
          <tr>
            <th scope='row'>Nikul Kumar</th>
            <td>9958597400</td>
            <td>Software Developer</td>
            <td>500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
