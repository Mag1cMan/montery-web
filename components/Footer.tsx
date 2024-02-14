'use client'
import { Typography, Button, IconButton } from "@material-tailwind/react";
const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];


import { faHeart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            as="a"
            href="http://localhost:3000"
            target="_blank"
            variant="h6"
            className="text-gray-900"
            placeholder={""}
          >
            Monterya
          </Typography>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                  placeholder={""}
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-6">
            <button className="icon-button" aria-label="YouTube">
              <FontAwesomeIcon className="icon" icon={faYoutube} />
            </button>
            <button className="icon-button" aria-label="Instagram">
              <FontAwesomeIcon className="icon" icon={faInstagram} />
            </button>
            <button className="icon-button" aria-label="Discord">
              <FontAwesomeIcon className="icon" icon={faDiscord} />
            </button>
            <button className="icon-button" aria-label="Facebook">
              <FontAwesomeIcon className="icon" icon={faFacebook} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
