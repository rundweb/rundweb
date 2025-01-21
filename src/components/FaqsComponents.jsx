import { useState } from "react";
import { RiQuestionAnswerFill } from "react-icons/ri";

const FaqsComponents = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is a landing page, and how does it work?",
      answer:
        "A landing page is a web page designed specifically to encourage visitors to take a specific action, such as filling out a form or making a purchase. With focused design and conversion strategies, landing pages help improve the results of your marketing campaigns.",
    },
    {
      question: "How long does it take to create a landing page?",
      answer:
        "The timeline depends on the complexity of the design and features requested. Generally, we can complete a landing page in 3-5 business days.",
    },
    {
      question: "Are the landing pages you create mobile-friendly?",
      answer:
        "Yes, all of our landing pages are optimized to display perfectly on desktop, tablet, and smartphone devices.",
    },
    {
      question: "Can I request revisions after the landing page is completed?",
      answer:
        "Absolutely! We offer up to 3 revisions to ensure the landing page meets your needs.",
    },
    {
      question: "Do you offer any guarantees for the results?",
      answer:
        "We don’t offer specific guarantees for conversion rates, but our designs are optimized based on best practices and experience. We also provide guidance to help improve the performance of your landing page.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-5 mb-10">
      <div className="mb-6">
        <h1 className="text-lg font-bold text-center text-primary">FAQs</h1>
        <h1 className="text-center font-bold text-4xl text-primary">Frequently asked questions</h1>
      </div>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-6">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex w-full text-left px-3 py-2 text-primary font-medium rounded-lg tracking-wide shadow"
          >
            <RiQuestionAnswerFill  className="w-10 text-base mt-1 mr-1"/> {faq.question}
          </button>
          {activeIndex === index && (
            <div className="mt-2 px-4 py-2 bg-white text-primary text-sm tracking-wide rounded-lg shadow">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqsComponents;
