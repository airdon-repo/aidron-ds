import React from 'react';
import { render, screen } from '@testing-library/react';
import { Switch } from './Switch';

test('Switch is rendered properly', () => {
  render(
    <Switch
      handleChange={() => {}}
    >
      Label
    </Switch>
  );
  const switchNode = screen.getByTestId('switch');

  expect(switchNode).toBeInTheDocument();
  expect(switchNode).toHaveClass('ragnarok');
  expect(switchNode).toHaveClass('switch');
});

test('Switch is changing values correctly', () => {
  render(
    <Switch
      handleChange={() => {}}
      value
    >
      Label
    </Switch>
  );
  const switchNode = screen.getByTestId('switch');
  const switchInput = screen.getByTestId('switch-input');
  expect(switchNode).toBeInTheDocument();
  expect(switchInput).toBeInTheDocument();
  expect(switchInput).toHaveAttribute('checked');
  expect(switchInput).toHaveAttribute('value', 'true');
});

