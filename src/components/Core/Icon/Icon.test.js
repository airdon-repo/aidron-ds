import React from 'react';
import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';

test('Icon is rendered properly', () => {
  render(
    <Icon color="color-primary-medium" />
  );
  const iconNode = screen.getByTestId('icon');

  expect(iconNode).toBeInTheDocument();
  expect(iconNode.firstChild).toHaveClass('feather');
  expect(iconNode.firstChild).toHaveClass('feather-smile');
  expect(iconNode.firstChild).toHaveClass('color-primary-medium');
  expect(iconNode.firstChild).toHaveAttribute('width', '24');
  expect(iconNode.firstChild).toHaveAttribute('stroke-width', '1.5');
});

test('Icon is rendered in different color, size, stroke width and icon', () => {
  const { rerender } = render(
    <Icon color="color-primary-medium" />
  );
  let iconNode = screen.getByTestId('icon');

  expect(iconNode.firstChild).toHaveClass('color-primary-medium');
  expect(iconNode.firstChild).toHaveAttribute('width', '24');
  expect(iconNode.firstChild).toHaveAttribute('stroke-width', '1.5');

  rerender(
    <Icon
      color="color-blue-dark"
      size={48}
      stroke={3}
    />
  );
  iconNode = screen.getByTestId('icon');
  expect(iconNode.firstChild).toHaveClass('color-blue-dark');
  expect(iconNode.firstChild).toHaveAttribute('width', '48');
  expect(iconNode.firstChild).toHaveAttribute('stroke-width', '3');
});
