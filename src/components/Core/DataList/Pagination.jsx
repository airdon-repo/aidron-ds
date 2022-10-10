/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { Icon } from '../Icon';

const Pagination = ({
  canNextPage,
  canPreviousPage,
  gotoPage,
  nextPage,
  previousPage,
  pageCount,
  pageIndex,
  manualPagination,
  maxEntries,
  paginationCount,
  onPageChange,
}) => {
  const buildCans = () => {
    let previous = canPreviousPage;
    let next = canNextPage;
    if (manualPagination) {
      if (pageIndex === 0) {
        previous = false;
      } else if (pageIndex <= (pageCount - 1)) {
        previous = true;
      }
      if (pageIndex === (pageCount - 1)) {
        next = false;
      }
    }

    return {
      previous,
      next
    };
  };

  const buildPages = (index, maxToShow = 3) => {
    const max = pageCount < maxToShow ? pageCount : maxToShow;
    const iterator = Array.from(Array(max), (x, idx) => index + idx);
    if (max < 3) {
      if (buildCans().previous && !buildCans().next) {
        iterator[0] = index - 1;
        iterator[1] = index;
      }
      if (!buildCans().previous && buildCans().next) {
        iterator[0] = index;
        iterator[1] = index + 1;
      }
      return iterator;
    }
    if (buildCans().previous && !buildCans().next) {
      iterator[0] = index - 2;
      iterator[1] = index - 1;
      iterator[2] = index;
    }
    if (buildCans().previous && buildCans().next) {
      iterator[0] = index - 1;
      iterator[1] = index;
      iterator[2] = index + 1;
    }
    if (!buildCans().previous && buildCans().next) {
      iterator[0] = index;
      iterator[1] = index + 1;
      iterator[2] = index + 2;
    }
    return iterator;
  };

  useEffect(() => {
    if (onPageChange) onPageChange({ pageIndex: pageIndex + 1, paginationCount });
  }, [pageIndex]);

  return (
    <div className="pagination-wrapper">
      <div className="pagination-label">
        {`Mostrando ${(pageIndex * paginationCount) + 1} - ${(((pageIndex + 1) * paginationCount) > maxEntries ? maxEntries : ((pageIndex + 1) * paginationCount))} de ${maxEntries}`}
      </div>
      <div className="pagination" data-testid="pagination">
        {pageCount > 1 && (
          <ul>
            <li
              className={[
                'page-item',
                'page-prev',
                !buildCans().previous ? 'disabled' : undefined
              ].join(' ')}
            >
              <button
                className="page-button"
                type="button"
                href="#"
                disabled={!buildCans().previous}
                onClick={() => previousPage()}
              >
                <Icon
                  icon="chevron-left"
                  size={16}
                />
                <span className="visually-hidden">Previous</span>
              </button>
            </li>
            {buildPages(pageIndex, 3).map((page) => (
              <li
                key={page}
                className={[
                  'page-item',
                  'page-number',
                  page === pageIndex ? 'disabled' : undefined
                ].join(' ')}
              >
                <button
                  className="page-button"
                  type="button"
                  onClick={() => gotoPage(page)}
                >
                  {page + 1}
                  <span className="visually-hidden">{page + 1}</span>
                </button>
              </li>
            )).filter(Boolean)}
            <li
              className={[
                'page-item',
                'page-next',
                !buildCans().next ? 'disabled' : undefined
              ].join(' ')}
            >
              <button
                className="page-button"
                type="button"
                href="#"
                disabled={!buildCans().next}
                onClick={() => nextPage()}
              >
                <Icon
                  icon="chevron-right"
                  size={16}
                />
                <span className="visually-hidden">Next</span>
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export {
  Pagination
};
