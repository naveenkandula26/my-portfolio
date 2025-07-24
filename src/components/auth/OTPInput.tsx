// OTP input component with responsive styling
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';

const OTPInput: React.FC = () => {
  const { verifyOTP } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleChange = (index: number, value: string) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join('');
    await verifyOTP(code);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="card max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Enter OTP</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex space-x-2 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-12 h-12 text-center text-xl border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-[var(--primary-orange)]"
              />
            ))}
          </div>
          <button type="submit" className="btn-primary">
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTPInput;
