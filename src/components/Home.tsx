import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="container text-center animate-fade-in">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-6">I'm a passionate developer showcasing my projects and skills.</p>
        <Link to="/projects" className="inline-block px-6 py-3 bg-orange-accent text-white rounded-lg hover:bg-orange-600 transition-colors duration-300">
          View My Work
        </Link>
      </div>
    </section>
  );
};

export default Home;
