import React, { useState, useEffect, useMemo } from 'react';
import { FaEdit, FaPlus } from 'react-icons/fa';
import { getAllProduct } from '../../service/ProductService';
import { useTable, useGlobalFilter } from 'react-table';
import { COLUMNS } from '../../util/react-table-util/ProductColumns';
import GlobalFilterOnReactTable from '../../components/filter/GlobalFilterOnReactTable';
import Base from '../core/Base';
import './products.css';
import { useHistory } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [error, setError] = useState([]);
  const history = useHistory();

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

  const productForm = () => {
    history.push('/app/add-product');
  };

  const onEditProduct = (product) => {
    history.push({
      pathname: `/app/edit-product/${product.id}`,
      state: product,
    });
  };

  const tableDesign = () => {
    return (
      <div className='container-fluid py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 m-2'>
              <h2 className='heading-section'>Product List</h2>
            </div>
            <GlobalFilterOnReactTable
              filter={globalFilter}
              setFilter={setGlobalFilter}
            />
            <div className='pt-3'>
              <button
                className='btn btn-success'
                type='button'
                onClick={() => productForm()}>
                <FaPlus /> Add Product
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
                      onClick={() => onEditProduct(row.original)}>
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

export default Products;
