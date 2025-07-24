import React, { createContext, useContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC9QsYnvpbNhOIU4sS7aKxKy0s-uyjMBhI', // Modified
  authDomain: 'my-portfolio-f5c46.firebaseapp.com', // Modified
  projectId: 'my-portfolio-f5c46', // Modified
  storageBucket: 'my-portfolio-f5c46.firebasestorage.app', // Modified
  messagingSenderId: '891751225530', // Modified
  appId: '1:891751225530:web:99a2544b4a9b8fd7448a83', // Modified
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

interface AuthContextType {
  user: any;
  signInWithGoogle: () => Promise<void>;
  signInWithPhone: (phone: string) => Promise<void>;
  verifyOTP: (code: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  signInWithGoogle: async () => {},
  signInWithPhone: async () => {},
  verifyOTP: async () => {},
  logout: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  const signInWithPhone = async (phone: string) => {
    const recaptcha = new RecaptchaVerifier('recaptcha-container', {}, auth);
    await signInWithPhoneNumber(auth, phone, recaptcha);
  };

  const verifyOTP = async (code: string) => {
    // OTP verification logic here (requires confirmation result from signInWithPhone)
  };

  const logout = async () => {
    await auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signInWithPhone, verifyOTP, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
