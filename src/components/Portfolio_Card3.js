import React from "react";
import Link from 'next/link';
import { Card, Text, Popover, Button } from "@nextui-org/react";
import { TbBrandWordpress, TbBrandVscode, TbSeo } from "react-icons/tb";

function PopoverItem(props){
  return (
    <>
      <Popover placement={"top-center"} className={``}>
        <Popover.Trigger className="popover-handler">
          <Card.Image src={props.popover_image} className={`card-icon-type1`}
            css={{ bg: "black", br: "10px" }} height={40} width={40} alt="Personal Web Icon"
          />
        </Popover.Trigger>
        <Popover.Content isBlurred css={{ bgBlur: "#0f1114b5", br: "10px" }} >
          <Text css={{ p: "10px" }} color="#fff" size={12}>{props.popover_desc}</Text>
        </Popover.Content>
      </Popover>
    </>
  )
}

export const ProjectsTemplate3 = () => {
  
  return (
    <>
      <div className={`proj2-card-container `} >
        <div className={`proj2-card-content`} >
          <div className={`proj2-card-columns`}>

            <div className={`proj3-card-item ubb`} data-aos="fade-up">
              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><TbBrandVscode className="proj2-card-icon" />UBB Meta</h3>
                  <span className={`proj2-desc-1-type`}>CRM</span>
                </div>
                <p>UBB Meta is a platform that provide trusts management in Digital Trust. More details in UBB Landing.
                  Bespoke Digital Asset Trust by UBB Amanah (Labuan) Limited.
                </p>
                <p> - Participated in frontend development using NextJS and TailwindCSS. <br/>
                  - CRM: Did frontend and RestAPI integration. <br/>
                  - Handled mostly CRM part. <br/>
                  - Deploy updates and fixes.</p>

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem
                    popover_image="/assets/images/tools-icons/nextjs.png"
                    popover_desc="Next.js by Vercel - The React Framework"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/tailwindcss.png"
                    popover_desc="Tailwind CSS - A utility-first CSS framework packed with classes"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://login.ubbib.io/welcome" className="proj2-desc-1-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="error" auto size={`sm`} >
                      View UBB CRM
                    </Button>
                  </Link>
                  <Link href="https://www.ubbib.io/" className="proj2-desc-1-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="error" auto size={`sm`} >
                      View UBB Landing
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj3-card-item autopit`} data-aos="fade-up">
              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><TbBrandVscode className="proj2-card-icon" />Autopit</h3>
                  <span className={`proj2-desc-1-type`}>Services/E-Commerce</span>
                </div>                
                <p>Autopit&apos;s main service is to source used cars namely, recon cars imported from places such as Japan, Australia, or the UK. 
                  Other services may include financial calculators and import duty calculators with payments.
                </p>
                <p> - Participated in frontend development using ReactJS. <br/>
                  - Did RestAPI integration for cars, calculators and payment. <br/>
                  - Deploy updates and fixes.</p>

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/reactjs.png"
                    popover_desc="React – A JavaScript library for building user interfaces"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/reactbootstrap.png"
                    popover_desc="React-Bootstrap - Replaces the Bootstrap JavaScript"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/antdesign.png"
                    popover_desc="Ant Design - A UI Design Language and React UI library"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://www.autopitonline.com/" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="primary" auto size={`sm`} >
                      {/* https://autopitonline.com/ */} View AutoPit
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj3-card-item washla`} data-aos="fade-up">
              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><TbBrandVscode className="proj2-card-icon" />Wash La!</h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                
                <p>Wash La! is the Leading One-stop solution for Professional Shoe Wash & Sneaker cleaning service with door-to-door pickup and delivery within Klang Valley.</p>
                <p> - Participated in frontend development using ReactJS. <br/>
                  - Fix and optimize SEO based on requirements. <br/>
                  - Deploy updates and fixes. <br/>
                  PS: One of my first ReactJS projects.
                </p>

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/reactjs.png"
                    popover_desc="React – A JavaScript library for building user interfaces"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/reactbootstrap.png"
                    popover_desc="React-Bootstrap - Replaces the Bootstrap JavaScript"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/google-analytics.png"
                    popover_desc="Google Analytics - Tracks and reports website traffic"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/google-searchconsole.png"
                    popover_desc="Google Search Console - Monitor Google Search results data"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://washla.my" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="warning" auto size={`sm`} >
                        {/* https://washla.my/ */} View WashLa
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj3-card-item quickfix`} data-aos="fade-up">

              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><TbBrandVscode className="proj2-card-icon" />QuickFix DIY </h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                
                <p>QuickFix - The Most Complete Hardware Shop provides DIY hardware products for Home & Living where customers are able to browse everything online!</p>
                <p> - Web frontend development using ReactJS initially before migrating to NextJS entirely. <br/>
                  - RestAPI integration for listing products and search function. <br/>
                  - Deploy updates and fixes. <br/>
                  - Manages Google Analytics and Google Search Console. Fix and optimize website based on SEO requirements.<br/>
                  - EmailJS for contact forms.
                </p>

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/nextjs.png"
                    popover_desc="Next.js by Vercel - The React Framework"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/reactbootstrap.png"
                    popover_desc="React-Bootstrap - Replaces the Bootstrap JavaScript"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/sass_01.png"
                    popover_desc="Sass: Syntactically Awesome Style Sheets"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/emailjs.png"
                    popover_desc="EmailJS - Send Email Directly From Your Code"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/google-analytics.png"
                    popover_desc="Google Analytics - Tracks and reports website traffic"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/google-searchconsole.png"
                    popover_desc="Google Search Console - Monitor Google Search results data"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://quickfixdiy.com.my/" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="error" auto size={`sm`} >
                      {/* https://quickfixdiy.com.my/ */} View QuickFix DIY
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj3-card-item pucceu`} data-aos="fade-up">
              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><TbBrandVscode className="proj2-card-icon" />Photography</h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                
                <p>This website is made to upload my photography hobby. I want to make my personal website other than my own portfolio and deploy it to a domain I purchased few years ago.</p>
                <p> - Website is built on NextJS. <br/>
                  - Style with SASS and tailwindcss. <br/>
                  - I used ant-design image component for flexibility and preview function.  <br/>
                  - Still in progress, more content to be updated!
                </p>

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/nextjs.png"
                    popover_desc="Next.js by Vercel - The React Framework"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/sass_01.png"
                    popover_desc="Sass: Syntactically Awesome Style Sheets"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/antdesign.png"
                    popover_desc="Ant Design - A UI Design Language and React UI library"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/tailwindcss.png"
                    popover_desc="Tailwind CSS - A utility-first CSS framework packed with classes"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://www.mclovinexpress-pucceu.com/" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="default" auto size={`sm`} >
                      View Website
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj3-card-item elysium`} data-aos="fade-up">
              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><TbBrandVscode className="proj2-card-icon" />Elysium Plantation</h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                
                <p>Elysium Plantation Berhad was incorporated in Malaysia on 29th August 2022 as a limited company that principally engaged in the cultivation and processing of eucalyptus plantations. This is a corporate landing page.</p>
                <p> - Developed frontend for web in ReactJS. <br/>
                  - React-bootstrap and antdesign to develop components (Eg. Photo Gallery, Notification/Toast).<br/>
                  - Deploy updates and fixes. <br/>
                  - EmailJS for contact forms enquiries to be sent to notify admin in email.
                </p>            

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/reactjs.png"
                    popover_desc="React – A JavaScript library for building user interfaces"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/reactbootstrap.png"
                    popover_desc="React-Bootstrap - Replaces the Bootstrap JavaScript"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/sass_01.png"
                    popover_desc="Sass: Syntactically Awesome Style Sheets"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/emailjs.png"
                    popover_desc="EmailJS - Send Email Directly From Your Code"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/antdesign.png"
                    popover_desc="Ant Design - A UI Design Language and React UI library"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://elysiumberhad.com.my/" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="success" auto size={`sm`} >
                     View Elysium
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj3-card-item base2`} data-aos="fade-up">
              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><TbBrandVscode className="proj2-card-icon" />Base Two</h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                
                <p>Base Two is a full-service app development company that provides app development, design and consulting services. This is company landing page I did for my previous company.</p>
                <p> - Participated in frontend development using ReactJS along with fullPage.js. <br/>
                  - Managed Google Analytics and Google Search Console. Fix and optimize website based on SEO requirements.<br/>
                  - Managed SEMRush for Landing to monitor analytics and SEO recommendations .<br/>
                  - Made some animations with JavaScript.<br/>
                  - Deploy updates and fixes. <br/>
                  - EmailJS for contact forms enquiries to be sent to notify admin in email.
                </p>               

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/reactjs.png"
                    popover_desc="React – A JavaScript library for building user interfaces"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/reactbootstrap.png"
                    popover_desc="React-Bootstrap - Replaces the Bootstrap JavaScript"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/emailjs.png"
                    popover_desc="EmailJS - Send Email Directly From Your Code"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/google-analytics.png"
                    popover_desc="Google Analytics - Tracks and reports website traffic"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/google-searchconsole.png"
                    popover_desc="Google Search Console - Monitor Google Search results data"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/semrush.png"
                    popover_desc="Semrush - For SEO, PPC, SMM and Content"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://base2.my/" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="secondary" auto size={`sm`} >
                      {/* https://base2.my/ */} View BaseTwo
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj3-card-item udbio`} data-aos="fade-up">
              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><TbBrandVscode className="proj2-card-icon" />UD-Bio Malaysia</h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                
                <p>Shenzhen Ultra-Diagnostics Biotec. Co., Ltd. (hereinafter referred to as UD-Bio) was founded in June 2016 and is headquartered in Shenzhen. UD-Bio dedicates in the comprehensive product line of Thrombus & Hemostasis, Inflammation detection, POCT rapid diagnosis.</p>
                <p> - Frontend development with ReactJS. <br/>
                  - Fix and optimize SEO based on requirements. <br/>
                  - Deploy updates and fixes.<br/>
                  - EmailJS for contact forms enquiries to be sent as email to notify admin.
                </p>            

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/reactjs.png"
                    popover_desc="React – A JavaScript library for building user interfaces"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/reactbootstrap.png"
                    popover_desc="React-Bootstrap - Replaces the Bootstrap JavaScript"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/emailjs.png"
                    popover_desc="EmailJS - Send Email Directly From Your Code"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/google-analytics.png"
                    popover_desc="Google Analytics - Tracks and reports website traffic"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/google-searchconsole.png"
                    popover_desc="Google Search Console - Monitor Google Search results data"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://ud-bio.com.my/" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="success" auto size={`sm`} >
                      {/* https://ud-bio.com.my/ */} View UD-Bio
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj3-card-item fresotech`} data-aos="fade-up">
              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><TbBrandVscode className="proj2-card-icon" />FresoTech</h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                
                <p>FRESO TECH is a fast-growing Web & App Development company based in Kuala Lumpur (KL), Malaysia specializing in providing professional website design & development services to small & medium-sized enterprises (SMEs) and corporate companies. </p>
                <p> - Frontend development with ReactJS. <br/>
                  - Fix and optimize SEO based on requirements. <br/>
                  - Deploy updates and fixes.
                </p>               

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/reactjs.png"
                    popover_desc="React – A JavaScript library for building user interfaces"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://freso-tech.com/" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="primary" auto size={`sm`} >
                      {/* https://bizcentric.com.my/ */} View Freso Tech
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj3-card-item akc`} data-aos="fade-up">
              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><TbBrandVscode className="proj2-card-icon" />ApeKidsClub</h3>
                  <span className={`proj2-desc-1-type`}>NFT/Web3</span>
                </div>                
                <p>Ape Kids Club is a NFT collection of 9,999 Kids Apes that were sprouted from a thousand year old magical tree created by BAYC #4928 and #6268.</p>
                <p> - Revamp project&apos;s frontend to ReactJS. <br/>
                  - ApeKidsUniverse is a roadmap landing made with Canvas and bootstrap. <br/>
                  - Deploy updates and fixes.<br/>
                </p>                  

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/reactjs.png"
                    popover_desc="React – A JavaScript library for building user interfaces"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/reactbootstrap.png"
                    popover_desc="React-Bootstrap - Replaces the Bootstrap JavaScript"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://www.apekidsclub.io/" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="primary" auto size={`sm`} >
                      {/* https://www.apekidsclub.io/ */} View ApeKidsClub
                    </Button>
                  </Link>
                  <Link href="https://www.apekidsuniverse.com/" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="primary" auto size={`sm`} >
                      {/* https://www.apekidsuniverse.com/ */} View Roadmap
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj3-card-item bizcentric`} data-aos="fade-up">
              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><TbBrandVscode className="proj2-card-icon" />Bizcentric</h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                
                <p>BIZCENTRIC Group strive to put our best foot forward when partnering ours clients in reaching their goals through producing unique content for Every Property.</p>
                <p> - Frontend development with ReactJS. <br/>
                  - Fix and optimize SEO based on requirements. <br/>
                  - Deploy updates and fixes.
                </p>                   

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/reactjs.png"
                    popover_desc="React – A JavaScript library for building user interfaces"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://bizcentric.com.my/" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="primary" auto size={`sm`} >
                      {/* https://bizcentric.com.my/ */} View Bizcentric
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj3-card-item tclam`} data-aos="fade-up">
              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><TbBrandVscode className="proj2-card-icon" />TCLam Fruit Shop</h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                
                <p>Craving for premium imported fruits? TC Lam Fruit Shop got your covered. Sit back and relax, just order through our app and we will get it deliver to your doorsteps within 24 hours.</p>
                <p> - Frontend development with ReactJS. <br/>
                  - Fix and optimize SEO based on requirements. <br/>
                  - Deploy updates and fixes.
                </p> 

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/reactjs.png"
                    popover_desc="React – A JavaScript library for building user interfaces"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://tclamshop.my/" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="success" auto size={`sm`} >
                      {/* https://tclamshop.my/ */} View TCLamShop
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj3-card-item qcrental`} data-aos="fade-up">
              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><TbBrandVscode className="proj2-card-icon" />QC Holiday</h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>            
                <p>QC HOLIDAY PREMIUM RENTAL SDN. BHD. strive to creatively provide comprehensive provision with regards to car rental, buying or selling a used car as far as to car mortgage financial service to ease everyone in debt repayment planning especially post MCO stage.</p>
                <p> - Developed a landing with embeded video from vimeo.com in ReactJS. <br/>
                  - Website consist of both english and chinese version.</p>

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/reactjs.png"
                    popover_desc="React – A JavaScript library for building user interfaces"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/sass_01.png"
                    popover_desc="Sass: Syntactically Awesome Style Sheets"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://www.qcrental.my/" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="primary" auto size={`sm`} >
                      {/* https://bizcentric.com.my/ */} View QC Rental
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj3-card-item shawarma`} data-aos="fade-up">
              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><TbBrandWordpress className="proj2-card-icon" />Happy Arab Shawarma House</h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                
                <p>Happy Arab Shawarma House is a restaurant located in the Philippines that sells shawarma as their specialty.</p>
                <p> - Frontend development in Wordpress with DiVi by ElegentThemes. <br/>
                  - Added Google Maps API for map. <br/>
                  - I was involved in designing the landing and also developing the landing with Wordpress / DiVi (ElegantThemes) <br/>
                  PS: Last involved in 2021
                </p>          

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/wordpress.png"
                    popover_desc="WordPress – Free and open-source content management system"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/divi.png"
                    popover_desc="DiVi by ElegentThemes – The Most Popular WordPress Theme"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://www.happyarabshawarma.com/" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="warning" auto size={`sm`} >
                      {/* https://bizcentric.com.my/ */} View Happy Arab Shawarma
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className={`proj3-card-item fenetwork`} data-aos="fade-up">
              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><TbBrandWordpress className="proj2-card-icon" />FENetwork</h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                  
                <p>- Involved in developing new financial literary month pages in BM and Eng.<br/>
                  - Participated throughout the whole FLM2021 event (Built microsites for event). Also served as a support helpdesk during the virtual event. <br/>
                  - Built a microsite for users to search for financial documents, link provided below. Page consists of filtering function.  <br/>
                  - Used PHP and Wordpress plugin to convert .csv file to viewable content. <br/>
                  - Last involved in 2021 internship.</p>

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/wordpress.png"
                    popover_desc="WordPress – Free and open-source content management system"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/divi.png"
                    popover_desc="DiVi by ElegentThemes – The Most Popular WordPress Theme"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/gravityforms.png"
                    popover_desc="Gravity Forms - The Best WordPress Form Plugin | Form Builder"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/tawkto.png"
                    popover_desc="tawk.to is the world&apos;s #1 most widely used live chat software"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://www.fenetwork.my/" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="default" auto size={`sm`} >
                      View FENetwork
                    </Button>
                  </Link>
                  <Link href="https://www.fenetwork.my/flm2021/finale/" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="default" auto size={`sm`} >
                      View FLM2021
                    </Button>
                  </Link>
                  <Link href="https://www.fenetwork.my/choose-your-life-stage/" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="default" auto size={`sm`} >
                      View FEN Documents
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj3-card-item fimmac`} data-aos="fade-up">
              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><TbBrandWordpress className="proj2-card-icon" />FIMMAC 2021</h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                  
                <p>FIMMAC 2021 - Getting Malaysians invested in their investments through a fun and informative virtual event.</p>
                <p>- Participated in designing and developing the microsite with WordPress and Divi. <br/>
                  - GravityForms as a registration method for the virtual event. <br/>
                  - Served as a event helpdesk (livechat) and wrote knowledge base FAQ articles in TawkTo. <br/>
                  - Last involved in 2021 internship.</p>

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/wordpress.png"
                    popover_desc="WordPress – Free and open-source content management system"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/divi.png"
                    popover_desc="DiVi by ElegentThemes – The Most Popular WordPress Theme"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/gravityforms.png"
                    popover_desc="Gravity Forms - The Best WordPress Form Plugin | Form Builder"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/tawkto.png"
                    popover_desc="tawk.to is the world&apos;s #1 most widely used live chat software"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="/assets/images/fimmac-1.jpg" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="default" auto size={`sm`} >
                      View Image
                    </Button>
                  </Link>
                  {/* <Link href="https://www.lightup7.com/project/fimmac2021/" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="default" auto size={`sm`} >
                      View FIMMAC 2021
                    </Button>
                  </Link> */}
                </div>
              </div>
            </div>

            <div className={`proj3-card-item vpkl`} data-aos="fade-up">
              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><TbBrandWordpress className="proj2-card-icon" />Video Production KL</h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                  
                <p>Video Production KL is a company that specializes in video productions for brand marketing and many more.</p>
                <p>- Revamped portfolio page in WordPress with Divi to improve page loading speed. <br/>
                  - Fixed portfolio and filter function in portfolio page. <br/>
                  - Also manages other content updates and SEO changes. <br/>
                  - Last involved in 2021 internship.</p>

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/wordpress.png"
                    popover_desc="WordPress – Free and open-source content management system"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/divi.png"
                    popover_desc="DiVi by ElegentThemes – The Most Popular WordPress Theme"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://www.videoproductionkl.com/" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="success" auto size={`sm`} >
                      View VPKL
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj3-card-item mysenyum`} data-aos="fade-up">
              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><TbBrandWordpress className="proj2-card-icon" />MySenyum</h3>
                  <span className={`proj2-desc-1-type`}>E-Commerce</span>
                </div>                  
                <p>MySenyum provides affordable, one-stop solution for your dental care and hygiene needs. Users are able to buy products or book dental session through the website.</p>
                <p>- Participated in developing the landing with WordPress and Divi. <br/>
                  - GravityForms for receiving form enquiries (appointments/career). <br/>
                  - Last involved in 2021 internship.</p>

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/wordpress.png"
                    popover_desc="WordPress – Free and open-source content management system"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/divi.png"
                    popover_desc="DiVi by ElegentThemes – The Most Popular WordPress Theme"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/gravityforms.png"
                    popover_desc="Gravity Forms - The Best WordPress Form Plugin | Form Builder"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://www.mysenyum.my/" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="secondary" auto size={`sm`} >
                      View MySenyum
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj3-card-item thermomix`} data-aos="fade-up">
              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><TbSeo className="proj2-card-icon" />Thermomix</h3>
                  <span className={`proj2-desc-1-type`}>E-Commerce</span>
                </div>                  
                <p>Thermomix is an e-commerce that provides kitchen products, cookbooks, audiobooks and many cooking related contents.</p>
                <p>- Participated in maintaining and updating website SEO based on requirements and guidelines. <br/>
                  - Update product listings with provided .csv for both SG and MY Thermomix. <br/>
                  - Added articles (blogs) for better SEO in SG and MY Thermomix. <br/>
                  - Last involved in 2021 internship.</p>

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/wordpress.png"
                    popover_desc="WordPress – Free and open-source content management system"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://thermomix.com.my/" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="success" auto size={`sm`} >
                      View Thermomix
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj3-card-item rosken`} data-aos="fade-up">
              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><TbSeo className="proj2-card-icon" />Rosken</h3>
                  <span className={`proj2-desc-1-type`}>E-Commerce</span>
                </div>                  
                <p>Rosken is an e-commerce that provides skin repair and skin care products.</p>
                <p>- Participated in maintaining and updating website SEO based on requirements and guidelines. <br/>
                  - Manage and update product listings. <br/>
                  - Last involved in 2021 internship.</p>

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/wordpress.png"
                    popover_desc="WordPress – Free and open-source content management system"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/divi.png"
                    popover_desc="DiVi by ElegentThemes – The Most Popular WordPress Theme"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/gravityforms.png"
                    popover_desc="Gravity Forms - The Best WordPress Form Plugin | Form Builder"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://rosken.com.my/" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="default" auto size={`sm`} >
                      View Rosken
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className={`proj3-card-item mprc`} data-aos="fade-up">
              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><TbBrandWordpress className="proj2-card-icon" />MPRC</h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>   
                <p>National OGSE Sustainability FORUM is a one page microsite for users to view the live event and schedule.</p>               
                <p>- Involved in developing the frontend in WordPress, HTML5 and Divi.<br/>
                  - Also served as a support helpdesk (livechat) during the virtual event. <br/>
                  - Last involved in 2021 internship.</p>

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/wordpress.png"
                    popover_desc="WordPress – Free and open-source content management system"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/divi.png"
                    popover_desc="DiVi by ElegentThemes – The Most Popular WordPress Theme"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://events.mprc.gov.my/" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="success" auto size={`sm`} >
                      View MPRC
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj3-card-item onepgtemplate`} data-aos="fade-up">
              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><TbBrandVscode className="proj2-card-icon" />Simple Template</h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                
                <p>This is a mini template I made in early 2022 for a 1 page landing, everything displayed here is just a sample placeholder.</p>
                <p> - An fade up animation is also included inside the template made with javascript. <br/>
                  - A sample privacy policy page is included too.</p>

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/reactjs.png"
                    popover_desc="React – A JavaScript library for building user interfaces"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/sass_01.png"
                    popover_desc="Sass: Syntactically Awesome Style Sheets"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://lively-syrniki-5a78c4.netlify.app/" className="project-desc-2-btn-text" target="_blank" rel="noreferrer noopener">
                    <Button color="warning" auto size={`sm`} >
                      View Template
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
  
}
