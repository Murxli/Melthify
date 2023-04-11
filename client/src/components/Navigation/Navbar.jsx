import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import logo from '../../assets/logo.png';

import "./Navbar.css";
const Navbar = (props) => {
  const {currentUser} = useAuth();
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
    <div className="navbar-container fixed top-0 left-0">
        <nav className={`navbar stroke ${scrolled ? 'scrolled' : 'bg-transparent'}`}>
        <Link
            to="/"
            onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
            }}
            className="flex items-center"
        >
          <img src={logo} alt="logo" className="h-12"/>
            <p className="logo px-1">melthify</p>
        </Link>
        <ul className="nav-items" style={{display: props.page === 'auth' || props.page === 'app' ? 'none':''}}>
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
        {!currentUser ? (
          <button>
            <a href="/login" style={{display: props.page === 'auth' ? 'none':''}}>Sign in</a>
          </button>
        ) : (
          props.page === 'app' ? (
          <form onSubmit={props.onHandleLogout}>
            <button className="rounded">Logout</button>
          </form>)  : 
          <button><a href="/app">Dashboard</a></button>
        )}
        </nav>
    </div>
  );
};

export default Navbar;
