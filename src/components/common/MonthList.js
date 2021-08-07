import React from 'react';

const MonthList = () => {
  return (
    <div class='dropdown'>
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
          <a className='dropdown-item' href='#'>
            January
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            February
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            March
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            April
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            May
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            June
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            July
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            August
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            September
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            October
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            November
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            December
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MonthList;
