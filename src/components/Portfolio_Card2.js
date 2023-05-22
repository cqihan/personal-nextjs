import React from "react";
import Link from 'next/link';
import { Card, Text, Popover, Button } from "@nextui-org/react";
import { HiOutlineFingerPrint } from "react-icons/hi";

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

export const ProjectsTemplate2 = () => {
  
  return (
    <>
      <div className={`proj2-card-container `} >
        <div className={`proj2-card-content`} >
          <div className={`proj2-card-columns`}>
            <div className={`proj2-card-item`} data-aos="fade-up">
              <div className={`proj2-desc-1-bg ubb`}>
              </div>

              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><HiOutlineFingerPrint className="proj2-card-icon" />UBB Meta</h3>
                  <span className={`proj2-desc-1-type`}>CRM</span>
                </div>                
                <p>UBB Amanah (Labuan) Limited (also known as &quot;UBBAL&quot;) was established in 2021. It is a fully owned subsidiary of UBB Amanah Berhad, a leader in the Malaysian Independent Trust Service Sector that has been in operation since founded in 1988. Individuals and huge organizations with demanding needs make up our clientele. </p>

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
                  <Link href="https://login.ubbib.io/welcome" className="proj2-desc-1-btn-text" target="_blank">
                    <Button color="error" auto size={`sm`} >
                        {/* https://login.ubbib.io/  */} View UBB CRM
                    </Button>
                  </Link>
                  <Link href="https://ubbib.io/" className="proj2-desc-1-btn-text" target="_blank">
                    <Button color="error" auto size={`sm`} >
                        {/* https://login.ubbib.io/  */} View UBB Landing
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj2-card-item`} data-aos="fade-up">
              <div className={`proj2-desc-1-bg autopit`}>
              </div>

              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><HiOutlineFingerPrint className="proj2-card-icon" />Autopit</h3>
                  <span className={`proj2-desc-1-type`}>Services/E-Commerce</span>
                </div>                
                <p>AutoPit was founded in the year 2022, focusing to provide customers with a professional car shopping experience, the primary position of the company&apos;s main service is to source used cars namely, recon cars imported from places such as Japan, Australia, or the UK. The price of these premium cars is cheaper than the official imports which provide customers with plenty of new car purchases.</p>

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
                  <Link href="https://autopitonline.com/" className="project-desc-2-btn-text" target="_blank">
                    <Button color="primary" auto size={`sm`} >
                      {/* https://autopitonline.com/ */} View AutoPit
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj2-card-item`} data-aos="fade-up">
              <div className={`proj2-desc-1-bg washla`}>
              </div>

              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><HiOutlineFingerPrint className="proj2-card-icon" />Wash La!</h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                
                <p>Wash La! is the Leading One-stop solution for Professional Shoe Wash & Sneaker cleaning service with door-to-door pickup and delivery within Klang Valley.</p>

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
                  <Link href="https://washla.my" className="project-desc-2-btn-text" target="_blank">
                    <Button color="warning" auto size={`sm`} >
                        {/* https://washla.my/ */} View WashLa
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj2-card-item`} data-aos="fade-up">
              <div className={`proj2-desc-1-bg elysium`}>
              </div>

              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><HiOutlineFingerPrint className="proj2-card-icon" />Elysium Plantation Berhad</h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                
                <p>Elysium Plantation Berhad was incorporated in Malaysia on 29th August 2022 as a limited company with business commenced in the same year. The Group is principally engaged in the cultivation and processing of eucalyptus plantations. Other businesses include timber logging, research & development.</p>

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
                    popover_image="/assets/images/tools-icons/antdesign.png"
                    popover_desc="Ant Design - A UI Design Language and React UI library"
                  />
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/sass_01.png"
                    popover_desc="Sass: Syntactically Awesome Style Sheets"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://elysiumberhad.com.my/" className="project-desc-2-btn-text" target="_blank">
                    <Button color="success" auto size={`sm`} >
                      {/* https://elysiumberhad.com.my/ */} View Elysium
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj2-card-item`} data-aos="fade-up">
              <div className={`proj2-desc-1-bg udbio`}>
              </div>

              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><HiOutlineFingerPrint className="proj2-card-icon" />UD-Bio Malaysia</h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                
                <p>Shenzhen Ultra-Diagnostics Biotec. Co., Ltd. (hereinafter referred to as UD-Bio) was founded in June 2016 and is headquartered in Shenzhen. It is a Shenzhen and National high-tech company engaged in the research, development, production, sales and services of IVD instruments and reagents. UD-Bio dedicates in the comprehensive product line of Thrombus & Hemostasis, Inflammation detection, POCT rapid diagnosis.</p>

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
                  <Link href="https://ud-bio.com.my/" className="project-desc-2-btn-text" target="_blank">
                    <Button color="success" auto size={`sm`} >
                      {/* https://ud-bio.com.my/ */} View UD-Bio
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj2-card-item`} data-aos="fade-up">
              <div className={`proj2-desc-1-bg fresotech`}>
              </div>

              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><HiOutlineFingerPrint className="proj2-card-icon" />Freso Tech</h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                
                <p>FRESO TECH is a fast-growing Web & App Development company based in Kuala Lumpur (KL), Malaysia specializing in providing professional website design & development services to small & medium-sized enterprises (SMEs) and corporate companies. With our expertise, we help our clients make their brand stand out, optimize their digital presence, and subsequently grow their business online.</p>

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/reactjs.png"
                    popover_desc="React – A JavaScript library for building user interfaces"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://freso-tech.com/" className="project-desc-2-btn-text" target="_blank">
                    <Button color="primary" auto size={`sm`} >
                      {/* https://bizcentric.com.my/ */} View Freso Tech
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

          <div className={`proj2-card-item`} data-aos="fade-up">
              <div className={`proj2-desc-1-bg quickfix`}>
              </div>

              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><HiOutlineFingerPrint className="proj2-card-icon" />QuickFix DIY </h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                
                <p>With 30 years of experience, QuickFix - The Most Complete Hardware Shop provides DIY hardware products for Home & Living where customers are able to browse everything online!</p>

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
                  <Link href="https://quickfixdiy.com.my/" className="project-desc-2-btn-text" target="_blank">
                    <Button color="error" auto size={`sm`} >
                      {/* https://quickfixdiy.com.my/ */} View QuickFix DIY
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj2-card-item`} data-aos="fade-up">
              <div className={`proj2-desc-1-bg akc`}>
              </div>

              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><HiOutlineFingerPrint className="proj2-card-icon" />Ape Kids Club</h3>
                  <span className={`proj2-desc-1-type`}>Web3/NFT</span>
                </div>                
                <p>Ape Kids Club is a NFT collection of 9,999 Kids Apes that were sprouted from a thousand year old magical tree created by BAYC #4928 and #6268.</p>

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
                  <Link href="https://www.apekidsclub.io/" className="project-desc-2-btn-text" target="_blank">
                    <Button color="primary" auto size={`sm`} >
                      {/* https://www.apekidsclub.io/ */} View ApeKidsClub
                    </Button>
                  </Link>
                  <Link href="https://www.apekidsuniverse.com/" className="project-desc-2-btn-text" target="_blank">
                    <Button color="primary" auto size={`sm`} >
                      {/* https://www.apekidsuniverse.com/ */} View ApeKidsUniverse
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj2-card-item`} data-aos="fade-up">
              <div className={`proj2-desc-1-bg base2`}>
              </div>

              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><HiOutlineFingerPrint className="proj2-card-icon" />Base Two</h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                
                <p>Base Two is a full-service app development company that provides app development, design and consulting services for those who want to be successful. Based in Kuala Lumpur, Base Two is a unique blend of creative designers, tech savvy developers and awesome project managers.</p>

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
                  <Link href="https://base2.my/" className="project-desc-2-btn-text" target="_blank">
                    <Button color="secondary" auto size={`sm`} >
                      {/* https://base2.my/ */} View BaseTwo
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj2-card-item`} data-aos="fade-up">
              <div className={`proj2-desc-1-bg bizcentric`}>
              </div>

              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><HiOutlineFingerPrint className="proj2-card-icon" />Bizcentric  </h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                
                <p>BIZCENTRIC Group strive to put our best foot forward when partnering ours clients in reaching their goals through producing unique content for Every Property.</p>

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/reactjs.png"
                    popover_desc="React – A JavaScript library for building user interfaces"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://bizcentric.com.my/" className="project-desc-2-btn-text" target="_blank">
                    <Button color="primary" auto size={`sm`} >
                      {/* https://bizcentric.com.my/ */} View Bizcentric
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj2-card-item`} data-aos="fade-up">
              <div className={`proj2-desc-1-bg tclam`}>
              </div>

              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><HiOutlineFingerPrint className="proj2-card-icon" />TCLamShop</h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                
                <p>Craving for premium imported fruits? TC Lam Fruit Shop got your covered. Sit back and relax, just order through our app and we will get it deliver to your doorsteps within 24 hours.</p>

                <div className={`proj2-desc-1-desc-icons`}>
                  <PopoverItem 
                    popover_image="/assets/images/tools-icons/reactjs.png"
                    popover_desc="React – A JavaScript library for building user interfaces"
                  />
                </div>

                <div className={`proj2-desc-1-desc-button`}>
                  <Link href="https://tclamshop.my/" className="project-desc-2-btn-text" target="_blank">
                    <Button color="success" auto size={`sm`} >
                      {/* https://tclamshop.my/ */} View TCLamShop
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj2-card-item`} data-aos="fade-up">
              <div className={`proj2-desc-1-bg shawarma`}>
              </div>

              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><HiOutlineFingerPrint className="proj2-card-icon" />Happy Arab Shawarma House</h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                
                <p>Happy Arab Shawarma House is a restaurant located in the Phillipines that sells shawarma as their specialty. I was involved in designing the landing and also developing the landing with Wordpress / DiVi (ElegantThemes).</p>

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
                  <Link href="https://www.happyarabshawarma.com/" className="project-desc-2-btn-text" target="_blank">
                    <Button color="warning" auto size={`sm`} >
                      {/* https://bizcentric.com.my/ */} View Happy Arab Shawarma
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`proj2-card-item`} data-aos="fade-up">
              <div className={`proj2-desc-1-bg qcrental`}>
              </div>

              <div className={`proj2-desc-1-desc`}>
                <div className={`proj2-desc-1-desc-header`}>
                  <h3><HiOutlineFingerPrint className="proj2-card-icon" />QC Rental</h3>
                  <span className={`proj2-desc-1-type`}>Landing</span>
                </div>                
                <p>QC HOLIDAY PREMIUM RENTAL SDN. BHD. strive to creatively provide comprehensive provision with regards to car rental, buying or selling a used car as far as to car mortgage financial service to ease everyone in debt repayment planning especially post MCO stage.</p>

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
                  <Link href="https://www.qcrental.my/" className="project-desc-2-btn-text" target="_blank">
                    <Button color="primary" auto size={`sm`} >
                      {/* https://bizcentric.com.my/ */} View QC Rental
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
