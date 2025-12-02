// src/components/ProjectModal.js
import React, { useEffect } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => document.body.classList.remove('modal-open');
    }, []);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div>
                        <span style={{color: '#ff4d24', fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase'}}>{project.category}</span>
                        <h2 style={{fontSize: '2rem', fontWeight: 'bold', margin: '0.25rem 0 0 0'}}>{project.title}</h2>
                    </div>
                    <button onClick={onClose} style={{background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '0.5rem'}}>
                        <X size={24} />
                    </button>
                </div>
                
                <div className="modal-body">
                    <img src={project.image} alt={project.title} className="modal-img" />
                    
                    <div className="detail-section">
                        <span className="detail-title">The Problem</span>
                        <p className="detail-text">{project.problem}</p>
                    </div>
                    
                    <div className="detail-section">
                        <span className="detail-title">The Solution</span>
                        <p className="detail-text">{project.solution}</p>
                    </div>
                    
                    <div className="detail-section">
                        <span className="detail-title">User Flow</span>
                        <ul className="flow-list">
                            {project.userFlow.map((step, index) => (
                                <li key={index} className="flow-item">
                                    <span className="flow-number">0{index + 1}.</span>
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="detail-section">
                        <span className="detail-title">Technologies</span>
                        <div className="tag-container">
                            {project.stack.map(tech => (
                                <span key={tech} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="modal-actions">
                        <a href={project.links.demo} className="modal-btn btn-demo">
                            <ExternalLink size={18} /> Live Demo
                        </a>
                        <a href={project.links.github} className="modal-btn btn-github">
                            <Github size={18} /> View Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;