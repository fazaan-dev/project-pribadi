import { IoMenuSharp } from "react-icons/io5";
import LogoNav from "../assets/image/logo.png";
import { NavabrMenu } from "../MockData/data";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="">
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffnes: 100, delay: 0.4 }}
          className="container flex justify-between
      items-center py-6 "
        >
          <div className="logo w-[120px]">
            <img src={LogoNav} alt="" />
          </div>
          {/* MENU */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-2">
              {NavabrMenu.map((items) => {
                return (
                  <li key={items.id}>
                    <a
                      href={items.link}
                      className="inline-block font-semibold
                    text-sm xl:text-md py-1 px-2 xl:px-3
                   text-primary hover:text-secondary
                   transition-all duration-300"
                    >
                      {items.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* BUTTON */}
          <IoMenuSharp
            className="xl:hidden block text-2xl cursor-pointer"
            onClick={toogleNavbar}
          />

          {/* Menu */}
          <div className="hidden lg:block space-x-6">
            <button
              className="text-primary font-semibold text-sm
          px-6 py-2 border border-gray-300 rounded-lg
           hover:!shadow-xl transition-all duration-300"
            >
              Sign In
            </button>
            <button
              className="px-6 py-2 bg-secondary
           rounded-lg text-sm text-white
           hover:bg-shadowSec 
           hover:!shadow-xl transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      </nav>
      {isOpen && (
        <div
          className="bg-secondary py-4 px-4
        rounded-xl w-96 mx-auto"
        >
          {NavabrMenu.map((items) => {
            return (
              <li key={items.id} className="list-none ">
                <a
                  href={items.link}
                  className="flex flex-col items-center
                justify-center text-herocolor py-2 hover:bg-white
                hover:text-secondary hover:rounded-xl
                transition-all duration-300 font-semibold "
                >
                  {items.title}
                </a>
              </li>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Navbar;
