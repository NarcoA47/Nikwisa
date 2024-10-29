"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2'; // For pop-up messages

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please enter your email address.',
      });
      return;
    }

    setLoading(true);

    // Simulate an API call to send reset link
    setTimeout(() => {
      setLoading(false);
      Swal.fire({
        icon: 'success',
        title: 'Reset Link Sent',
        text: `A password reset link has been sent to ${email}.`,
        showConfirmButton: true,
      }).then(() => {
        router.push('/signin'); // Redirect to login page after successful request
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-300 to-yellow-500 p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Forgot Password</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Enter your email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition duration-300 disabled:opacity-50 flex justify-center items-center"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={() => router.push('/signin')}
            className="text-yellow-500 hover:underline mt-4"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}
