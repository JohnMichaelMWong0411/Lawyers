import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleFAQClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'Is the information I tell my lawyer confidential?',
      answer: `Certain communications between solicitor and client are absolutely confidential. This is known as “solicitor-client privilege.” Because of it, you can give your lawyer all of the facts relevant to your matter without fear that prejudicial information will become public.

      Not all solicitor-client communications are privileged. The privilege only arises when the client reveals information in confidence to obtain legal advice or services. Information that you give your lawyer that is not privileged is instead treated as confidential, and, as such, may be disclosed in certain circumstances. The Law Society of Alberta’s Code of Conduct outlines the limited circumstances in which confidential information may be disclosed..`,
    },
    {
      question: 'Where do you file the Petition for Legal Separation?',
      answer: `The petition shall be filed in the Family Court of the province or city where the petitioner or the respondent has been residing for at least six months prior to the date of filing “or in the case of a non-resident respondent, where he may be found in the Philippines, at the election of the petitioner.`,
    },
    {
      question: 'Is there a time limit for filing for Legal Separation?',
      answer: `The petition must be filed within five (5) years from the time of the occurrence of any of the grounds abovementioned for legal separation.`,
    },
    {
      question: 'Will there be more than one attorney working on my case?',
      answer: 'Some law firms have teams or partners that work on cases together, while others assign cases to one attorney, and they are the only one who handles it. Clients, naturally, may also have a preference here or at least may want to know what to expect. Make sure that you provide this question and answer it honestly.\n\n Explain the process as much as you can so that people have a good idea of what to expect. Just like with your pricing, transparency is key. Especially in something like the legal process, it’s helpful to have as much insight as possible to make it less intimidating and stressful. ',
    },
    {
      question: 'What is the typical legal process like?',
      answer: 'Everyone wants to know what to expect. The problem is that no legal process is “typical”. While proceedings can be similar, and while case lengths can have a limited range in some instances, every single case is different. We know what you’re thinking: so why offer this Q&A?\n\n Well, here’s the thing—it’s another way to show people your tailored approach and reassure them that you’ll do your best to make sure they’re informed and prepared every step of the way. You can describe general legal events and processes if you’d like, or even link to a loose guideline for all the different types of practice areas that you cover. One thing you can do is to make a timeline with events that have a more specific time frame and note the events that may be more dependent on the circumstances or case itself.  ',
    },
    {
      question: 'How long do I have to file a lawsuit?',
      answer: 'line for all the different types of practice areas that you cover. One thing you can do is to make a timeline with events that have a more specific time frame and note the events that may be more dependent on the circumstances or case itself.  ',
    },
  ];

  return (
    <div className="FAQ-container">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((faq, index) => (
        <div key={index}>
          <button
            className={`FAQ ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleFAQClick(index)}
          >
            {faq.question}
          </button>
          <div className="panel" style={{ maxHeight: activeIndex === index ? '1000px' : '0' }}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

