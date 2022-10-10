import React from 'react';
import { render, screen } from '@testing-library/react';
import { TextField } from './TextField';

test('TextField is rendered properly', () => {
  render(
    <TextField />
  );
  const textFieldNode = screen.getByTestId('textfield');

  expect(textFieldNode).toBeInTheDocument();
  expect(textFieldNode).toHaveClass('ragnarok');
  expect(textFieldNode).toHaveClass('textfield-outer');
});

test('TextField changes its value properly', () => {
  const { rerender } = render(
    <TextField />
  );
  // const textFieldNode = screen.getByTestId('textfield');
  let textInput = screen.getByTestId('textfield-input');
  expect(textInput).not.toHaveValue('Input text');
  rerender(
    <TextField
      value="Input text"
    />
  );
  textInput = screen.getByTestId('textfield-input');
  expect(textInput).toHaveValue('Input text');
});
