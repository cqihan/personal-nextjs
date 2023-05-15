import { useEffect } from "react";
import React from "react";
import '@/styles/globals.css';
import "@fontsource/varela-round";
import "@fontsource/montserrat";
import "@fontsource/libre-bodoni";
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
// import { ThemeProvider } from 'next-themes';
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import dynamic from 'next/dynamic';

import '@/styles/animations.scss';
import '@/styles/Navbar.scss';
import '@/styles/footer.scss';
import '@/styles/index.scss';
import '@/styles/portfolio.scss';
import '@/styles/aboutme.scss';
import '@/styles/darkthemesettings.scss';

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

  const lightTheme = createTheme({
    type: 'light',
    // theme: {
    //   colors: `255,255,255`, // optional
    // }
  });

  const darkTheme = createTheme({
    type: 'dark',
    // theme: {
    //   colors: `0,0,0`, // optional
    // }
  });

  return (
    <>
    {pageProps.statusCode === 404 ? (
      <Component {...pageProps} />
    ) : (
      <>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        // value={{
        //   light: lightTheme.className,
        //   dark: darkTheme.className
        // }}
        value={{
          light: createTheme({ type: 'light' }).className,
          dark: createTheme({ type: 'dark' }).className
        }}
      >
        <Navbar />
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
        <Footer />

        {/* <AnimatedCursor
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
        /> */}
      </NextThemesProvider>
      </>
    )}
    </>
  )
}
