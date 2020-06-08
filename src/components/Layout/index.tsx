import * as React from 'react';
import { Provider } from 'react-redux';
import { Segment, Sidebar } from 'semantic-ui-react';

import Header from '@/components/Header';
import SidebarMenu from '@/components/SidebarMenu';
import { store } from '@/store';

import 'prismjs/themes/prism-okaidia.css';

import '@/css/styles.css';
import '@/css/responsive.css';
import '@/css/semantic.min.css';
import '@/css/reset.css';

export interface LayoutProps {
  location: {
    pathname: string;
  };
  children: any;
}

const Layout = (props: LayoutProps) => {
  const { pathname } = props.location;
  const isHome = pathname === '/';

  return (
    <Provider store={store}>
      <Sidebar.Pushable as={Segment}>
        <SidebarMenu pathname={pathname} visible={true} />
        <Sidebar.Pusher style={{ minHeight: '100vh' }}>
          {/* Header */}
          {isHome ? null : <Header pathname={pathname} />}

          {/* Render children pages */}
          <div style={{ paddingBottom: 60 }}>{props.children}</div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Provider>
  );
};

export default Layout;

export const withLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) =>
  class WithLayout extends React.Component<P & LayoutProps> {
    render() {
      return (
        <Layout location={this.props.location}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  };
