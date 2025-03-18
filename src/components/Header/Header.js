import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
    // Find the checkbox and uncheck it
    const checkbox = document.getElementById("header-nav-checkbox");
    if (checkbox) checkbox.checked = false;
  };

  // Function to toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle scroll event to detect when page is scrolled
  // Handle clicks outside the menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById("header-nav-container");
      const menuButton = document.querySelector(".menu-button");

      if (
        menuOpen &&
        menu &&
        !menu.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        closeMenu();
      }
    };

    // Handle scroll events
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Handle resize events for responsiveness
    const handleResize = () => {
      // Close mobile menu if window is resized to desktop width while menu is open
      if (window.innerWidth > 850 && menuOpen) {
        closeMenu();
      }
    };

    // Add event listeners
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check
    handleScroll();

    // Clean up event listeners
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrolled, menuOpen, closeMenu]);

  return (
    <header
      id="site-header"
      className={`block block-full-width block-site-header block-site-header-show-extra-items block-site-header-hidden-nav block-site-header-overlay block-site-header-light ${
        scrolled ? "scrolled" : ""
      }`}
    >
      {/* Move checkbox here, inside the header component */}
      <input
        type="checkbox"
        id="header-nav-checkbox"
        className="header-nav-checkbox"
        checked={menuOpen}
        onChange={toggleMenu}
      />

      <label
        htmlFor="header-nav-checkbox"
        className="header-nav-toggle-overlay"
        onClick={closeMenu}
      ></label>

      <div className="">
        <div className="block-inner">
          {/* Logo */}
          <a href="/" className="header-logo">
            <div className="header-branding">
              <span className="company-name">Auto Boomgaard</span>
            </div>
          </a>

          {/* Top-right nav items */}
          <nav className="nav-extra">
            <ul className="hide-print">
              <li className="menu-item-occasions">
                <a href="/aanbod/">
                  <span className="label">AANBOD</span>
                </a>
              </li>
              <li className="menu-item-vacatures">
                <a href="/vacatures/">
                  <span className="label">VACATURES</span>
                  <span className="job-count-badge">1</span>
                </a>
              </li>
              <li className="menu-item-contact">
                <a href="/contact/">
                  <span className="label">CONTACT</span>
                </a>
              </li>
              <li className="menu-item-menu menu-item-icon">
                <label
                  htmlFor="header-nav-checkbox"
                  className="menu-button"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMenu();
                  }}
                >
                  <i className="svg-icon svg-icon-menu">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ minWidth: "36px", minHeight: "36px" }}
                    >
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                  </i>
                </label>
              </li>
            </ul>
          </nav>

          {/* Slide-out sidebar menu - Updated to match second design */}
          <nav
            className="header-nav-container hide-print"
            id="header-nav-container"
          >
            {/* Close button */}
            <div className="header-search-close-wrapper">
              <button
                type="button"
                className="header-close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <i className="svg-icon svg-icon-close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </i>
              </button>
            </div>

            {/* Search Bar - Added to match second image */}
            <div className="search-bar">
              <input type="text" placeholder="Zoek een occasion" />
              <i className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </i>
            </div>

            <ul className="header-nav-list">
              <li className="menu-item menu-item-home">
                <a href="/" title="">
                  HOME
                </a>
              </li>
              <li className="menu-item menu-item-over-vd-akker">
                <a href="/over-vd-akker/" title="">
                  OVER Auto Boomgaard
                </a>
              </li>
              <li className="menu-item menu-item-aanbod">
                <a href="/aanbod/" title="">
                  AANBOD
                </a>
                <div className="item-car-types">
                  <a href="/aanbod/?body=sports" className="car-type">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100.8 38"
                      width="100"
                      height="38"
                    >
                      <path
                        d="M100.2 29c0-.1-.1-1.9-1.4-2.9-.4-.6-2.1-2.8-5.5-4l-.1-.1c-.5-.6-2.1-2.2-5.4-3.1-3.5-.9-14.5-1.8-16-1.9-1.4-.7-13.2-6.8-20-7.9-6.4-1-15-.5-23.1 1.5-6.3 1.6-17.5 5.4-18.7 5.8H7.3L5.4 13h7.4c.4 0 .7-.3.7-.6 0-.4-.3-.6-.7-.6H4.3l-.6 1 2.1 3.8H4.2l-.6.9.9 1.9c-1.2.9-3.1 2.6-3.1 3.8V29c-.1 1 .5 3.4 3.6 3.8 3.1.4 10.1.9 11 1 1.5 2.6 4.3 4.3 7.4 4.3 2.8 0 5.4-1.3 7-3.6l42.7.9c1.6 1.7 3.9 2.7 6.2 2.7 2.2 0 4.4-.9 6-2.4l5 .1 10.1-.9.5-1-.9-1.2.2-3.7zm-70.7 4.3c-.2.3-.4.5-.5.8l-.3.3c-.1.1-.1.2-.2.2-1.3 1.3-3.1 2.1-5.1 2.1-1.9 0-3.7-.8-5-2l-.2-.2c-.1-.1-.2-.2-.2-.3-.4-.5-.7-.9-1-1.5l-.1-.1c-.5-1-.8-2-.8-3.2 0-3.9 3.3-7.2 7.2-7.2 4 0 7.2 3.2 7.2 7.2.1 1.5-.3 2.8-1 3.9zm55.1 1.2c-.1 0-.2.1-.3.2-1 1-2.3 1.7-3.6 1.9-.1 0-.3 0-.4.1H79.4c-4 0-7.2-3.2-7.2-7.2 0-3.9 3.3-7.2 7.2-7.2 4 0 7.2 3.2 7.2 7.2 0 1.9-.7 3.7-2 5zm5.6-.1l-4.5-.1c1-1.3 1.7-3 1.7-4.8 0-4.3-3.5-7.8-7.9-7.8s-7.9 3.5-7.9 7.8c0 1.7.5 3.2 1.5 4.5l-42.6-.9c.6-1.1.9-2.3.9-3.6 0-4.3-3.5-7.8-7.9-7.8s-7.9 3.5-7.9 7.8c0 1 .2 2 .6 2.9-1-.1-7.9-.6-10.8-1-2.5-.3-2.5-2.3-2.4-2.6V23c0-.4 1.4-1.9 3-3.1l.2-.8-.7-1.5h5c.1 0 12.1-4.1 18.8-5.8C37 10 45.4 9.4 51.7 10.4c5.5.9 14.8 5.4 18.3 7.1l-19.7-.1 24 1.2c3.8.4 10.7 1.1 13.3 1.7 3 .7 4.3 2.2 4.8 2.7.1.1.2.2.3.2l.2.1c3.5 1.1 5 3.6 5 3.6l.2.2c.9.5.9 1.8 1 1.8l-.4 3.7.1.4.4.5-9 .9z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="label">SPORTS</span>
                  </a>
                  <a href="/aanbod/?body=suv" className="car-type">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100.8 38"
                      width="100"
                      height="38"
                    >
                      <path
                        d="M92.6 13.2l-.3-.2C83.2 10 74 9.8 72.6 9.8c-1.4-.8-11-6-13.5-7.2C56.4 1.4 50.9.3 50.6.3c-.1 0-8.2-.4-17-.4-8.8.1-23.9 1.7-24 1.7-.4 0-.6.3-.6.7 0 .4.3.6.7.6.2 0 15.2-1.6 23.9-1.6s16.7.4 16.8.4c.1 0 5.6 1.1 8.1 2.2 2 .9 8.7 4.5 11.9 6.3l-22.1.2 24 .8h.2c.1 0 9.7-.1 19.3 3 .5.6 3.1 3.4 3.9 7.8.7 4.3-3.1 5.9-3.7 6.1l-3.8.5h-.8c0-4.7-3.9-8.6-8.7-8.6-4.8 0-8.7 3.9-8.7 8.6v.3l-38.8-.7c-.2-4.6-4-8.3-8.7-8.3-4.6 0-8.4 3.5-8.7 8h-.2l-7.8-4.2c-.2-1.7-.4-10.4.6-13 .4-.4 3.6-2.6 6.6-4.5.3-.2.4-.6.2-.9-.2-.3-.6-.4-.9-.2-6.8 4.2-7 4.8-7.1 5-1.2 3.3-.8 13.7-.8 14.2l.3.5 8.3 4.5h.1c.3 4.8 4.4 8.7 9.4 8.7 4.9 0 8.9-3.6 9.3-8.3l37.6.6c.8 4.4 4.7 7.7 9.2 7.7 4.8 0 8.7-3.4 9.3-8h.4l3.9-.5h.1c.1 0 5.5-1.9 4.6-7.6-.9-5.4-4.2-8.6-4.3-8.7zM22.4 36.7c-4.5 0-8.1-3.6-8.1-8s3.6-8 8.1-8 8.1 3.6 8.1 8-3.6 8-8.1 8zm56.3 0c-4.5 0-8.1-3.6-8.1-8s3.6-8 8.1-8 8.1 3.6 8.1 8c-.1 4.4-3.7 8-8.1 8z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="label">SUV</span>
                  </a>
                  <a href="/aanbod/?body=sedan" className="car-type">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100.8 38"
                      width="100"
                      height="38"
                    >
                      <path
                        d="M99.5 30c-.1-.8-.4-4.5-.5-5.3v-.2c0-1.5-.7-3.3-7.8-5.4-7.5-2.2-18-2.6-19.4-2.6-7.4-4.2-15.9-8.1-18.6-8.6-2.6-.5-11-.8-16.4-.6-6 .2-9.6 1.1-11.8 1.7-2.5.7-12.1 4.9-13.2 5.4l-9.8.9-.1 1.3 1 .3-1.7 7.5-1 .6-.2.4c0 .1-.2 2.8.1 4.2.3 1.6 3 2.7 3.5 2.9l9.4 1.3h1.9c1.4 2.4 4.1 4 7.1 4s5.6-1.6 7-4h42.7c1.4 2.4 4.1 4 7.1 4s5.6-1.6 7-4h4.5l9.5-1.4.5-1-.8-1.4zm-71.2 2.8l-.3.6-.1.1c-.2.2-.3.5-.5.7 0 .1-.1.1-.1.2-.1.2-.3.3-.5.5l-.2.2c-.2.2-.4.3-.6.5-.1.1-.2.1-.3.2-.1.1-.3.2-.4.2-.2 0-.3 0-.5.1-.1.1-.3.1-.5.2s-.4.1-.6.2c-.1 0-.3.1-.4.1-.2 0-.3.1-.5.1h-1.6c-.2 0-.3 0-.5-.1-.1 0-.3-.1-.4-.1-.2 0-.4-.1-.5-.2-.2-.1-.4-.1-.5-.2-.1 0-.2-.1-.3-.2-.2-.1-.3-.2-.5-.3-.1 0-.1-.1-.2-.1-.2-.2-.4-.3-.7-.5l-.2-.2-.5-.5-.1-.1c-.2-.2-.4-.5-.5-.7l-.1-.1c-.1-.2-.2-.4-.4-.6-.4-.9-.7-1.9-.7-2.9 0-3.8 3.1-6.8 6.9-6.8 3.8 0 6.9 3.1 6.9 6.8.1 1-.2 2-.6 2.9zM85 33s0 .1-.1.1c-1.2 2.1-3.4 3.5-6 3.5s-4.9-1.4-6-3.5c0 0 0-.1-.1-.1-.5-1-.8-2.1-.8-3.2 0-3.8 3.1-6.8 6.9-6.8s6.9 3.1 6.9 6.8c0 1.2-.3 2.3-.8 3.2zm5.4-.2h-4.5c.4-.9.6-1.9.6-2.9 0-4.1-3.4-7.5-7.6-7.5-4.2 0-7.6 3.4-7.6 7.5 0 1 .2 2 .6 2.9H29.1c.4-.9.6-1.9.6-2.9 0-4.1-3.4-7.5-7.6-7.5-4.2 0-7.6 3.4-7.6 7.5 0 1 .2 1.9.6 2.8h-1.8l-9.1-1.3c-1-.4-2.5-1.3-2.7-1.9-.2-1-.1-3-.1-3.6l.7-.9.2-.3 1.9-8.3-.1-.1 7.8-.7.2-.1c.1 0 10.6-4.6 13.1-5.4 2.3-.7 5.6-1.5 11.4-1.6 5.7-.2 13.9.2 16.2.6 2.1.4 9.3 3.5 16.7 7.6l-22.2-.2 24 1.2h.1c.1 0 11.4.2 19.3 2.6 6.8 2 6.9 3.6 6.9 4.2v.3c.1.8.5 5.3.5 5.3l.6 1.2-8.3 1.5z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="label">SEDAN</span>
                  </a>
                  <a href="/aanbod/" className="car-type all">
                    <div className="circle">
                      <svg width="38" height="38" viewBox="0 0 28px2">
                        <path d="M16.000,32.000 C7.163,32.000 0.000,24.837 0.000,16.000 C0.000,7.163 7.163,0.000 16.000,0.000 C24.837,0.000 32.000,7.163 32.000,16.000 C32.000,24.837 24.837,32.000 16.000,32.000 ZM16.000,1.792 C8.153,1.792 1.792,8.153 1.792,16.000 C1.792,23.847 8.153,30.208 16.000,30.208 C23.847,30.208 30.208,23.847 30.208,16.000 C30.208,8.153 23.847,1.792 16.000,1.792 ZM22.000,18.000 C21.171,18.000 20.500,17.328 20.500,16.500 C20.500,15.671 21.171,15.000 22.000,15.000 C22.828,15.000 23.500,15.671 23.500,16.500 C23.500,17.328 22.828,18.000 22.000,18.000 ZM16.000,18.000 C15.171,18.000 14.500,17.328 14.500,16.500 C14.500,15.671 15.171,15.000 16.000,15.000 C16.828,15.000 17.500,15.671 17.500,16.500 C17.500,17.328 16.828,18.000 16.000,18.000 ZM10.000,18.000 C9.172,18.000 8.500,17.328 8.500,16.500 C8.500,15.671 9.172,15.000 10.000,15.000 C10.828,15.000 11.500,15.671 11.500,16.500 C11.500,17.328 10.828,18.000 10.000,18.000 Z"></path>
                      </svg>
                    </div>
                    <span className="label">ALLE</span>
                  </a>
                </div>
              </li>
              <li className="menu-item menu-item-diensten">
                <a href="/diensten/" title="">
                  ONZE DIENSTEN
                </a>
              </li>
              <li className="menu-item menu-item-nieuws-media">
                <a href="/nieuws-media/" title="">
                  NIEUWS &amp; MEDIA
                </a>
              </li>
              <li className="menu-item menu-item-vacatures">
                <a href="/vacatures/" title="" className="jobs">
                  VACATURES
                </a>
              </li>
              <li className="menu-item menu-item-contact">
                <a href="/contact/" title="">
                  CONTACT
                </a>
              </li>
            </ul>

            <div className="social-media-icons">
              <a
                href="https://www.facebook.com/"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social-media facebook"
              >
                <i className="svg-icon svg-icon-facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </i>
                <span className="name">Facebook</span>
              </a>
              <a
                href="https://instagram.com/"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social-media instagram"
              >
                <i className="svg-icon svg-icon-instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </i>
                <span className="name">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/"
                title="TikTok"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social-media tiktok"
              >
                <i className="svg-icon svg-icon-tiktok">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                    <path d="M15 8v8" />
                    <path d="M9 16v-8" />
                    <path d="M15 8a4 4 0 0 0-4-4" />
                    <path d="M19 12a4 4 0 0 1-4 4" />
                  </svg>
                </i>
                <span className="name">TikTok</span>
              </a>
              <a
                href="https://twitter.com/"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social-media twitter"
              >
                <i className="svg-icon svg-icon-twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </i>
                <span className="name">Twitter</span>
              </a>
              <a
                href="https://www.youtube.com/"
                title="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social-media youtube"
              >
                <i className="svg-icon svg-icon-youtube">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </i>
                <span className="name">YouTube</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
