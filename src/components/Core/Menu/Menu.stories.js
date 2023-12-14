/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

import { Dropdown, Menu, MenuItem } from "./Menu";
import { Button } from "../Button";
import { Icon } from "../Icon";

export default {
  title: "Core/Menu",
  component: Menu,
};

const Template = (args) => {
  const [open, setOpen] = useState(args.open);
  return (
    <>
      <Menu>
        <Button
          icon="chevron-down"
          label="label"
          onClick={() => setOpen(!open)}
          position="right"
        >
          Click to show
        </Button>
        <Dropdown open={open} setOpen={setOpen} position={args.position}>
          <MenuItem>
            <Icon icon="file-text" style={{ marginRight: "16px" }} />
            Detalhes
          </MenuItem>
          <MenuItem>
            <Icon icon="activity" style={{ marginRight: "16px" }} />
            Analisar
          </MenuItem>
          <MenuItem>
            <Icon icon="meh" style={{ marginRight: "16px" }} />
            Ignorar
          </MenuItem>
          <MenuItem>
            <Icon icon="list" style={{ marginRight: "16px" }} />
            Adicionar à Lista
            <Icon
              size={16}
              icon="chevron-right"
              style={{ marginLeft: "16px" }}
            />
            <Dropdown position="right">
              <MenuItem>
                <Icon icon="zap" style={{ marginRight: "16px" }} />
                Lista A
              </MenuItem>
              <MenuItem>
                <Icon icon="zap" style={{ marginRight: "16px" }} />
                Lista B
              </MenuItem>
            </Dropdown>
          </MenuItem>
        </Dropdown>
      </Menu>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  open: false,
  position: "bottom",
};
