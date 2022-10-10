import React from 'react';
import { render, screen } from '@testing-library/react';
import { Heading } from './Heading';

const childString = 'Lorem Ipsum Dolor Sit Amet';

test('Heading is rendered properly', () => {
  render(
    <Heading>{childString}</Heading>
  );
  const headingNode = screen.getByTestId('heading');

  expect(headingNode).toBeInTheDocument();
  expect(headingNode).toHaveClass('ragnarok');
  expect(headingNode).toHaveClass('heading');
  expect(headingNode).toHaveClass('text-display');
  expect(headingNode).toHaveTextContent(childString);
});

test('Heading is rendered in different sizes and uppercase', () => {
  const { rerender } = render(
    <Heading>{childString}</Heading>
  );
  let headingNode = screen.getByTestId('heading');

  expect(headingNode).toHaveClass('text-display');

  rerender(<Heading size="sm" allcaps>{childString}</Heading>);
  headingNode = screen.getByTestId('heading');
  expect(headingNode).toHaveClass('text-heading-sm');
  expect(headingNode).toHaveClass('text-decoration-allcaps');
});
