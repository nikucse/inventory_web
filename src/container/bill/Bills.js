import React, { useState, useEffect, useMemo } from 'react';
import { getAllBill } from '../../service/BillService';
import { useTable, useGlobalFilter } from 'react-table';
import { COLUMNS } from '../../util/react-table-util/BillColumns';
import GlobalFilterOnReactTable from '../../components/filter/GlobalFilterOnReactTable';
import '../product/products.css';
import { FaPlus } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Base from '../core/Base';

const Bills = () => {
  const [bills, setBills] = useState([]);
  const history = useHistory();

  const loadAllBills = () => {
    getAllBill().then((data) => {
      setBills(data);
    });
  };

  useEffect(() => {
    loadAllBills();
  }, []);

  const getData = (data) => {
    if (data) return data;
    else return [];
  };

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => getData(bills), [bills]);

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

  const billForm = () => {
    history.push('/app/add-bill');
  };

  const tableDesign = () => {
    return (
      <Base>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 m-2'>
              <h2 className='heading-section'>Bill Details</h2>
            </div>
            <GlobalFilterOnReactTable
              filter={globalFilter}
              setFilter={setGlobalFilter}
            />
            <div className='pt-3'>
              <button
                className='btn btn-success'
                type='button'
                onClick={() => billForm()}>
                <FaPlus /> Add Bill
              </button>
            </div>
          </div>
          <table {...getTableProps()} className='table'>
            <thead className='bg-primary text-light'>
              {headerGroups.map((headerGroup) => (
                <tr
                  {...headerGroup.getHeaderGroupProps()}
                  className='bg-primary'>
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
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Base>
    );
  };

  return <div className='container-fluid py-5'>{tableDesign()}</div>;
};

export default Bills;
