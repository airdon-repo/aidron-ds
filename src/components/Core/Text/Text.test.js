import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from './Text';

const childString = 'Lorem Ipsum Dolor Sit Amet';

test('Text is rendered properly', () => {
  render(
    <Text>{childString}</Text>
  );
  const textNode = screen.getByTestId('text-body');

  expect(textNode).toBeInTheDocument();
  expect(textNode).toHaveClass('ragnarok');
  expect(textNode).toHaveClass('text');
  expect(textNode).toHaveClass('text-body-sm-regular');
  expect(textNode).toHaveTextContent(childString);
});

test('Text is rendered bold and extra small', () => {
  const { rerender } = render(
    <Text>{childString}</Text>
  );
  const textNode = screen.getByTestId('text-body');

  expect(textNode).toHaveClass('text-body-sm-regular');
  rerender(<Text size="xs" weight="bold">{childString}</Text>);
  expect(textNode).toHaveClass('text-body-xs-bold');
});
