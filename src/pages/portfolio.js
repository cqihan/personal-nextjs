import Head from 'next/head';
import Image from 'next/image';
// import { PersonalCard } from '@/components/CardTemplate_1';
import { Card, Col, Row, Grid, Text, Popover, Button } from "@nextui-org/react";
import { Projects1 } from '@/components/Portfolio_Card1';
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
        <div className={`portfolio-header`}>
          <h1>Showcase of My Projects</h1>
          <p>This is a showcase of projects I was previously involved in</p>
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
          
          <div className="port-card-2" data-aos="fade-left">
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
          </div>
        </div>

        <section className={`portfolio-content-1`}>
          <h2>Past Projects</h2>

          <div className={`portfolio-content-1-container-1`} >
            <Projects1 />
          </div>
        </section>
      </main>
    </>
  )
}
