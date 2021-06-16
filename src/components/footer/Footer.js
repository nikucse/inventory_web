import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class='p-3 bg-light text-dark text-center position-relative'>
        <div class='container'>
          <p class='lead center'>
            Copyright &copy;{" "}
            <a
              href='http://www.technuzone.com/'
              class='position-absolute center'>
              Technuzone@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
