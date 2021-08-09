import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/app/dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text muted',
  },

  {
    title: 'Products',
    path: '/app/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
  },
  {
    title: 'Add Product',
    path: '/app/add-product',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
  },
  // {
  //   title: 'Report',
  //   path: '/app/reports',
  //   icon: <FaIcons.FaCartPlus />,
  //   cName: 'nav-text',
  // },

  {
    title: 'Material',
    path: '/app/material',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text',
  },
  {
    title: 'Employees',
    path: '/app/employees',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
  },
  {
    title: 'Add Employee',
    path: '/app/add-employee',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
  },
  {
    title: 'Clients',
    path: '/app/clients',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'Add Client',
    path: '/app/add-client',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'Bill Detail',
    path: '/app/bill',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
  },
  {
    title: 'Add Order',
    path: '/app/order',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
  },
  {
    title: 'Orders',
    path: '/app/orders',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
  },
  {
    title: 'Attendance',
    path: '/app/attendance',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
  },
  {
    title: 'Account Detail',
    path: '/app/account',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
  },
];
