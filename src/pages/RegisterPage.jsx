import React, { useState } from 'react';
import authService from '../services/authService';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.register({ email, password });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded focus:outline-none focus:bg-white"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded focus:outline-none focus:bg-white"
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
