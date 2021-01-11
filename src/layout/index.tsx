import * as React from 'react';

import Header from '@/components/Header';

import '@/styles/index.scss';

export interface LayoutProps {
  location: {
    pathname: string;
  };
  children: any;
}

export const withLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) =>
  class WithLayout extends React.Component<P & LayoutProps> {
    render() {
      return (
        <>
          <Header/>
          <main>
            {this.props.children}
          </main>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
