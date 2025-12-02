// import React, { useState, useEffect } from 'react';
// import { Menu, X, ArrowRight, Github, Linkedin, Mail, Server, Code, Cpu, ExternalLink } from 'lucide-react';

// // --- IMAGE IMPORT ---
// // Make sure you have the file 'my2.jpeg' inside an 'assets' folder in your src directory
// // If you don't have the image yet, comment out this line and uncomment the placeholder below
// // import myImage from './assets/my2.jpeg'; 

// import myImage from './assets/my2.jpeg';

// const App = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   // Handle scroll for navbar transparency
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   // --- PROJECT DATA (Problem, Solution, User Flow) ---
//   const projects = [
//     {
//       id: 1,
//       title: "Smart AI Beauty",
//       category: "AI & React System",
//       shortDesc: "Personalized recommendations using OpenCV & XGBoost. Reduced user confusion by 50%.",
//       image: "https://images.unsplash.com/photo-1596462502278-27bfdd403cc2?auto=format&fit=crop&q=80&w=1000",
//       problem: "Users often struggle to choose the right beauty products and hairstyles that match their unique skin tone and face shape, leading to decision paralysis and dissatisfaction.",
//       solution: "Designed an AI-driven system that analyzes facial features using OpenCV and XGBoost. The application processes user images to determine skin tone and face shape, automatically generating hyper-personalized suggestions.",
//       userFlow: [
//         "User logs in and uploads a selfie",
//         "System analyzes facial geometry and skin tone",
//         "AI matches features with product database",
//         "User receives a personalized style catalog"
//       ],
//       stack: ["React", "Flask", "OpenCV", "XGBoost", "Node.js", "MongoDB"],
//       links: { demo: "#", github: "#" }
//     },
//     {
//       id: 2,
//       title: "Student Manager",
//       category: "CRUD Application",
//       shortDesc: "Backend-driven app managing records, cutting manual reporting by 40%.",
//       image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000",
//       problem: "Educational institutions faced significant delays and errors due to manual scholarship reporting and disorganized student record management using spreadsheets.",
//       solution: "Built a robust backend-driven CRUD application using Node.js and Express. It centralizes student data, automates scholarship eligibility checks, and generates reports instantly.",
//       userFlow: [
//         "Admin dashboard login",
//         "Input/Update student academic records",
//         "Automated filter for scholarship criteria",
//         "One-click report generation"
//       ],
//       stack: ["Node.js", "Express", "MongoDB", "REST API"],
//       links: { demo: "#", github: "#" }
//     },
//     {
//       id: 3,
//       title: "MovieMood",
//       category: "ML Recommender",
//       shortDesc: "Webcam-based emotion detection for movie suggestions via Python API.",
//       image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1000",
//       problem: "Streaming platforms often overwhelm users with choices, and standard recommendation algorithms don't always account for the user's immediate emotional state.",
//       solution: "Developed a Machine Learning application that uses a webcam to detect the user's real-time emotion. A Python backend processes this emotion to fetch and recommend movies that match their current mood.",
//       userFlow: [
//         "User grants webcam access",
//         "ML model detects emotion (e.g., Happy, Sad)",
//         "Backend queries movie database for matching genre",
//         "Curated list of movies is displayed"
//       ],
//       stack: ["Python", "Machine Learning", "Flask API", "Computer Vision"],
//       links: { demo: "#", github: "#" }
//     }
//   ];

//   const navigation = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Services', href: '#services' },
//   ];

//   return (
//     <div className="app-container">
//       {/* --- CSS Styles --- */}
//       <style>{`
//         :root {
//           --bg-color: #0a0a0a;
//           --card-bg: #151515;
//           --text-primary: #ffffff;
//           --text-secondary: #9ca3af;
//           --accent-color: #ff4d24;
//           --border-color: #1f2937;
//           --font-main: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
//         }

//         * { box-sizing: border-box; }

//         body {
//           margin: 0;
//           font-family: var(--font-main);
//           background-color: var(--bg-color);
//           color: var(--text-primary);
//           overflow-x: hidden;
//         }
        
//         /* Stop scroll when modal is open */
//         body.modal-open { overflow: hidden; }

//         /* --- Layout Utilities --- */
//         .container {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 0 1.5rem;
//         }

