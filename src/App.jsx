import React from 'react';
import './App.css';

function App() {
  return (
    <div
      className="app-container"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}captain-america.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100%',
        padding: '1rem',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div className="content-wrapper" style={{ maxWidth: '1200px', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '2rem', borderRadius: '16px', color: '#fff' }}>
        <div className="resume-download" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <a
            href={`${import.meta.env.BASE_URL}SAI%20ROHIT%20VOLETI%20CV.pdf`}
            download
            className="download-btn"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#007bff',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1rem',
            }}
          >
            📄 Download My Resume
          </a>
        </div>

        <section className="about-section" style={{ marginBottom: '2rem' }}>
          <h2>🦸‍♂️ About Me</h2>
          <p>Hello! I’m <strong>Sai Rohit Voleti</strong>, a passionate and enthusiastic Full Stack Developer with over 2 years of experience in software development and testing.
            I’ve worked on enterprise front-end applications using <strong>Java, C# .NET, Spring Boot</strong> and modern frameworks like <strong>React JS</strong> and <strong>Angular</strong>.</p>
          <p>I have strong experience building web applications, working with APIs and Microservices, and developing both front-end and back-end features.
            I enjoy writing clean, scalable code and implementing responsive user interfaces.
            I’ve also worked in Agile environments, collaborated closely with cross-functional teams, and gained hands-on experience in CI/CD, automation testing (Selenium, TestNG), and Git version control.</p>
          <p>My goal is to build impactful and user-centric applications while constantly learning and growing as a developer.
            When I'm not coding, I enjoy exploring new tech tools and refining my coding skills.</p>
          <p>📍 Based in Dublin, Ireland | 📍 Bangalore, India | 📞 +353-892057457 | 📞 +91-8939439744 | 📧 sairohit33@gmail.com</p>
          <p>🔗 Visit My Portfolio: <a href="https://Sai-Rohit.github.io/Sai-Rohit-portfolio" target="_blank" rel="noopener noreferrer">https://Sai-Rohit.github.io/Sai-Rohit-portfolio</a></p>
        </section>

        <section className="projects-section" style={{ marginBottom: '2rem' }}>
          <h2>🛠️ Projects</h2>
          <ul>
            <li><strong>Your Well-Being App:</strong> A wellness app with Bronze, Silver, and Gold memberships for services like doctor consultations, yoga, Zumba, and nutrition using React and design patterns.</li>
            <li><strong>Automated Testing Suite:</strong> Created test scripts in Python using Selenium for a real-time booking engine during my internship at Wise Tech Source.</li>
            <li><strong>CI/CD Integration:</strong> Deployed automated builds using Jenkins and AWS, improved testing workflow.</li>
          </ul>
        </section>

        <section className="skills-section" style={{ marginBottom: '2rem' }}>
          <h2>🚀 Skills</h2>
          <p><strong>Languages:</strong> Java, C#, JavaScript, Python</p>
          <p><strong>Frameworks:</strong> Spring Boot, React JS, Angular</p>
          <p><strong>Tools:</strong> Git, Jenkins, Selenium, TestNG, Postman</p>
          <p><strong>Databases:</strong> MySQL, MongoDB, MS SQL SERVER</p>
          <p><strong>Cloud:</strong> Google Cloud Platform (GCP)</p>
        </section>

        <footer className="footer" style={{ textAlign: 'center' }}>
          <p>🌐 <a href="https://github.com/Sai-Rohit" target="_blank" rel="noopener noreferrer">GitHub</a> | 🔗 <a href="https://www.linkedin.com/in/sai-rohit-voleti-03204093/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p>🦸 Made with ❤️ by Sai Rohit Voleti</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
