import React from 'react';
import { render, screen } from '@testing-library/react';
import { Snackbar } from './Snackbar';

test('Snackbar is rendered properly', () => {
  render(
    <Snackbar>
      <span> handle text component</span>
    </Snackbar>
  );
  const snackbardNode = screen.getByTestId('snackbar');

  expect(snackbardNode).toBeInTheDocument();
  expect(snackbardNode).toHaveClass('ragnarok');
  expect(snackbardNode).toHaveClass('snackbar');
});

test('Snackbar changes its value properly', () => {
  const { rerender } = render(
    <Snackbar display isOpen variant="danger">
      <span> handle text component</span>
    </Snackbar>
  );
  const snackbardNodeDisplay = screen.getByTestId('snackbar');
  expect(snackbardNodeDisplay).toBeInTheDocument();
  expect(snackbardNodeDisplay).toHaveClass('row');
  expect(snackbardNodeDisplay).toHaveClass('danger');
  expect(snackbardNodeDisplay).toHaveClass('open');

  rerender(
    <Snackbar>
      <span> handle text component</span>
    </Snackbar>
  );
  const snackbardNodeIsOpen = screen.getByTestId('snackbar');
  expect(snackbardNodeIsOpen).toBeInTheDocument();
  expect(snackbardNodeIsOpen).toHaveClass('close');
});
