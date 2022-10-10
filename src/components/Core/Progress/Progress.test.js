import React from 'react';
import { render, screen } from '@testing-library/react';
import { Progress } from './Progress';

test('Progress is rendered properly', () => {
  render(
    <Progress width="128px" />
  );
  const progressNode = screen.getByTestId('progress');
  const bars = progressNode.getElementsByClassName('progress-bar');

  expect(progressNode).toBeInTheDocument();
  expect(progressNode).toHaveClass('ragnarok');
  expect(progressNode).toHaveClass('progress');
  expect(bars).toHaveLength(2);
});

test('Progress is rendered as circular', () => {
  render(
    <Progress circular />
  );
  const progressNode = screen.getByTestId('progress');
  const circle = progressNode.getElementsByTagName('circle');

  expect(progressNode).toBeInTheDocument();
  expect(progressNode).toHaveClass('circular');
  expect(circle).toHaveLength(1);
});

test('Progress is rendered as determinate', () => {
  render(
    <Progress width="128px" determinate value={60} />
  );
  const progressNode = screen.getByTestId('progress');

  expect(progressNode).toBeInTheDocument();
  expect(progressNode).toHaveClass('ragnarok');
  expect(progressNode).toHaveClass('progress');
  expect(progressNode).toHaveAttribute('value', '60');
});

test('Progress is rendered as circular determinate', () => {
  render(
    <Progress circular determinate value={60} />
  );
  const progressNode = screen.getByTestId('progress');
  const circle = progressNode.getElementsByTagName('circle');

  expect(progressNode).toBeInTheDocument();
  expect(progressNode).toHaveClass('circular');
  expect(progressNode).toHaveClass('controlled');
  expect(circle).toHaveLength(1);
});

