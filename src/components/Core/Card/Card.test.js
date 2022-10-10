import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { Icon } from '../Icon';

const childString = 'Lorem Ipsum Dolor Sit Amet';

test('Card is rendered properly', () => {
  render(
    <Card>
      <div>
        <Heading size="md">
          Title
          <span className="icon-wrapper">
            <Icon icon="share-2" />
            <Icon icon="more-vertical" />
            <Icon icon="x" />
          </span>
        </Heading>
        <Text>
          {childString}
        </Text>
      </div>
    </Card>
  );
  const linkNode = screen.getByTestId('card');
  const textNode = screen.getByTestId('text-body');

  expect(linkNode).toBeInTheDocument();
  expect(linkNode).toHaveClass('ragnarok');
  expect(linkNode).toHaveClass('card');

  expect(textNode).toBeInTheDocument();
  expect(textNode).toHaveClass('ragnarok');
  expect(textNode).toHaveClass('text');
  expect(textNode).toHaveTextContent(childString);
});
