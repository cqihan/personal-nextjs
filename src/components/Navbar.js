import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/router";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
// import { useTheme as useNextTheme } from 'next-themes';
import { Switch, Button, createTheme, NextUIProvider, useTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';


import dynamic from 'next/dynamic';
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

export default function Navbar() {
  const router = useRouter();

  // const { theme, setTheme } = useNextTheme();
  const { theme, setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  useEffect(() => {
    console.log(`Current theme: ${type}`);
  }, [type]);

  return (
    <>
      {/* <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <nav className={`wrap-navbar `}>

        <div className="navbar-container">
          <div className="logo-container">
            <Link href='/' className="navbar-logo" target='_parent'>
              <Image
                src="/assets/images/cqihan-03.png"
                alt="Vercel Logo"
                width={150}
                height={70}
                priority
              />
            </Link>
          </div>

          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link href='/' className={`${router.pathname == "/" ? "active" : ""} nav-links`} target='_top'>
                  home 
              </Link>
            </li>

            <li className='nav-item'>
              <Link href='/about_me' className={`${router.pathname == "/about_me" ? "active" : ""} nav-links`} target='_top'>
                  about me
              </Link>
            </li>

            <li className='nav-item'>
              <Link href='/portfolio' className={`${router.pathname == "/portfolio" ? "active" : ""} nav-links`} target='_top'>
                  portfolio
              </Link>
            </li>
          </ul>

          <Switch 
            checked={theme === 'light' ? false : true}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            iconOn={<div className={`theme-container`}>
              <BsFillMoonFill />
            </div>}
            iconOff={<div className={`theme-container`}>
              <BsFillSunFill />
            </div>}
          />
        </div>
      </nav>

      {/* <nav className={`wrap-navbar-mobile `}>

        <div className="navbar-container">
          <div className="logo-container">
            <Link href='/' className="navbar-logo" target='_parent'>
              <Image
                src="/assets/images/cqihan-03.png"
                alt="Vercel Logo"
                width={150}
                height={70}
                priority
              />
            </Link>
          </div>

          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link href='/' className={`${router.pathname == "/" ? "active" : ""} nav-links`} target='_top'>
                  home
              </Link>
            </li>

            <li className='nav-item'>
              <Link href='/about_me' className={`${router.pathname == "/about_me" ? "active" : ""} nav-links`} target='_top'>
                  about me
              </Link>
            </li>

            <li className='nav-item'>
              <Link href='/portfolio' className={`${router.pathname == "/portfolio" ? "active" : ""} nav-links`} target='_top'>
                  portfolio
              </Link>
            </li>
          </ul>
        </div>
      </nav> */}
    </>
  )
}
