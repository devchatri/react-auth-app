import React from 'react';

function HomePage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to MyAuthApp</h1>
        <p className="text-lg text-gray-700 mb-4">
          Please <a href="/login" className="text-blue-500 hover:underline">login</a> or <a href="/register" className="text-blue-500 hover:underline">register</a> to continue.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
