import React from 'react';
import { render, screen } from '@testing-library/react';
import { Select } from './Select';
import { SelectItem } from './SelectItem';

test('Select is rendered properly', () => {
  render(
    <Select
      label="Options"
      width="250px"
      placeholder="Placeholder"
    >
      <SelectItem value="1">Option 1</SelectItem>
      <SelectItem value="2">Option 2</SelectItem>
      <SelectItem value="3">Option 3</SelectItem>
      <SelectItem value="4">Option 4</SelectItem>
      <SelectItem value="5">Option 5</SelectItem>
      <SelectItem value="6">Option 6</SelectItem>
      <SelectItem value="7">Option 7 with long text for masking purposes</SelectItem>
    </Select>
  );
  const selectNode = screen.getByTestId('select');
  const textfieldNode = screen.getByTestId('textfield');
  const menuNode = screen.getByTestId('menu-select');
  const options = menuNode.getElementsByClassName('menu-select-item');

  expect(selectNode).toBeInTheDocument();
  expect(selectNode).toHaveClass('ragnarok');
  expect(selectNode).toHaveClass('menu-select-wrapper');

  expect(textfieldNode).toBeInTheDocument();
  expect(textfieldNode).toHaveClass('ragnarok');
  expect(textfieldNode).toHaveClass('textfield-outer');

  expect(menuNode).toBeInTheDocument();
  expect(menuNode).toHaveClass('ragnarok');
  expect(menuNode).toHaveClass('menu-select');

  expect(options).toHaveLength(7);
});

test('Select has a selected item', () => {
  render(
    <Select
      label="Options"
      width="250px"
      placeholder="Placeholder"
      selected="2"
    >
      <SelectItem value="1">Option 1</SelectItem>
      <SelectItem value="2">Option 2</SelectItem>
    </Select>
  );
  const menuNode = screen.getByTestId('menu-select');
  const options = menuNode.getElementsByClassName('selected-item');

  expect(options).toHaveLength(1);
});
