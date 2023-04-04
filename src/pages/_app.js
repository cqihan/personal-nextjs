import '@/styles/globals.css';
import "@fontsource/varela-round";
import Navbar from '@/components/Navbar';
import { NextUIProvider } from '@nextui-org/react';

import '@/styles/animations.scss';
import '@/styles/Navbar.scss';
import '@/styles/index.scss';

export default function App({ Component, pageProps }) {
  console.log('pageProps',pageProps)
  return (
    <>
    {pageProps.statusCode === 404 ? (
      <Component {...pageProps} />
    ) : (
      <>
        <Navbar />
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </>
    )}
    </>
  )
}
