/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { TextField } from './TextField';
import { Icon } from '../Icon';

export default {
  title: 'Core/TextField',
  component: TextField,
};

// eslint-disable-next-line no-console
const Template = (args) => <TextField onChange={(x) => console.log(x)} {...args} />;

export const BasicInput = Template.bind({});
BasicInput.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  type: 'text',
  help: '',
  disabled: false,
  iconLeft: false,
  iconRight: false,
  value: ''
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  type: 'text',
  help: '',
  disabled: true,
  iconLeft: false,
  iconRight: false,
  value: ''
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  type: 'text',
  help: '',
  disabled: false,
  iconLeft: 'zap',
  iconRight: false,
  value: 'Input text'
};

export const RightAction = Template.bind({});
RightAction.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  type: 'text',
  help: '',
  disabled: false,
  iconLeft: false,
  iconRight: 'chevron-down',
  value: 'Input text'
};

const helper = () => (
  <>
    <Icon icon="zap" size={12} style={{ paddingRight: '4px' }} />
    help text.
  </>
);

export const HelperText = Template.bind({});
HelperText.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  type: 'text',
  help: helper(),
  helpClass: 'help',
  disabled: false,
  iconLeft: 'zap',
  iconRight: 'chevron-down',
  value: 'Input text'
};

export const HelperSuccess = Template.bind({});
HelperSuccess.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  type: 'text',
  help: helper(),
  helpClass: 'success',
  disabled: false,
  iconLeft: 'zap',
  iconRight: 'chevron-down',
  value: 'Input text'
};

export const HelperError = Template.bind({});
HelperError.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  type: 'text',
  help: helper(),
  helpClass: 'error',
  disabled: false,
  iconLeft: 'zap',
  iconRight: 'chevron-down',
  value: 'Input text'
};

export const HelperWarning = Template.bind({});
HelperWarning.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  type: 'text',
  help: helper(),
  helpClass: 'warning',
  disabled: false,
  iconLeft: 'zap',
  iconRight: 'chevron-down',
  value: 'Input text'
};
