import {Link} from 'gatsby';

import * as React from 'react';

import './style.scss';

const LOGO_URL = 'https://avatars1.githubusercontent.com/u/45911353?s=200&v=4';

export const Header = () => (
  <header className={'IMD-header'}>
    <section className={'IMD-header__contents'}>
      <Link to={'/'}>
        <section className={'IMD-header__left-contents'}>
          <img
            className={'IMD-header__logo-image'}
            src={LOGO_URL}
            alt="IMD Logo"
          />
          <span className={'IMD-header__text'}>{'기술 블로그'}</span>
        </section>
      </Link>
      <section className={'IMD-header__right-contents'}>
        <Link to={'https://www.facebook.com/ImDev-361775957711957'}>
          <span className={'IMD-header__menu-text'}>{'FaceBook'}</span>
        </Link>
        <Link to={'https://github.com/im-d-team/Dev-Docs'}>
          <span className={'IMD-header__menu-text'}>{'GitHub'}</span>
        </Link>
      </section>
    </section>
  </header>
);

export default Header;
