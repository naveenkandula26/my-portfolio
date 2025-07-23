const Home = () => (
  <section id="home" className="min-h-screen bg-dark-gray text-white flex items-center justify-center">
    <div className="text-center animate-fade-in">
      <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl mb-6">Showcasing my work and skills</p>
      <a href="/about" className="bg-orange-accent text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
        Learn More
      </a>
    </div>
  </section>
);

export default Home;