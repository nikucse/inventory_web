import React from "react";
import * as FaIcons from "react-icons/fa";

const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark pb-2 fixed-top">
        <div className="container-fluid ml-0 mr-0">
          <a href="#" className="navbar-brand">
            {/* LOGO */}
            <FaIcons.FaBars onClick={props.showSidebar} />
          </a>
          {/* <Link to='#' className='menu-bars'>
        </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse bg-dark" id="navmenu">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <div className="input-group my-2 mr-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <button
                    className="btn btn-primary"
                    type="button"
                    id="button-addon2"
                  >
                    <FaIcons.FaSearch />
                  </button>
                </div>
              </li>
              <li className="nav-item my-2 mx-3">
                <button href="#questions " className="btn btn-primary">
                  Register
                </button>
              </li>
              <li className="nav-item my-2">
                <button href="#questions " className="btn btn-primary">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
