/* eslint-disable max-len */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { Accordion, AccordionItem, AccordionTrigger } from './Accordion';

export default {
  title: 'Core/Accordion',
  component: Accordion,
};

const Template = (args) => (
  <Accordion {...args}>
    <AccordionItem value="1">
      <AccordionTrigger>
        Click Here 1
      </AccordionTrigger>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed pellentesque ante. Aenean fringilla ipsum eget congue iaculis. Mauris quis consectetur nisi. Donec venenatis a orci sit amet suscipit. Aliquam consequat, dui blandit auctor elementum, libero dolor mollis enim, a vehicula quam metus id tellus. In ac scelerisque lacus. Nulla scelerisque metus odio, at rutrum dui tincidunt a. Sed id lacus maximus, maximus orci a, iaculis nisl. Mauris mattis augue id consectetur condimentum. Maecenas finibus eros ut malesuada dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis consectetur, eros ut placerat mollis, ligula elit congue tellus, nec feugiat felis urna ut est. Nulla euismod pretium commodo. Etiam facilisis sapien sem, in porttitor erat suscipit sed. Cras a elit vestibulum, finibus mauris non, rhoncus tellus.
      </div>
    </AccordionItem>
    <AccordionItem value="2">
      <AccordionTrigger>
        Click Here 2
      </AccordionTrigger>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed pellentesque ante. Aenean fringilla ipsum eget congue iaculis. Mauris quis consectetur nisi. Donec venenatis a orci sit amet suscipit. Aliquam consequat, dui blandit auctor elementum, libero dolor mollis enim, a vehicula quam metus id tellus. In ac scelerisque lacus. Nulla scelerisque metus odio, at rutrum dui tincidunt a. Sed id lacus maximus, maximus orci a, iaculis nisl. Mauris mattis augue id consectetur condimentum. Maecenas finibus eros ut malesuada dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis consectetur, eros ut placerat mollis, ligula elit congue tellus, nec feugiat felis urna ut est. Nulla euismod pretium commodo. Etiam facilisis sapien sem, in porttitor erat suscipit sed. Cras a elit vestibulum, finibus mauris non, rhoncus tellus.
      </div>
    </AccordionItem>
    <AccordionItem value="3">
      <AccordionTrigger>
        Click Here 3
      </AccordionTrigger>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed pellentesque ante. Aenean fringilla ipsum eget congue iaculis. Mauris quis consectetur nisi. Donec venenatis a orci sit amet suscipit. Aliquam consequat, dui blandit auctor elementum, libero dolor mollis enim, a vehicula quam metus id tellus. In ac scelerisque lacus. Nulla scelerisque metus odio, at rutrum dui tincidunt a. Sed id lacus maximus, maximus orci a, iaculis nisl. Mauris mattis augue id consectetur condimentum. Maecenas finibus eros ut malesuada dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis consectetur, eros ut placerat mollis, ligula elit congue tellus, nec feugiat felis urna ut est. Nulla euismod pretium commodo. Etiam facilisis sapien sem, in porttitor erat suscipit sed. Cras a elit vestibulum, finibus mauris non, rhoncus tellus.
      </div>
    </AccordionItem>
  </Accordion>
);

export const Basic = Template.bind({});
Basic.args = {
  selected: '2'
};
