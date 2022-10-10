/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { Button } from './Button';

export default {
  title: 'Core/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  label: 'label',
  disabled: false,
  type: 'filled',
  icon: false,
  position: 'none',
};


export const Outline = Template.bind({});
Outline.args = {
  label: 'label',
  disabled: false,
  type: 'outlined',
};

export const Ghost = Template.bind({});
Ghost.args = {
  label: 'label',
  disabled: false,
  type: 'ghost',
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  label: 'label',
  disabled: false,
  type: 'filled',
  icon: 'zap',
  position: 'left',
};

export const IconRight = Template.bind({});
IconRight.args = {
  label: 'label',
  disabled: false,
  type: 'filled',
  icon: 'zap',
  position: 'right',
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  label: '',
  disabled: false,
  type: 'filled',
  icon: 'zap',
  position: 'none',
};
