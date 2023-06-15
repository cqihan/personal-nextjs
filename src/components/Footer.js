import Link from 'next/link';
import { Tooltip, Button, Grid } from "@nextui-org/react";
import { SiTwitter, SiGithub, SiLinkedin,
  SiMyanimelist, SiOsu, SiTwitch, SiInstagram
} from "react-icons/si";

export default function Footer() {

  return (
    <>
      <footer className={`wrap-footer `} >

        <div className={`footer-container`}>
          <div className="footer-content-1">
            <p className="f-name-1">Qi Han Chan</p>
            <p className="f-name-2">Front-end Web Developer</p>
          </div>
          
          <div className="footer-content-2">
            <div className="f-icon-container">
              {/* <Tooltip content="myanimelist">
                <div className="f-icon-item-1">
                  <SiMyanimelist classname="f-icon-01"/>
                </div>
              </Tooltip> */}
              <Link href="https://twitter.com/c_qihan" className="f-icon-item-1" target="_blank" rel="noopener noreferrer">
                <SiTwitter />
              </Link>
              <Link href="https://github.com/cqihan" className="f-icon-item-1" target="_blank" rel="noopener noreferrer">
                <SiGithub />
              </Link>
              <Link href="https://www.linkedin.com/in/qi-han-chan-8500ba174/" className="f-icon-item-1" target="_blank" rel="noopener noreferrer">
                <SiLinkedin />
              </Link>
              <Link href="https://osu.ppy.sh/users/16319895" className="f-icon-item-7" target="_blank" rel="noopener noreferrer">
                <SiOsu />
              </Link>
              <Link href="https://www.twitch.tv/pucceu" className="f-icon-item-7" target="_blank" rel="noopener noreferrer">
                <SiTwitch />
              </Link>
              <Link href="https://www.instagram.com/pucceu.arc/?hl=en" className="f-icon-item-7" target="_blank" rel="noopener noreferrer">
                <SiInstagram />
              </Link>
            </div>
          </div>

        </div>

      </footer>
    </>
  )
}
