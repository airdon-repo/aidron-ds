import React from 'react';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

test('Badge is rendered properly', () => {
  render(
    <Badge variant="success">label</Badge>
  );
  const badgeNode = screen.getByTestId('badge');

  expect(badgeNode).toBeInTheDocument();
  expect(badgeNode).toHaveClass('ragnarok');
  expect(badgeNode).toHaveClass('badge');
  expect(badgeNode).toHaveClass('success');
  expect(badgeNode).toHaveClass('md');
  expect(badgeNode).toHaveTextContent('label');
});
