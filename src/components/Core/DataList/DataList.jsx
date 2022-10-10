/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  useTable,
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
} from 'react-table';

import { Button } from '../Button';
import { Caption } from '../Caption';
import { Check } from '../Check';
import { Icon } from '../Icon';
import { Text } from '../Text';

import { Pagination } from './Pagination';

const ProductCard = ({
  id,
  image,
  colors,
  name,
  lista,
  eoh,
  stSem,
  emestoque,
  precoMedio,
  margem,
  precoSug,
  margemEst,
  carteira
}) => (
  <div className="card">
    <span>
      <Check
        // eslint-disable-next-line
        handleChange={(x) => console.log(id, x)}
        value="0"
      />
    </span>
    <span className="preview">
      <img src={image} alt={name} />
      <div className="colors">
        <span
          className="border-radius-circle"
          style={colors[0]
                      ? { backgroundColor: colors[0] }
                      : { border: '1px dotted red' }}
        />
        <span
          className="border-radius-circle"
          style={colors[1]
                      ? { backgroundColor: colors[1] }
                      : { border: '1px dotted red' }}
        />
        <span
          className="border-radius-circle"
          style={colors[2]
                      ? { backgroundColor: colors[2] }
                      : { border: '1px dotted red' }}
        />
        {colors.length > 3 && (
          <Icon size={8} icon="plus" />
        )}
      </div>
    </span>
    <span className="fixed">
      <Caption className="color-neutral-30">
        #
        {id}
      </Caption>
      <Text size="xs" weight="bold">{name}</Text>
    </span>
    <span>
      <Caption className="color-neutral-30">Lista</Caption>
      <Text size="xs" weight="bold">{lista}</Text>
    </span>
    <span>
      <Caption className="color-neutral-30">EOH</Caption>
      <Text size="xs" weight="bold">{eoh}</Text>
    </span>
    <span>
      <Caption className="color-neutral-30">ST Sem.</Caption>
      <Text size="xs" weight="bold">{stSem}</Text>
    </span>
    <span>
      <Caption className="color-neutral-30">Em Estoque</Caption>
      <Text size="xs" weight="bold">{emestoque}</Text>
    </span>
    <span>
      <Caption className="color-neutral-30">Preço Méd.</Caption>
      <Text size="xs" weight="bold" className="color-blue-dark">{precoMedio}</Text>
    </span>
    <span>
      <Caption className="color-neutral-30">Margem</Caption>
      <Text size="xs" weight="bold" className="color-blue-dark">{margem}</Text>
    </span>
    <span>
      <Caption className="color-neutral-30">Preço Sug.</Caption>
      <Text size="xs" weight="bold" className="color-green-dark">{precoSug}</Text>
    </span>
    <span>
      <Caption className="color-neutral-30">Margem Est.</Caption>
      <Text size="xs" weight="bold">{margemEst}</Text>
    </span>
    <span>
      <Caption className="color-neutral-30">Carteira</Caption>
      <Text size="xs" weight="bold">{carteira}</Text>
    </span>
    <span>
      <Button
        icon="more-vertical"
        label=""
        onClick={() => {}}
        type="ghost"
      />
    </span>
  </div>
);

const DataList = ({
  data,
  dataConfig,
  itemComponent: ItemComponent,
  itemProps,
  onPageChange,
  sort,
  paginationCount = 10,
  recordCount,
  manualPagination = false,
  currentPage
}) => {
  const [tableData, setTableData] = useState([]);
  const [controlledIndex, setControlledIndex] = useState(currentPage);
  const columns = React.useMemo(() => {
    const cols = [];
    dataConfig.map((item) => cols.push({ Header: item.label, accessor: item.value }));
    return cols;
  }, []);

  useEffect(() => {
    setTableData(data);
  }, [data]);


  const {
    state,
    page,
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
        sort,
      },
      manualPagination,
      pageCount: Math.ceil(recordCount / paginationCount),
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  useEffect(() => {
    if (state.pageIndex) {
      setControlledIndex(state.pageIndex + 1);
    }
  }, [state.pageIndex]);

  const PropedComponent = (comp, args) => {
    if (React.isValidElement(comp)) {
      return React.cloneElement(comp, {
        ...args,
      });
    }
    return comp;
  };

  return (
    <div
      className={[
        'ragnarok',
        'datalist',
      ].join(' ')}
      data-testid="datalist"
    >
      <div className="content">
        {page.map((item) => (PropedComponent(
          <ItemComponent />, { ...itemProps, ...item.original }
        )))}
      </div>
      <Pagination
        onPageChange={onPageChange}
        canPreviousPage={canPreviousPage}
        gotoPage={gotoPage}
        previousPage={previousPage}
        nextPage={nextPage}
        canNextPage={canNextPage}
        pageCount={pageCount}
        manualPagination={manualPagination}
        pageIndex={manualPagination ? controlledIndex - 1 : state.pageIndex}
        maxEntries={recordCount}
        paginationCount={paginationCount}
      />
    </div>
  );
};

DataList.propTypes = {
  /**
   * Data to show
   */
  data: PropTypes.arrayOf(Object).isRequired,
  /**
   * Data configuration object
   */
  dataConfig: PropTypes.arrayOf(Object).isRequired,
  /**
   * Number of records in the list
   */
  recordCount: PropTypes.arrayOf(Number).isRequired,
  /**
   * Sorting options
   */
  sort: PropTypes.arrayOf(Object),
  /**
   * Which component should render each item?
   */
  itemComponent: PropTypes.func.isRequired,
  /**
   * Which aditional props should be passed?
   */
  itemProps: PropTypes.object,
  /**
   * Optional page change handler
   */
  onPageChange: PropTypes.func,
  /**
   * Indicates if the table is going to be controlled
   */
  manualPagination: PropTypes.bool,
  /**
   * If control is manual for pagination, which page is it?
   */
  currentPage: PropTypes.number,
};

DataList.defaultProps = {
  sort: [],
  itemProps: {},
  onPageChange: undefined,
  manualPagination: false,
  currentPage: 1
};

export {
  DataList,
  ProductCard
};
