import React from 'react';
import { render, screen } from '@testing-library/react';
import { Dialog } from './Dialog';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { Button } from '../Button';

test('Dialog is rendered properly', () => {
  render(
    <Dialog
      actions={[
        <Button
          key="0"
          label="Action"
          type="outlined"
        />,
        <Button
          key="1"
          label="Cancel"
          type="ghost"
        />,
        <Button
          key="2"
          label="Cancel Harder"
          type="ghost"
        />
      ]}
      width="500px"
      overlay
    >
      <Heading size="md" className="no-m">
        Title
      </Heading>
      <Text>
        Lorem Ipsum Dolor Sit Amet
      </Text>
    </Dialog>
  );
  const dialogNode = screen.getByTestId('dialog');

  expect(dialogNode).toBeInTheDocument();
  expect(dialogNode).toHaveClass('ragnarok');
  expect(dialogNode).toHaveClass('dialog');
});
