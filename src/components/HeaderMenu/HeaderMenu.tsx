import * as React from 'react';

import { connect } from 'react-redux';

import { Dispatch } from 'redux';

import { toggleSidebar } from '../../store';

import { Container, Image, Menu, Icon } from 'semantic-ui-react';

import { MenuProps } from '../Menu';

interface HeaderMenuProps extends MenuProps {
  dispatch?: Dispatch<any>;

  inverted?: boolean;
}

export const HeaderMenu = ({ pathname, Link, inverted, dispatch }: HeaderMenuProps) => (
  <Container>
    <Menu size="large" secondary inverted={inverted}>
      <Menu.Item className="">
        <Link to={'/'}>
          <Image src="https://avatars1.githubusercontent.com/u/45911353?s=200&v=4" size="mini" circular />
        </Link>
      </Menu.Item>

      <Menu.Item
        as="i"
        className="tablet mobile only right"
        icon="sidebar"
        color="black"
        onClick={() => dispatch && dispatch(toggleSidebar())}
      />
    </Menu>
  </Container>
);

export default connect()(HeaderMenu);
