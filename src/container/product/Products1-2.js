import React, { useState, useEffect, useMemo } from 'react';
import { FaEdit } from 'react-icons/fa';
import { getAllProduct } from '../../service/ProductService';
import { useTable, useGlobalFilter } from 'react-table';
import { COLUMNS } from '../util/columns';
import GlobalFilterOnReactTable from '../../components/filter/GlobalFilterOnReactTable';

import './products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [error, setError] = useState([]);

  const loadAllProducts = () => {
    getAllProduct().then((data) => {
      setProducts(data);
    });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  const getData = (data) => {
    if (data) return data;
    else return [];
  };

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => getData(products), [products]);

  const onEditProduct = (product) => {
    console.log(product);
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

  const tableDesign = () => {
    return (
      <div className='container'>
        <GlobalFilterOnReactTable
          filter={globalFilter}
          setFilter={setGlobalFilter}
        />
        <h1>Basic Table</h1>
        <table {...getTableProps()}>
          <thead>
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

export default Products;
