import { useEffect } from "react";
import React from "react";
import '@/styles/globals.css';
import "@fontsource/varela-round";
import "@fontsource/montserrat";
import "@fontsource/libre-bodoni";
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import { NextUIProvider } from '@nextui-org/react';
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from 'next-themes';
import dynamic from 'next/dynamic';

import '@/styles/animations.scss';
import '@/styles/Navbar.scss';
import '@/styles/footer.scss';
import '@/styles/index.scss';
import '@/styles/portfolio.scss';
import '@/styles/aboutme.scss';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

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

        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          outerStyle={{
            border: '3px solid var(--cursor-color)'
          }}
          innerStyle={{
            backgroundColor: 'var(--cursor-color)'
          }}
        />
      </ThemeProvider>
      </>
    )}
    </>
  )
}
