import React from 'react';
import { render, screen } from '@testing-library/react';
import { Tooltip } from './Tooltip';
import { Text } from '../Text';

const childString = 'Lorem Ipsum Dolor Sit Amet';

test('Tooltip is rendered properly', () => {
  render(
    <Text
      size="xxs"
      className="tooltip"
    >
      Hover me
      <Tooltip direction="bottom">{childString}</Tooltip>
    </Text>
  );
  const captionNode = screen.getByTestId('tooltip');

  expect(captionNode).toBeInTheDocument();
  expect(captionNode).toHaveClass('ragnarok');
  expect(captionNode).toHaveClass('tooltip-wrapper');
  expect(captionNode).toHaveTextContent(childString);
});
