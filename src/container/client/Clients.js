import React, { useState, useEffect, useMemo } from 'react';
import { getAllClient } from '../../service/ClientService';
import { useTable, useGlobalFilter } from 'react-table';
import { COLUMNS } from '../../util/react-table-util/ClientColumns';
import GlobalFilterOnReactTable from '../../components/filter/GlobalFilterOnReactTable';

import '../product/products.css';

const Clients = () => {
  const [clients, setClients] = useState([]);

  const loadAllClients = () => {
    getAllClient().then((data) => {
      setClients(data);
    });
  };

  useEffect(() => {
    loadAllClients();
  }, []);

  const getData = (data) => {
    if (data) return data;
    else return [];
  };

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => getData(clients), [clients]);

  const onEditClient = (client) => {
    console.log(client);
  };

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
      <div className='container-fluid'>
        <GlobalFilterOnReactTable
          filter={globalFilter}
          setFilter={setGlobalFilter}
        />
        <h1 className='text-center'>Client List</h1>
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
                      <td
                        {...cell.getCellProps()}
                        onClick={() => console.log('Cell=====> ', cell.value)}>
                        {cell.render('Cell')}
                      </td>
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

  return <div className='container-fluid py-5'>{tableDesign()}</div>;
};

export default Clients;
