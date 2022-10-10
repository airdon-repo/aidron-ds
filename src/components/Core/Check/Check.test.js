import React from 'react';
import { render, screen } from '@testing-library/react';
import { Check } from './Check';

test('Check is rendered properly', () => {
  render(
    <Check
      handleChange={() => {}}
      value="0"
    >
      Check Option
    </Check>
  );
  const checkNode = screen.getByTestId('check');

  expect(checkNode).toBeInTheDocument();
  expect(checkNode).toHaveClass('ragnarok');
  expect(checkNode).toHaveClass('check');
});

test('Check is changing values correctly', () => {
  render(
    <Check
      handleChange={() => {}}
      value="1"
    >
      Check Option
    </Check>
  );
  const checkNode = screen.getByTestId('check');
  const checkInput = screen.getByTestId('check-input');
  expect(checkNode).toBeInTheDocument();
  expect(checkInput).toBeInTheDocument();
  expect(checkInput).toHaveAttribute('checked');
  expect(checkInput).toHaveAttribute('value', '1');
});

