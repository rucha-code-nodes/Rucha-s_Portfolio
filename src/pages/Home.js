

// src/pages/Home.js
import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import './Home.css';

// --- Assets Imports ---
import myImage from '../assets/mine.jpeg'; 
// Make sure to put your actual PDF files in the src/assets folder
import resumePdf from '../assets/RuchaPAhire.pdf'; 
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
  
Engineering scalable digital infrastructure with pixel-perfect precision. I build high-performance backends and intuitive interfaces that define the future of interaction.
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


// // src/pages/Home.js
// import React, { useLayoutEffect, useRef } from 'react';
// import { Github, Linkedin, Mail, FileText } from 'lucide-react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './Home.css';

// // --- Assets Imports ---
// import myImage from '../assets/mine.jpeg'; 
// import resumePdf from '../assets/RuchaPAhire.pdf'; 
// import internshipPdf from '../assets/vvbm_Rucha.pdf';

// // Register the ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const Home = () => {
//   // 1. Create Refs for the elements we want to animate
//   const heroRef = useRef(null);
//   const heroImageRef = useRef(null);
//   const experienceRef = useRef(null);

//   // 2. The Animation Logic
//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
      
//       // Animation: Move the Hero Image as user scrolls
//       gsap.to(heroImageRef.current, {
//         scrollTrigger: {
//           trigger: experienceRef.current, // When this section comes into view...
//           start: "top bottom",            // ...start the animation
//           end: "top center",              // ...end when it hits the center
//           scrub: 1,                       // Smooth scrubbing (1s lag for smoothness)
//         },
//         y: 150,          // Move down 150px
//         x: -50,          // Move left 50px
//         rotation: 10,    // Tilt 10 degrees
//         scale: 0.8,      // Shrink slightly
//         opacity: 0.5,    // Fade out a bit
//         ease: "power2.out"
//       });

//     }, heroRef); // Scope the selector to this component

//     return () => ctx.revert(); // Cleanup on unmount
//   }, []);

//   return (
//     <>
//       <section id="home" className="hero" ref={heroRef}>
//         <div className="hero-blob"></div>
        
//         {/* HERO IMAGE with Ref attached */}
//         <div className="hero-image-container" ref={heroImageRef}>
//            <img 
//              src={myImage} 
//              alt="Rucha Ahire" 
//              className="hero-image" 
//            />
//            <div className="hero-overlay-gradient"></div>
//         </div>

//         <div className="container" style={{position: 'relative', zIndex: 10, width: '100%'}}>
//           <span className="hero-greeting">Hey, I'm Rucha Ahire</span>
          
//           <h1 className="hero-title">
//             Full Stack <br />
//             <span className="gradient-text">Developer</span>
//           </h1>
          
//           <div className="hero-split">
//             <div className="hero-left-content">
              
//               <div className="hero-docs">
//                 <p className="hero-desc">
//                   Engineering scalable digital infrastructure with pixel-perfect precision. 
//                   I build high-performance backends and intuitive interfaces that define the future of interaction.
//                 </p>

//                 <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="doc-btn primary">
//                   <FileText size={18} /> View Resume
//                 </a>
                
//               </div>
//             </div>
            
//             <div className="social-icons">
//                <SocialLink icon={<Github size={24} />} href="https://github.com/rucha-code-nodes" />
//                <SocialLink icon={<Linkedin size={24} />} href="https://linkedin.com/in/rucha-ahire09" />
//                <SocialLink icon={<Mail size={24} />} href="mailto:ahirerucha81@gmail.com" />
//             </div>
//           </div>

//           <div className="hero-stats">
//             <HeroStat number="01" title="Backend Development" desc="Node.js, Express, Flask" />
//             <HeroStat number="02" title="Frontend Design" desc="React, HTML5, CSS3" />
//             <HeroStat number="03" title="Database Management" desc="MySQL, MongoDB, Redis" />
//             <HeroStat number="04" title="AI / ML Integration" desc="Intelligent features & Models" />
//           </div>
//         </div>
//       </section>

//       {/* --- Experience Bar (Trigger Section) --- */}
//       {/* Attached experienceRef here so ScrollTrigger knows when to start */}
//       <section className="experience-bar" ref={experienceRef}>
//         <div className="container experience-content">
//           <span className="experience-label">Experience & Internships</span>
//           <div className="logos">
            
//             {/* VVBM Studios */}
//             <a 
//               href={internshipPdf} 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="logo-item active-role"
//               style={{ textDecoration: 'none', cursor: 'pointer' }}
//               title="View Internship Letter"
//             >
//                <div className="dot pulse" style={{backgroundColor: '#ff4d24'}}></div>
//                <span className="logo-text">
//                  VVBM Studios <span className="logo-sub">(Node.js Intern)</span>
//                </span>
//             </a>

//              {/* Smart Logic */}
//             <a 
//                href="https://drive.google.com/file/d/13NH6WLnae5qCM1KWn1qpgh26IBTtFTUG/view" 
//                target="_blank" 
//                rel="noopener noreferrer"
//                className="logo-item"
//                style={{ textDecoration: 'none', cursor: 'pointer' }}
//                title="View Smart Logic Experience"
//             >
//                <div className="dot" style={{backgroundColor: '#ff4d24'}}></div>
//                <span className="logo-text">Smart Logic Technologies</span>
//             </a>
            
//             {/* CodeCraft */}
//             <a 
//                href="https://drive.google.com/file/d/1EQP3ogKT8M6hIVrQ4xq34ucaJH2HlLu9/view" 
//                target="_blank" 
//                rel="noopener noreferrer"
//                className="logo-item"
//                style={{ textDecoration: 'none', cursor: 'pointer' }}
//                title="View CodeCraft Experience"
//             >
//                <div className="dot" style={{backgroundColor: '#ff4d24'}}></div>
//                <span className="logo-text">CodeCraft Networks</span>
//             </a>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// // Sub-components
// const HeroStat = ({ number, title, desc }) => (
//   <div className="stat-card group">
//     <span className="stat-number">#{number}</span>
//     <h3 className="stat-title">{title}</h3>
//     <p className="stat-desc">{desc}</p>
//   </div>
// );

// const SocialLink = ({ icon, href }) => (
//   <a href={href} target="_blank" rel="noreferrer" className="social-link">
//     {icon}
//   </a>
// );

// export default Home;