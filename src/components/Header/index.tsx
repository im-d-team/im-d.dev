import { Link } from 'gatsby';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AiOutlineMenu } from 'react-icons/ai';

import { toggleSidebar } from '@/store';
import { MenuProps } from '@/components/Menu';

import './style.css';

export interface HeaderProps extends MenuProps {
  dispatch?: Dispatch<any>;
}

export const Header = ({ dispatch }: HeaderProps) => (
  <header className="main-header">
    <AiOutlineMenu
      className={'main-header__sidebar-image'}
      onClick={() => dispatch && dispatch(toggleSidebar())}
    />

    <Link to={'/'}>
      <img
        className={'main-header__logo-image'}
        src="https://avatars1.githubusercontent.com/u/45911353?s=200&v=4"
        alt="imd logo"
      />
    </Link>
  </header>
);

export default connect()(Header);
