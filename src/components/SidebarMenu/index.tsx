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
      direction="left"
      width="wide"
      visible={visible}
      icon="labeled"
      vertical
    >
      {/* <Responsive minWidth={Responsive.onlyComputer.minWidth}>
            <div style={{ maxWidth: 250 }}>
              <TagsCard Link={Link} tags={tags} tag={props.pageContext.tag} />
            </div>
          </Responsive> */}
    </Sidebar>
  );
};

const mapStateToProps = (state: StoreState) => ({
  visible: state.isSidebarVisible,
});

export default connect<any, void, SidebarMenuProps>(mapStateToProps)(
  SidebarMenu,
);
