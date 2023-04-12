import { useEffect } from "react";
import '@/styles/globals.css';
import "@fontsource/varela-round";
import "@fontsource/montserrat";
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import { NextUIProvider } from '@nextui-org/react';
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from 'next-themes';

import '@/styles/animations.scss';
import '@/styles/Navbar.scss';
import '@/styles/footer.scss';
import '@/styles/index.scss';
import '@/styles/portfolio.scss';

export default function App({ Component, pageProps }) {
  // console.log('pageProps',pageProps);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
    {pageProps.statusCode === 404 ? (
      <Component {...pageProps} />
    ) : (
      <>
      <ThemeProvider>
        <Navbar />
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
        <Footer />
      </ThemeProvider>
      </>
    )}
    </>
  )
}
