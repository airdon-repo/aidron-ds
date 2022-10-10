import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

const childString = 'label';

test('Button is rendered properly', () => {
  render(
    <Button label={childString} />
  );
  const buttonNode = screen.getByTestId('button');

  expect(buttonNode).toBeInTheDocument();
  expect(buttonNode).toHaveClass('ragnarok');
  expect(buttonNode).toHaveClass('button');
  expect(buttonNode).toHaveTextContent(childString);
});

test('Button is rendered as large', () => {
  render(
    <Button size="lg" label={childString} />
  );
  const buttonNode = screen.getByTestId('button');

  expect(buttonNode).toBeInTheDocument();
  expect(buttonNode).toHaveClass('button-lg');
});

test('Button is rendered with zap icon on the left side', () => {
  const { rerender } = render(
    <Button label={childString} />
  );
  let buttonNode = screen.getByTestId('button');

  expect(buttonNode).not.toHaveClass('icon-left');

  rerender(<Button icon="zap" position="left" label={childString} />);
  buttonNode = screen.getByTestId('button');
  expect(buttonNode).toHaveClass('icon-left');
});

test('Button onClick event is fired', () => {
  const handleClick = jest.fn();
  render(
    <Button onClick={handleClick} label={childString} />
  );
  const buttonNode = screen.getByTestId('button');
  fireEvent.click(buttonNode);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
