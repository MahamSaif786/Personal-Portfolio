import React from 'react';
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
        
        {/* Left side: Links and Copyright */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <Link href="/privacy" className="text-xs hover:text-gray-400">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-xs hover:text-gray-400">
            Terms & Conditions
          </Link>
          <span className="text-xs">© 2024 Maham Saif. All rights reserved.</span>
        </div>

        {/* Right side: Social Icons */}
        <div className="flex gap-4">
          <Link href="https://github.com/MahamSaif786" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub className="text-xl" />
          </Link>
          <Link href="https://www.linkedin.com/in/maham-saif-996906306" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin className="text-xl" />
          </Link>
          <Link href="https://www.instagram.com/_maham_441/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaInstagram className="text-xl" />
          </Link>
          <Link href="https://www.facebook.com/share/1BnuaPeRVL/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaFacebook className="text-xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
