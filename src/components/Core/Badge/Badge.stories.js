/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { Badge } from './Badge';

export default {
  title: 'Core/Badge',
  component: Badge,
};

const Template = (args) => (
  <Badge {...args}>{args.children}</Badge>
);

export const Danger = Template.bind({});
Danger.args = {
  children: 'label',
  variant: 'danger'
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'label',
  variant: 'warning'
};

export const Success = Template.bind({});
Success.args = {
  children: 'label',
  variant: 'success'
};

export const Information = Template.bind({});
Information.args = {
  children: 'label',
  variant: 'information'
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'label',
  variant: 'disabled'
};
