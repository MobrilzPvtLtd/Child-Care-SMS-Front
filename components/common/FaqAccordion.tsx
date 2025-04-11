"use client"
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqItems = [
    {
      question: "What is childcare management software?",
      answer: "Childcare management software is technology designed to simplify, automate, and speed up the management of childcare centers and early childhood education programs. It helps with daily tasks such as billing, enrollment, family engagement, staff management, and record-keeping. Flowysis is the childcare management software of choice for millions of educators in the US and Canada."
    },
    {
      question: "What does childcare management software do?",
      answer: "Childcare management software streamlines administrative tasks, improves parent communication, simplifies billing and payments, and helps with classroom management."
    },
    {
      question: "What size education programs use childcare management software?",
      answer: "Childcare management software is used by programs of all sizes, from small in-home daycares to large multi-location centers and preschool chains."
    },
    {
      question: "Why should my center use childcare management software?",
      answer: "Using childcare management software can save time, reduce administrative burden, improve communication with families, and help you focus more on children and less on paperwork."
    },
    {
      question: "Is Flowysis right for me?",
      answer: "Flowysis works for childcare centers, preschools, and early education programs of all sizes. We offer flexible plans to match your needs and budget."
    },
    {
      question: "Does Flowysis connect with QuickBooks?",
      answer: "Yes, Flowysis integrates with QuickBooks Online, allowing you to sync your financial data seamlessly between platforms."
    }
  ];
  
  const toggleFAQ = (index : any) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  
  return (
    <div className="max-w-7xl mx-auto py-5">
      <h2 className="text-4xl font-bold text-center mb-8">Frequently asked questions</h2>
      
      <div className="divide-y divide-gray-200 px-4 md:px-20">
        {faqItems.map((item, index) => (
          <div key={index} className="p-2 md:p-4">
            <button 
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left py-2"
            >
              <span className="font-semibold text-xl md:text-2xl text-gray-800">{item.question}</span>
              <span className="ml-6 flex-shrink-0">
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-blue-500" />
                ) : (
                  <Plus className="h-5 w-5 text-blue-500 " />
                )}
              </span>
            </button>
            
            {openIndex === index && (
              <div className="md:mt-2 text-sm  text-gray-600">
                <p className="text-gray-500 font-medium text-base md:text-lg">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;