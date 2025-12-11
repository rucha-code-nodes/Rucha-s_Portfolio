





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
    shortDesc: "AI-powered personalization using HSV, OpenCV & XGBoost. Reduced user confusion by 50%.",
    image: AIAssistant,
    problem: "Users struggle to identify the right beauty clothes, products or hairstyles because skin tone and face shape vary widely. This leads to confusion, trial-and-error purchases, and low satisfaction.",
    solution: "Built an AI-driven feature analysis system that detects face shape and skin tone using OpenCV (HSV masking + feature extraction) and XGBoost classification. The platform auto-generates personalized color clothing, hairstyle & haircuts, and makeup recommendations, supported by an integrated AI chatbot for instant guidance.",
    userFlow: [
      "User logs in and uploads a selfie",
      "System extracts facial geometry and skin tone using HSV + ML",
      "AI maps detected features to recommendation database",
      "User receives a tailored beauty and style catalog",
      "AI chatbot assists with product explanations and queries"
    ],
    stack: ["React", "Flask", "OpenCV", "XGBoost", "Node.js", "MongoDB"],
    links: {
      demo: "https://drive.google.com/file/d/1iG7p3g4AQfmGWvPC-f8Be-BCJMrrZZFi/view",
      github: "https://github.com/rucha-code-nodes/AI_Smart_Beauty"
    }
  },

  {
    id: 2,
    title: "Student Management System",
    category: "CRUD Application",
    shortDesc: "Secure backend system with OTP, JWT & Cloudinary—cut manual reporting by 40%.",
    image: StudentManager,
    problem: "Colleges relied on Excel sheets and manual document handling, causing errors, slow scholarship processing, and difficulty tracking academic records. Data was scattered and updating profiles took unnecessary time.",
    solution: "Developed a full stack solution using HTML, CSS, JavaScript, Node.js and MongoDB featuring secure authentication (bcrypt, OTP, JWT), modular CRUD APIs, Cloudinary-based document storage, and automated filtering for scholarship eligibility. Centralizing student data reduced manual workload and improved reporting efficiency by 40%.",
    userFlow: [
      "User signs up or logs in using secured authentication",
      "User creates a profile and uploads required documents",
      "Files are stored in Cloudinary and linked in MongoDB",
      "Admin logs in to the dashboard",
      "Admin views, filters, or deletes academic, scholarship, or placement records",
      "System auto-filters students based on scholarship criteria",
      "Admin generates one-click reports"
    ],
    stack: ["Node.js", "Express", "MongoDB", "REST API", "HTML5", "CSS", "JavaScript",],
    links: {
      demo: "https://drive.google.com/file/d/1AjHdd2C_PzYZso3Y7xLnQzp2EqfoI5pK/view",
      github: "https://github.com/rucha-code-nodes/student-management-system"
    }
  },

  {
    id: 3,
    title: "MovieMood",
    category: "ML Recommender",
    shortDesc: "Real-time emotion detection using webcam + ML for mood-based movie suggestions.",
    image: MovieMood,
    problem: "Streaming platforms recommend movies based on history—not emotions. Users who feel stressed, sad, or overwhelmed don’t receive mood-aware recommendations that support emotional well-being.",
    solution: "Built a real-time emotion-based movie recommender using OpenCV for face detection and a MobileNetV3-based model for emotion classification. Flask processes the detected emotion and returns curated movie lists tailored to the user’s current mood.",
    userFlow: [
      "User grants webcam access",
      "ML model identifies emotion (Happy, Sad, Neutral, etc.)",
      "Backend maps emotion to predefined movie categories",
      "Curated movie recommendations appear instantly"
    ],
    stack: ["Python", "MobileNetV3", "Flask API", "HTML5", "CSS", "JavaScript"],
    links: {
      demo: "https://drive.google.com/file/d/1KdNTEOj1Awj8WrMvtxP50mAbxNDwvmym/view",
      github: "https://github.com/rucha-code-nodes/MoodMate"
    }
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