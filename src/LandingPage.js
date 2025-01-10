import React from 'react';
import './styling/style.css';

const LandingPage = () => {
const handleGetStartedClick = async () => {
    console.log('Calling function...');
    try {
        const response = await fetch('https://mako-backend-47860532355.us-central1.run.app/hello');
        if (response.ok) {
        // Handle successful response
        console.log('Function called successfully');
        window.location.href = 'app';
        } else {
        // Handle error response
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
      <button className="get-started-btn" onClick={handleGetStartedClick}>Get Started</button>
    </div>
  );
};

// () => window.location.href = 'app'

export default LandingPage;