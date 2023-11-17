import React from 'react';
import Faq from 'react-faq-component';
import './FaqComponent.css';

const FaqComponent = () => {
  const data = {
    title: "FAQ",
    rows: [
      {
        title: "1. How do you bill for your legal services?",
        content: "The average person who needs a lawyer can’t typically afford one. That’s what billing is for—you don’t expect your clients to pay all their costs upfront. Perhaps you require a retainer to start, followed by monthly payments.And then there’s the question of how you charge: by the hour, a la carte (for specific legal services), per case type, etc. People will want to know as much as they can find out about your billing and rates before they make a decision as to who to work with. The transparency that you provide is often more important than the actual prices for your services, so don’t be hesitant to post fees and rates on your website.  ",
      },
      {
        title: "Question 2",
        content: "Answer 2",
      },

    ],
  };

  return (
    <div>
      <Faq
        data={data}
        className="faq-container"
        styles={{
          title: 'faq-title',
          rowTitle: 'faq-row-title',
          rowContent: 'faq-row-content',
        }}
      />
    </div>
  );
};

export default FaqComponent;
