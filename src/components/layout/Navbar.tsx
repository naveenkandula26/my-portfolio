// Navbar component with theme toggle and logout
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className="bg-[var(--primary-orange)] dark:bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-white text-xl font-bold">File Manager</h1>
      {user && (
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="text-white hover:bg-[var(--primary-orange-dark)] p-2 rounded-full"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button onClick={handleLogout} className="btn-primary">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
