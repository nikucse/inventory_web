import React, { useState, useEffect, useMemo } from 'react';
import { FaEdit, FaPlus } from 'react-icons/fa';
import { useHistory } from 'react-router';

import { useTable, useGlobalFilter } from 'react-table';
import { COLUMNS } from '../../util/react-table-util/EmployeeColumns';
import GlobalFilterOnReactTable from '../../components/filter/GlobalFilterOnReactTable';

import { getAllEmployee } from '../../service/EmployeeService';
import Base from '../core/Base';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  let history = useHistory();

  const loadAllEmployee = () => {
    getAllEmployee().then((data) => {
      setEmployees(data);
    });
  };

  useEffect(() => {
    loadAllEmployee();
  }, []);

  const onEditEmployee = (employee) => {
    history.push({
      pathname: `/app/edit-employee/${employee.id}`,
      state: employee,
    });
  };

  const getData = (data) => {
    if (data) return data;
    else return [];
  };

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => getData(employees), [employees]);

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
          if (column.show === false) {
            return column.accessor || column.id;
          } else return '';
        }),
      },
    },
    useGlobalFilter
  );

  const { globalFilter } = state;

  const employeeForm = () => {
    history.push('/app/add-employee');
  };

  const tableDesign = () => {
    return (
      <div className='container-fluid py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 m-2'>
              <h2 className='heading-section'>Employee List</h2>
            </div>
            <GlobalFilterOnReactTable
              filter={globalFilter}
              setFilter={setGlobalFilter}
            />
            <div className='pt-3'>
              <button
                className='btn btn-success'
                type='button'
                onClick={() => employeeForm()}>
                <FaPlus /> Add Employee
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
                  <th>Edit</th>
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
                    <td
                      className='text-primary'
                      onClick={() => onEditEmployee(row.original)}>
                      <FaEdit />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return <Base>{tableDesign()}</Base>;
};

export default Employees;
