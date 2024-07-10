import React from "react";
import Image from "next/image";
import Logo from "../../assets/img/white-logo.png";

const Footer = () => {
  return (
    <div>
      <div class="py-6 bg-gray-800 px-3">
        <div class="container mx-auto">
          <div class="flex items-center justify-center flex-col md:flex-row">
            <div class="md:mr-auto">
              <Image src={Logo} alt="SEO DIGIT" height="42" width="130" />
            </div>
            <div class="my-3 md:my-0">
              <ul class="flex items-center">
                <li class="mx-2">
                  <a href="#/" class="uppercase text-white hover:text-pink-500">
                    Blog
                  </a>
                </li>
                <li class="mx-2">
                  <a href="#/" class="uppercase text-white hover:text-pink-500">
                    Contact Us
                  </a>
                </li>
                <li class="mx-2">
                  <a href="#/" class="uppercase text-white hover:text-pink-500">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div class="text-sm text-white md:ml-auto">
              Seodigit Copyright © 2023
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
