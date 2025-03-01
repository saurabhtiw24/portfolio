import React from 'react';
import { FaLinkedin, FaGithub, FaTelegramPlane, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-32">
          <div>
            <ul className="flex space-x-5 justify-center pb-5">
              {/* LinkedIn */}
              <li className="text-3xl cursor-pointer hover:scale-110 duration-300 rounded-full">
                <a
                  href="https://www.linkedin.com/in/saurabh-tiwari-b617b8150/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              {/* GitHub */}
              <li className="text-3xl cursor-pointer hover:scale-110 duration-300 rounded-full">
                <a
                  href="https://github.com/saurabhtiw24"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              {/* Telegram */}
              <li className="text-3xl cursor-pointer hover:scale-110 duration-300 rounded-full">
                <a
                  href="https://t.me/ST204"
                  aria-label="Telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegramPlane />
                </a>
              </li>
              {/* Instagram */}
              <li className="text-3xl cursor-pointer hover:scale-110 duration-300 rounded-full">
                <a
                  href="https://www.instagram.com/tiwsaur_234/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
            <div className="border-t pt-5 mx-16 md:mx-[450px]" />
            <p className="text-center text-sm mt-4">&copy; 2025 MyTerritory. All rights reserved</p>
            <p className="text-center text-sm">Built and Deployed by Saurabh Tiwari</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
