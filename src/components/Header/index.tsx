import { Link } from 'gatsby';

import * as React from 'react';
import { connect } from 'react-redux';

import './style.scss';

const LOGO_URL = 'https://avatars1.githubusercontent.com/u/45911353?s=200&v=4';

export const Header = () => (
  <header className={'IMD-header'}>
    <section className={'IMD-header__contents'}>
      <section className={'IMD-header__left-contents'}>
        <Link to={'/'}>
          <img
            className={'IMD-header__logo-image'}
            src={LOGO_URL}
            alt="IMD Logo"
          />
        </Link>
        <span className={'IMD-header__text'}>{'Tech-D'}</span>
      </section>
      <section className={'IMD-header__right-contents'}>
        <span className={'IMD-header__menu-text'}>{'FaceBook'}</span>
        <span className={'IMD-header__menu-text'}>{'GitHub'}</span>
      </section>
    </section>
  </header>
);

export default connect()(Header);
