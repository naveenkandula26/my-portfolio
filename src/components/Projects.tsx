const Projects = () => (
  <section id="projects" className="min-h-screen bg-dark-gray text-white p-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 animate-slide-up">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg animate-fade-in">
          <img src="https://via.placeholder.com/300" alt="Project 1" className="w-full h-48 object-cover rounded" />
          <h3 className="text-xl font-bold mt-4">Project 1</h3>
          <p className="text-gray-300">A web app built with React and Firebase.</p>
          <p className="text-gray-400">Technologies: React, TypeScript</p>
          <a href="#" className="text-orange-accent hover:underline">Live Demo</a>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg animate-fade-in">
          <img src="https://via.placeholder.com/300" alt="Project 2" className="w-full h-48 object-cover rounded" />
          <h3 className="text-xl font-bold mt-4">Project 2</h3>
          <p className="text-gray-300">A mobile-friendly dashboard.</p>
          <p className="text-gray-400">Technologies: Tailwind, Firebase</p>
          <a href="#" className="text-orange-accent hover:underline">Live Demo</a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
