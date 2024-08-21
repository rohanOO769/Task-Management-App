// pages/Login.jsx

import React from 'react';

function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" id="password" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div>
            <button className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600">Login</button>
          </div>
          <p className="text-gray-500 text-center">Don't have an account? <a href="#" className="text-blue-500 hover:underline">Signup</a></p>
          <p className="text-gray-500 text-center">Login with Google <img src="path/to/google-logo.png" alt="Google Logo" className="inline-block h-5 w-5" /></p>
        </form>
      </div>
    </div>
  );
}

export default Login;