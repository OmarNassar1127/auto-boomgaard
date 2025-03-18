import React, { useEffect, useState } from 'react';
import './Footer.css';

function Footer() {
  const [currentDay, setCurrentDay] = useState('');
  const [showroomStatus, setShowroomStatus] = useState({ open: false, times: '' });
  const [garageStatus, setGarageStatus] = useState({ open: false, times: '' });

  useEffect(() => {
    // Set current day and opening hours
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dayName = days[new Date().getDay()];
    setCurrentDay(dayName);
    
    // Set opening hours (this would normally come from an API or CMS)
    const openingHours = {
      monday: { showroom: '09:00-18:00', garage: '08:00-17:30' },
      tuesday: { showroom: '09:00-18:00', garage: '08:00-17:30' },
      wednesday: { showroom: '09:00-18:00', garage: '08:00-17:30' },
      thursday: { showroom: '09:00-18:00', garage: '08:00-17:30' },
      friday: { showroom: '09:00-18:00', garage: '08:00-17:30' },
      saturday: { showroom: '09:00-17:00', garage: '09:00-16:00' },
      sunday: { showroom: 'Gesloten', garage: 'Gesloten' },
    };
    
    // If we have opening hours for the current day
    if (openingHours[dayName]) {
      // Set showroom status
      if (openingHours[dayName].showroom === 'Gesloten') {
        setShowroomStatus({ open: false, times: 'Gesloten' });
      } else {
        setShowroomStatus({ open: true, times: openingHours[dayName].showroom });
      }
      
      // Set garage status
      if (openingHours[dayName].garage === 'Gesloten') {
        setGarageStatus({ open: false, times: 'Gesloten' });
      } else {
        setGarageStatus({ open: true, times: openingHours[dayName].garage });
      }
    }
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content container">
        {/* Top section - Logo and Contact Buttons */}
        <div className="footer-top">
          <div className="footer-logo-section">
            <a href="/" className="footer-logo">
              <h2 className="logo-text">Auto Boomgaard</h2>
            </a>
            <p className="footer-slogan">Premium specialist in <span>
              <a href="/aanbod/audi/">Audi</a>, <a href="/aanbod/bentley/">Bentley</a> &amp; <a href="/aanbod/porsche/">Porsche</a>
            </span></p>
          </div>
          <div className="footer-contact-btns">
            <a href="tel:+31499331881" className="btn" data-analytics="event" data-analytics-category="Footer" data-analytics-action="button" data-analytics-label="Bel ons">
              <i className="svg-icon svg-icon-phone">
                {/* SVG Phone Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/>
                </svg>
              </i> 
              <span className="label">0499 - 331 881</span>
            </a>
            <a href="mailto:info@vdakker.nl" className="btn">
              <i className="svg-icon svg-icon-mail">
                {/* SVG Mail Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </i> 
              <span className="label">E-MAIL</span>
            </a>
            <a className="btn" href="https://www.google.com/maps/dir//Autobedrijf+T.+van+den+Akker,+Steenovenseweg+1B,+5681+BA+Best,+Netherlands/@51.518553,5.3301338,12z" target="_blank" rel="noopener noreferrer">
              <i className="svg-icon svg-icon-marker">
                {/* SVG Marker Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                </svg>
              </i> 
              <span className="label">ROUTE</span>
            </a>
          </div>
        </div>

        {/* Middle section - Opening Hours, Address, and Navigation */}
        <div className="footer-middle">
          <div className="opening-hours">
            <div className="title">OPENINGSTIJDEN VANDAAG</div>
            <div className="opening-hours-item">
              <span className="status" style={{ backgroundColor: showroomStatus.open ? '#28a745' : '#dc3545' }}></span>
              <span className="place" style={{ textAlign: 'left' }}>Showroom</span>
              <span className="times">{showroomStatus.times}</span>
            </div>
            <div className="opening-hours-item">
              <span className="status" style={{ backgroundColor: garageStatus.open ? '#28a745' : '#dc3545' }}></span>
              <span className="place" style={{ textAlign: 'left' }}>Garage</span>
              <span className="times">{garageStatus.times}</span>
            </div>
          </div>

          <div className="address">
            <div>Steenovenseweg 1B</div>
            <div>5681 BA Best</div>
          </div>

          <div className="footer-nav">
            <div className="footer-nav-columns">
              <ul className="footer-nav-list">
                <li><a href="/">HOME</a></li>
                <li><a href="/over-vd-akker/">OVER Auto Boomgaard</a></li>
                <li><a href="/aanbod/">AANBOD</a></li>
                <li><a href="/diensten/">ONZE DIENSTEN</a></li>
              </ul>
              <ul className="footer-nav-list">
                <li><a href="/nieuws-media/">NIEUWS & MEDIA</a></li>
                <li><a href="/contact/">CONTACT</a></li>
                <li><a href="/privacy-policy/">PRIVACY POLICY</a></li>
                <li><a href="/cookiebeleid/">COOKIEBELEID</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section - Copyright, App Download, and Social Media */}
        <div className="footer-bottom">
          <div className="copyright">
            Copyright 2025 - Auto Boomgaard
          </div>
          
          <div className="social-media-links">
            <a href="https://www.facebook.com/pages/Vd-Akker/243312935679742" title="Facebook" target="_blank" rel="noopener noreferrer">
              <i className="svg-icon svg-icon-facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"/>
                </svg>
              </i>
            </a>
            <a href="https://instagram.com/akkernl/" title="Instagram" target="_blank" rel="noopener noreferrer">
              <i className="svg-icon svg-icon-instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.58.07-4.85.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63 3.35.95 2.68 1.36 2.01 2.01c-.65.65-1.06 1.32-1.38 2.13-.3.76-.5 1.64-.57 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.27 2.15.57 2.91.32.81.73 1.48 1.38 2.13.65.65 1.32 1.06 2.13 1.38.76.3 1.64.5 2.91.57C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.27 2.91-.57.81-.32 1.48-.73 2.13-1.38.65-.65 1.06-1.32 1.38-2.13.3-.76.5-1.64.57-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.27-2.15-.57-2.91-.32-.81-.73-1.48-1.38-2.13-.65-.65-1.32-1.06-2.13-1.38-.76-.3-1.64-.5-2.91-.57C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
                </svg>
              </i>
            </a>
            <a href="https://www.tiktok.com/@akkernl" title="TikTok" target="_blank" rel="noopener noreferrer">
              <i className="svg-icon svg-icon-tiktok">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44.02c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </i>
            </a>
            <a href="http://twitter.com/#!/Akkernl" title="Twitter" target="_blank" rel="noopener noreferrer">
              <i className="svg-icon svg-icon-twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/>
                </svg>
              </i>
            </a>
            <a href="https://www.youtube.com/user/AkkerMTM" title="YouTube" target="_blank" rel="noopener noreferrer">
              <i className="svg-icon svg-icon-youtube">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                  <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.86.55 9.38.55 9.38.55s7.52 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14c.5-1.88.5-5.81.5-5.81s0-3.93-.5-5.81zM9.5 15.29V8.71L15.85 12l-6.35 3.29z"/>
                </svg>
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;