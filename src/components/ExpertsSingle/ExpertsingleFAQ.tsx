import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    { question: "Is there a free trial available?", answer: "Yes, we offer a 14-day free trial with full access to all features.Yes, we offer a 14-day free trial with full access to all features.    Yes, we offer a 14-day free trial with full access to all features." },
    { question: "How do I create an account?", answer: "Click the sign-up button and follow the instructions to create your account." },
    { question: "Do you offer any discounts or promotions?", answer: "We frequently run seasonal discounts. Check our homepage or subscribe to our newsletter." },
    { question: "What are your hours of operation?", answer: "Our team is available Monday–Friday, 9AM to 6PM IST." },
    { question: "What does your company do?", answer: "We provide end-to-end startup solutions including legal, branding, HR, and marketing." },
    { question: "Can I change my account information later?", answer: "Yes, account settings can be updated anytime from your dashboard." },
    { question: "What makes your company different from competitors?", answer: "We focus on startup-specific needs and offer bundled, customizable services." },
    { question: "Where can I find your terms and privacy policy?", answer: "They are available at the footer of every page on our website." },
    { question: "Is customer support available 24/7?", answer: "Email support is available 24/7, and live chat during business hours." },
    { question: "Can I cancel my subscription anytime?", answer: "Yes, you're free to cancel anytime without any hidden fees." },
    
  ];

  const renderColumn = (col: FAQItem[], startIndex: number) =>
    col.map((item, i) => {
      const idx = startIndex + i;
      const isOpen = openIndex === idx;

      return (
        <div
          key={idx}
          className={`rounded-xl mb-5 p-5 border border-white bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "shadow-md" : "shadow-none"
          }`}
          onClick={() => setOpenIndex(isOpen ? null : idx)}
        >
          <div className="flex justify-between items-center text-md font-semibold text-white cursor-pointer">
            {item.question}
            <span className="text-xl font-medium ml-2">
              {isOpen ? "−" : "+"}
            </span>
          </div>
          {isOpen && (
            <p className="text-sm mt-3 text-left text-gray-300 transition-opacity duration-200">
              {item.answer}
            </p>
          )}
        </div>
      );
    });

  const mid = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, mid);
  const col2 = faqs.slice(mid);

  return (
    <section className="w-full px-4 md:px-12 py-16 bg-black font-poppins">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-white mb-5">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-400 max-w-4xl mx-auto mb-7 text-sm md:text-base">
        It can be hard to choose the right services for your business. We’re here to help.It can be hard to choose the right services for your business. We’re here to help.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto mt-10">
        <div>{renderColumn(col1, 0)}</div>
        <div>{renderColumn(col2, col1.length)}</div>
      </div>
    </section>
  );
};

export default FAQSection;
