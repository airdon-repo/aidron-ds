/* eslint-disable max-len */
import React from 'react';
import { Icon } from '../Icon';

const Pagination = ({
  canNextPage,
  canPreviousPage,
  gotoPage,
  nextPage,
  previousPage,
  pageCount,
  pageIndex,
  maxEntries,
  paginationCount
}) => {
  const buildPages = (index, maxToShow = 3) => {
    const iterator = Array.from(Array(maxToShow), (x, idx) => index + idx);
    if (canPreviousPage && !canNextPage) {
      iterator[0] = index - 2;
      iterator[1] = index - 1;
      iterator[2] = index;
    }
    if (canPreviousPage && canNextPage) {
      iterator[0] = index - 1;
      iterator[1] = index;
      iterator[2] = index + 1;
    }
    if (!canPreviousPage && canNextPage) {
      iterator[0] = index;
      iterator[1] = index + 1;
      iterator[2] = index + 2;
    }
    return iterator;
  };

  return (
    <div className="pagination-wrapper">
      <div className="pagination-label">
        {`Mostrando ${(pageIndex * paginationCount) + 1} - ${((pageIndex + 1) * paginationCount)} de ${maxEntries}`}
      </div>
      <div className="pagination" data-testid="pagination">
        {pageCount > 1 && (
          <ul>
            {/* <li
              className={[
                'page-item',
                'page-first'
              ].join(' ')}
              disabled={!canPreviousPage}
            >
              <button
                className="page-button"
                type="button"
                href="#"
                disabled={!canPreviousPage}
                onClick={() => gotoPage(0)}
              >
                <Icon
                  icon="chevrons-left"
                  size={16}
                />
                <span className="visually-hidden">First</span>
              </button>
            </li> */}
            <li
              className={[
                'page-item',
                'page-prev',
                !canPreviousPage ? 'disabled' : undefined
              ].join(' ')}
            >
              <button
                className="page-button"
                type="button"
                href="#"
                disabled={!canPreviousPage}
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
                  onClick={page !== pageIndex ? () => gotoPage(page) : undefined}
                >
                  {page + 1}
                  <span className="visually-hidden">{page + 1}</span>
                </button>
              </li>
            )).filter(Boolean)}
            <li
              className="page-item page-next"
              disabled={!canPreviousPage}
            >
              <button
                className="page-button"
                type="button"
                href="#"
                disabled={!canNextPage}
                onClick={() => nextPage()}
              >
                <Icon
                  icon="chevron-right"
                  size={16}
                />
                <span className="visually-hidden">Next</span>
              </button>
            </li>
            {/* <li
              className="page-item page-last"
              disabled={!canNextPage}
            >
              <button
                className="page-button"
                type="button"
                href="#"
                disabled={!canNextPage}
                onClick={() => gotoPage(pageCount - 1)}
              >
                <Icon
                  icon="chevrons-right"
                  size={16}
                />
                <span className="visually-hidden">Last</span>
              </button>
            </li> */}
          </ul>
        )}
      </div>
    </div>
  );
};

export {
  Pagination
};
