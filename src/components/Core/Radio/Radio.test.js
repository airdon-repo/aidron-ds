import React from 'react';
import { render, screen } from '@testing-library/react';
import { Radio } from './Radio';
import { RadioOption } from './RadioOption';

test('Radio and Options are rendered properly', () => {
  render(
    <Radio
      label="label"
      selected="2"
      handleChange={() => {}}
    >
      <RadioOption value="1">Option 1</RadioOption>
      <RadioOption value="2">Option 2</RadioOption>
      <RadioOption value="3">Option 3</RadioOption>
    </Radio>
  );
  const radioNode = screen.getByTestId('radio');
  const options = radioNode.getElementsByClassName('radio-input');
  const selected = radioNode.getElementsByClassName('checked');

  expect(radioNode).toBeInTheDocument();
  expect(radioNode).toHaveClass('ragnarok');
  expect(radioNode).toHaveClass('radio');

  expect(options).toHaveLength(3);
  expect(selected).toHaveLength(1);
});
