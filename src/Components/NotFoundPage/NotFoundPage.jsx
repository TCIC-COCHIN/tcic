import React from "react";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oops! Page not found.</p>
        <p className="error-description">The page you are looking for doesn't exist or has been moved.</p>
        <a href="/" className="home-link">
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
