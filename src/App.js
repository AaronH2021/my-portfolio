import React from 'react';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Aaron's Portfolio</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-teal-400">About</a>
          <a href="#projects" className="hover:text-teal-400">Projects</a>
          <a href="#skills" className="hover:text-teal-400">Skills</a>
          <a href="#contact" className="hover:text-teal-400">Contact</a>
        </div>
      </nav>

      <section className="text-center mt-24">
        <h2 className="text-4xl md:text-5xl font-bold">Hello, I'm Aaron,</h2>
        <p className="mt-4 text-xl">an aspiring website developer and software engineer!</p>
      </section>

      <section id="about" className="mt-24 max-w-4xl mx-auto text-center px-4">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>
        <p className="text-lg text-gray-300">
          I'm passionate about building beautiful and functional web applications.
          Currently honing my skills in web development and software engineering.
        </p>
      </section>

      <section id="projects" className="mt-24 max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-semibold text-center mb-12">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h4 className="text-2xl font-bold mb-2">Project One</h4>
            <p className="text-gray-400 mb-4">A brief description of Project One. Built with HTML, CSS, and JavaScript.</p>
            <a href="#" className="text-teal-400 hover:underline">View Project</a>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h4 className="text-2xl font-bold mb-2">Project Two</h4>
            <p className="text-gray-400 mb-4">A brief description of Project Two. Built with React and Tailwind CSS.</p>
            <a href="#" className="text-teal-400 hover:underline">View Project</a>
          </div>
        </div>
      </section>

      <section id="skills" className="mt-24 max-w-4xl mx-auto text-center px-4">
        <h3 className="text-3xl font-semibold mb-6">Skills</h3>
        <div className="flex flex-wrap justify-center gap-6 text-gray-300">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Tailwind CSS</span>
          <span>Node.js</span>
        </div>
      </section>

      <section id="contact" className="mt-24 max-w-4xl mx-auto text-center px-4 pb-20">
        <h3 className="text-3xl font-semibold mb-6">Contact</h3>
        <p className="text-gray-400 mb-4">Feel free to reach out to me!</p>
        <div className="flex justify-center gap-6">
          <a href="https://github.com" target="_blank" className="hover:text-teal-400">GitHub</a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-teal-400">LinkedIn</a>
          <a href="mailto:your.email@example.com" className="hover:text-teal-400">Email Me</a>
        </div>
      </section>
    </div>
  );
}

export default App;