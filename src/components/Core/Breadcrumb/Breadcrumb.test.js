import React from 'react';
import { render, screen } from '@testing-library/react';
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';

test('Breadcrumb is rendered properly', () => {
  render(
    <Breadcrumb>
      <BreadcrumbItem path="#">Initial</BreadcrumbItem>
      <BreadcrumbItem path="#">Level 1</BreadcrumbItem>
      <BreadcrumbItem path="#">Level 2</BreadcrumbItem>
      <BreadcrumbItem path="#">Level 3</BreadcrumbItem>
      <BreadcrumbItem path="#">Level 4</BreadcrumbItem>
      <BreadcrumbItem active>Level 5</BreadcrumbItem>
    </Breadcrumb>
  );
  const breadcrumbNode = screen.getByTestId('breadcrumb');
  const items = breadcrumbNode.getElementsByClassName('breadcrumb-item');

  expect(breadcrumbNode).toBeInTheDocument();
  expect(breadcrumbNode).toHaveClass('ragnarok');
  expect(breadcrumbNode).toHaveClass('breadcrumb');
  expect(items).toHaveLength(6);
});
