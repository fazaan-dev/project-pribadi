import { useState } from "react";
import FooterBtc from "../assets/image/bitcoinfooter.png";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = ["English", "Spanish", "French", "German", "Chinese"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-herocolor w-[450px] md:w-[1150px] rounded-3xl h-[300px] mx-auto">
        <div className="flex justify-center items-center mx-auto my-auto">
          <div className="block md:flex items-center justify-center gap-16">
            <div className=" justify-center items-center gap-8 ">
              <img src={FooterBtc} alt="" className="py-4" />
              <button
                onClick={toggleDropdown}
                className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-8 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {selectedLanguage}
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="origin-top-right absolute right-[1080px] mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {languages.map((language, index) => (
                      <div
                        key={index}
                        onClick={() => handleSelect(language)}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                      >
                        {language}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex py-4 gap-6 text-2xl text-gray-400">
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
                <FaDiscord />
              </div>
              <p className="py-20 text-md text-gray-400 font-semibold">
                Copyright 2022 © Coinbank
              </p>
            </div>
            {/* footer1 */}
            <div className="flex gap-24 mb-12">
              <div className="space-y-4">
                <h1 className="text-xl font-semibold">Company</h1>
                <div className="text-dark2">
                  <ul className=" space-y-2 text-sm text-gray-400">
                    <li
                      className="cursor-pointer
                  hover:text-secondary duration-200"
                    >
                      About
                    </li>
                    <li
                      className="cursor-pointer
                  hover:text-secondary duration-200"
                    >
                      Careers
                    </li>
                    <li
                      className="cursor-pointer
                  hover:text-secondary duration-200"
                    >
                      Affiliates
                    </li>
                    <li
                      className="cursor-pointer
                  hover:text-secondary duration-200"
                    >
                      Press
                    </li>
                    <li
                      className="cursor-pointer
                  hover:text-secondary duration-200"
                    >
                      Investors
                    </li>
                    <li
                      className="cursor-pointer
                  hover:text-secondary duration-200"
                    >
                      Legal & Privacy
                    </li>
                  </ul>
                </div>
              </div>
              {/* FOOTER2 */}
              <div className="space-y-4">
                <h1 className="text-xl font-semibold">Features</h1>
                <div className="text-dark2">
                  <ul className=" space-y-2 text-sm text-gray-400">
                    <li
                      className="cursor-pointer
                  hover:text-secondary duration-200"
                    >
                      Buy & Sell Crypto
                    </li>
                    <li
                      className="cursor-pointer
                  hover:text-secondary duration-200"
                    >
                      Wallet
                    </li>
                    <li
                      className="cursor-pointer
                  hover:text-secondary duration-200"
                    >
                      Card
                    </li>
                    <li
                      className="cursor-pointer
                  hover:text-secondary duration-200"
                    >
                      Dashboard
                    </li>
                    <li
                      className="cursor-pointer
                  hover:text-secondary duration-200"
                    >
                      Trading
                    </li>
                    <li
                      className="cursor-pointer
                  hover:text-secondary duration-200"
                    >
                      Portfolio
                    </li>
                  </ul>
                </div>
              </div>
              {/* Footer 3 */}
              <div className="space-y-4">
                <h1 className="text-xl font-semibold">Developers</h1>
                <div className="text-dark2">
                  <ul className=" space-y-2 text-sm text-gray-400">
                    <li
                      className="cursor-pointer
                  hover:text-secondary duration-200"
                    >
                      Cloud
                    </li>
                    <li
                      className="cursor-pointer
                  hover:text-secondary duration-200"
                    >
                      Wallet SDK
                    </li>
                    <li
                      className="cursor-pointer
                  hover:text-secondary duration-200"
                    >
                      Query & Transact
                    </li>
                    <li
                      className="cursor-pointer
                  hover:text-secondary duration-200"
                    >
                      Commerce
                    </li>
                    <li
                      className="cursor-pointer
                  hover:text-secondary duration-200"
                    >
                      Exchange & Pro
                    </li>
                    <li
                      className="cursor-pointer
                  hover:text-secondary duration-200"
                    >
                      API Access
                    </li>
                  </ul>
                </div>
              </div>
              {/* Footer4 */}
              <div className="space-y-4">
                <h1 className="text-xl font-semibold">Resources</h1>
                <div className="text-dark2">
                  <ul className=" space-y-2 text-sm text-gray-400">
                    <li
                      className="cursor-pointer
                  hover:text-secondary duration-200"
                    >
                      Blog
                    </li>
                    <li
                      className="cursor-pointer
                  hover:text-secondary duration-200"
                    >
                      Help & Support
                    </li>
                    <li
                      className="cursor-pointer
                  hover:text-secondary duration-200"
                    >
                      Customer Stories
                    </li>
                    <li
                      className="cursor-pointer
                  hover:text-secondary duration-200"
                    >
                      FAQ
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default LanguageDropdown;
