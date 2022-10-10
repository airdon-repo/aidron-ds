/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';

export default {
  title: 'Core/Breadcrumb',
  component: Breadcrumb,
  subcomponents: { BreadcrumbItem }
};

const Template = (args) => (
  <Breadcrumb>
    {args.children}
  </Breadcrumb>
);

export const Basic = Template.bind({});
Basic.args = {
  children: (
    <>
      <BreadcrumbItem path="#">Initial</BreadcrumbItem>
      <BreadcrumbItem path="#">Level 1</BreadcrumbItem>
      <BreadcrumbItem path="#">Level 2</BreadcrumbItem>
      <BreadcrumbItem path="#">Level 3</BreadcrumbItem>
      <BreadcrumbItem path="#">Level 4</BreadcrumbItem>
      <BreadcrumbItem active>Level 5</BreadcrumbItem>
    </>
  )
};
