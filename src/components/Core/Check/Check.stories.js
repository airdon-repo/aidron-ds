/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { Check } from './Check';

export default {
  title: 'Core/Check',
  component: Check,
};

const handleChange = (x) => {
  // eslint-disable-next-line no-console
  console.log(x);
};

const Template = (args) => (
  <Check
    handleChange={handleChange}
    {...args}
  >
    Check Option
  </Check>
);

const Template2 = (args) => (
  <Check
    handleChange={handleChange}
    {...args}
  />
);

export const Basic = Template.bind({});
Basic.args = {
  value: '1',
  handleChange
};

export const NoLabel = Template2.bind({});
NoLabel.args = {
  value: '1',
  handleChange
};

