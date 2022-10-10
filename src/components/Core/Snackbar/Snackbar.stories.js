/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { Snackbar } from './Snackbar';

export default {
  title: 'Core/Snackbar',
  component: Snackbar,
};

const content = (
  <p>
    Double-line message
    <br />
    with action
  </p>
);

const labelButton = (
  <span>Longer Action Text</span>
);

const Template = (args) => <Snackbar {...args} />;


export const Basic = Template.bind({});
Basic.args = {
  children: content,
  isOpen: true,
  action: labelButton
};


