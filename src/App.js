import React from 'react';
import './index.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <div className="space-x-6">
        </div>
      </nav>

      <section className="text-center mt-24">
        <h2 className="text-4xl md:text-5xl font-bold">Hello, I'm Aaron,</h2>
        <p className="mt-4 text-xl">an aspiring website developer and software engineer!</p>
      </section>

      <section id="about" className="mt-24 max-w-4xl mx-auto text-left px-4">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>
        <p className="text-lg text-gray-300">
          I'm passionate about building beautiful and functional web applications.
          Currently honing my skills in web development and software engineering.
          </p>
          <p className="text-lg text-gray-300">
          I've competed in a variety of video games, such as Hearthstone, Smash Bros, and Teamfight Tactics.
          My greatest accomplishments in video games are hitting Challenger (top 0.04% of players) in Teamfight Tactics and winning a Teamfight Tactics tournament called SoCal Flower Fest with over 40 players.
        </p>
      </section>

      <section id="projects" className="mt-24 max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-semibold text-center mb-12">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h4 className="text-2xl font-bold mb-2">Portfolio Website</h4>
            <p className="text-gray-400 mb-4">This website was built with HTML, CSS, React and JavaScript.</p>
            <a href="https://github.com/AaronH2021/my-portfolio" target="_blank" rel="noopener noreferrer">
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all">
                GitHub
              </button>
            </a>
            </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h4 className="text-2xl font-bold mb-2">Financial Data Filter App</h4>
            <p className="text-gray-400 mb-4">Used React to fetch, filter, and display data from the Financial Modeling Prep API.</p>
            <a href="https://github.com/AaronH2021/financial-data-app?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all">
                GitHub
              </button>
            </a>
            <a href="https://aaronh2021.github.io/financial-data-app/" target="_blank" rel="noopener noreferrer">
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all">
                View Project
              </button>
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="mt-24 max-w-4xl mx-auto text-center px-4">
        <h3 className="text-3xl font-semibold mb-6">Skills</h3>
        <div className="flex flex-wrap justify-center gap-6 text-gray-300">
          <span>Programming Languages: Python, Java, JavaScript, C++, SQL, HTML, CSS, LATEX </span>
          <span>Project Tools: GitHub, MySQL, MongoDB, Google Cloud, AWS, Firebase, Linux/Unix,Slack, Jira, Putty</span>
          <span>Libraries/API: ReactJs, ThreeJs, jQuery, Django, OpenCV, TensorFlow, NumPy, Axios, TailwindCSS</span>
        </div>
      </section>

      <section id="contact" className="mt-24 max-w-4xl mx-auto text-center px-4 pb-20">
        <h3 className="text-3xl font-semibold mb-6">Contact</h3>
        <div className="flex flex-wrap justify-center gap-4">
  <a
    href="https://github.com/AaronH2021"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all inline-flex items-center gap-2"
  >
    <FaGithub size={20} />
    GitHub
  </a>
  <a
    href="https://www.linkedin.com/in/aaron-hung/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all inline-flex items-center gap-2"
  >
    <FaLinkedin size={20} />
    LinkedIn
  </a>
  <a
    href="mailto:aaronhung50@gmail.com"
    className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all inline-flex items-center gap-2"
  >
    <FaEnvelope size={20} />
    Email Me
  </a>
</div>
      </section>
    </div>
  );
}

export default App;
