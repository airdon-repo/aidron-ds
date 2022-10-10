/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { LinkText } from './LinkText';

export default {
  title: 'Core/LinkText',
  component: LinkText,
};

const Template = (args) => <LinkText {...args}>{args.label}</LinkText>;

export const Basic = Template.bind({});
Basic.args = {
  size: 'sm',
  to: '#',
  color: 'color-primary-medium',
  label: 'Lorem Ipsum Dolor Sit Amet',
};
