/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { Radio } from './Radio';
import { RadioOption } from './RadioOption';
import { Heading } from '../Heading';
import { Text } from '../Text';

export default {
  title: 'Core/Radio',
  component: Radio,
};

const Template = (args) => {
  const handleChange = (x) => {
    // eslint-disable-next-line no-console
    console.log(x);
  };
  return (
    <Radio
      label={args.label}
      disabled={args.disabled}
      selected={args.selected}
      vertical={args.vertical}
      handleChange={handleChange}
    >
      <RadioOption value="1">Option 1</RadioOption>
      <RadioOption value="2">Option 2</RadioOption>
      <RadioOption value="3">Option 3</RadioOption>
    </Radio>
  );
};

const TemplateNoLabel = (args) => {
  const handleChange = (x) => {
    // eslint-disable-next-line no-console
    console.log(x);
  };
  return (
    <Radio
      label={args.label}
      disabled={args.disabled}
      selected={args.selected}
      vertical={args.vertical}
      handleChange={handleChange}
    >
      <RadioOption value="1" />
      <RadioOption value="2" />
      <RadioOption value="3" />
    </Radio>
  );
};

const TemplateNested = (args) => {
  const handleChange = (x) => {
    // eslint-disable-next-line no-console
    console.log(x);
  };
  return (
    <Radio
      label={args.label}
      disabled={args.disabled}
      selected={args.selected}
      vertical={args.vertical}
      handleChange={handleChange}
    >
      <div className="card ignorar">
        <RadioOption value="ignorar">
          Ignorar
        </RadioOption>
        <Text size="xs">Enviar produto para os ”Ignorados”.</Text>
      </div>
      <div className="card manual">
        <RadioOption value="manual">
          Sugerir Preço
        </RadioOption>
      </div>
      <div className="card sugestao">
        <RadioOption value="sugestao">
          Preço Sugerido
        </RadioOption>
        <Heading
          className="no-m"
          size="lg"
        >
          oi
        </Heading>
      </div>
    </Radio>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  label: 'label',
  disabled: false,
  selected: '2',
  vertical: false
};

export const NoLabel = TemplateNoLabel.bind({});
NoLabel.args = {
  label: 'label',
  disabled: false,
  selected: '2',
  vertical: false
};

export const Nested = TemplateNested.bind({});
Nested.args = {
  label: 'label',
  disabled: false,
  selected: 'manual',
  vertical: false
};
