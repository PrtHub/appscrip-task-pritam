"use client";

import "./footer.css";
import Image from "next/image";
import { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { RiArrowDropDownFill, RiDropdownList } from "react-icons/ri";

const Footer = () => {
  const [isMuseOpen, setIsMuseOpen] = useState(false);
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  const toggleMuse = () => setIsMuseOpen(!isMuseOpen);
  const toggleLinks = () => setIsLinksOpen(!isLinksOpen);

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <section className="footer__top_section">
          <div className="footer__top_section__info">
            <span className="footer__top_section__info_heading">
              <h2>Be the first to know</h2>
              <p>Sign up for updates from mettā muse.</p>
            </span>
            <span className="footer__top_section__subscribe">
              <input
                type="text"
                placeholder="Your email address"
                className="footer__top_section__input"
              />
              <button className="footer__top_section__button">Subscribe</button>
            </span>
          </div>
          <div className="footer__top_section__contact">
            <span className="footer__top_section__contact_info">
              <h2>CONTACT US</h2>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </span>
            <div className="footer__top_section__contact_divider"/>
            <span className="footer__top_section__currency">
              <h2>Currency</h2>
              <h3>
                <Image src={"/usa.png"} alt="usa logo" width={20} height={20} />
                USD
              </h3>
              <p>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </span>
          </div>
        </section>
        <div className="divider" />
        <section className="footer__bottom_section">
          <ul className="footer__bottom_section__list">
            <h2 className="footer__bottom_section__list_heading">mettā muse</h2>
            <li className="footer__bottom_section__list_item">About Us</li>
            <li className="footer__bottom_section__list_item">Stories</li>
            <li className="footer__bottom_section__list_item">Artisans</li>
            <li className="footer__bottom_section__list_item">Boutiques</li>
            <li className="footer__bottom_section__list_item">Contact Us</li>
            <li className="footer__bottom_section__list_item">
              EU Compliances Docs
            </li>
          </ul>
          <ul className="footer__bottom_section__muse_list">
            <span
             onClick={toggleMuse}
             style={{
               width: "100%",
               display: "flex",
               alignItems: "start",
               justifyContent: "space-between",
               cursor: "pointer",
             }}
            >

            <h2 className="footer__bottom_section__muse_list_heading">
              mettā muse
            </h2>
            <RiArrowDropDownFill size={30} />
            </span>
            {isMuseOpen && (
              <>
                <li className="footer__bottom_section__muse_list_item">
                  About Us
                </li>
                <li className="footer__bottom_section__muse_list_item">
                  Stories
                </li>
                <li className="footer__bottom_section__muse_list_item">
                  Artisans
                </li>
                <li className="footer__bottom_section__muse_list_item">
                  Boutiques
                </li>
                <li className="footer__bottom_section__muse_list_item">
                  Contact Us
                </li>
                <li className="footer__bottom_section__muse_list_item">
                  EU Compliances Docs
                </li>
              </>
            )}
          </ul>
          <ul className="footer__bottom_section__list">
            <h2 className="footer__bottom_section__list_heading">
              QUICK LINKS
            </h2>
            <li className="footer__bottom_section__list_item">
              Orders & Shipping
            </li>
            <li className="footer__bottom_section__list_item">
              Join/Login as a Seller
            </li>
            <li className="footer__bottom_section__list_item">
              Payment & Pricing
            </li>
            <li className="footer__bottom_section__list_item">
              Return & Refunds
            </li>
            <li className="footer__bottom_section__list_item">FAQs</li>
            <li className="footer__bottom_section__list_item">
              Privacy Policy
            </li>
            <li className="footer__bottom_section__list_item">
              Terms & Conditions
            </li>
          </ul>
          <ul className="footer__bottom_section__links_list">
            <span
              onClick={toggleLinks}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "start",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              <h2 className="footer__bottom_section__links_list_heading">
                QUICK LINKS
              </h2>
              <RiArrowDropDownFill size={30} />
            </span>
            {isLinksOpen && (
              <>
                <li className="footer__bottom_section__links_list_item">
                  Orders & Shipping
                </li>
                <li className="footer__bottom_section__links_list_item">
                  Join/Login as a Seller
                </li>
                <li className="footer__bottom_section__links_list_item">
                  Payment & Pricing
                </li>
                <li className="footer__bottom_section__links_list_item">
                  Return & Refunds
                </li>
                <li className="footer__bottom_section__links_list_item">
                  FAQs
                </li>
                <li className="footer__bottom_section__links_list_item">
                  Privacy Policy
                </li>
                <li className="footer__bottom_section__links_list_item">
                  Terms & Conditions
                </li>
              </>
            )}
          </ul>
          <div className="footer__bottom_section__additional">
            <div className="footer__bottom_section__follow">
              <h2 className="footer__bottom_section__follow_heading">
                Follow US
              </h2>
              <span className="footer__bottom_section__follow_icons">
                <BsInstagram />
                <FaLinkedin />
              </span>
            </div>
            <div className="additional__divider"/>
            <div className="footer__bottom_section__payments">
              <h1 className="footer__bottom_section__payments_heading">
                mettā muse Accepts
              </h1>
              <span className="footer__bottom_section__payments_icons">
                <Image
                  src={"/gpay.png"}
                  alt="Google Pay logo"
                  width={56}
                  height={35}
                />
                <Image
                  src={"/mastercard.png"}
                  alt="Master Card logo"
                  width={56}
                  height={35}
                />
                <Image
                  src={"/paypal.png"}
                  alt="Paypal logo"
                  width={56}
                  height={35}
                />
                <Image
                  src={"/amex.png"}
                  alt="Amex logo"
                  width={56}
                  height={35}
                />
                <Image
                  src={"/applepay.png"}
                  alt="Apple Pay logo"
                  width={56}
                  height={35}
                />
              </span>
            </div>
          </div>
        </section>

        <p className="footer__copyright">Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
