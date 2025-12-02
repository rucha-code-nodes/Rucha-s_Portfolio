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
              I'm a Full Stack Developer focused on building clean, efficient, and scalable applications that solve real-world problems. With a background in IoT and Backend systems, I bridge the gap between hardware data and user interfaces.
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