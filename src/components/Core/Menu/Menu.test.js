import React from 'react';
import { render, screen } from '@testing-library/react';
import { Dropdown, Menu, MenuItem } from './Menu';

test('Menu is rendered properly', () => {
  render(
    <Menu>
      <Dropdown open position="left">
        <MenuItem>
          Detalhes
        </MenuItem>
        <MenuItem>
          Analisar
        </MenuItem>
        <MenuItem>
          Ignorar
        </MenuItem>
        <MenuItem>
          Adicionar à Lista
        </MenuItem>
      </Dropdown>
    </Menu>
  );
  const menuNode = screen.getByTestId('menu');
  const dropdownNode = screen.getByTestId('dropdown');
  const menuItems = screen.getAllByTestId('menu-item');

  expect(menuNode).toBeInTheDocument();
  expect(dropdownNode).toBeInTheDocument();
  expect(menuNode).toHaveClass('menu');
  expect(dropdownNode).toHaveClass('dropdown');
  expect(menuItems).toHaveLength(4);
});
