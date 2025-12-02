// src/pages/Services.js
import React from 'react';
import { ArrowRight, Code, Server, Cpu } from 'lucide-react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="section bg-darker">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="subtitle">Services</span>
            <h2 className="section-title">What I Can Help You With</h2>
          </div>
          <div style={{textAlign: 'right'}}>
              <p style={{color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.5rem'}}>Let's solve problems together</p>
              <a href="mailto:ahirerucha81@gmail.com" style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'white', border: '1px solid #374151', padding: '0.5rem 1.5rem', borderRadius: '999px', textDecoration: 'none', fontSize: '0.875rem'}}>
                 Get in touch <ArrowRight size={14} />
              </a>
          </div>
        </div>

        <div className="grid-3">
          <ServiceCard 
            title="Full Stack Web Dev" 
            header="Robust & Scalable"
            desc="Building end-to-end web applications using the MERN stack. From database design to responsive frontend interfaces."
            icon={<Code size={24} />}
          />
          <ServiceCard 
            title="Backend API Design" 
            header="Efficient Logic"
            desc="Developing high-performance REST APIs with Node.js, Express, and Python Flask. Optimized for speed and security."
            icon={<Server size={24} />}
          />
          <ServiceCard 
            title="Database Management" 
            header="SQL & NoSQL"
            desc="Designing, managing, and querying databases. Skilled in MySQL, MongoDB, and optimizing data workflows." 
            icon={<Cpu size={24} />}
          />
        </div>
      </div>
    </section>
  );
};

// Sub-component
const ServiceCard = ({ title, header, desc, icon }) => (
  <div className="service-card">
    <div className="accent-line"></div>
    <div className="service-icon">{icon}</div>
    <span className="service-header">{header}</span>
    <h3 className="service-title">{title}</h3>
    <p className="service-desc">{desc}</p>
  </div>
);

export default Services;