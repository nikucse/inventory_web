import { format } from 'date-fns';

export const COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
    show: false,
  },

  {
    Header: 'Purchase Date',
    accessor: 'purchaseDate',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy');
    },
  },

  {
    Header: 'Product Name',
    accessor: 'productName',
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
    Header: 'Balance',
    accessor: 'balance',
  },
  {
    Header: 'Shop Name',
    accessor: 'shopName',
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
