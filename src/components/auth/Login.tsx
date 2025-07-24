// Login component with Firebase authentication options
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';

const Login: React.FC = () => {
  const { signInWithGoogle, signInWithPhone } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    navigate('/dashboard');
  };

  const handlePhoneSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    await signInWithPhone(phone);
    navigate('/otp');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="card max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <button onClick={handleGoogleSignIn} className="btn-primary w-full mb-4">
          Sign in with Google
        </button>
        <form onSubmit={handlePhoneSignIn}>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            className="w-full p-2 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white"
          />
          <div id="recaptcha-container"></div>
          <button type="submit" className="btn-primary w-full">
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
