import React from "react";
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-info text-center text-white py-20">
      <div className="flex gap-4 items-center justify-center my-2">
      <FaFacebook className="w-8 h-8 hover:text-primary" />
      <FaInstagram className="w-8 h-8 hover:text-primary" />
      <FaYoutube className="w-8 h-8 hover:text-primary" />
      <FaTwitter className="w-8 h-8 hover:text-primary" />
      </div>
      <p>This website is designed and developed by @Prohor Banik</p>
      <p>CopyRight © 2025 Prohor. All rights reserved</p>
    </div>
  );
};

export default Footer;
