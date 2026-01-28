// // src/pages/About.js
// import React from 'react';
// import { ArrowRight } from 'lucide-react';
// import './About.css';

// const About = () => {
//   return (
//     <section id="about" className="section bg-dark">
//       <div className="container">
//         <div className="section-header">
//           <div>
//             <span className="subtitle">Behind the Code</span>
//             <h2 className="section-title">
//               Shaping Experiences That Make Life Simpler
//             </h2>
//           </div>
//           <div style={{maxWidth: '32rem'}}>
//             <p style={{color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '1.5rem'}}>
//   Full Stack Developer by title, <strong>problem-solver</strong> by nature.  
//   I build <strong>fast, scalable apps</strong> where <strong>backend power</strong>, <strong>smart databases</strong>, and <strong>frontend charm</strong> connect — making interfaces feel alive. ⚙️✨.   
//   <strong> Quick learner</strong> & <strong>tech explorer</strong>, always ready for new challenges. 🚀💡
// </p>

//             <a href="#contact" className="btn-primary">
//               Let's Build Something <ArrowRight size={18} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



// src/pages/About.js
import React from 'react';
import { ArrowRight, Terminal, Cpu, Globe } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section bg-dark">
      <div className="container">
        
        {/* --- Top Layout: Header & Bio --- */}
        <div className="about-grid">
          <div className="about-header">
            <span className="subtitle">Behind the Code</span>
            <h2 className="section-title">
              Engineering with <br />
              <span style={{color: '#ff4d24'}}>Precision & Purpose</span>
            </h2>
          </div>

          <div className="about-bio">
            <p className="bio-text">
              I am a Full Stack Developer passionate about building <strong>intelligent web applications</strong>. 
              My strength lies in combining <strong>MERN stack development</strong> with <strong>Machine Learning integrations</strong>—turning static websites into smart, data-driven solutions.
            </p>
            <p className="bio-text">
              From designing <strong>responsive UIs</strong> to writing <strong>efficient backend APIs</strong>, I enjoy the entire development lifecycle. 
              As a developer, I am focused on writing <strong>clean code</strong>, mastering <strong>system logic</strong>, and building software that solves real-world problems.
            </p>

            <a href="#contact" className="btn-primary">
              Let's Build Something <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* --- New Section: My Technical Philosophy (3D Cards) --- */}
        <div className="philosophy-grid">
            <PhilosophyCard 
                icon={<Terminal size={24} color="#ff4d24" />}
                title="Clean Architecture"
                desc="Writing modular, reusable code that scales without technical debt."
            />
            <PhilosophyCard 
                icon={<Cpu size={24} color="#ff4d24" />}
                title="Performance First"
                desc="Optimizing every render and API call for low-latency user experiences."
            />
            <PhilosophyCard 
                icon={<Globe size={24} color="#ff4d24" />}
                title="Real-World Impact"
                desc="Building accessible tools (like SanketSuraksha) that solve actual human problems."
            />
        </div>

      </div>
    </section>
  );
};

// Sub-component for clean code
const PhilosophyCard = ({ icon, title, desc }) => (
    <div className="phil-card">
        <div className="phil-icon-box">{icon}</div>
        <h3 className="phil-title">{title}</h3>
        <p className="phil-desc">{desc}</p>
    </div>
);

export default About;