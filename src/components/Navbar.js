import Head from 'next/head'
import Image from 'next/image'
// import { Varela_Round } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from "next/router";

// const varela_font = Varela_Round({ subsets: ['latin'] })

export default function Navbar() {
  const router = useRouter();

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
            <a href='/' className="navbar-logo" target='_parent'>
              <Image
                src="/assets/images/cqihan-03.png"
                alt="Vercel Logo"
                width={150}
                height={70}
                priority
              />
            </a>
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
        </div> {/*  close navbar-container */}
      </nav>
    </>
  )
}
