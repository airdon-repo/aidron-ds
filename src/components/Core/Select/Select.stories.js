import React from 'react';

import { Select } from './Select';
import { SelectItem } from './SelectItem';

export default {
  title: 'Core/Select',
  component: Select,
};

const Template = (args) => {
  const handleChange = (x) => {
    // eslint-disable-next-line no-console
    console.log(x);
  };
  return (
    <Select
      label="Options"
      width="250px"
      placeholder="Placeholder"
      handleChange={handleChange}
      {...args}
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
};

export const SelectInput = Template.bind({});
SelectInput.args = {
  selected: '3',
  readOnly: true
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  selected: ['1', '3'],
  readOnly: true,
  multiselect: true
};
