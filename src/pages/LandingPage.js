import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/style.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = async () => {
    // TODO: Implement sign in
    navigate('/app');
  };

  return (
    <div className="landing">
      <img src="logo.jpg" alt="Logo" className="logo" />
      <h1 className="title">Mako Intelligence</h1>
      <button
        className="get-started-btn"
        onClick={() => handleGetStartedClick()}
      >
        Get Started
      </button>
    </div>
  );
};

// () => window.location.href = 'app'

export default LandingPage;