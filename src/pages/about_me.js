import Head from 'next/head';
// import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { TbCodeCircle2, TbPalette, TbMapPinFilled, TbCalendarTime, TbBrandVscode, TbBrandWordpress } from "react-icons/tb";
import { HiOfficeBuilding } from "react-icons/hi";
import { Image } from "@nextui-org/react";
import { SiSpotify } from "react-icons/si";

const inter = Inter({ subsets: ['latin'] })

export default function AboutMe() {

  const divs = [];
  for (let i = 0; i < 300; i++) {
    divs.push(<div className="firefly" key={i}></div>);
  }

  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`wrap-abtMe `} >
        {/* <div className={`gradient`}>
        </div> */}
        {/* {divs} */}

        <div className="abtMe-header" >
          <h1 data-aos="fade-down">About Me</h1>
          <p data-aos="fade-down">Welcome to my personal website! Here, you&apos;ll find a wealth of information about my life and experiences. Let me take you on a journey through my past, present, and future.</p>
        </div>

        <div className="abtMe-content-0" >
          <h2>Working Experience</h2>

          <div className="abtMe-cont-0-item-1" data-aos="fade-up">
            <div className="abtMe-cont-0-item-1-01">
              <Image
                src={`/assets/images/base2-02.png`} alt="working-experience"
                className="abtMe-cont-0-item-1-img" width={110} height={60}
              />
            </div>

            <div className="abtMe-cont-0-item-1-02">
              <div className="abtMe-cont-0-item-1-02-01">
                <HiOfficeBuilding className="abtMe-cont-0-item-1-02-01-icon1" />
                <h3>Base Two</h3>
                <p>Kuala Lumpur, Malaysia</p>
              </div>
              <div className="abtMe-cont-0-item-1-02-01">
                <TbCalendarTime className="abtMe-cont-0-item-1-02-01-icon2" />
                <p>January 2022 - Present</p> <br/>
                <TbBrandVscode className="abtMe-cont-0-item-1-02-01-icon2" />
                <p>Front-end Web Developer <br/>(ReactJS/NextJS)</p>
              </div>

              <div className="abtMe-cont-0-item-1-02-01">
                <p>Developed responsive landing and e-commerce websites using ReactJS, NextJS, HTML5, CSS3, JavaScript, UI Frameworks, Bootstrap, and NPM libraries.</p>
              </div>
              <div className="abtMe-cont-0-item-1-02-01">
                <p>Collaborated with back-end developers to develop NFT website with e-commerce using ReactJS and Web3.js.</p>
                <p>Made Electronic Direct Mail (EDM) templates using HTML5/CSS3.</p>
              </div>
              <div className="abtMe-cont-0-item-1-02-01">
                <p>Redesigned existing websites with animations using SASS, CSS3, JavaScript and CSS Animation Libraries.</p>
              </div>
              <div className="abtMe-cont-0-item-1-02-01">
                <p>SEO implementations (Google Search Console & Google Analytics) and developed websites based on SEO requirements.</p>
              </div>
              <div className="abtMe-cont-0-item-1-02-01">
                <p>RestAPI integration for landing and e-commerce websites.</p>
              </div>
              <div className="abtMe-cont-0-item-1-02-01">
                <p>Managed version control for projects with GitHub and Bitbucket.</p>
              </div>
              
            </div>
          </div>

          <div className="abtMe-cont-0-item-1" data-aos="fade-up">
            <div className="abtMe-cont-0-item-1-01">
              <Image
                src={`/assets/images/lu7-01.png`} alt="working-experience"
                className="abtMe-cont-0-item-1-img" width={190} height={60}
              />
            </div>

            <div className="abtMe-cont-0-item-1-02">
              <div className="abtMe-cont-0-item-1-02-01">
                <HiOfficeBuilding className="abtMe-cont-0-item-1-02-01-icon1" />
                <h3>Light Up 7</h3>
                <p>Kuala Lumpur, Malaysia</p>
              </div>
              <div className="abtMe-cont-0-item-1-02-01">
                <TbCalendarTime className="abtMe-cont-0-item-1-02-01-icon2" />
                <p>July 2021 - Dec 2021</p> <br/>
                <TbBrandWordpress className="abtMe-cont-0-item-1-02-01-icon2" />
                <p>Web Development Intern <br/>(Divi by ElegantThemes)</p>
              </div>

              <div className="abtMe-cont-0-item-1-02-01">
                <p>Develop, manage and upgrade websites with WordPress and HTML5/CSS3 and JavaScript.</p>
              </div>
              <div className="abtMe-cont-0-item-1-02-01">
                <p>Create templates with designs for new projects in WordPress Theme builder (Divi by ElegantThemes).</p>
              </div>
              <div className="abtMe-cont-0-item-1-02-01">
                <p>Made Electronic Direct Mail (EDM) templates using HTML5/CSS3.</p>
              </div>
              <div className="abtMe-cont-0-item-1-02-01">
                <p>Manages and fixed clients websites&apos; SEO requirements.</p>
              </div>
              <div className="abtMe-cont-0-item-1-02-01">
                <p>Wrote articles for knowledge base used for virtual events&apos; platform which may include instructions and FAQs.</p>
              </div>
              <div className="abtMe-cont-0-item-1-02-01">
                <p>Helpdesk support for events to serve customers facing difficulties using the virtual event platform.</p>
              </div>
            </div>
          </div>
          
        </div>

        <div className="abtMe-content-1" data-aos="fade-up">
          {/* <h2>Education Background</h2> */}
          {/* <Image src={`/assets/images/educationbg.png`} alt="personal-education" 
            width={400} height={400} 
            className="abtMe-content-1-img"
          /> */}
          <div className="abtMe-content-imgcontainer" style={{ width: '85%', height: 0, paddingBottom: '85%', position: 'relative' }}>
            <Image src={`/assets/images/educationbg.png`} alt="personal-education"
              className="abtMe-content-1-img"
              fill cover center
            />
          </div>

          <div>
            <div className="abtMe-cont-1-item-1" >
              <h2>My Education History</h2>
              <p>Graduated with BSc (HONS) in Information Technology with majoring in computer networks and web development. I am passionate about transforming UI/UX designs into functional websites and am currently focused on pursuing a career in front-end web development. I am highly motivated to learn and gain further experience in this field.</p>
            </div>

            <div className="abtMe-cont-1-item-2 ">
              <div className="abtMe-cont-1-item-2-1">
                <h3><TbCodeCircle2 className="abtMe-cont-1-item-2-1-icon" />BSc (HONS) in Information Technology</h3>
                <p className="abtMe-cont-1-item-2-1-p1"><TbMapPinFilled className="abtMe-cont-1-item-2-1-icon2" />Sunway University</p>
                <p className="abtMe-cont-1-item-2-1-p2">Majored in Computer Networks & Web Development</p>
                <p className="abtMe-cont-1-item-2-1-p2">Graduated with 3.25 CGPA</p>
              </div>

              <div className="abtMe-cont-1-item-2-1">
                <h3><TbPalette className="abtMe-cont-1-item-2-1-icon" />Foundation in Arts</h3>
                <p className="abtMe-cont-1-item-2-1-p1"><TbMapPinFilled className="abtMe-cont-1-item-2-1-icon2" />Taylor&apos;s University Lakeside Campus</p>
                <p className="abtMe-cont-1-item-2-1-p2">Took mostly Designing and Architecture subjects</p>
              </div>
            </div>
          </div>
        </div>

        <div className="abtMe-personality"  data-aos="fade-up">
          <h2>16 Personality Test</h2>

          <div className="abtMe-personality-container-1">
            <div className="abtMe-personality-traits">
              <div className="abtMe-personality-traits-1">
                <h3>Mind: 59% Introverted</h3>
                <p>Introverted individuals tend to prefer fewer, yet deep and meaningful, social interactions and often feel drawn to calmer environments.</p>
              </div>
              <div className="abtMe-personality-traits-2">
                <h3>Energy: 70% Intuitive</h3>
                <p>Intuitive individuals are very imaginative, open-minded, and curious. They value originality and focus on hidden meanings and distant possibilities.</p>
              </div>
            </div>

            <Image
              src="/assets/images/16-personality-01.png"
              objectFit="cover" 
              alt="Default Image"
              width={`100%`}
              height={`auto`} className={`abtMe-personality-img`}
            />

            <div className="abtMe-personality-traits">
              <div className="abtMe-personality-traits-3">
                <h3>Nature: 57% Feeling</h3>
                <p>Feeling individuals value emotional expression and sensitivity. They place a lot of importance on empathy, social harmony, and cooperation.</p>
              </div>
              <div className="abtMe-personality-traits-4">
                <h3>Tactics: 61% Judging</h3>
                <p>Judging individuals are decisive, thorough, and highly organized. They value clarity, predictability, and closure, preferring structure and planning to spontaneity.</p>
              </div>
            </div>

          </div>
        </div>

        <div className="abtMe-spotify"  data-aos="fade-up">
          <h2>My Spotify Mixtapes</h2>

          <div className="abtMe-spotify-content-1">
            <div className="abtMe-spotify-item-1 mixtape1">
              <Link href="https://open.spotify.com/playlist/47V85YlHyaXNTkuuhnhxwQ?si=6c846f9a4a314fd4" target="_blank" className="abtMe-spotify-item-1-img">
                <Image src={`/assets/images/spotify/kaguya-01.jpg`} alt="aboutme" 
                  width={120} height={120} 
                  className=""
                /> 
              </Link>

              <div className="abtMe-spotify-item-1-info">
                <div>
                  <h3>わからない</h3>
                  <p>Fav Japanese Songs</p>
                </div>
                <Link href="https://open.spotify.com/playlist/47V85YlHyaXNTkuuhnhxwQ?si=6c846f9a4a314fd4" className="abtMe-spotify-item-1-info-icon" target="_blank" rel="noopener noreferrer">
                  <SiSpotify />
                </Link>
              </div>
            </div>

            <div className="abtMe-spotify-item-1 mixtape2">
              <Link href="https://open.spotify.com/playlist/7m8zxeHbNTFRNs6t7WPz2a?si=ba53f2ecb0e24830" target="_blank" className="abtMe-spotify-item-1-img">
                <Image src={`/assets/images/spotify/redvelvet-irene-8.PNG`} alt="aboutme" 
                  width={120} height={120} 
                  className=""
                /> 
              </Link>

              <div className="abtMe-spotify-item-1-info">
                <div>
                  <h3>kdrama OST</h3>
                  <p>Korean Drama Sound Tracks</p>
                </div>
                <Link href="https://open.spotify.com/playlist/7m8zxeHbNTFRNs6t7WPz2a?si=ba53f2ecb0e24830" className="abtMe-spotify-item-1-info-icon" target="_blank" rel="noopener noreferrer">
                  <SiSpotify />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </main>
    </>
  )
}
