import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
const Navbar = (props) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setActive(props.page);
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="navbar-container">
        <nav className={`navbar stroke ${scrolled ? 'scrolled' : 'bg-transparent'}`}>
        <Link
            to="/"
            onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
            }}
        >
            <p className="logo">melthify</p>
        </Link>
        <ul className="nav-items">
            <li
            className={`${
                active === 
                "About" ? "clicked" : ""
            }`}
            style={{display : active==='contact'?'none':'' }}
            onClick={() => {
                setToggle(!toggle);
                setActive("About");
            }}
            >
            <a href="/#about">About</a>
            </li>
            <li
            className={`${
                active === "Our-Services" ? "clicked" : "text-secondary"
            }`}
            style={{display : active==='contact'?'none':'block' }}
            onClick={() => {
                setToggle(!toggle);
                setActive("Our-Services");
            }}
            >
            <a href="/#services">Our Services</a>
            </li>
            <li
            className={`${
                active === 
                "why-us" ? "clicked" : "text-secondary"
            }`}
            onClick={() => {
                setToggle(!toggle);
                setActive("why-us");
            }}
            style={{display : active==='contact'?'none':'block' }}
            >
            <a href="/#why-us">Why us?</a>
            </li>
            <li  className={`${
                  active === 
                  "contact" ? "contact" : "text-secondary"
              }`}>
                <a href="/contact" onClick={() => {
                  setToggle(!toggle);
                  setActive("contact");
                  }}>Contact Us</a>
            </li>
        </ul>
        <button>
            <a href="/login">Sign in</a>
        </button>
        {/* <button><a href="/app">Dashboard</a></button> */}
        </nav>
    </div>
  );
};

export default Navbar;
