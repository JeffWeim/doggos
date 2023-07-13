import React from 'react';

import Footer from '@@/components/_molecules/Footer';
import Header from '@@/components/_molecules/Header';
import theme from '@@/theme';
import { ThemeProvider } from 'styled-components';

import { Main } from './styles';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = (props: ILayoutProps) => {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Main>{children}</Main>

      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
