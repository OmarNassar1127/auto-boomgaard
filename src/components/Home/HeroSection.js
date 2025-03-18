import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';

function HeroSection() {
  const [mainVideoActive, setMainVideoActive] = useState(false);
  const [mainVideoPlaying, setMainVideoPlaying] = useState(false);
  
  const teaserVideoRef = useRef(null);
  const mainVideoRef = useRef(null);
  
  useEffect(() => {
    // Start teaser video automatically
    if (teaserVideoRef.current) {
      teaserVideoRef.current.play().catch(error => {
        console.error('Autoplay was prevented:', error);
      });
    }
  }, []);
  
  const handlePlayMainVideo = () => {
    if (mainVideoRef.current) {
      setMainVideoActive(true);
      
      // Pause teaser video
      if (teaserVideoRef.current) {
        teaserVideoRef.current.pause();
      }
      
      // Play main video
      mainVideoRef.current.play().then(() => {
        setMainVideoPlaying(true);
      }).catch(error => {
        console.error('Main video play was prevented:', error);
        setMainVideoActive(false);
      });
    }
  };
  
  const handlePauseMainVideo = () => {
    if (mainVideoRef.current && mainVideoPlaying) {
      mainVideoRef.current.pause();
      setMainVideoPlaying(false);
      
      // Resume teaser video
      if (teaserVideoRef.current) {
        setMainVideoActive(false);
        teaserVideoRef.current.play().catch(error => {
          console.error('Teaser video resume was prevented:', error);
        });
      }
    }
  };
  
  const scrollToContent = (e) => {
    e.preventDefault();
    const contentElement = document.getElementById('scroll');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="block block-full-screen has-background-image block-video video-element">
      <div className="block-bg-img-wrapper object-fit-wrapper object-fit-image-wrapper lazy-container">
        <img 
          src="https://www.akker.nl/wp-content/uploads/2019/08/VD-Akker-Dutch-Grand-Tour-Final-placeholder.jpg" 
          alt="Background" 
          className="block-bg-img"
        />
      </div>
      
      <div className="object-fit-wrapper video-wrapper video-wrapper-teaser-video">
        <video 
          ref={teaserVideoRef} 
          loop 
          muted 
          playsInline
          data-ratio-w="16" 
          data-ratio-h="9"
          style={{ marginTop: 0, objectPosition: "center top" }}
        >
          <source 
            type="video/mp4" 
            src="https://player.vimeo.com/progressive_redirect/playback/798333832/rendition/540p/file.mp4?loc=external&signature=978d8733740d0e978e4c1a224db4df066ac756d3841d7e7e54a37b08b89f2882" 
          />
        </video>
      </div>
      
      <div className={`object-fit-wrapper video-wrapper video-wrapper-main-video ${mainVideoActive ? 'active' : ''}`}>
        <video 
          ref={mainVideoRef} 
          loop
          controls={mainVideoPlaying}
          playsInline
          data-ratio-w="2048" 
          data-ratio-h="872"
          style={{ marginTop: 0, objectPosition: "center top" }}
        >
          <source 
            type="video/mp4" 
            src="https://player.vimeo.com/progressive_redirect/playback/798330733/rendition/720p/file.mp4?loc=external&signature=7a4d1e872b09f21b94c7676e013ac4fba2c87d79b9833a6c275079c93684c6d2" 
          />
        </video>
        <div className="pause-video pause-video-overlay" onClick={handlePauseMainVideo}></div>
      </div>
      
      <div className="block-box">
        <div className="block-inner">
          <div className="hero-content">
            <div className="item text">
              <h1>Premium specialist in <span className="dp-block-tablet-m">
                Audi, Bentley en Porsche
              </span></h1>
              <p>
                <a className="btn btn-no-border btn-light link-with-icon" href="/aanbod/">
                  <span className="svg-icon-aanbod" style={{marginRight: '10px', display: 'inline-flex', alignItems: 'center'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{position: 'relative', top: '-1px'}}>
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
                    </svg>
                  </span>
                  <span className="label" style={{display: 'inline-flex', alignItems: 'center'}}>BEKIJK AANBOD</span>
                </a>
              </p>
            </div>
          </div>
          
          <div className="col-row stick-to-bottom-wrapper">
            <div className="col col-24">
              <div className="col-wrapper">
                <div className="item text item-non-editable-text scroll-down-wrapper">
                  <p className="txt-c">
                    <a href="#scroll" className="link-with-icon" onClick={scrollToContent}>
                      <span className="svg-icon-scroll-down">
                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 5V19" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M19 12L12 19L5 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="label"> </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