//         .flex-between {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .btn-primary {
//           background-color: var(--accent-color);
//           color: white;
//           padding: 0.75rem 1.5rem;
//           border-radius: 9999px;
//           text-decoration: none;
//           font-weight: 500;
//           display: inline-flex;
//           align-items: center;
//           gap: 0.5rem;
//           transition: background-color 0.2s;
//         }
//         .btn-primary:hover {
//           background-color: #ff6a4a;
//         }

//         /* --- Navbar --- */
//         .navbar {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           z-index: 1000;
//           padding: 1.5rem 0;
//           transition: all 0.3s ease;
//         }
//         .navbar.scrolled {
//           background-color: rgba(10, 10, 10, 0.9);
//           backdrop-filter: blur(10px);
//           padding: 1rem 0;
//         }
        
//         .logo {
//           font-size: 1.5rem;
//           font-weight: 700;
//           letter-spacing: -0.05em;
//         }
//         .logo span { color: var(--accent-color); }

//         .nav-links {
//           display: none;
//         }
//         .nav-links a {
//           color: #d1d5db;
//           text-decoration: none;
//           font-weight: 500;
//           font-size: 0.9rem;
//           margin-right: 2rem;
//           transition: color 0.2s;
//         }
//         .nav-links a:hover { color: white; }

//         .contact-btn {
//           background-color: white;
//           color: black;
//           padding: 0.5rem 1.5rem;
//           border-radius: 9999px;
//           text-decoration: none;
//           font-weight: 600;
//           font-size: 0.875rem;
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           transition: background-color 0.2s;
//         }
//         .contact-btn:hover { background-color: #e5e7eb; }

//         .mobile-menu-btn {
//           background: none;
//           border: none;
//           color: white;
//           cursor: pointer;
//           display: block;
//         }

//         .mobile-menu {
//           position: absolute;
//           top: 100%;
//           left: 0;
//           width: 100%;
//           background-color: #111;
//           border-top: 1px solid var(--border-color);
//           padding: 1.5rem;
//           display: flex;
//           flex-direction: column;
//           gap: 1rem;
//         }
//         .mobile-menu a {
//           color: #d1d5db;
//           text-decoration: none;
//           font-size: 1.125rem;
//           font-weight: 500;
//         }

//         /* --- Hero Section & Image Styles --- */
//         .hero {
//           position: relative;
//           min-height: 100vh;
//           padding-top: 8rem;
//           padding-bottom: 5rem;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           overflow: hidden;
//           isolation: isolate; 
//         }

//         .hero-blob {
//           position: absolute;
//           top: 0;
//           right: 0;
//           width: 800px;
//           height: 800px;
//           background: radial-gradient(circle, var(--accent-color) 0%, #4c1d95 100%);
//           border-radius: 50%;
//           filter: blur(120px);
//           opacity: 0.1;
//           transform: translate(25%, -50%);
//           pointer-events: none;
//           z-index: -1;
//         }

//         .hero-image-container {
//           position: absolute;
//           top: 0;
//           right: 0;
//           width: 50vw; 
//           height: 100%;
//           z-index: 0; 
//           pointer-events: none; 
//         }

//         .hero-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           object-position: top center;
//           opacity: 0.6;
//           filter: grayscale(100%);
//           transition: all 0.5s ease;
//         }

//         .hero:hover .hero-image {
//           filter: grayscale(0%);
//           opacity: 0.8;
//         }

//         .hero-overlay-gradient {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(to right, var(--bg-color) 5%, transparent 60%),
//                       linear-gradient(to bottom, transparent 70%, var(--bg-color) 100%);
//           z-index: 1;
//         }

//         .hero-greeting {
//           color: var(--accent-color);
//           font-weight: 500;
//           margin-bottom: 1rem;
//           display: block;
//         }

//         .hero-title {
//           font-size: 3rem;
//           font-weight: 800;
//           line-height: 1.1;
//           margin-bottom: 2rem;
//         }
        
//         .gradient-text {
//           background: linear-gradient(to right, #ffffff, #6b7280);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .hero-split {
//           display: flex;
//           flex-direction: column;
//           gap: 3rem;
//         }

//         .hero-desc {
//           color: var(--text-secondary);
//           font-size: 1.125rem;
//           line-height: 1.6;
//           max-width: 28rem;
//         }

