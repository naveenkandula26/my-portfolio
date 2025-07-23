import React, { useState } from 'react';
import { Mail, Lock, Phone, Eye, EyeOff, ArrowLeft } from 'lucide-react';

interface AuthPageProps {
  onLogin: (userData: any) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ onLogin }) => {
  const [authMode, setAuthMode] = useState<'login' | 'signup' | 'phone'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [phoneStep, setPhoneStep] = useState<'phone' | 'otp'>('phone');
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    otp: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock successful login
    const userData = {
      id: '1',
      name: formData.name || 'John Doe',
      email: formData.email,
      role: formData.email === 'admin@example.com' ? 'admin' : 'user'
    };

    onLogin(userData);
    setIsLoading(false);
  };

  const handlePhoneAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (phoneStep === 'phone') {
      // Simulate sending OTP
      await new Promise(resolve => setTimeout(resolve, 1500));
      setPhoneStep('otp');
    } else {
      // Simulate OTP verification
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const userData = {
        id: '1',
        name: 'John Doe',
        phone: formData.phone,
        role: 'user'
      };

      onLogin(userData);
    }
    
    setIsLoading(false);
  };

  const handleSendOTP = () => {
    setAuthMode('phone');
    setPhoneStep('phone');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {authMode === 'login' && 'Welcome Back'}
              {authMode === 'signup' && 'Create Account'}
              {authMode === 'phone' && (phoneStep === 'phone' ? 'Phone Login' : 'Verify OTP')}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {authMode === 'login' && 'Sign in to your account'}
              {authMode === 'signup' && 'Sign up for a new account'}
              {authMode === 'phone' && phoneStep === 'phone' && 'Enter your phone number'}
              {authMode === 'phone' && phoneStep === 'otp' && 'Enter the OTP sent to your phone'}
            </p>
          </div>

          {/* Back button for phone auth */}
          {authMode === 'phone' && (
            <button
              onClick={() => {
                if (phoneStep === 'otp') {
                  setPhoneStep('phone');
                } else {
                  setAuthMode('login');
                }
              }}
              className="flex items-center text-orange-500 hover:text-orange-600 mb-4 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back
            </button>
          )}

          {/* Email/Password Forms */}
          {(authMode === 'login' || authMode === 'signup') && (
            <form onSubmit={handleEmailAuth} className="space-y-6">
              {authMode === 'signup' && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="John Doe"
                  />
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {authMode === 'signup' && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  authMode === 'login' ? 'Sign In' : 'Create Account'
                )}
              </button>
            </form>
          )}

          {/* Phone Auth Form */}
          {authMode === 'phone' && (
            <form onSubmit={handlePhoneAuth} className="space-y-6">
              {phoneStep === 'phone' ? (
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    id="otp"
                    name="otp"
                    value={formData.otp}
                    onChange={handleChange}
                    required
                    maxLength={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors text-center text-2xl tracking-widest"
                    placeholder="123456"
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
                    OTP sent to {formData.phone}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  phoneStep === 'phone' ? 'Send OTP' : 'Verify OTP'
                )}
              </button>
            </form>
          )}

          {/* Alternative Auth Options */}
          {authMode !== 'phone' && (
            <>
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">Or</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSendOTP}
                className="w-full mt-4 px-4 py-3 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                Login with Phone
              </button>
            </>
          )}

          {/* Toggle Auth Mode */}
          {authMode !== 'phone' && (
            <div className="mt-6 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                {authMode === 'login' ? "Don't have an account?" : 'Already have an account?'}
                <button
                  onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                  className="ml-2 text-orange-500 hover:text-orange-600 font-medium transition-colors"
                >
                  {authMode === 'login' ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>
          )}

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Demo credentials:</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Email: demo@example.com | Password: demo123<br />
              Admin: admin@example.com | Password: admin123<br />
              Phone: Any number + any 6-digit OTP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};