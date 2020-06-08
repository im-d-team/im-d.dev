import * as React from 'react';
import { connect } from 'react-redux';
import { Sidebar } from 'semantic-ui-react';

import { StoreState } from '@/store';

interface SidebarMenuProps {
  visible: boolean;
}

export const SidebarMenu = ({ visible = false }: SidebarMenuProps) => {
  return (
    <Sidebar
      as="div"
      animation="slide along"
      direction="right"
      width="thin"
      visible={visible}
    ></Sidebar>
  );
};

const mapStateToProps = (state: StoreState) => ({
  visible: state.isSidebarVisible,
});

export default connect<any, void, SidebarMenuProps>(mapStateToProps)(
  SidebarMenu,
);
