import { format } from 'date-fns';
import FileViewer from '../FileViewer';

export const COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
    show: false,
  },
  {
    Header: 'Name',
    accessor: 'productName',
  },
  {
    Header: 'Image',
    accessor: 'productImageLink',
    Cell: ({ value }) => {
      return <FileViewer productUrl={value} width={'96'} height={'65'} />;
    },
  },
  {
    Header: 'Dimension',
    accessor: 'dimension',
  },
  {
    Header: 'Price',
    accessor: 'price',
  },
  {
    Header: 'Actual Price',
    accessor: 'actualPrice',
  },
  {
    Header: 'Build By',
    accessor: 'buildBy',
  },
  {
    Header: 'Order Date',
    accessor: 'date',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy');
    },
  },
  {
    Header: 'Polish',
    accessor: 'polish',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },

  {
    Header: 'Message',
    accessor: 'message',
  },
];
