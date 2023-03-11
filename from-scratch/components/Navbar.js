import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo-nav-links">
          <div className="logo">
            <Image src={"/logo.png"} width={100} height={100} />
          </div>
            <div className="nav-links">
              <Link href={'/'}>Home</Link>
              <Link href={'/'}>About Us</Link>
              <Link href={'/'}>Sessions</Link>
              <Link href={'/'}>Event</Link>
            </div>
          </div>
              <div className='donate-btn-container'>
                  <Link href={'/'}><button className='donate-btn'>Donate</button></Link>
              </div>
      </nav>
    </div>
  );
}
