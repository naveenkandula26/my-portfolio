import { Link } from 'react-router-dom';
import { auth } from '../firebase';

interface NavBarProps {
  user: any;
  setUser: (user: any) => void;
}

const NavBar = ({ user, setUser }: NavBarProps) => {
  return (
    <nav className="bg-dark-gray p-4 text-white flex justify-between items-center sticky top-0 z-10">
      <div className="text-2xl font-bold">Portfolio</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-orange-accent">Home</Link>
        <Link to="/about" className="hover:text-orange-accent">About</Link>
        <Link to="/projects" className="hover:text-orange-accent">Projects</Link>
        <Link to="/contact" className="hover:text-orange-accent">Contact</Link>
        {user ? (
          <button onClick={() => auth.signOut().then(() => setUser(null))} className="hover:text-orange-accent">
            Logout
          </button>
        ) : (
          <Link to="/login" className="hover:text-orange-accent">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
