import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { navVariants } from "../utils/motion";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { coat_of_arms, au_icon } from "../assets";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className={`${styles.paddingX} py-12 absolute top-0 left-0 w-full z-10 bg-gradient-mask`}
    >
      <div className='absolute w-[80%] inset-0 flex justify-between items-center max-w-7-xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2 align-center flex-nowrap'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={coat_of_arms}
            alt='logo'
            className='w-[4em] h-auto object-contain'
          />
          <div className='w-[1px] h-10 element-bg'></div>
          <img
            src={au_icon}
            alt='logo'
            className='w-[4em] h-auto object-contain'
          />
          &nbsp;
          <div className='flex flex-col flex-nowrap'>
            <span className='text-white text-[18px] font-bold font-poppins cursor-pointer'>
              Africa Climate&nbsp;
              <p className='sm:block hidden'>
                Summit&#44;&nbsp;
                <span className='font-poppins font-extralight'>2023</span>
              </p>
            </span>
          </div>
        </Link>
        <ul
          className={`${
            isOpen ? "open" : "close"
          } list-none hidden sm:flex flex-row justify-center items-center flex-nowrap gap-5 navbar-menu`}
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-yellow" : "text-primary"
              } hover:text-yellow text-[1rem] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <Hamburger
          duration={0.3}
          toggled={isOpen}
          toggle={setIsOpen}
          easing='ease-in'
          className='absolute top-20 right-0 display-none z-30'
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
