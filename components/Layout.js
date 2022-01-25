import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({children}) {
  return(
      <>
      <Navbar/>
      
        <Main>
            {children}
        </Main>
      
      <Footer />
    </>

  )
}

export default Layout;
