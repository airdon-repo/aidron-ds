/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-console */
import React from 'react';

import { DataList, ProductCard } from './DataList';
import { products } from './dummy_data';

export default {
  title: 'Core/DataList',
  component: DataList,
  parameters: {
    layout: 'fullscreen'
  }
};

const dataConfig = [
  { label: 'ID', value: 'id' },
];
const Template = (args) => (<DataList {...args} />);

export const Basic = Template.bind({});
export const Controlled = Template.bind({});

Basic.args = {
  data: products,
  dataConfig,
  manualPagination: false,
  recordCount: products.length,
  itemComponent: ProductCard,
  onPageChange: ({ pageIndex, paginationCount }) => console.log(`${pageIndex},${paginationCount}`),
  sort: [{ id: 'id', desc: false }]
};

Controlled.args = {
  data: products,
  dataConfig,
  manualPagination: true,
  currentPage: 1,
  recordCount: products.length,
  itemComponent: ProductCard,
  onPageChange: ({ pageIndex, paginationCount }) => console.log(`${pageIndex},${paginationCount}`),
  sort: [{ id: 'id', desc: false }]
};
