'use client'

import './navbar.css'
import { Heart, Menu, Search, ShoppingBag, User } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {

  const [show, setShow] = useState(false)

  return (
    <nav className='navbar'>
       <section className='navbar__top_section'>
        <span className='navbar__menu'>
          <Menu size={24} onClick={() => setShow(!show)}/>
         <Image src={'/logo.png'} alt='logo' width={50} height={50} className='navbar__logo'/>
        </span>
         <h1 className='navbar__title'>LOGO</h1>
         <span className='navbar__icons'>
            <Search size={24}/>
            <Heart size={24}/>
            <ShoppingBag size={24}/>
           
         </span>
       </section>

       <section className='navbar__bottom_section'>
         <ul className='navbar__links'>
            <li>SHOP</li>
            <li>SKILLS</li>
            <li>STORIES</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
         </ul>
       </section>

       <AnimatePresence>
        {show && (
          <motion.ul
            className='navbar__mobile_nav'
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{ width: 170, height: 250, opacity: 1 }}
            exit={{ width: 0, height: 0, opacity: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          >
            <motion.li initial={{ opacity: 0, scale: 0.3, x: -50 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.2, delay: 0.1 }}>SHOP</motion.li>
            <motion.li initial={{ opacity: 0, scale: 0.3, x: -50 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.2, delay: 0.2 }}>SKILLS</motion.li>
            <motion.li initial={{ opacity: 0, scale: 0.3, x: -50 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.2, delay: 0.3 }}>STORIES</motion.li>
            <motion.li initial={{ opacity: 0, scale: 0.3, x: -50 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.2, delay: 0.4 }}>ABOUT</motion.li>
            <motion.li initial={{ opacity: 0, scale: 0.3, x: -50 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.2, delay: 0.5 }}>CONTACT US</motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar