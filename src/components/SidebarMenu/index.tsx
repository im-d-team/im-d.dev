import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { StoreState, toggleSidebar } from '@/store';

import { MenuProps } from '@/components/Menu';
import TagsCard from '@/components/TagsCard';

import './style.css';
import {markdownRemarkGroupConnectionConnection} from "@/graphql-types";

interface SidebarMenuProps extends MenuProps {
  tags?: markdownRemarkGroupConnectionConnection[];
  visible?: boolean;
  dispatch?: Dispatch<any>;
}

// Sidebar
export const SidebarMenu = ({ tags, visible, dispatch }: SidebarMenuProps) => {
  console.log('tags', tags);

  // Prevent Scroll
  if (visible) {
    window.document.body.style.overflow = 'hidden';
  } else {
    window.document.body.style.overflow = 'auto';
  }

  return (
    <section
      className={`${visible ? 'sidebar-menu-container__overlay' : ''}`}
      onClick={() => dispatch && dispatch(toggleSidebar())}
    >
      <section
        className={`sidebar-menu-container ${visible ? 'visible' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <section className={'sidebar-menu-container__top'}>
          <AiOutlineArrowLeft
            className={'sidebar-menu__close-icon'}
            onClick={() => dispatch && dispatch(toggleSidebar())}
          />
        </section>
        <section className={'sidebar-menu-container__main'}>'태그들'</section>
      </section>
    </section>
  );
};

const mapStateToProps = (state: StoreState) => ({
  visible: state.isSidebarVisible,
});

export default connect<any, void, SidebarMenuProps>(mapStateToProps)(
  SidebarMenu,
);
