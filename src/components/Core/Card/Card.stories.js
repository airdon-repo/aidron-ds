/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { Card } from './Card';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { Icon } from '../Icon';

const content = (
  <div>
    <Heading size="md">
      Title
      <span className="icon-wrapper">
        <Icon
          icon="share-2"
        />
        <Icon
          icon="more-vertical"
        />
        <Icon
          icon="x"
        />
      </span>
    </Heading>
    <Text>
      Lorem Ipsum Dolor Sit Amet
    </Text>
  </div>
);

export default {
  title: 'Core/Card',
  component: Card,
};

const Template = (args) => <Card>{args.children}</Card>;

export const Basic = Template.bind({});
Basic.args = {
  children: content
};
