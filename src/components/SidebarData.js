import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/app/dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },

  {
    title: 'Products',
    path: '/app/products',
    icon: <FaIcons.FaListUl />,
    cName: 'nav-text',
  },
  {
    title: 'Purchasing Products',
    path: '/app/purchasing-product-list',
    icon: <BiIcons.BiPurchaseTagAlt />,
    cName: 'nav-text',
  },
  {
    title: 'Expenses',
    path: '/app/expenses',
    icon: <GiIcons.GiExpense />,
    cName: 'nav-text',
  },
  // {
  //   title: 'Report',
  //   path: '/app/reports',
  //   icon: <FaIcons.FaCartPlus />,
  //   cName: 'nav-text',
  // },

  // {
  //   title: 'Material',
  //   path: '/app/material',
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: 'nav-text',
  // },
  {
    title: 'Employees',
    path: '/app/employees',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
  },
  {
    title: 'Clients',
    path: '/app/clients',
    icon: <IoIcons.IoMdPerson />,
    cName: 'nav-text',
  },
  {
    title: 'Bills',
    path: '/app/bills',
    icon: <RiIcons.RiBillLine />,
    cName: 'nav-text',
  },
  {
    title: 'Orders',
    path: '/app/orders',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  // {
  //   title: 'Attendance',
  //   path: '/app/attendance',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text',
  // },
  // {
  //   title: 'Account Detail',
  //   path: '/app/account',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text',
  // },
];
