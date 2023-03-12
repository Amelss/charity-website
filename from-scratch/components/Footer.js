import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-links">
            <div className="quick-links">
              <h3>Quick Links</h3>
              <Link href={"/about"}>About Us</Link>
              <Link href={"/about"}>Meet the Team</Link>
              <Link href={"/sessions"}>Sessions</Link>
              <Link href={"https://uk.virginmoney.com/service/virgin-money-giving/"}
                target={"_blank"}>Donate</Link>
              <Link href={"https://uk.virginmoney.com/service/virgin-money-giving/"}
                target={"_blank"}>Supporting Us</Link>
            </div>

          <div className="address">
            <h3>From Scratch</h3>
            <p>5th Floor,
              87 Austland Road,
              London
              EC4M 2GH
              T: 020 7434 8423
            </p>
          </div>
        </div>
        <div className="company-info">
          <p>© 2023. From Scratch Limited is a company limited by guarantee and registered in England and Wales.
              Company registration 6718675, Charity registration 1029755.</p>
        </div>
       
      </footer>
    </div>
  );
}
