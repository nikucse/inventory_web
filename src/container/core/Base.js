import React from 'react';

import Navbar from '../../components/Navbar';
import Notify from '../../components/Notify';

const Base = ({ children, message, type }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Notify message={message} type={type} />
    </div>
  );
};

export default Base;
