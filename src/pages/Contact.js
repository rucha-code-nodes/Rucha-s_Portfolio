// // src/pages/Contact.js
// import React from 'react';
// import { ArrowRight } from 'lucide-react';
// import './Contact.css';

// const Contact = () => {
//   return (
//     <section id="contact" className="footer">
//       <div className="footer-bg"></div>
//       <div className="footer-overlay"></div>

//       <div className="footer-content">
//         <div className="avatar-container">
//           <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rucha" alt="Avatar" className="avatar" />
//         </div>
//         <p className="footer-pretitle">Start Your Project</p>
//         <h2 className="footer-title">
//           Let's Bring Your <br />
//           Ideas to Life
//         </h2>
//         <p className="footer-text">
//           Ready to make something amazing together? Whether you need a complex backend system or a sleek frontend, I'm here to help.
//         </p>
//         <a href="mailto:ahirerucha81@gmail.com" style={{display: 'inline-flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'white', color: 'black', padding: '1rem 2rem', borderRadius: '999px', fontSize: '1.125rem', fontWeight: 'bold', textDecoration: 'none'}}>
//           Start a Conversation <ArrowRight size={20} />
//         </a>
//       </div>

//       <div className="copyright">
//         © 2025 Rucha Ahire. All rights reserved.
//       </div>
//     </section>
//   );
// };

// export default Contact;


// src/pages/Contact.js
import React from 'react';
import { ArrowRight, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="footer">
      <div className="footer-bg"></div>
      <div className="footer-overlay"></div>

      <div className="container footer-container">
        <div className="footer-wrapper">
            {/* Left Side: Text Content */}
            <div className="footer-text-content">
                <div className="avatar-container">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rucha" alt="Avatar" className="avatar" />
                </div>
                <p className="footer-pretitle">Start Your Project</p>
                <h2 className="footer-title">Let's Bring Your <br /> Ideas to Life</h2>
                <p className="footer-desc">
                    Ready to make something amazing together? Whether you need a complex backend system or a sleek frontend, fill out the form and I'll get back to you within 24 hours.
                </p>
                <div className="contact-details">
                    <a href="mailto:ahirerucha81@gmail.com" className="email-link">
                        ahirerucha81@gmail.com <ArrowRight size={16} />
                    </a>
                </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="footer-form-content">
                <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
                    {/* REPLACE THE VALUE BELOW WITH YOUR WEB3FORMS ACCESS KEY */}
                    <input type="hidden" name="access_key" value="450103ca-d820-4e95-984f-fe5af86551d8" />
                    
                    <div className="input-group">
                        <input type="text" name="name" placeholder="Your Name" required className="form-control" />
                    </div>
                    <div className="input-group">
                        <input type="email" name="email" placeholder="Your Email" required className="form-control" />
                    </div>
                    <div className="input-group">
                        <textarea name="message" placeholder="How can I help you?" rows="4" required className="form-control textarea-control"></textarea>
                    </div>
                    
                    <button type="submit" className="submit-btn">
                        Send Message <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
      </div>

      <div className="copyright">
        © 2026 Rucha Ahire. All rights reserved.
      </div>
    </section>
  );
};

export default Contact;