import * as React from 'react';
import { Provider } from 'react-redux';

import SidebarMenu from '@/components/SidebarMenu';
import Header from '@/components/Header';

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

  return (
    <Provider store={store}>
      <SidebarMenu pathname={pathname} />
      <section>
        {/* Header */}
        <Header pathname={pathname} />

        {/* Render children pages */}
        <main>{props.children}</main>
      </section>
    </Provider>
  );
};

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

export default Layout;
