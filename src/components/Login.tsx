import { useState, useEffect } from 'react';
import { auth, signInWithEmail, signInWithGoogle, signInWithPhone, googleProvider, Recaptcha } from '../firebase';

interface LoginProps {
  setUser: (user: any) => void;
}

const Login = ({ setUser }: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.recaptchaVerifier = new Recaptcha(auth, 'recaptcha-container', {
      size: 'invisible',
    });
  }, []);

  const handleEmailLogin = async () => {
    try {
      const userCredential = await signInWithEmail(auth, email, password);
      setUser(userCredential.user);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handlePhoneLogin = async () => {
    try {
      const result = await signInWithPhone(auth, phone, window.recaptchaVerifier);
      setConfirmationResult(result);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleOtpVerify = async () => {
    try {
      const userCredential = await confirmationResult.confirm(otp);
      setUser(userCredential.user);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const userCredential = await signInWithGoogle(auth, googleProvider);
      setUser(userCredential.user);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <section id="login" className="min-h-screen bg-gray-800 text-white p-8 flex items-center justify-center">
      <div className="max-w-md w-full animate-slide-up">
        <h2 className="text-4xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <button
            onClick={handleEmailLogin}
            className="w-full bg-orange-accent text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Login with Email
          </button>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
            <button
              onClick={handlePhoneLogin}
              className="bg-orange-accent text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Send OTP
            </button>
          </div>
          {confirmationResult && (
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
              <button
                onClick={handleOtpVerify}
                className="bg-orange-accent text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Verify OTP
              </button>
            </div>
          )}
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-orange-accent text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Login with Google
          </button>
          <div id="recaptcha-container"></div>
        </div>
      </div>
    </section>
  );
};

export default Login;
