import React from 'react';

const GlobalFilterOnReactTable = ({ filter, setFilter }) => {
  return (
    <div className='col-md-4 justify-content-center m-2'>
      <div className='input-group my-2 mr-3'>
        <input
          className='form-control'
          value={filter || ''}
          onChange={(e) => setFilter(e.target.value)}
          placeholder='Search:'
        />
      </div>
    </div>
  );
};

export default GlobalFilterOnReactTable;
