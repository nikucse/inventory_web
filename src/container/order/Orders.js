import React, { useState, useEffect, useMemo } from 'react';
import { getAllOrder } from '../../service/OrderService';
import { useTable, useGlobalFilter } from 'react-table';
import { COLUMNS } from '../../util/react-table-util/OrderColumns';
import GlobalFilterOnReactTable from '../../components/filter/GlobalFilterOnReactTable';

import '../product/products.css';
import Base from '../core/Base';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const loadAllOrders = () => {
    getAllOrder().then((data) => {
      setOrders(data);
    });
  };

  useEffect(() => {
    loadAllOrders();
  }, []);

  const getData = (data) => {
    if (data) return data;
    else return [];
  };

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => getData(orders), [orders]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        hiddenColumns: columns.map((column) => {
          if (column.show === false) return column.accessor || column.id;
          else return '';
        }),
      },
    },
    useGlobalFilter
  );

  const { globalFilter } = state;

  const showMoreInfo = (data) => {
    console.log('========>', data);
  };

  const tableDesign = () => {
    return (
      <div className='container py-5'>
        <div className='row justify-content-center'>
          <div className='col-md-6 m-2'>
            <h2 className='heading-section'>Orders</h2>
          </div>
          <GlobalFilterOnReactTable
            filter={globalFilter}
            setFilter={setGlobalFilter}
          />
        </div>
        <table {...getTableProps()} className='table'>
          <thead className='bg-primary text-light'>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className='bg-primary'>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} className='px-4'>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  onClick={() => showMoreInfo(row.original)}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return <Base>{tableDesign()}</Base>;
};

export default Orders;
