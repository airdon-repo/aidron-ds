/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { Switch } from './Switch';

export default {
  title: 'Core/Switch',
  component: Switch,
};

const Template = (args) => {
  const handleChange = (x) => {
    // eslint-disable-next-line no-console
    console.log(x);
  };
  return (
    <Switch
      handleChange={handleChange}
      {...args}
    >
      Label
    </Switch>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  value: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  value: true
};
