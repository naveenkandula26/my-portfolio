// Main App component with routing and theme context
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/auth/Login';
import OTPInput from './components/auth/OTPInput';
import FileDashboard from './components/files/FileDashboard';
import Navbar from './components/layout/Navbar';
import ProtectedRoute from './components/auth/ProtectedRoute';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <AuthProvider>
        <div className={`${theme === 'dark' ? 'dark' : ''} min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/otp" element={<OTPInput />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <FileDashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
