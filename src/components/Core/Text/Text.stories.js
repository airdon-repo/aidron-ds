/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { Text } from './Text';

export default {
  title: 'Core/Text',
  component: Text,
};

const Template = (args) => <Text {...args}>{args.label}</Text>;

export const BodySMRegular = Template.bind({});
BodySMRegular.args = {
  size: 'sm',
  weight: 'regular',
  label: 'Lorem Ipsum Dolor Sit Amet',
};

export const BodySMBold = Template.bind({});
BodySMBold.args = {
  size: 'sm',
  weight: 'bold',
  label: 'Lorem Ipsum Dolor Sit Amet',
};

export const BodyXSRegular = Template.bind({});
BodyXSRegular.args = {
  size: 'xs',
  weight: 'regular',
  label: 'Lorem Ipsum Dolor Sit Amet',
};

export const BodyXSBold = Template.bind({});
BodyXSBold.args = {
  size: 'xs',
  weight: 'bold',
  label: 'Lorem Ipsum Dolor Sit Amet',
};
