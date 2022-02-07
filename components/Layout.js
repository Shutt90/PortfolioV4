import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';



function Layout({children}) {

  const router = useRouter();
  const title = router.query.title

  return(
      <>
      <Head>
        <title>Portfolio {title ? `- ${title}` : `- Liam Pugh`}</title>
        <meta name="title" content="Web Developer" />
        <meta name="description" content="Web Developer based in Manchester working with JavaScript and PHP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
            {children}
      <Footer />
    </>
  )
}

export default Layout;
