const About = () => (
  <section id="about" className="min-h-screen bg-gray-800 text-white p-8">
    <div className="max-w-4xl mx-auto animate-slide-up">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <img src="https://via.placeholder.com/150" alt="Profile" className="w-40 h-40 rounded-full mb-4 md:mr-6" />
        <div>
          <p className="text-lg mb-4">Hi, I'm [Your Name], a passionate developer with expertise in modern web technologies.</p>
          <p className="text-lg mb-4">Skills: React, TypeScript, Firebase, Tailwind CSS</p>
          <a href="/resume.pdf" download className="bg-orange-accent text-white px-4 py-2 rounded hover:bg-orange-600">
            Download Resume
          </a>
        </div>
      </div>
      <h3 className="text-2xl font-bold mt-8 mb-4">Experience</h3>
      <div className="relative border-l-4 border-orange-accent pl-6">
        <div className="mb-6">
          <h4 className="text-xl font-semibold">Senior Developer</h4>
          <p className="text-gray-300">2023 - Present</p>
          <p>Leading projects in web development...</p>
        </div>
        <div className="mb-6">
          <h4 className="text-xl font-semibold">Junior Developer</h4>
          <p className="text-gray-300">2021 - 2023</p>
          <p>Contributed to various projects...</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;