//         .social-icons {
//           display: flex;
//           gap: 1rem;
//         }
//         .social-link {
//           width: 2.5rem;
//           height: 2.5rem;
//           border-radius: 50%;
//           border: 1px solid var(--border-color);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: var(--text-secondary);
//           transition: all 0.2s;
//         }
//         .social-link:hover {
//           color: white;
//           border-color: var(--accent-color);
//           background-color: rgba(255, 77, 36, 0.1);
//         }

//         .hero-stats {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 2rem;
//           margin-top: 6rem;
//           border-top: 1px solid var(--border-color);
//           padding-top: 2rem;
//         }

//         /* --- Experience Bar --- */
//         .experience-bar {
//           background-color: #050505;
//           border-top: 1px solid #111;
//           border-bottom: 1px solid #111;
//           padding: 2.5rem 0;
//         }
//         .experience-content {
//           display: flex;
//           flex-direction: column;
//           gap: 2rem;
//           align-items: center;
//         }
//         .experience-label {
//           color: var(--text-secondary);
//           font-size: 0.875rem;
//           font-weight: 500;
//         }
//         .logos {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 3rem;
//           opacity: 0.7;
//           justify-content: center;
//         }
//         .logo-item {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//         }
//         .dot {
//           width: 0.5rem;
//           height: 0.5rem;
//           border-radius: 50%;
//         }

//         /* --- Sections General --- */
//         .section {
//           padding: 6rem 0;
//         }
//         .bg-dark { background-color: #0a0a0a; }
//         .bg-darker { background-color: #0f0f0f; }

//         .section-header {
//           display: flex;
//           flex-direction: column;
//           gap: 2.5rem;
//           margin-bottom: 4rem;
//         }
//         .subtitle {
//           color: var(--accent-color);
//           font-weight: 500;
//           display: block;
//           margin-bottom: 0.5rem;
//         }
//         .section-title {
//           font-size: 2.5rem;
//           font-weight: 700;
//           line-height: 1.2;
//           max-width: 32rem;
//         }

//         /* --- Projects Grid --- */
//         .grid-3 {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 2rem;
//         }

//         .project-card {
//           position: relative;
//           height: 400px;
//           background-color: var(--card-bg);
//           border-radius: 1rem;
//           overflow: hidden;
//           border: 1px solid var(--border-color);
//           cursor: pointer;
//           transition: border-color 0.3s;
//         }
//         .project-card:hover {
//           border-color: rgba(255, 77, 36, 0.5);
//         }
//         .project-bg {
//           position: absolute;
//           inset: 0;
//           background-size: cover;
//           background-position: center;
//           filter: grayscale(100%);
//           opacity: 0.4;
//           transition: all 0.5s;
//         }
//         .project-card:hover .project-bg {
//           filter: grayscale(0%);
//           transform: scale(1.05);
//         }
//         .project-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.9));
//           z-index: 10;
//         }
//         .project-content {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 100%;
//           padding: 2rem;
//           z-index: 20;
//           transform: translateY(0.5rem);
//           transition: transform 0.3s;
//         }
//         .project-card:hover .project-content {
//           transform: translateY(0);
//         }
//         .project-cat {
//           color: var(--accent-color);
//           font-size: 0.75rem;
//           font-weight: 700;
//           text-transform: uppercase;
//           letter-spacing: 0.05em;
//           margin-bottom: 0.5rem;
//           display: block;
//         }
//         .project-title {
//           font-size: 1.5rem;
//           font-weight: 700;
//           margin: 0 0 0.75rem 0;
//         }
//         .project-desc {
//           color: var(--text-secondary);
//           font-size: 0.875rem;
//           margin-bottom: 1rem;
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//         .project-footer {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           border-top: 1px solid var(--border-color);
//           padding-top: 1rem;
//         }
//         .tech-stack-summary {
//           font-size: 0.75rem;
//           color: #6b7280;
//           font-family: monospace;
//         }
//         .arrow-icon {
//           background: white;
//           color: black;
//           padding: 0.5rem;
//           border-radius: 50%;
//           opacity: 0;
//           transition: opacity 0.3s;
//           display: flex;
//         }
//         .project-card:hover .arrow-icon {
//           opacity: 1;
//         }

//         /* --- Modal Styles (NEW) --- */
//         .modal-overlay {
//           position: fixed;
//           inset: 0;
//           background-color: rgba(0, 0, 0, 0.85);
//           backdrop-filter: blur(5px);
//           z-index: 2000;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           padding: 1.5rem;
//           animation: fadeIn 0.3s ease;
//         }
        
