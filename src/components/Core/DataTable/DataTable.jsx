/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import {
  useTable,
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
} from 'react-table';

import { Icon } from '../Icon';
import { Button } from '../Button';
import { Filter } from './Filter';
import { Pagination } from './Pagination';

const DataTable = ({
  data,
  dataConfig,
  // error,
  onFilterClick,
  sort,
  paginationCount = 10
}) => {
  // if (error || !data || data.length === 0) {
  //   return <span>ERRRROU!</span>;
  // }

  const columns = React.useMemo(() => {
    const cols = [];
    dataConfig.map((item) => cols.push({ Header: item.label, accessor: item.value }));
    return cols;
  }, []);

  const tableData = React.useMemo(() => data, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setGlobalFilter,
    state,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
  } = useTable(
    {
      columns,
      data: tableData,
      initialState: {
        // hiddenColumns: columnsHidden || [],
        sort,
      },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <div
      className={[
        'ragnarok',
        'datatable',
        'table'
      ].join(' ')}
      data-testid="datatable"
    >
      <div className="filter-wrapper">
        <Filter
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <Button
          icon="filter"
          label="Filtros"
          onClick={onFilterClick}
          position="left"
          type="outlined"
        />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(
                    column.getSortByToggleProps()
                  )}
                >
                  <span>
                    {column.render('Header')}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <Icon
                          className="icon-order"
                          icon="arrow-down"
                          size={16}
                        />
                      ) : (
                        <Icon
                          className="icon-order"
                          icon="arrow-up"
                          size={16}
                        />
                      )
                    ) : (
                      <Icon
                        className="icon-order"
                        icon="chevron-down"
                        size={16}
                      />
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        canPreviousPage={canPreviousPage}
        gotoPage={gotoPage}
        previousPage={previousPage}
        nextPage={nextPage}
        canNextPage={canNextPage}
        pageCount={pageCount}
        pageIndex={state.pageIndex}
        maxEntries={data && data.length}
        paginationCount={paginationCount}
      />
    </div>
  );
};

DataTable.propTypes = {
  /**
   * Data to show
   */
  data: PropTypes.arrayOf(Object).isRequired,
  /**
   * Data configuration object
   */
  dataConfig: PropTypes.arrayOf(Object).isRequired,
  /**
   * Sorting options
   */
  sort: PropTypes.arrayOf(Object),
  // /**
  //  * How many Items in each page?
  //  */
  // paginationCount: PropTypes.oneOf([10, 25, 50, 100]),
  /**
   * Optional Filter Handler
   */
  onFilterClick: PropTypes.func,
};

DataTable.defaultProps = {
  sort: [],
  // paginationCount: 10,
  onFilterClick: undefined
};

export {
  DataTable
};
