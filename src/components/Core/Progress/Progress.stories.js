/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { Progress } from './Progress';

export default {
  title: 'Core/Progress',
  component: Progress,
};

const Template = (args) => <Progress {...args} />;


export const Determinate = Template.bind({});
Determinate.args = {
  width: '128px',
  determinate: true,
  value: 60
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  width: '128px',
};
