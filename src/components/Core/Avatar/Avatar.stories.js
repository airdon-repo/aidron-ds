/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { Avatar } from './Avatar';
import image from './avatar.jpg';

export default {
  title: 'Core/Avatar',
  component: Avatar,
};

const Template = (args) => (
  <div style={{ display: 'flex' }}>
    <Avatar {...args} />
    <Avatar {...args} src={undefined} />
  </div>
);

export const Small = Template.bind({});
Small.args = {
  name: 'Dwigth Schrute',
  size: 'sm',
  src: image,
};

export const Medium = Template.bind({});
Medium.args = {
  name: 'Dwigth Schrute',
  size: 'md',
  src: image,
};

export const Large = Template.bind({});
Large.args = {
  name: 'Dwigth Schrute',
  size: 'lg',
  src: image,
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  name: 'Dwigth Schrute',
  size: 'xl',
  src: image,
};
