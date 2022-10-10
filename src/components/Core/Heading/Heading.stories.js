/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { Heading } from './Heading';

export default {
  title: 'Core/Heading',
  component: Heading,
};

const Template = (args) => <Heading {...args}>{args.label}</Heading>;

export const Display = Template.bind({});
Display.args = {
  size: 'display',
  label: 'Lorem Ipsum Dolor Sit Amet',
};

export const HeadingXL = Template.bind({});
HeadingXL.args = {
  size: 'xl',
  label: 'Lorem Ipsum Dolor Sit Amet',
};

export const HeadingLG = Template.bind({});
HeadingLG.args = {
  size: 'lg',
  label: 'Lorem Ipsum Dolor Sit Amet',
};

export const HeadingMD = Template.bind({});
HeadingMD.args = {
  size: 'md',
  label: 'Lorem Ipsum Dolor Sit Amet',
};

export const HeadingSM = Template.bind({});
HeadingSM.args = {
  size: 'sm',
  label: 'Lorem Ipsum Dolor Sit Amet',
};
