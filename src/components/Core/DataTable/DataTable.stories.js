/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { DataTable } from './DataTable';
import { users } from './dummy_data';

export default {
  title: 'Core/DataTable',
  component: DataTable,
  parameters: {
    layout: 'fullscreen'
  }
};

const dataConfig = [
  { label: 'ID', value: 'id' },
  { label: 'Name', value: 'name' },
  { label: 'Username', value: 'username' },
  { label: 'Email', value: 'email' },
  { label: 'Phone', value: 'phone' },
  { label: 'Website', value: 'website' }
];
const Template = (args) => (<DataTable {...args} />);

export const Basic = Template.bind({});
Basic.args = {
  data: users.concat(users).concat(users).concat(users).concat(users),
  dataConfig,
  sort: [{ id: 'id', desc: false }]
};
