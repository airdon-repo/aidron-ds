import React from 'react';
import { render, screen } from '@testing-library/react';
import { format } from 'date-fns';
import { DatePicker } from './DatePicker';

test('Datepicker is rendered properly', () => {
  render(
    <DatePicker />
  );
  const dateNode = screen.getByTestId('datepicker');

  expect(dateNode).toBeInTheDocument();
  expect(dateNode).toHaveClass('ragnarok');
  expect(dateNode).toHaveClass('calendar');
});

test('Datepicker is rendered with selected value', () => {
  const today = new Date();
  render(
    <DatePicker selected={today} />
  );
  const textNode = screen.getByTestId('textfield-input');

  expect(textNode).toHaveValue(format(today, 'dd/MM/yyyy'));
});

test('Datepicker is rendered with selected range', () => {
  const value = [new Date(2021, 3, 22), new Date(2021, 3, 28)];
  render(
    <DatePicker range selected={value} />
  );
  const textNode = screen.getByTestId('textfield-input');

  expect(textNode).toHaveValue(value.map((date) => format(date, 'dd/MM/yyyy')).join(' - '));
});