//         .modal-content {
//           background-color: #111;
//           border: 1px solid var(--border-color);
//           border-radius: 1.5rem;
//           width: 100%;
//           max-width: 800px;
//           max-height: 90vh;
//           overflow-y: auto;
//           position: relative;
//           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
//           animation: slideUp 0.3s ease;
//         }

//         .modal-header {
//           position: sticky;
//           top: 0;
//           background-color: rgba(17, 17, 17, 0.95);
//           padding: 1.5rem 2rem;
//           border-bottom: 1px solid var(--border-color);
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           z-index: 10;
//         }

//         .modal-body {
//           padding: 2rem;
//         }

//         .modal-img {
//           width: 100%;
//           height: 300px;
//           object-fit: cover;
//           border-radius: 1rem;
//           margin-bottom: 2rem;
//         }

//         .detail-section {
//           margin-bottom: 2.5rem;
//         }

//         .detail-title {
//           color: var(--accent-color);
//           font-size: 0.875rem;
//           font-weight: 700;
//           text-transform: uppercase;
//           letter-spacing: 0.05em;
//           margin-bottom: 1rem;
//           display: block;
//         }

//         .detail-text {
//           color: #d1d5db;
//           line-height: 1.7;
//           font-size: 1rem;
//         }
        
//         .flow-list {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }
        
//         .flow-item {
//           display: flex;
//           gap: 1rem;
//           margin-bottom: 1rem;
//           color: #d1d5db;
//         }
        
//         .flow-number {
//           color: var(--accent-color);
//           font-weight: bold;
//           font-family: monospace;
//         }

//         .tag-container {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 0.75rem;
//         }

//         .tech-tag {
//           background-color: rgba(255, 255, 255, 0.05);
//           border: 1px solid var(--border-color);
//           padding: 0.5rem 1rem;
//           border-radius: 9999px;
//           font-size: 0.875rem;
//           color: #e5e7eb;
//         }
        
//         .modal-actions {
//             display: flex;
//             gap: 1rem;
//             margin-top: 2rem;
//         }
        
//         .modal-btn {
//             flex: 1;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             gap: 0.5rem;
//             padding: 1rem;
//             border-radius: 0.75rem;
//             font-weight: 600;
//             text-decoration: none;
//             transition: all 0.2s;
//         }
        
//         .btn-demo {
//             background-color: var(--accent-color);
//             color: white;
//         }
//         .btn-demo:hover { background-color: #ff6a4a; }
        
//         .btn-github {
//             background-color: rgba(255,255,255,0.1);
//             color: white;
//         }
//         .btn-github:hover { background-color: rgba(255,255,255,0.2); }

//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         @keyframes slideUp {
//           from { transform: translateY(20px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }

//         /* --- Services --- */
//         .service-card {
//           background-color: var(--card-bg);
//           padding: 2rem;
//           border-radius: 1rem;
//           border: 1px solid var(--border-color);
//           position: relative;
//           overflow: hidden;
//           transition: border-color 0.3s;
//         }
//         .service-card:hover {
//           border-color: #4b5563;
//         }
//         .accent-line {
//           position: absolute;
//           top: 0;
//           left: 2rem;
//           width: 3rem;
//           height: 4px;
//           background-color: var(--accent-color);
//         }
//         .service-icon {
//           color: var(--accent-color);
//           background-color: rgba(255, 77, 36, 0.1);
//           width: fit-content;
//           padding: 0.75rem;
//           border-radius: 0.75rem;
//           margin-bottom: 1.5rem;
//         }
//         .service-header {
//           color: var(--accent-color);
//           font-size: 0.875rem;
//           font-weight: 700;
//           margin-bottom: 0.5rem;
//           display: block;
//         }
//         .service-title {
//           font-size: 1.5rem;
//           font-weight: 700;
//           margin: 0 0 1rem 0;
//         }
//         .service-desc {
//           color: var(--text-secondary);
//           font-size: 0.875rem;
//           line-height: 1.6;
//         }

