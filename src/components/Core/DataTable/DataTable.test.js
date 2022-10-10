import React from 'react';
import { render, screen } from '@testing-library/react';
import { DataTable } from './DataTable';
import { users } from './dummy_data';

const dataConfig = [
  { label: 'ID', value: 'id' },
  { label: 'Name', value: 'name' },
  { label: 'Username', value: 'username' },
  { label: 'Email', value: 'email' },
  { label: 'Phone', value: 'phone' },
  { label: 'Website', value: 'website' }
];

test('DataTable is rendered properly', () => {
  render(
    <DataTable
      data={users}
      dataConfig={dataConfig}
      sort={[{ id: 'id', desc: false }]}
    />
  );
  const datatableNode = screen.getByTestId('datatable');
  const paginationNode = screen.getByTestId('pagination');
  const pages = paginationNode.getElementsByClassName('page-button');

  expect(datatableNode).toBeInTheDocument();
  expect(datatableNode).toHaveClass('ragnarok');
  expect(datatableNode).toHaveClass('datatable');

  expect(paginationNode).toBeInTheDocument();
  expect(paginationNode).toHaveClass('pagination');
  expect(pages).toHaveLength(5);
});
