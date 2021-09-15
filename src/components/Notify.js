import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const Notify = ({ message, type }) => {
  const common = {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

  if (type === 'success') {
    toast.success(message, {
      ...common,
    });
  } else if (type === 'error') {
    toast.error(message, {
      ...common,
    });
  }

  return <ToastContainer />;
};

export default Notify;
