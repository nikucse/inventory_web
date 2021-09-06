import React, { useState, useEffect, useMemo } from 'react';
import { getAllClient } from '../../service/ClientService';
import { useTable, useGlobalFilter } from 'react-table';
import { COLUMNS } from '../../util/react-table-util/ClientColumns';
import GlobalFilterOnReactTable from '../../components/filter/GlobalFilterOnReactTable';

import '../product/products.css';
import { useHistory } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

const Clients = () => {
  const history = useHistory();

  const [clients, setClients] = useState([]);

  const loadAllClients = () => {
    getAllClient().then((data) => {
      setClients(data);
    });
  };

  useEffect(() => {
    loadAllClients();
  }, []);

  const onEditClient = (client) => {
    console.log('onEditClient = ', client);
    history.push({
      pathname: '/app/add-client',
      state: client,
    });
  };

  const getData = (data) => {
    if (data) return data;
    else return [];
  };

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => getData(clients), [clients]);

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

  const clientForm = () => {
    history.push('/app/add-client');
  };

  const tableDesign = () => {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6 m-2'>
            <h2 className='heading-section'>Client List</h2>
          </div>
          <GlobalFilterOnReactTable
            filter={globalFilter}
            setFilter={setGlobalFilter}
          />

          <div className='pt-3'>
            <button
              className='btn btn-success'
              type='button'
              onClick={() => clientForm()}>
              <FaPlus /> Add Client
            </button>
          </div>
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
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        onClick={() => onEditClient(row.original)}>
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
