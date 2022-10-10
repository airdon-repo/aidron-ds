/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { format } from 'date-fns';
import { DatePicker } from './DatePicker';

export default {
  title: 'Core/DatePicker',
  component: DatePicker,
};

const Template = (args) => <DatePicker {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  // eslint-disable-next-line no-console
  onDateChanged: (x) => console.log(x)
};

export const Selected = Template.bind({});
Selected.args = {
  selected: new Date(),
  value: format(new Date(), 'dd/MM/yyyy'),
  // eslint-disable-next-line no-console
  onDateChanged: (x) => console.log(x)
};

export const Range = Template.bind({});
Range.args = {
  range: true,
  value: [format(new Date(2021, 3, 22), 'dd/MM/yyyy'), format(new Date(2021, 3, 28), 'dd/MM/yyyy')].join(' - '),
  selected: [new Date(2021, 3, 22), new Date(2021, 3, 28)],
  // eslint-disable-next-line no-console
  onDateChanged: (x) => console.log(x)
};
