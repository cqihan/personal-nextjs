import Head from 'next/head';
import Image from 'next/image';
// import { PersonalCard } from '@/components/CardTemplate_1';
import { Card, Col, Row, Grid, Text, Popover, Button } from "@nextui-org/react";
// import { Projects1 } from '@/components/Portfolio_Card1';
import { ProjectsTemplate2 } from '@/components/Portfolio_Card2';
import { AiFillFire } from "react-icons/ai";


export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`wrap-portfolio`}>
        {/* <div className={`portfolio-header`}>
          <h1>Showcase of My Projects</h1>
          <p>This is a showcase of projects I was previously involved in</p>
        </div> */}
        <div className="portfolio-header" >
          <h1 data-aos="fade-down">Showcase of My Projects</h1>
          <p data-aos="fade-down">This is a showcase of projects I was previously involved in.</p>
        </div>

        {/* <div className={`portfolio-container-1`}>
          <PersonalCard 
            background_image={`/assets/images/bgimage-03.png`}

            main_title={`Current Personal Web`}
            main_title_desc={`This is my portfolio made with NextJS`}

            text_title={`Tools and Languages:`}
          />
        </div> */}

        <div className={`portfolio-container-1`}>
          <div className={`port-card-1`}>
            <h3>current personal web </h3>
            <div className={`port-card-1-item`}>
              <span className="port-card-1-item-title">Tools and Languages</span>

              <div className="port-card-1-item-content">
                <Popover placement={"top-left"} className={``}>
                  <Popover.Trigger>
                    <Card.Image src="/assets/images/tools-icons/nextjs.png" className={`card-icon-type1`}
                      css={{ bg: "black", br: "10px" }} height={40} width={40} alt="Personal Web Icon"
                    />
                  </Popover.Trigger>
                  <Popover.Content isBlurred css={{ bgBlur: "#0f1114b5", br: "10px" }} >
                    <Text css={{ p: "10px" }} color="#fff" size={12}>Next.js by Vercel - The React Framework</Text>
                  </Popover.Content>
                </Popover>

                <Popover placement={"top-left"} className={``}>
                  <Popover.Trigger>
                    <Card.Image src="/assets/images/tools-icons/nextui.png" className={`card-icon-type1`}
                      css={{ bg: "black", br: "10px" }} height={40} width={40} alt="Personal Web Icon"
                    />
                  </Popover.Trigger>
                  <Popover.Content isBlurred css={{ bgBlur: "#0f1114b5", br: "10px" }} >
                    <Text css={{ p: "10px" }} color="#fff" size={12}>NextUI - Beautiful, fast and modern React UI Library</Text>
                  </Popover.Content>
                </Popover>

                <Popover placement={"top-left"} className={``} variant="bordered">
                  <Popover.Trigger>
                    <Card.Image src="/assets/images/tools-icons/sass_01.png" className={`card-icon-type1`}
                      css={{ bg: "black", br: "10px" }} height={40} width={40} alt="Personal Web Icon"
                    />
                  </Popover.Trigger>
                  <Popover.Content isBlurred css={{ bgBlur: "#0f1114b5", br: "10px" }} >
                    <Text css={{ p: "10px" }} color="#fff" size={12}>Sass: Syntactically Awesome Style Sheets</Text>
                  </Popover.Content>
                </Popover>
              </div>
            </div>
          </div>
          
          {/* <div className="port-card-2" data-aos="fade-left">
            <h4 >Spice Level (difficulty)</h4>

            <div className="port-card-2-item">
              <div className="port-card-2-item-1" >
                <AiFillFire className="port-card-2-item-icon1" />
                Low
              </div>
              <div className="port-card-2-item-2" >
                <AiFillFire className="port-card-2-item-icon1" />
                Medium
              </div>
              <div className="port-card-2-item-3" >
                <AiFillFire className="port-card-2-item-icon1" />
                Hot
              </div>
              <div className="port-card-2-item-4" >
                <AiFillFire className="port-card-2-item-icon1" />
                Extra Hot
              </div>
            </div>
          </div> */}
        </div>

        <section className={`portfolio-content-1`}>
          {/* <h2>Past Projects</h2> */}

          {/* <div className={`portfolio-content-1-container-1`} >
            <Projects1 />
          </div> */}
          <ProjectsTemplate2 />
        </section>

        <section className={`portfolio-content-2`}>
          <h2 data-aos="fade-up">My Skills</h2>

          <h3 data-aos="fade-up">Frameworks and Styling</h3>
          <div className="port-skl-1">
            <div className="port-skl-item-1 nextjs" data-aos="fade-up">
              <div className="port-skl-item-1-img">
                <Image src={`/assets/images/tools-icons/nextjs.png`} alt="portfolio" 
                  width={100} height={100}
                /> 
              </div>
              <div className="port-skl-item-1-info">
                <div>
                  <h3>NextJS</h3>
                  <p>Usage: Web Front-end</p>
                </div>
              </div>
            </div>

            <div className="port-skl-item-1 reactjs" data-aos="fade-up"> 
              <div className="port-skl-item-1-img">
                <Image src={`/assets/images/tools-icons/reactjs.png`} alt="portfolio" 
                  width={100} height={100}
                /> 
              </div>
              <div className="port-skl-item-1-info">
                <div>
                  <h3>ReactJS</h3>
                  <p>Usage: Web Front-end</p>
                </div>
              </div>
            </div>

            <div className="port-skl-item-1 sass" data-aos="fade-up">
              <div className="port-skl-item-1-img">
                <Image src={`/assets/images/tools-icons/sass_01.png`} alt="portfolio" 
                  width={100} height={100}
                /> 
              </div>
              <div className="port-skl-item-1-info">
                <div>
                  <h3>SASS/SCSS</h3>
                  <p>Usage: Styling content</p>
                </div>
              </div>
            </div>

            <div className="port-skl-item-1 tailwind" data-aos="fade-up">
              <div className="port-skl-item-1-img">
                <Image src={`/assets/images/tools-icons/tailwindcss.png`} alt="portfolio" 
                  width={100} height={100}
                /> 
              </div>
              <div className="port-skl-item-1-info">
                <div>
                  <h3>TailwindCSS</h3>
                  <p>Usage: Styling content</p>
                  <p>I dont really like using this</p>
                </div>
              </div>
            </div>
          </div>

          <h3 data-aos="fade-up">CSS Frameworks</h3>
          <div className="port-skl-1">
            <div className="port-skl-item-1 reactjs" data-aos="fade-up">
              <div className="port-skl-item-1-img">
                <Image src={`/assets/images/tools-icons/reactbootstrap.png`} alt="portfolio" 
                  width={100} height={100}
                /> 
              </div>
              <div className="port-skl-item-1-info">
                <div>
                  <h3>React Bootstrap</h3>
                  <p>React-Bootstrap - Replaces the Bootstrap JavaScript</p>
                </div>
              </div>
            </div>
            <div className="port-skl-item-1 antdesign" data-aos="fade-up">
              <div className="port-skl-item-1-img">
                <Image src={`/assets/images/tools-icons/antdesign.png`} alt="portfolio" 
                  width={100} height={100}
                /> 
              </div>
              <div className="port-skl-item-1-info">
                <div>
                  <h3>Ant Design</h3>
                  <p>Ant Design - A UI Design Language and React UI library</p>
                </div>
              </div>
            </div>
            <div className="port-skl-item-1 evergreen" data-aos="fade-up">
              <div className="port-skl-item-1-img">
                <Image src={`/assets/images/tools-icons/evergreen.png`} alt="portfolio" 
                  width={100} height={100}
                /> 
              </div>
              <div className="port-skl-item-1-info">
                <div>
                  <h3>Evergreen</h3>
                  <p>Evergreen - React UI Framework for building ambitious products on the web</p>
                </div>
              </div>
            </div>
          </div>

        </section>
      </main>
    </>
  )
}
