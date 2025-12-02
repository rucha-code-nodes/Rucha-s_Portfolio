// src/pages/Home.js
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Home.css';
import myImage from '../assets/my2.jpeg'; 


const Home = () => {
  return (
    <>
      <section id="home" className="hero">
        <div className="hero-blob"></div>
        
        {/* HERO IMAGE */}
        <div className="hero-image-container">
           <img 
             src={myImage} 
             alt="Rucha Ahire" 
             className="hero-image" 
           />
           <div className="hero-overlay-gradient"></div>
        </div>

        <div className="container" style={{position: 'relative', zIndex: 10, width: '100%'}}>
          <span className="hero-greeting">Hey, I'm Rucha Ahire</span>
          
          <h1 className="hero-title">
            Full Stack <br />
            <span className="gradient-text">Developer</span>
          </h1>
          
          <div className="hero-split">
            <p className="hero-desc">
              Great code should feel invisible. From backend architecture to intuitive interfaces, I build systems that connect and convert.
            </p>
            
            <div className="social-icons">
               <SocialLink icon={<Github size={20} />} href="https://github.com/rucha-code-nodes" />
               <SocialLink icon={<Linkedin size={20} />} href="https://linkedin.com/in/rucha-ahire09" />
               <SocialLink icon={<Mail size={20} />} href="mailto:ahirerucha81@gmail.com" />
            </div>
          </div>

          <div className="hero-stats">
            <HeroStat number="01" title="Backend Development" desc="Node.js, Express, Flask" />
            <HeroStat number="02" title="Frontend Design" desc="React, HTML5, CSS3" />
            <HeroStat number="03" title="Database Management" desc="MySQL, MongoDB, Redis" />
            <HeroStat number="04" title="AI / ML Integration" desc="Develop & Integrate ML models into websites to enable intelligent, automated features." />
           
          </div>
        </div>
      </section>

      {/* Experience Bar (Included in Home) */}
      <section className="experience-bar">
        <div className="container experience-content">
          <span className="experience-label">Experience & Internships</span>
          <div className="logos">
            <div className="logo-item">
               <div className="dot" style={{backgroundColor: 'white'}}></div>
               <span style={{fontWeight: 'bold', fontSize: '1.25rem'}}>Smart Logic Technologies</span>
            </div>
            <div className="logo-item">
               <div className="dot" style={{backgroundColor: 'var(--accent-color)'}}></div>
               <span style={{fontWeight: 'bold', fontSize: '1.25rem'}}>CodeCraft Networks</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Sub-components for Home
const HeroStat = ({ number, title, desc }) => (
  <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', cursor: 'pointer'}} className="group">
    <span style={{color: 'var(--accent-color)', fontWeight: 'bold', fontSize: '0.875rem'}}>#{number}</span>
    <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', margin: 0, transition: 'color 0.2s'}}>{title}</h3>
    <p style={{fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0}}>{desc}</p>
  </div>
);

const SocialLink = ({ icon, href }) => (
  <a href={href} target="_blank" rel="noreferrer" className="social-link">
    {icon}
  </a>
);

export default Home;