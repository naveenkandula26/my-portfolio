import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ProjectsPage } from './components/ProjectsPage';
import { ContactPage } from './components/ContactPage';
import { UploadPage } from './components/UploadPage';
import { AuthPage } from './components/AuthPage';
import { AdminDashboard } from './components/AdminDashboard';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);

  const handleLogin = (userData: any) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Navbar 
            isAuthenticated={isAuthenticated} 
            user={user}
            onLogout={handleLogout}
          />
          
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route 
                path="/auth" 
                element={
                  isAuthenticated ? 
                    <Navigate to="/upload" /> : 
                    <AuthPage onLogin={handleLogin} />
                } 
              />
              <Route 
                path="/upload" 
                element={
                  isAuthenticated ? 
                    <UploadPage user={user} /> : 
                    <Navigate to="/auth" />
                } 
              />
              <Route 
                path="/admin" 
                element={
                  isAuthenticated && user?.role === 'admin' ? 
                    <AdminDashboard /> : 
                    <Navigate to="/auth" />
                } 
              />
              {/* Catch-all route for unmatched paths */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;