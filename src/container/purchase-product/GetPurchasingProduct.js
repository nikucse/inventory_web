import React, { useState, useEffect, useMemo } from 'react';
import { getAllPurchasingProduct } from '../../service/PurchasingService';
import { useTable, useGlobalFilter } from 'react-table';
import { COLUMNS } from '../../util/react-table-util/PurchasingColumns';
import GlobalFilterOnReactTable from '../../components/filter/GlobalFilterOnReactTable';
import { FaEdit, FaPlus } from 'react-icons/fa';
import '../product/products.css';
import { useHistory } from 'react-router-dom';
import Base from '../core/Base';

const GetPurchasingProduct = () => {
  const [purchasings, setPurchasings] = useState([]);
  const history = useHistory('/app/add-purchasing-product');
  const loadAllPurchasingProduct = () => {
    getAllPurchasingProduct().then((data) => {
      setPurchasings(data);
    });
  };

  useEffect(() => {
    loadAllPurchasingProduct();
  }, []);

  const getData = (data) => {
    if (data) return data;
    else return [];
  };

  const onEditPurchasingProduct = (purchasingProduct) => {
    console.log('onEditProduct = ', purchasingProduct);
    history.push({
      pathname: `/app/edit-purchasing-product/${purchasingProduct.id}`,
      state: purchasingProduct,
    });
  };

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => getData(purchasings), [purchasings]);

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

  const purchasingForm = () => {
    history.push('/app/add-purchasing-product');
  };

  const tableDesign = () => {
    return (
      <div className='container-fluid py-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6 m-2'>
              <h2 className='heading-section'>Purchasing Products</h2>
            </div>

            <GlobalFilterOnReactTable
              filter={globalFilter}
              setFilter={setGlobalFilter}
            />
            <div className='pt-3'>
              <button
                className='btn btn-success'
                type='button'
                onClick={() => purchasingForm()}>
                <FaPlus /> Add Purchasing
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
                      onClick={() => onEditPurchasingProduct(row.original)}>
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

export default GetPurchasingProduct;
