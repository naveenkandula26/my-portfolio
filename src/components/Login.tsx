import { useState } from 'react';
import { auth, signInWithEmail, signInWithGoogle, googleProvider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }: { setUser: (user: any) => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailLogin = async () => {
    try {
      const userCredential = await signInWithEmail(auth, email, password);
      setUser(userCredential.user);
      navigate('/');
    } catch (error) {
      console.error('Email login error:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const userCredential = await signInWithGoogle(auth, googleProvider);
      setUser(userCredential.user);
      navigate('/');
    } catch (error) {
      console.error('Google login error:', error);
    }
  };

  return (
    <section id="login" className="min-h-screen bg-gray-800 text-white p-8">
      <div className="max-w-md mx-auto animate-slide-up">
        <h2 className="text-4xl font-bold mb-6">Login</h2>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white mb-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white mb-2"
          />
          <button
            onClick={handleEmailLogin}
            className="w-full p-2 bg-orange-accent text-white rounded hover:bg-orange-600"
          >
            Login with Email
          </button>
        </div>
        <div className="mb-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full p-2 bg-orange-accent text-white rounded hover:bg-orange-600"
          >
            Login with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