//         /* --- Footer --- */
//         .footer {
//           position: relative;
//           padding: 8rem 1.5rem;
//           text-align: center;
//           overflow: hidden;
//         }
//         .footer-bg {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(to top right, var(--accent-color), #4c1d95, black);
//           opacity: 0.4;
//           z-index: 0;
//         }
//         .footer-overlay {
//           position: absolute;
//           inset: 0;
//           background-color: rgba(0,0,0,0.6);
//           z-index: 1;
//         }
//         .footer-content {
//           position: relative;
//           z-index: 10;
//           max-width: 48rem;
//           margin: 0 auto;
//         }
//         .avatar-container {
//           width: 6rem;
//           height: 6rem;
//           margin: 0 auto 2rem auto;
//           background-color: rgba(255,255,255,0.1);
//           backdrop-filter: blur(4px);
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border: 1px solid rgba(255,255,255,0.2);
//         }
//         .avatar { width: 4rem; height: 4rem; }
//         .footer-pretitle {
//           color: #ffb3a0;
//           font-weight: 500;
//           margin-bottom: 1rem;
//         }
//         .footer-title {
//           font-size: 3rem;
//           font-weight: 700;
//           line-height: 1.1;
//           margin-bottom: 2rem;
//         }
//         .footer-text {
//           color: #d1d5db;
//           font-size: 1.125rem;
//           margin-bottom: 2.5rem;
//         }
//         .copyright {
//           position: absolute;
//           bottom: 1.5rem;
//           width: 100%;
//           text-align: center;
//           color: #6b7280;
//           font-size: 0.875rem;
//           z-index: 10;
//           left: 0;
//         }

//         /* --- Media Queries --- */
//         @media (min-width: 768px) {
//           .nav-links { display: flex; }
//           .mobile-menu-btn { display: none; }
//           .hero-title { font-size: 5rem; }
//           .hero-split {
//             flex-direction: row;
//             align-items: flex-end;
//             justify-content: space-between;
//           }
//           .hero-stats { grid-template-columns: repeat(4, 1fr); }
//           .experience-content {
//             flex-direction: row;
//             gap: 2rem;
//           }
//           .section-header {
//             flex-direction: row;
//             justify-content: space-between;
//             align-items: flex-end;
//           }
//           .grid-3 { grid-template-columns: repeat(3, 1fr); }
//           .footer-title { font-size: 4.5rem; }
//         }

//         @media (max-width: 768px) {
//           .hero-image-container {
//             width: 100%;
//             opacity: 0.3;
//           }
//           .hero-overlay-gradient {
//             background: linear-gradient(to bottom, #0a0a0a 10%, transparent 50%, #0a0a0a 100%);
//           }
//            .hero-title { font-size: 3.5rem; }
//         }

//         @media (min-width: 1024px) {
//            .hero-title { font-size: 6rem; }
//         }
//       `}</style>

//       {/* --- Navigation --- */}
//       <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
//         <div className="container nav-content flex-between">
//           <div className="logo">
//             Rucha<span>.Dev</span>
//           </div>

//           <div className="nav-links">
//             {navigation.map((item) => (
//               <a key={item.name} href={item.href}>{item.name}</a>
//             ))}
//             <a href="mailto:ahirerucha81@gmail.com" className="contact-btn">
//               Get in touch <ArrowRight size={16} />
//             </a>
//           </div>

//           <button onClick={toggleMenu} className="mobile-menu-btn">
//             {isMenuOpen ? <X /> : <Menu />}
//           </button>
//         </div>

//         {isMenuOpen && (
//           <div className="mobile-menu">
//             {navigation.map((item) => (
//               <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)}>
//                 {item.name}
//               </a>
//             ))}
//             <a href="mailto:ahirerucha81@gmail.com" style={{color: 'var(--accent-color)', display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
//               Let's Talk <ArrowRight size={16} />
//             </a>
//           </div>
//         )}
//       </nav>

//       {/* --- HERO SECTION --- */}
//       <section id="home" className="hero">
//         <div className="hero-blob"></div>
        
//         {/* HERO IMAGE */}
//         <div className="hero-image-container">
//            {/* Uses your local variable myImage */}
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
//             <p className="hero-desc">
//               Great code should feel invisible. From backend architecture to intuitive interfaces, I build systems that connect and convert.
//             </p>
            
//             <div className="social-icons">
//                <SocialLink icon={<Github size={20} />} href="https://github.com/rucha-code-nodes" />
//                <SocialLink icon={<Linkedin size={20} />} href="https://linkedin.com/in/rucha-ahire09" />
//                <SocialLink icon={<Mail size={20} />} href="mailto:ahirerucha81@gmail.com" />
//             </div>
//           </div>

