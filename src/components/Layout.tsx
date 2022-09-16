import React, { ReactNode } from 'react';
import Header from './Header';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = (props: ILayoutProps) => {
  const { children } = props;
  return (
    <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
