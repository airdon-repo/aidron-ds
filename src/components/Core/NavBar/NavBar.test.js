/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { NavBar } from './NavBar';
import { NavBrand } from './NavBrand';
import { Icon } from '../Icon';
import Logo from './datalab-logo-light';

test('Tabs are rendered properly', () => {
  render(
    <NavBar home>
      <NavBrand
        home
        backLabel="voltar"
        brandName="Datalab"
      >
        <Logo />
      </NavBrand>
      <div className="content">
        <a href="#" className="color-primary-medium" aria-label="Share">
          <Icon
            icon="share-2"
          />
          <span className="visually-hidden">Share</span>
        </a>
        <a href="#" className="color-primary-medium" aria-label="Help">
          <Icon
            icon="help-circle"
          />
          <span className="visually-hidden">Help</span>
        </a>
        <a href="#" className="color-primary-medium" aria-label="Alerts">
          <Icon
            icon="bell"
          />
          <span className="visually-hidden">Alerts</span>
        </a>
      </div>
    </NavBar>
  );
  const navNode = screen.getByTestId('navbar');
  expect(navNode).toHaveClass('ragnarok');
  expect(navNode).toHaveClass('navbar');
  expect(navNode).toBeInTheDocument();
});
