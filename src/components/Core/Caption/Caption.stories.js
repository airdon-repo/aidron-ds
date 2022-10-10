/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { Caption } from './Caption';

export default {
  title: 'Core/Caption',
  component: Caption,
};

const Template = (args) => <Caption {...args}>Lorem Ipsum Dolor Sit Amet</Caption>;

export const Basic = Template.bind({});
Basic.args = {
};
