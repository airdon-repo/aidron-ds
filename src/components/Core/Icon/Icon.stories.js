/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { Icon } from './Icon';

export default {
  title: 'Core/Icon',
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  size: 24,
  stroke: 1.5,
  color: 'color-primary-medium',
  icon: 'smile',
};
