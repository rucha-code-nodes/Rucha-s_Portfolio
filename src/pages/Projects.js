// src/pages/Projects.js
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ProjectModal from '../components/ProjectModal';
import './Projects.css';
import AIAssistant from '../assets/AIAssistant.png'
import StudentManager from '../assets/StudentManager.png'
import MovieMood from '../assets/MovieMood.png'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  

  const projects = [
    {
      id: 1,
      title: "Smart AI Beauty",
      category: "AI & React System",
      shortDesc: "Personalized recommendations using OpenCV & XGBoost. Reduced user confusion by 50%.",
      image: AIAssistant,
      problem: "Users often struggle to choose the right beauty products and hairstyles that match their unique skin tone and face shape, leading to decision paralysis and dissatisfaction.",
      solution: "Designed an AI-driven system that analyzes facial features using OpenCV and XGBoost. The application processes user images to determine skin tone and face shape, automatically generating hyper-personalized suggestions.",
      userFlow: [
        "User logs in and uploads a selfie",
        "System analyzes facial geometry and skin tone",
        "AI matches features with product database",
        "User receives a personalized style catalog",
        "Chat with AI chatbot for instant support"
      ],
      stack: ["React", "Flask", "OpenCV", "XGBoost", "Node.js", "MongoDB"],
      links: { demo: "#", github: "https://github.com/rucha-code-nodes/Smart_AI_Beauty" }
    },
    {
      id: 2,
      title: "Student Management System",
      category: "CRUD Application",
      shortDesc: "Backend-driven app managing records, cutting manual reporting by 40%.",
      image: StudentManager,
      problem: "Educational institutions faced significant delays and errors due to manual scholarship reporting and disorganized student record management using spreadsheets.",
      solution: "Built a robust backend-driven CRUD application using Node.js and Express. It centralizes student data, automates scholarship eligibility checks, and generates reports instantly.",
       userFlow: [
       "User signs up or logs in.",
  "User creates a profile.",
  "User uploads all documents and fills in required information.",
  "Profile is saved successfully.",
  "Admin logs in to the dashboard.",
  "Admin can view or delete student scholarship, academic, and placement records.",
  "System automatically filters students based on scholarship criteria.",
  "Admin can generate reports with a single click."

      ],
     
      stack: ["Node.js", "Express", "MongoDB", "REST API"],
      links: { demo: "#", github: "https://github.com/rucha-code-nodes/student-management-system" }
    },
    {
      id: 3,
      title: "MovieMood",
      category: "ML Recommender",
      shortDesc: "Webcam-based emotion detection for movie suggestions via Python API.",
      image: MovieMood,
      // "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1000",
      problem: "Current streaming and digital platforms do not account for users’ emotional states. People experiencing stress, burnout, or low moods don’t get personalized support or recommendations to help improve their mental well-being.",
      solution: "Developed a Machine Learning application that uses a webcam to detect the user's real-time emotion. A Python backend processes this emotion to fetch and recommend movies that match their current mood.",
      userFlow: [
        "User grants webcam access",
        "ML model detects emotion (e.g., Happy, Sad)",
        "Backend queries movie database for matching genre",
        "Curated list of movies is displayed"
      ],
      stack: ["Python", "Machine Learning", "Flask API", "Computer Vision"],
      links: { demo: "#", github: "#" }
    }
  ];

  return (
    <div id="projects" className="container">
      <div>
            <span className="subtitle">Projects</span>
            
           
          </div>
       <div className="grid-3">
        {projects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
                <div className="project-bg" style={{backgroundImage: `url(${project.image})`}}></div>
                <div className="project-overlay"></div>
                
                <div className="project-content">
                    <span className="project-cat">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.shortDesc}</p>
                    <div className="project-footer">
                        <span className="tech-stack-summary">{project.stack.slice(0, 3).join(' • ')}...</span>
                        <div className="arrow-icon">
                            <ArrowRight size={14} />
                        </div>
                    </div>
                </div>
            </div>
        ))}
       </div>

       {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default Projects;