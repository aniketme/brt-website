// src/components/Services.js
import React from 'react';
import './Services.css'; // Create this CSS file later

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Service 1</h3>
            <p>Description of service 1.</p>
          </div>
          <div className="service-card">
            <h3>Service 2</h3>
            <p>Description of service 2.</p>
          </div>
          <div className="service-card">
            <h3>Service 3</h3>
            <p>Description of service 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
