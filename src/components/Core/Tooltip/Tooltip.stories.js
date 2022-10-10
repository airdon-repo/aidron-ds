/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { Tooltip } from './Tooltip';
import { Button } from '../Button';
import { LinkText } from '../LinkText';
import { Text } from '../Text';

export default {
  title: 'Core/Tooltip',
  component: Tooltip,
};

const TemplateText = (args) => (
  <Text
    size="xxs"
    className="tooltip"
  >
    Hover me
    <Tooltip {...args}>
      Tooltip&apos;s Text with really really really really long text to check for many lines
    </Tooltip>
  </Text>
);

const TemplateLink = (args) => (
  <LinkText
    size="xxs"
    className="tooltip"
  >
    Hover me
    <Tooltip {...args}>Tooltip&apos;s Text</Tooltip>
  </LinkText>
);

const TemplateButton = (args) => (
  <Button
    className="tooltip"
  >
    Hover me
    <Tooltip {...args}>Tooltip&apos;s Text</Tooltip>
  </Button>
);

export const Basic = TemplateText.bind({});
Basic.args = {
  direction: 'bottom',
};

export const onLink = TemplateLink.bind({});
onLink.args = {
  direction: 'bottom',
};

export const onButton = TemplateButton.bind({});
onButton.args = {
  direction: 'bottom',
};
