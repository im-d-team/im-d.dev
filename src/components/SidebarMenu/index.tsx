import * as React from 'react';
import { connect } from 'react-redux';
import { Menu, Sidebar } from 'semantic-ui-react';

import { StoreState } from '@/store';
import { MenuProps } from '@/components/Menu';
import TagsCard from '@/components/TagsCard';

interface SidebarMenuProps extends MenuProps {
  visible?: boolean;
}

export const SidebarMenu = ({ visible }: SidebarMenuProps) => {
  return (
    <Sidebar
      as={Menu}
      animation="slide along"
      direction="right"
      width="thin"
      visible={visible}
      icon="labeled"
      vertical
    >
      {/* {items.map(item => {
        const active = isActive(item);

        return (
          <Menu.Item as={Link} to={item.path} active={active} key={item.path}>
            <Icon name={item.icon as SemanticICONS} />
            {item.name}
          </Menu.Item>
        );
      })} */}
    </Sidebar>
  );
};

const mapStateToProps = (state: StoreState) => ({
  visible: state.isSidebarVisible,
});

export default connect<any, void, SidebarMenuProps>(mapStateToProps)(
  SidebarMenu,
);
