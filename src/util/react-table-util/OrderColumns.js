import { format } from 'date-fns';

export const COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
    show: false,
  },
  {
    Header: 'Product Name',
    accessor: 'productName',
  },
  {
    Header: 'Client Name',
    accessor: 'clientName',
  },
  {
    Header: 'Quantity',
    accessor: 'quantity',
  },
  {
    Header: 'Delivery Date',
    accessor: 'deliveryDate',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy');
    },
  },
  {
    Header: 'Advance Amount',
    accessor: 'advance',
  },
  {
    Header: 'Total Amount',
    accessor: 'amount',
  },
  {
    Header: 'Pending Amount',
    accessor: 'pendingAmount',
  },
  {
    Header: 'Payment Status',
    accessor: 'paymentStatus',
  },
];
