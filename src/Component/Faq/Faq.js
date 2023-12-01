import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq">
        {[1, 2, 3, 4, 5].map((index) => (
          <div className="faq-item" key={index}>
            <button
              id={`faq-button-${index}`}
              aria-expanded={activeIndex === index ? 'true' : 'false'}
              onClick={() => toggleAccordion(index)}
            >
              <span className="faq-title">
                Question {index}
              </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            {activeIndex === index && (
              <div className="faq-content">
                <p>Lorem ipsum dolor sit amet...</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
