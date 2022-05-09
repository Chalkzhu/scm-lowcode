import React from 'react';
import Header from './header';
import Main from './main';
// import Footer from './footer';
import './styles.less';

const Layout = ({children}) => {
  return (
    <div className="layout_container">
      <Header />

      <Main>
        {children}
      </Main>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
