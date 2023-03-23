import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { stack as Menu } from "react-burger-menu";

export default function Navbar() {

const [navBarOpen, setNavBarOpen] = useState(false);

const handleOpen = () => {
  setNavBarOpen(!navBarOpen);
};


  return (
    <div>
      <nav className="desktop-nav">
        <div className="logo-nav-links">
          <div className="logo">
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                width={100}
                height={100}
                alt={"Pink and white round logo with a paintbrush"}
              />
            </Link>
          </div>
          <div className="nav-links">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About Us</Link>
            <Link href={"/sessions"}>Sessions</Link>
            <Link href={"/whatsOn"}>Events</Link>
          </div>
        </div>
        <div className="donate-btn-container">
          <Link
            href={"https://uk.virginmoney.com/service/virgin-money-giving/"}
            target={"_blank"}
          >
            <button className="donate-btn">Donate</button>
          </Link>
        </div>
      </nav>

      <nav className="mobile-nav">
        <div className="mobile-logo">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              width={70}
              height={70}
              alt={"Pink and white round logo with a paintbrush"}
            />
          </Link>
        </div>

        <Menu right>
          {/* <button onClick={handleOpen} className="mobile-menu-btn">
          {navBarOpen ? 
            
            <div className='mobile-nav-links'>
              <div className='mobile-links-inner'>
                
                <div>
                  <Link href={"/"}>Home</Link>
                  <Link href={"/about"}>About Us</Link>
                  <Link href={"/sessions"}>Sessions</Link>
                  <Link href={"/whatsOn"}>Events</Link>
                  <Link
                    href={"https://uk.virginmoney.com/service/virgin-money-giving/"}
                    target={"_blank"}
                  > Donate
                      </Link>
                </div>
                <div >
                  <img src={'/close.svg'} width={40} height={40} alt={'close mobile menu button'} className='close-btn'/>
                </div>
              </div>
              
              </div>
           
         : <div></div>
            }

          <Image src={'/burger-menu.svg'} width={40} height={40} alt={'mobile menu'} />
          </button> */}
          <div className="mobile-nav-links">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About Us</Link>
            <Link href={"/sessions"}>Sessions</Link>
            <Link href={"/whatsOn"}>Events</Link>
            <Link
              href={"https://uk.virginmoney.com/service/virgin-money-giving/"}
              target={"_blank"}
            >
              {" "}
              Donate
            </Link>
          </div>
        </Menu>
      </nav>
    </div>
  );
}
