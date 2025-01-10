import React from 'react';
import { useNavigate } from 'react-router-dom';
import { testPatent } from '../logic/APICalls';
import '../styling/style.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = async () => {
    console.log('Calling function...');
    try {
      const response = await fetch('https://mako-backend-47860532355.us-central1.run.app/hello');
      if (response.ok) {
        console.log('Function called successfully');
        navigate('/app');
      } else {
        console.error('Error calling function');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="landing">
      <img src="logo.jpg" alt="Logo" className="logo" />
      <h1 className="title">Mako Intelligence</h1>
      <button
        className="get-started-btn"
        onClick={() => testPatent(`Meeting Notes: Vehicle Ecosystem Patent
Primary Objective: Develop a vehicle ecosystem that integrates physical and mental comfort...`)}
      >
        Get Started
      </button>
    </div>
  );
};

// () => window.location.href = 'app'

export default LandingPage;