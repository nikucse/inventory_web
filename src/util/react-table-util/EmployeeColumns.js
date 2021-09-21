import { format } from 'date-fns';

export const COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
    show: false,
  },
  {
    Header: 'Name',
    accessor: 'fullName',
  },
  {
    Header: 'Designation',
    accessor: 'designation',
  },
  {
    Header: 'Wages',
    accessor: 'perDayWages',
  },
  {
    Header: 'Contact No-1',
    accessor: 'primaryContactNo',
  },
  {
    Header: 'Joining Date',
    accessor: 'joiningDate',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy');
    },
  },
  {
    Header: 'Total Amount',
    accessor: 'totalAmount',
  },
  {
    Header: 'State',
    accessor: 'state',
  },
  {
    Header: 'AdharCard',
    accessor: 'aadhaarCardNo',
  },
];
