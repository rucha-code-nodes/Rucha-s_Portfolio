

// src/pages/Home.js
import React from 'react';
import { Github, Linkedin, Mail, FileText, Download } from 'lucide-react';
import './Home.css';

// --- Assets Imports ---
import myImage from '../assets/mine.jpeg'; 
// Make sure to put your actual PDF files in the src/assets folder
import resumePdf from '../assets/RuchaNAhire.pdf'; 
import internshipPdf from '../assets/vvbm_Rucha.pdf'; // Replace with actual Internship PDF if different

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
            <div className="hero-left-content">
             
 
              
              {/* --- Document Buttons --- */}
              <div className="hero-docs">
<p className="hero-desc">
  {/* Great code should feel invisible — like magic ✨. I craft strong backends, smart systems, and interfaces that user's love ❤️. */}
  I bring ideas to life ✨ — making apps that work beautifully and feel natural to use ❤️.
</p>


                <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="doc-btn primary">
                  <FileText size={18} /> View Resume
                </a>
                
              </div>
            </div>
            
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
            <HeroStat number="04" title="AI / ML Integration" desc="Intelligent features & Models" />
          </div>
        </div>
      </section>

      {/* --- Experience Bar --- */}
      <section className="experience-bar">
        <div className="container experience-content">
          <span className="experience-label">Experience & Internships</span>
          <div className="logos">
            
            {/* VVBM Studios (Active) - LINKED TO DOCUMENT */}
            <a 
              href={internshipPdf} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="logo-item active-role"
              style={{ textDecoration: 'none', cursor: 'pointer' }}
              title="View Internship Letter"
            >
               <div className="dot pulse" style={{backgroundColor: '#ff4d24'}}></div>
               <span className="logo-text">
                 VVBM Studios <span className="logo-sub">(Node.js Intern)</span>
               </span>
            </a>

             {/* Smart Logic Technologies - Linked */}
            <a 
               href="https://drive.google.com/file/d/13NH6WLnae5qCM1KWn1qpgh26IBTtFTUG/view" 
               target="_blank" 
               rel="noopener noreferrer"
               className="logo-item"
               style={{ textDecoration: 'none', cursor: 'pointer' }}
               title="View Smart Logic Experience"
            >
               <div className="dot" style={{backgroundColor: '#ff4d24'}}></div>
               <span className="logo-text">Smart Logic Technologies</span>
            </a>
            
            {/* CodeCraft Networks - Linked */}
            <a 
               href="https://drive.google.com/file/d/1EQP3ogKT8M6hIVrQ4xq34ucaJH2HlLu9/view" 
               target="_blank" 
               rel="noopener noreferrer"
               className="logo-item"
               style={{ textDecoration: 'none', cursor: 'pointer' }}
               title="View CodeCraft Experience"
            >
               <div className="dot" style={{backgroundColor: '#ff4d24'}}></div>
               <span className="logo-text">CodeCraft Networks</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

// Sub-components
const HeroStat = ({ number, title, desc }) => (
  <div className="stat-card group">
    <span className="stat-number">#{number}</span>
    <h3 className="stat-title">{title}</h3>
    <p className="stat-desc">{desc}</p>
  </div>
);

const SocialLink = ({ icon, href }) => (
  <a href={href} target="_blank" rel="noreferrer" className="social-link">
    {icon}
  </a>
);

export default Home;