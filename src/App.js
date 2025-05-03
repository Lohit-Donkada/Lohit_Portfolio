import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">My Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* About Me */}
      <section id="about" className="p-5 bg-light text-center">
        <div className="container">
          <img src={`${process.env.PUBLIC_URL}/photo.jpg`} className="rounded-circle mb-3" alt="Profile" />
          <h2>About Me</h2>
          <p>Passionate Computer Science student with a keen interest in machine learning and Python 
          programming, I thrive on deciphering intricate logic puzzles and solving challenging problems. I 
          actively engage in competitive coding, specializing in DSA problems using C++, and my enthusiasm 
          for mathematics and logic drives my analytical approach. I am eager to leverage my skills to devise 
          innovative, data-driven solutions and contribute meaningfully to organizational success. </p>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="p-5 text-center bg-light">
        <div className="container">
          <h2>Resume</h2>
          <p>
            Download my full resume{" "}
            <a href={`${process.env.PUBLIC_URL}/Donkada_Siva_Sai_Lohit_Patnaik_Resume.pdf`} target="_blank" rel="noopener noreferrer">
              here
            </a>.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card resume-card shadow-sm">
                <div className="card-body">
                  <h5 className="mb-3">Overview</h5>
                  <ul className="list-unstyled text-start">
                    <li><strong>🎓 Education:</strong> B.Tech in Computer Science</li>
                    <li><strong>💼 Experience:</strong> Internship in Google AIML through AICTE</li>
                    <li><strong>📜 Certifications:</strong> CCC Web Development Certification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="p-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Skills</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="resume-card p-4 h-100">
                <h5>Frontend</h5>
                <ul className="list-unstyled">
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="resume-card p-4 h-100">
                <h5>Tools</h5>
                <ul className="list-unstyled">
                  <li>VS Code</li>
                  <li>Bootstrap</li>
                  <li>Git</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="resume-card p-4 h-100">
                <h5>Soft Skills</h5>
                <ul className="list-unstyled">
                  <li>Teamwork</li>
                  <li>Communication</li>
                  <li>Leadership</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="p-5 text-center">
        <div className="container">
          <h2>Projects</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Project One</h5>
                  <p className="card-text">A web app built using React and Bootstrap.</p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">View Demo</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Project Two</h5>
                  <p className="card-text">A responsive portfolio site built with React.</p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">View Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-5 bg-light text-center">
        <div className="container">
          <h2>Contact</h2>
          <p>Email: lohitdonkada@gmail.com | Phone: +91 63033 88645</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-3">
        <div className="container">
          <p>&copy; 2025 Lohit Donkada. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;