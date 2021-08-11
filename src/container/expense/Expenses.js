import React, { useState, useEffect, useMemo } from 'react';
import { getAllExpense } from '../../service/ExpenseService';
import { useTable, useGlobalFilter } from 'react-table';
import { COLUMNS } from '../../util/react-table-util/ExpenseColumns';
import GlobalFilterOnReactTable from '../../components/filter/GlobalFilterOnReactTable';

import '../product/products.css';
import { useHistory } from 'react-router';

const Expenses = () => {
  const history = useHistory();

  const [expenses, setExpenses] = useState([]);

  const loadAllExpenses = () => {
    getAllExpense().then((data) => {
      setExpenses(data);
    });
  };

  useEffect(() => {
    loadAllExpenses();
  }, []);

  const onEditExpense = (expense) => {
    history.push({
      pathname: '/app/add-expense',
      state: expense,
    });
  };

  const getData = (data) => {
    if (data) return data;
    else return [];
  };

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => getData(expenses), [expenses]);

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

  const tableDesign = () => {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6 m-2'>
            <h2 className='heading-section'>Daily Expense List</h2>
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
                  onClick={() => onEditExpense(row.original)}>
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

  return <div className='container-fluid py-5'>{tableDesign()}</div>;
};

export default Expenses;
