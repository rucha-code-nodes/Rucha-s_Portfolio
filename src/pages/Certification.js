// src/pages/Certifications.js
import React from 'react';
import { Award, Trophy } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const items = [
   
    { 
      title: "C++ Bootcamp", 
      issuer: "IIT Bombay",
      year: "2025", 
      type: "cert" ,
       link: "https://drive.google.com/file/d/1lFyTw2Rgfe9FUIGkuWwtAViR3UfYMLLJ/view"
    },
    { 
      title: "Java (Spoken Tutorial)", 
      issuer: "IIT Bombay",
      year: "2024", 
      type: "cert" ,
       link: "https://drive.google.com/file/d/1AzR4rscMtC_DYpi52IbZX-2ZFDt664f4/view"
    },
    { 
      title: "Python Certification", 
      issuer: "Infosys Springboard",
      year: "2024", 
      type: "cert" ,
       link: "https://drive.google.com/file/d/14DsA9lgUTy_0Ea_JLXV_Hlev9AQPzJqF/view"
    },
    { 
      title: "Generative AI", 
      issuer: "Google Cloud",
      year: "2024", 
      type: "cert" ,
       link: "https://drive.google.com/file/d/1asOfHDQD5QKhcVM9w3aQ0pp3T7inWvET/view"
    },
    { 
      title: "Generative AI Course", 
      issuer: "HP LIFE",
      year: "2024", 
      type: "cert" ,
       link: "https://drive.google.com/file/d/1NLzqbOofaqXZLzYPgSKHddGK5bAFDQYn/view"
    },
     { 
      title: "Top 50 Finalist – Mercer | Mettl StackHack 2.0", 
      issuer: "Mercer | Mettl",
      year: "2024", 
      type: "achievement" ,
          link: "https://drive.google.com/file/d/1GVoEClhi5h80HrlI326i-tPk0yf-GteZ/view"
    },
    { 
      title: "Startup Bootcamp – Rajkot", 
      issuer: "AICTE",
      year: "2024-25", 
      type: "achievement" ,
       link: "https://drive.google.com/file/d/1rFmNkrmkmfngIS8B5KYlVRVfdLXznsQz/view"
    },
    { 
      title: "Startup Bootcamp – Sambhajinagar", 
      issuer: "AICTE",
      year: "2024-25", 
      type: "achievement" ,
       link: "https://drive.google.com/file/d/1WVQ4Mhjg6UTDdlC2xeBHODZKxkowoxVa/view"
    },
  ];

  return (
    <section id="certifications" className="section bg-dark">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="subtitle">Milestones</span>
            <h2 className="section-title">Certifications & Achievements</h2>
          </div>
        </div>

        <div className="cert-grid">
          {items.map((item, index) => (
            <div key={index} className="cert-card">
              <div className="cert-icon-box">
                {item.type === 'achievement' ? <Trophy size={20} /> : <Award size={20} />}
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{item.title}</h3>
                <p className="cert-issuer">{item.issuer} <span className="cert-dot">•</span> {item.year}</p>
              </div>
             {item.link && (
    <a href={item.link} target="_blank" rel="noopener noreferrer" className="cert-view">
      View
    </a>
  )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;