import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
 
  {
    title: 'Products',
    path: '/product',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Report',
    path: '/reports',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },

  {
    title: 'Material',
    path: '/material',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Employees',
    path: '/employee',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Customers',
    path: '/customer',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Bill Detail',
    path: '/bill',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Order Detail',
    path: '/order',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Attendance',
    path: '/attendance',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Order Detail',
    path: '/order',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
 

  
  // {
  //   title: 'Messages',
  //   path: '/messages',
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Team',
  //   path: '/team',
  //   icon: <IoIcons.IoMdPeople />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Reports',
  //   path: '/reports',
  //   icon: <IoIcons.IoIosPaper />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // }
];
