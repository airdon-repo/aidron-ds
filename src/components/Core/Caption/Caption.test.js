import React from 'react';
import { render, screen } from '@testing-library/react';
import { Caption } from './Caption';

const childString = 'Lorem Ipsum Dolor Sit Amet';

test('Caption is rendered properly', () => {
  render(
    <Caption>{childString}</Caption>
  );
  const captionNode = screen.getByTestId('caption');
  expect(captionNode).toBeInTheDocument();
  expect(captionNode).toHaveClass('ragnarok');
  expect(captionNode).toHaveClass('caption');
  expect(captionNode).toHaveTextContent(childString);
});

test('Caption is rendered in uppercase', () => {
  const { rerender } = render(
    <Caption>{childString}</Caption>
  );
  let captionNode = screen.getByTestId('caption');

  expect(captionNode).not.toHaveClass('text-decoration-allcaps');

  rerender(<Caption allcaps>{childString}</Caption>);
  captionNode = screen.getByTestId('caption');
  expect(captionNode).toHaveClass('text-decoration-allcaps');
});
