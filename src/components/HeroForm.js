import React from 'react';
import '../styles/HeroForm.css';
<section id="heroform">
  {/* Your contact form or hero form here */}
</section>
export default function HeroSection() {
  return (
        <section id='heroform' className="hero-section">
      
      {/* Form Section */}
      <div className="form-container">
        <h3 className="title">Need a Custom Project?</h3>
        <form action="https://formspree.io/f/meoarbod" method="POST" className="form">
          
          {/* Service Selection */}
          <div className="form-group">
  <label htmlFor="service" className="label">
    What services may we assist you with? *
  </label>
  <select name="service" id="service" required className="input">
    <option value="">Select a Service</option>
    <option value="Coding & Development">Coding & Development 👩‍💻</option>
    <option value="Thesis Writing">Thesis Writing 🧑‍💻</option>
    <option value="Presentations">Presentations 📊</option>
    <option value="Microsoft Excel">Microsoft Excel 🔎</option>
    <option value="Research Paper">Research Paper 🖥️</option>
    <option value="Website Design & Development">
      Website Design & Development 🎞️
    </option>
    <option value="Video Editing">Video Editing 📶</option>
    <option value="Software Development">Software Development 📈</option>
    <option value="Data Analysis & Visualization">
      Data Analysis & Visualization 📈
    </option>
    <option value="Research Assistance">Research Assistance 📚</option>
    <option value="Essay & Report Writing">Essay & Report Writing 📝</option>
    <option value="Presentation Design">Presentation Design 🎤</option>
    <option value="Problem Solving & Critical Thinking">
      Problem Solving & Critical Thinking 🧩
    </option>
    <option value="Note Taking & Organizing">Note Taking & Organizing 📒</option>
    <option value="Project Management Tools">
      Project Management Tools 🗂️
    </option>
    <option value="Online Tutoring Sessions">Online Tutoring Sessions 👨‍🏫</option>
    <option value="Document Formatting & Proofreading">
      Document Formatting & Proofreading 📄
    </option>
    <option value="Plagiarism Checking">Plagiarism Checking 🔍</option>
    <option value="Programming Help & Debugging">
      Programming Help & Debugging 🖥️
    </option>
    <option value="Academic Research Paper Formatting">
      Academic Research Paper Formatting 📑
    </option>
    <option value="Group Project Collaboration Tools">
      Group Project Collaboration Tools 🤝
    </option>
    <option value="Academic Resume Writing">Academic Resume Writing 📝</option>
    <option value="Job/Internship Application Assistance">
      Job/Internship Application Assistance 💼
    </option>
    <option value="Study Guide Creation">Study Guide Creation 📚</option>
    <option value="Other">Other</option>
  </select>
</div>


          {/* Name, Phone, Email, Due Date in 2 x 2 grid */}
          <div className="form-group input-pair">
            <div>
              <label htmlFor="name" className="label">Name *</label>
              <input
                required
                id="name"
                name="name"
                placeholder="Enter your name"
                className="input"
              />
            </div>
            <div>
              <label htmlFor="phone" className="label">Phone *</label>
              <input
                required
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter phone number"
                pattern="^\+?[0-9]{10,15}$"
                className="input"
                title="Enter a valid phone number (10–15 digits, optional +)"
              />
            </div>

            <div>
              <label htmlFor="email" className="label">Email *</label>
              <input
                required
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                className="input"
              />
            </div>
            <div>
              <label htmlFor="due_date" className="label">
                Due Date (Timeline) *
              </label>
              <input
                type="date"
                id="due_date"
                name="due_date"
                required
                className="input"
              />
            </div>
          </div>

          {/* Requirements Textarea */}
          <div className="form-group">
            <label htmlFor="requirements" className="label">
              Mention your Requirements/Guidelines *
            </label>
            <textarea
              name="requirements"
              required
              rows={3}
              className="textarea"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Submit Enquiry
          </button>
        </form>
      </div>

    
    {/* Marketing Banner Section */}
     <div className="marketing-container">
  <div className="marketing-content">
    <h3>🚀 First-Time User Special: 50% OFF + Free Resume Review!</h3>
    <p>
      Start your journey with <strong>50% OFF</strong> your first project and get a 
      <strong> free one-on-one resume review session</strong> to boost your career.
    </p>

    <ul className="offer-list">
      <li>✅ 50% OFF on Your First Project</li>
      <li>✅ Free Resume Review Session</li>
      <li>✅ Personalized Career Guidance</li>
      <li>✅ 24/7 Support from Our Expert Team</li>
      <li>✅ 100% Satisfaction Guarantee</li>
    </ul>

    <a href="#contact" className="cta-button">
      Fill the form 👈 and our team will contact you for your project and your offer
    </a>
  </div>
</div>


    </section>
  );
}
