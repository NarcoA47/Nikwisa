"use client";
import { useRouter } from 'next/navigation';
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface AuthContextProps {
  user: unknown;
  login: (userData: unknown) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Check localStorage for user on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false); // Once localStorage check is done, set loading to false
  }, []);

  const login = async (userData: unknown) => {
    setLoading(true);
    setError(null);
    try {
      // Simulate login (or replace with actual API call)
      // const response = await apiLogin(userData);
      localStorage.setItem('user', JSON.stringify(userData)); // Store user data
      setUser(userData);  // Set the user state
      router.push('/dashboard');  // Redirect to dashboard
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);  // Stop the loading state
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/login');  // Redirect to login page after logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, error }}>
      {loading ? (
        <div>Loading...</div> // Add a loading spinner or similar for UX
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

// Custom hook to access auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
