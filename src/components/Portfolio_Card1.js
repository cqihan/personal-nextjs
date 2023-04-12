import React from "react";
import Link from 'next/link';
import { Card, Text, Popover, Button } from "@nextui-org/react";
import { HiOutlineFingerPrint } from "react-icons/hi";
import { useTheme } from 'next-themes';

function PopoverItem(props){
  return (
    <>
      <Popover placement={"top-center"} className={``}>
        <Popover.Trigger>
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

export const Projects1 = () => {
  const darkmode_settings = useTheme();
  // console.log('darkmode_settings',darkmode_settings);
  
  return (
    <>
      <div className={`project-card-container hoverXright`} data-aos="fade-up">
        <div className={`project-desc-1 ubbmeta`}>
        </div>

        <div className={`project-desc-2`}>
          <div className={`project-desc-2-header`}>
            <h3><HiOutlineFingerPrint className="project-card-icon" />UBB Meta</h3>
            <span className={`project-desc-2-type`}>CRM</span>
          </div>
          <p>UBB Amanah (Labuan) Limited (also known as "UBBAL") was established in 2021. It is a fully owned subsidiary of UBB Amanah Berhad, a leader in the Malaysian Independent Trust Service Sector that has been in operation since founded in 1988. Individuals and huge organizations with demanding needs make up our clientele. </p>

          <div className={`project-desc-2-icons-container`}>
            <PopoverItem 
              popover_image="/assets/images/tools-icons/nextjs.png"
              popover_desc="Next.js by Vercel - The React Framework"
            />
          </div>
          <Link href="https://login.ubbib.io/welcome" className="project-desc-2-btn-text" target="_blank">
            <Button color="error" auto size={`sm`} >
                https://login.ubbib.io/
            </Button>
          </Link>
        </div>
      </div>

      <div className={`project-card-container`} data-aos="fade-up">
        <div className={`project-desc-1 washla`}>
        </div>

        <div className={`project-desc-2`}>
          <div className={`project-desc-2-header`}>
            <h3><HiOutlineFingerPrint className="project-card-icon" />Wash La!</h3>
            <span className={`project-desc-2-type`}>Landing</span>
          </div>
          <p>Wash La! is the Leading One-stop solution for Professional Shoe Wash & Sneaker cleaning service with door-to-door pickup and delivery within Klang Valley.</p>
          
          <div className={`project-desc-2-icons-container`}>
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
          <Link href="https://washla.my" className="project-desc-2-btn-text" target="_blank">
            <Button color="warning" auto size={`sm`} >
                https://washla.my/
            </Button>
          </Link>
        </div>
      </div>

      <div className={`project-card-container`} data-aos="fade-up">
        <div className={`project-desc-1 quickfix`}>
        </div>

        <div className={`project-desc-2`}>
          <div className={`project-desc-2-header`}>
            <h3><HiOutlineFingerPrint className="project-card-icon" />QuickFix DIY Hardware Home & Living</h3>
            <span className={`project-desc-2-type`}>Landing</span>
          </div>
          <p>With 30 years of experience, QuickFix - The Most Complete Hardware Shop provides DIY hardware products for Home & Living where customers are able to browse everything online!</p>

          <div className={`project-desc-2-icons-container`}>
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
          <Link href="https://quickfixdiy.com.my/" className="project-desc-2-btn-text" target="_blank">
            <Button color="error" auto size={`sm`} >
              https://quickfixdiy.com.my/
            </Button>
          </Link>
        </div>
      </div>

      <div className={`project-card-container`} data-aos="fade-up">
        <div className={`project-desc-1 akc`}>
        </div>

        <div className={`project-desc-2`}>
          <div className={`project-desc-2-header`}>
            <h3><HiOutlineFingerPrint className="project-card-icon" />Ape Kids Club</h3>
            <span className={`project-desc-2-type`}>Web3</span>
          </div>
          <p>Ape Kids Club is a NFT collection of 9,999 Kids Apes that were sprouted from a thousand year old magical tree created by BAYC #4928 and #6268.</p>

          <div className={`project-desc-2-icons-container`}>
            <PopoverItem 
              popover_image="/assets/images/tools-icons/reactjs.png"
              popover_desc="React – A JavaScript library for building user interfaces"
            />
            <PopoverItem 
              popover_image="/assets/images/tools-icons/reactbootstrap.png"
              popover_desc="React-Bootstrap - Replaces the Bootstrap JavaScript"
            />
          </div>
          <Link href="https://www.apekidsclub.io/" className="project-desc-2-btn-text" target="_blank">
            <Button color="primary" auto size={`sm`} >
              https://www.apekidsclub.io/
            </Button>
          </Link>
          <Link href="https://www.apekidsuniverse.com/" className="project-desc-2-btn-text" target="_blank">
            <Button color="primary" auto size={`sm`} >
              https://www.apekidsuniverse.com/
            </Button>
          </Link>
        </div>
      </div>

      <div className={`project-card-container`} data-aos="fade-up">
        <div className={`project-desc-1 base2`}>
        </div>

        <div className={`project-desc-2`}>
          <div className={`project-desc-2-header`}>
            <h3><HiOutlineFingerPrint className="project-card-icon" />Base Two</h3>
            <span className={`project-desc-2-type`}>Landing</span>
          </div>
          <p>Base Two is a full-service app development company that provides app development, design and consulting services for those who want to be successful. Based in Kuala Lumpur, Base Two is a unique blend of creative designers, tech savvy developers and awesome project managers.</p>

          <div className={`project-desc-2-icons-container`}>
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
          <Link href="https://base2.my/" className="project-desc-2-btn-text" target="_blank">
            <Button color="secondary" auto size={`sm`} >
              https://base2.my/
            </Button>
          </Link>
        </div>
      </div>

      <div className={`project-card-container hoverXright`} data-aos="fade-up">
        <div className={`project-desc-1 autopit`}>
        </div>

        <div className={`project-desc-2`}>
          <div className={`project-desc-2-header`}>
            <h3><HiOutlineFingerPrint className="project-card-icon" />Autopit</h3>
            <span className={`project-desc-2-type`}>Services/E-Commerce</span>
          </div>
          <p>AutoPit was founded in the year 2022, focusing to provide customers with a professional car shopping experience, the primary position of the company's main service is to source used cars namely, recon cars imported from places such as Japan, Australia, or the UK. The price of these premium cars is cheaper than the official imports which provide customers with plenty of new car purchases.</p>

          <div className={`project-desc-2-icons-container`}>
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
          <Link href="https://autopitonline.com/" className="project-desc-2-btn-text" target="_blank">
            <Button color="primary" auto size={`sm`} >
              https://autopitonline.com/
            </Button>
          </Link>
        </div>
      </div>

      <div className={`project-card-container`} data-aos="fade-up">
        <div className={`project-desc-1 tclam`}>
        </div>

        <div className={`project-desc-2`}>
          <h3>blah</h3>
          <PopoverItem 
            popover_image="/assets/images/tools-icons/nextjs.png"
            popover_desc=""
          />
        </div>
      </div>

      <div className={`project-card-container`} data-aos="fade-up">
        <div className={`project-desc-1 elysium`}>
        </div>

        <div className={`project-desc-2`}>
          <h3>blah</h3>
          <PopoverItem 
            popover_image="/assets/images/tools-icons/nextjs.png"
            popover_desc=""
          />
        </div>
      </div>

      <div className={`project-card-container`} data-aos="fade-up">
        <div className={`project-desc-1 udbio`}>
        </div>

        <div className={`project-desc-2`}>
          <h3>blah</h3>
          <PopoverItem 
            popover_image="/assets/images/tools-icons/nextjs.png"
            popover_desc=""
          />
        </div>
      </div>

      <div className={`project-card-container`} data-aos="fade-up">
        <div className={`project-desc-1 bizcentric`}>
        </div>

        <div className={`project-desc-2`}>
          <h3>blah</h3>
          <PopoverItem 
            popover_image="/assets/images/tools-icons/nextjs.png"
            popover_desc=""
          />
        </div>
      </div>

      <div className={`project-card-container hoverXright`} data-aos="fade-up">
        <div className={`project-desc-1 fresotech`}>
        </div>

        <div className={`project-desc-2`}>
          <h3>blah</h3>
          <PopoverItem 
            popover_image="/assets/images/tools-icons/nextjs.png"
            popover_desc=""
          />
        </div>
      </div>

      <div className={`project-card-container`} data-aos="fade-up">
        <div className={`project-desc-1 shawarma`}>
        </div>

        <div className={`project-desc-2`}>
          <h3>blah</h3>
          <PopoverItem 
            popover_image="/assets/images/tools-icons/nextjs.png"
            popover_desc=""
          />
        </div>
      </div>

      <div className={`project-card-container`} data-aos="fade-up">
        <div className={`project-desc-1 qcrental`}>
        </div>

        <div className={`project-desc-2`}>
          <h3>blah</h3>
          <PopoverItem 
            popover_image="/assets/images/tools-icons/nextjs.png"
            popover_desc=""
          />
        </div>
      </div>
    </>
  );
  
}