//           <div className="hero-stats">
//             <HeroStat number="01" title="Backend Development" desc="Node.js, Express, Flask" />
//             <HeroStat number="02" title="Frontend Design" desc="React, HTML5, CSS3" />
//             <HeroStat number="03" title="Database Management" desc="MongoDB, MySQL, Redis" />
//             <HeroStat number="04" title="IoT Solutions" desc="Sensor Integration, Dashboards" />
//           </div>
//         </div>
//       </section>

//       {/* --- Experience --- */}
//       <section className="experience-bar">
//         <div className="container experience-content">
//           <span className="experience-label">Experience & Internships</span>
//           <div className="logos">
//             <div className="logo-item">
//                <div className="dot" style={{backgroundColor: 'white'}}></div>
//                <span style={{fontWeight: 'bold', fontSize: '1.25rem'}}>Smart Logic Technologies</span>
//             </div>
//             <div className="logo-item">
//                <div className="dot" style={{backgroundColor: 'var(--accent-color)'}}></div>
//                <span style={{fontWeight: 'bold', fontSize: '1.25rem'}}>CodeCraft Networks</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- About --- */}
//       <section id="about" className="section bg-dark">
//         <div className="container">
//           <div className="section-header">
//             <div>
//               <span className="subtitle">Behind the Code</span>
//               <h2 className="section-title">
//                 Shaping Experiences That Make Life Simpler
//               </h2>
//             </div>
//             <div style={{maxWidth: '32rem'}}>
//               <p style={{color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '1.5rem'}}>
//                 I'm a Full Stack Developer focused on building clean, efficient, and scalable applications that solve real-world problems. With a background in IoT and Backend systems, I bridge the gap between hardware data and user interfaces.
//               </p>
//               <a href="#contact" className="btn-primary">
//                 Let's Build Something <ArrowRight size={18} />
//               </a>
//             </div>
//           </div>

//           <div id="projects" className="grid-3">
//             {projects.map((project) => (
//               <ProjectCard 
//                 key={project.id}
//                 project={project}
//                 onClick={() => setSelectedProject(project)}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- Services --- */}
//       <section id="services" className="section bg-darker">
//         <div className="container">
//           <div className="section-header">
//             <div>
//               <span className="subtitle">Services</span>
//               <h2 className="section-title">What I Can Help You With</h2>
//             </div>
//             <div style={{textAlign: 'right'}}>
//                 <p style={{color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.5rem'}}>Let's solve problems together</p>
//                 <a href="mailto:ahirerucha81@gmail.com" style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'white', border: '1px solid #374151', padding: '0.5rem 1.5rem', borderRadius: '999px', textDecoration: 'none', fontSize: '0.875rem'}}>
//                    Get in touch <ArrowRight size={14} />
//                 </a>
//             </div>
//           </div>

//           <div className="grid-3">
//             <ServiceCard 
//               title="Full Stack Web Dev" 
//               header="Robust & Scalable"
//               desc="Building end-to-end web applications using the MERN stack. From database design to responsive frontend interfaces."
//               icon={<Code size={24} />}
//             />
//             <ServiceCard 
//               title="Backend API Design" 
//               header="Efficient Logic"
//               desc="Developing high-performance REST APIs with Node.js, Express, and Python Flask. Optimized for speed and security."
//               icon={<Server size={24} />}
//             />
//             <ServiceCard 
//               title="IoT Integration" 
//               header="Hardware to Cloud"
//               desc="Connecting sensors to dashboards. Experience with protocols, real-time data visualization, and device testing."
//               icon={<Cpu size={24} />}
//             />
//           </div>
//         </div>
//       </section>

//       {/* --- Footer --- */}
//       <section id="contact" className="footer">
//         <div className="footer-bg"></div>
//         <div className="footer-overlay"></div>

//         <div className="footer-content">
//           <div className="avatar-container">
//             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rucha" alt="Avatar" className="avatar" />
//           </div>
//           <p className="footer-pretitle">Start Your Project</p>
//           <h2 className="footer-title">
//             Let's Bring Your <br />
//             Ideas to Life
//           </h2>
//           <p className="footer-text">
//             Ready to make something amazing together? Whether you need a complex backend system or a sleek frontend, I'm here to help.
//           </p>
//           <a href="mailto:ahirerucha81@gmail.com" style={{display: 'inline-flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'white', color: 'black', padding: '1rem 2rem', borderRadius: '999px', fontSize: '1.125rem', fontWeight: 'bold', textDecoration: 'none'}}>
//             Start a Conversation <ArrowRight size={20} />
//           </a>
//         </div>

