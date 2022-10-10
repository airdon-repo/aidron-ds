import React from 'react';
import { render, screen } from '@testing-library/react';
import { LinkText } from './LinkText';

const childString = 'Lorem Ipsum Dolor Sit Amet';

test('LinkText is rendered properly', () => {
  render(
    <LinkText to="#">{childString}</LinkText>
  );
  const linkNode = screen.getByTestId('link');

  expect(linkNode).toBeInTheDocument();
  expect(linkNode).toHaveClass('ragnarok');
  expect(linkNode).toHaveClass('link');
  expect(linkNode).toHaveClass('text-link-sm');
  expect(linkNode).toHaveClass('color-primary-medium');
  expect(linkNode).toHaveAttribute('href', '#');
  expect(linkNode).toHaveTextContent(childString);
});

test('LinkText is rendered in different sizes, colors and destinations', () => {
  const { rerender } = render(
    <LinkText to="#">{childString}</LinkText>
  );
  let linkNode = screen.getByTestId('link');

  expect(linkNode).toHaveClass('text-link-sm');

  rerender(<LinkText size="xs" color="color-primary-light" to="facebook.com">{childString}</LinkText>);
  linkNode = screen.getByTestId('link');
  expect(linkNode).toHaveClass('text-link-xs');
  expect(linkNode).toHaveClass('color-primary-light');
  expect(linkNode).toHaveAttribute('href', 'facebook.com');
});
