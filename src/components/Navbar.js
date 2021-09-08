import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Header from './Header';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(sidebar);

  return (
    // <IconContext.Provider value={{ color: '#393f49' }}>
    <div>
      <Header showSidebar={showSidebar} />
      <div className='navbar'></div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items py-5' onClick={showSidebar}>
          <li></li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
    // </IconContext.Provider>
  );
};

export default Navbar;
