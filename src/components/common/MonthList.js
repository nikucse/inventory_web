import React from 'react';

const MonthList = () => {
  return (
    <div className='dropdown'>
      <button
        className='btn btn-secondary dropdown-toggle'
        type='button'
        id='dropdownMenuButton1'
        data-bs-toggle='dropdown'
        aria-expanded='false'>
        Month
      </button>
      <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
        <li>
          <a className='dropdown-item'>January</a>
        </li>
        <li>
          <a className='dropdown-item'>February</a>
        </li>
        <li>
          <a className='dropdown-item'>March</a>
        </li>
        <li>
          <a className='dropdown-item'>April</a>
        </li>
        <li>
          <a className='dropdown-item'>May</a>
        </li>
        <li>
          <a className='dropdown-item'>June</a>
        </li>
        <li>
          <a className='dropdown-item'>July</a>
        </li>
        <li>
          <a className='dropdown-item'>August</a>
        </li>
        <li>
          <a className='dropdown-item'>September</a>
        </li>
        <li>
          <a className='dropdown-item'>October</a>
        </li>
        <li>
          <a className='dropdown-item'>November</a>
        </li>
        <li>
          <a className='dropdown-item'>December</a>
        </li>
      </ul>
    </div>
  );
};

export default MonthList;