//         <div className="copyright">
//           © 2025 Rucha Ahire. All rights reserved.
//         </div>
//       </section>

//       {/* --- PROJECT MODAL --- */}
//       {selectedProject && (
//         <ProjectModal 
//           project={selectedProject} 
//           onClose={() => setSelectedProject(null)} 
//         />
//       )}

//     </div>
//   );
// };

// // --- Sub Components ---

// const HeroStat = ({ number, title, desc }) => (
//   <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', cursor: 'pointer'}} className="group">
//     <span style={{color: 'var(--accent-color)', fontWeight: 'bold', fontSize: '0.875rem'}}>#{number}</span>
//     <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', margin: 0, transition: 'color 0.2s'}}>{title}</h3>
//     <p style={{fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0}}>{desc}</p>
//   </div>
// );

// const SocialLink = ({ icon, href }) => (
//   <a href={href} target="_blank" rel="noreferrer" className="social-link">
//     {icon}
//   </a>
// );

// // Updated Project Card
// const ProjectCard = ({ project, onClick }) => (
//   <div className="project-card" onClick={onClick}>
//     <div className="project-bg" style={{backgroundImage: `url(${project.image})`}}></div>
//     <div className="project-overlay"></div>
    
//     <div className="project-content">
//       <span className="project-cat">{project.category}</span>
//       <h3 className="project-title">{project.title}</h3>
//       <p className="project-desc">{project.shortDesc}</p>
//       <div className="project-footer">
//         <span className="tech-stack-summary">{project.stack.slice(0, 3).join(' • ')}...</span>
//         <div className="arrow-icon">
//             <ArrowRight size={14} />
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const ServiceCard = ({ title, header, desc, icon }) => (
//   <div className="service-card">
//     <div className="accent-line"></div>
//     <div className="service-icon">{icon}</div>
//     <span className="service-header">{header}</span>
//     <h3 className="service-title">{title}</h3>
//     <p className="service-desc">{desc}</p>
//   </div>
// );

// // New Project Modal Component
// const ProjectModal = ({ project, onClose }) => {
//     // Prevent body scroll when modal is open
//     useEffect(() => {
//         document.body.classList.add('modal-open');
//         return () => document.body.classList.remove('modal-open');
//     }, []);

//     return (
//         <div className="modal-overlay" onClick={onClose}>
//             <div className="modal-content" onClick={e => e.stopPropagation()}>
//                 <div className="modal-header">
//                     <div>
//                         <span style={{color: '#ff4d24', fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase'}}>{project.category}</span>
//                         <h2 style={{fontSize: '2rem', fontWeight: 'bold', margin: '0.25rem 0 0 0'}}>{project.title}</h2>
//                     </div>
//                     <button onClick={onClose} style={{background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '0.5rem'}}>
//                         <X size={24} />
//                     </button>
//                 </div>
                
//                 <div className="modal-body">
//                     <img src={project.image} alt={project.title} className="modal-img" />
                    
//                     <div className="detail-section">
//                         <span className="detail-title">The Problem</span>
//                         <p className="detail-text">{project.problem}</p>
//                     </div>
                    
//                     <div className="detail-section">
//                         <span className="detail-title">The Solution</span>
//                         <p className="detail-text">{project.solution}</p>
//                     </div>
                    
//                     <div className="detail-section">
//                         <span className="detail-title">User Flow</span>
//                         <ul className="flow-list">
//                             {project.userFlow.map((step, index) => (
//                                 <li key={index} className="flow-item">
//                                     <span className="flow-number">0{index + 1}.</span>
//                                     <span>{step}</span>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
                    
//                     <div className="detail-section">
//                         <span className="detail-title">Technologies</span>
//                         <div className="tag-container">
//                             {project.stack.map(tech => (
//                                 <span key={tech} className="tech-tag">{tech}</span>
//                             ))}
//                         </div>
//                     </div>
                    
//                     <div className="modal-actions">
//                         <a href={project.links.demo} className="modal-btn btn-demo">
//                             <ExternalLink size={18} /> Live Demo
//                         </a>
//                         <a href={project.links.github} className="modal-btn btn-github">
//                             <Github size={18} /> View Code
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default App;



// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Certifications  from './pages/Certification';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Services />
      <Certifications />
      <Contact />
    </div>
  );
};

export default App;