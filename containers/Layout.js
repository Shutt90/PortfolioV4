import Navbar from '/components/Navbar';
import Footer from '/components/Footer';
import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';


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
        <>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-48S1TTWQQT" />
        <Script id="gtag"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '[G-48S1TTWQQT]', { page_path: window.location.pathname });
            `,
          }} />
        </>
      </Head>
      <Navbar/>
            {children}
      <Footer />
    </>
  )
}

export default Layout;
