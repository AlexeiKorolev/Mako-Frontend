import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = async () => {
    navigate('/app');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#007bff] to-black">
      <h1 className="text-6xl font-bold text-white mb-20 text-center">
        Mako Intelligence
      </h1>
      <button
        className="px-8 py-4 text-lg font-semibold bg-white text-black rounded-full shadow-md hover:shadow-lg transition-shadow animate-levitate"
        onClick={handleGetStartedClick}
      >
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;