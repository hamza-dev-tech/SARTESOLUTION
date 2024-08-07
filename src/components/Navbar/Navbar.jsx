"use client";

import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { RxCross2 } from "react-icons/rx";
import { BiMenuAltRight } from "react-icons/bi";
import { useScroll } from "framer-motion";
import Link from "next/link";
import AuthLinks from "../Blog/authLinks/AuthLinks";
import Image from "next/image";
import { useSession } from "next-auth/react";

import logo from "/public/sarte-solution-logo-wb.png";


const Navbar = () => {
  const { data: session, status } = useSession();
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const [color, setColor] = useState("white");
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY.get() > 200) {
        setNavStyle("sticky");
        setColor("#00caf9");
      } else {
        setNavStyle("");
        setColor("white");
      }
    };

    handleScroll();
    return scrollY.onChange(handleScroll);
  }, [scrollY]);

  return (
    <div className={`n-wrapper ${navStyle}`}>
      {/* Desktop Version */}
      <div className="container">
        <div className="n-container">
          {/* Left side */}
          <div className="n-logo" style={{ textDecoration: "none", margin:0, padding:0 }}>
            <Link style={{ textDecoration: "none", margin:0, padding:0 }} href="/">
              <Image
                 src={logo}
                alt="Sarte Solution Logo"
                width={50} // Adjust the width as needed
                height={50} // Adjust the height as needed
              />
            </Link>
          </div>

          {/* Right Side */}
          <div className="n-right">
            <div className="n-menu">
              <a href="/">
                <span className="text" style={{ color: color, textDecoration: "none" }}>Home</span>
              </a>
              <a href="/services">
                <span className="text" style={{ color: color, textDecoration: "none" }}>Services</span>
              </a>
              <a style={{ color: color, textDecoration: "none" }} href="/about">
                <span className="text" style={{ color: color, textDecoration: "none" }}>About</span>
              </a>
              <a style={{ color: color, textDecoration: "none" }} href="/blog">
                <span className="text" style={{ color: color, textDecoration: "none" }}>Blog</span>
              </a>
              <AuthLinks color={color} />
              {session?.user?.image && (
                <Image
                  src={session.user.image}
                  alt="User Image"
                  width={40}
                  height={40}
                  className="avatar"
                />
              )}
              <a className="JoinBtn" href="/contact">
                <span className="text" style={{ color: 'var(--light-bg)', textDecoration: "none", lineHeight: 1 }}>Contact</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Version */}
      <div className="nm-container">
        {/* Logo */}
        <Link style={{ textDecoration: "none" }} href="/">
          <div className="n-logo" onClick={() => setMobileMenuOpened(false)}>
            <Image
               src={logo}
                alt="Sarte Solution Logo"
              width={40} // Adjust the width as needed
              height={40} // Adjust the height as needed
            />
          </div>
        </Link>

        {/* Menu Icon */}
        {!mobileMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}

        {/* Mobile Menu */}
        <div
          className="nm-menu"
          style={{
            transform: mobileMenuOpened
              ? "translateX(0%)"
              : "translateX(-100%)",
          }}
        >
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/"
            onClick={() => setMobileMenuOpened(false)}
          >
            Home
          </a>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/services"
            onClick={() => setMobileMenuOpened(false)}
          >
            Services
          </a>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/about"
            onClick={() => setMobileMenuOpened(false)}
          >
            About
          </a>

          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/blog"
            onClick={() => setMobileMenuOpened(false)}
          >
            Blog
          </a>
          <AuthLinks />
          <a
            style={{ textDecoration: "none", marginTop: "30px" }}
            className="m-JoinBtn"
            href="/contact"
            onClick={() => setMobileMenuOpened(false)}
          >
            Contact
          </a>
          {session?.user?.image && (
            <Image
              src={session.user.image}
              alt="User Image"
              width={40}
              height={40}
              className="avatar"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
