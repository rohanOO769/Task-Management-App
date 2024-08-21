// pages/Home.jsx

import React from 'react';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold mb-2">Task 1</h3>
          <p className="text-gray-700">Description 1</p>
          <button className="bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600">View Details</button>
        </div>
        {/* Repeat for other tasks */}
      </div>
    </div>
  );
}

export default Home;