// src/pages/About.js
import React from 'react';
import { ArrowRight } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section bg-dark">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="subtitle">Behind the Code</span>
            <h2 className="section-title">
              Shaping Experiences That Make Life Simpler
            </h2>
          </div>
          <div style={{maxWidth: '32rem'}}>
            <p style={{color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '1.5rem'}}>
  Full Stack Developer by title, <strong>problem-solver</strong> by nature.  
  I build <strong>fast, scalable apps</strong> where <strong>backend power</strong>, <strong>smart databases</strong>, and <strong>frontend charm</strong> connect — making interfaces feel alive. ⚙️✨.   
  <strong> Quick learner</strong> & <strong>tech explorer</strong>, always ready for new challenges. 🚀💡
</p>

            <a href="#contact" className="btn-primary">
              Let's Build Something <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;