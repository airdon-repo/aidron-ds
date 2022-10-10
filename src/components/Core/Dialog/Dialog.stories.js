/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { Dialog } from './Dialog';
import { Button } from '../Button';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { Radio, RadioOption } from '../Radio';

export default {
  title: 'Core/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      height: '600px'
    }
  }
};

const Template = (args) => (
  <Dialog {...args}>
    <Heading size="md" className="no-m">
      Title
    </Heading>
    <Text>
      Lorem Ipsum Dolor Sit Amet
    </Text>
  </Dialog>
);

const TemplateRadio = (args) => (
  <Dialog {...args}>
    <Heading size="md" className="no-m">
      Title
    </Heading>
    <Text>
      Lorem Ipsum Dolor Sit Amet
    </Text>
    <div
      style={{
        height: '220px',
        overflowY: 'auto',
        overflowX: 'hidden',
        margin: '0 -16px'
      }}
    >
      <Radio
        handleChange={() => {}}
        label="label"
        selected="2"
        vertical
      >
        <RadioOption value="1">
          Option 1
        </RadioOption>
        <RadioOption value="2">
          Option 2
        </RadioOption>
        <RadioOption value="3">
          Option 3
        </RadioOption>
        <RadioOption value="4">
          Option 4
        </RadioOption>
        <RadioOption value="5">
          Option 5
        </RadioOption>
        <RadioOption value="6">
          Option 6
        </RadioOption>
        <RadioOption value="7">
          Option 7
        </RadioOption>
        <RadioOption value="8">
          Option 8
        </RadioOption>
      </Radio>
    </div>
  </Dialog>
);

export const Basic = Template.bind({});
Basic.args = {
  actions: [
    <Button
      label="Action"
      size="lg"
    />,
    <Button
      label="Cancel"
      type="outlined"
      size="lg"
    />,
    <Button
      label="Cancel Harder"
      type="ghost"
      size="lg"
    />
  ],
  width: '500px',
  overlay: true,
  open: true,
};

export const RadioList = TemplateRadio.bind({});
RadioList.args = {
  actions: [
    <Button
      label="Action"
      size="lg"
    />,
    <Button
      label="Cancel"
      type="outlined"
      size="lg"
    />,
    <Button
      label="Cancel Harder"
      type="ghost"
      size="lg"
    />
  ],
  width: '500px',
  overlay: true,
  open: true,
};
