import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className='p-5 bg-dark text-light text-center  position-relative'>
        <div className='container'>
          <div className='text-center p-3'>
            © 2021 Copyright :
            <a className='text-light' href='https://technuzone.com/'>
              <span className='p-2'>Technuzone.com</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
