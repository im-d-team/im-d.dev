import * as React from 'react';
import { Provider } from 'react-redux';

import Header from '@/components/Header';

import { store } from '@/store';

import '@css/reset.css';
import '@css/prism-tomorrow.scss';
import '@css/styles.scss';

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
      <Header pathname={pathname} />
      <main>{props.children}</main>
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
