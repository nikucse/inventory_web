import { format } from 'date-fns';

export const COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
    show: false,
  },
  {
    Header: 'Expense Date',
    accessor: 'expenseDate',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy');
    },
  },
  {
    Header: 'Purpose',
    accessor: 'purpose',
  },
  {
    Header: 'Category',
    accessor: 'category',
  },
  {
    Header: 'Amount',
    accessor: 'amount',
  },
  {
    Header: 'Payment Status',
    accessor: 'paymentStatus',
  },

  {
    Header: 'Message',
    accessor: 'message',
  },
];
