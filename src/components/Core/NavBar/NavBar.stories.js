/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { NavBar } from './NavBar';
import { NavBrand } from './NavBrand';
import { Icon } from '../Icon';
import { Button } from '../Button';
import Logo from './datalab-logo-light';

export default {
  title: 'Core/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => (
  <NavBar home={args.home}>
    <NavBrand
      home={args.home}
      backLabel={args.backLabel}
      brandName={args.brandName}
    >
      <Logo />
    </NavBrand>
    <div className="content">
      <Button
        onClick={() => {}}
      >
        Item
      </Button>
      <Button
        onClick={() => {}}
      >
        Item
      </Button>
      <Button
        onClick={() => {}}
      >
        Item
      </Button>
      <Button
        onClick={() => {}}
      >
        Item
      </Button>
      <Button
        onClick={() => {}}
      >
        Item
      </Button>
    </div>
    <div className="actions">
      <a href="#" className="color-neutral-white" ariaLabel="Share">
        <Icon
          icon="share-2"
        />
        <span className="visually-hidden">Share</span>
      </a>
      <a href="#" className="color-neutral-white" ariaLabel="Help">
        <Icon
          icon="help-circle"
        />
        <span className="visually-hidden">Help</span>
      </a>
      <a href="#" className="color-neutral-white" ariaLabel="Alerts">
        <Icon
          icon="bell"
        />
        <span className="visually-hidden">Alerts</span>
      </a>
    </div>
  </NavBar>
);

export const Basic = Template.bind({});
Basic.args = {
  backLabel: 'voltar',
  brandName: 'Datalab',
  home: true
};
