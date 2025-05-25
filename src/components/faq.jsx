import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronRight } from 'lucide-react';

const FAQComponent = () => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(null);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [userQuestion, setUserQuestion] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  // QuickQ FAQ data
  const faqData = [
    {
      id: 1,
      question: "What is QuickQ and how does it work?",
      answer: "QuickQ is a comprehensive queue management solution that allows customers to join queues remotely and businesses to manage their queues digitally. Users can join queues from anywhere using their smartphone, track their position in real-time, and receive notifications when it's their turn."
    },
    {
      id: 2,
      question: "How do I join a queue using QuickQ?",
      answer: "Simply download the QuickQ app, find the business or service you want to visit, and select 'Join Queue'. You'll receive a queue number and can track your position in real-time. No need to physically wait in line!"
    },
    {
      id: 3,
      question: "Is QuickQ free to use for customers?",
      answer: "Yes! QuickQ is completely free for customers. You can join queues, track your position, and receive notifications without any charges. Our revenue comes from businesses who use our queue management platform."
    },
    {
      id: 4,
      question: "What are the requirements for businesses to use QuickQ?",
      answer: "Businesses need to sign up for a QuickQ service provider account, complete basic verification including business registration details, and configure their queue settings. Our team provides full onboarding support to get you started quickly."
    },
    {
      id: 5,
      question: "How accurate are the wait time estimates?",
      answer: "Our AI-powered system provides highly accurate wait time estimates based on historical data, current queue length, and real-time service patterns. Estimates are updated continuously and typically accurate within 2-3 minutes."
    },
    {
      id: 6,
      question: "Can I cancel my spot in the queue?",
      answer: "Yes, you can cancel your spot in the queue at any time through the app. This helps keep the queue moving efficiently for other customers. You can also rejoin the same queue if needed."
    },
    {
      id: 7,
      question: "What types of businesses can use QuickQ?",
      answer: "QuickQ works for any business that serves customers in queues - restaurants, clinics, banks, government offices, retail stores, salons, and more. Our system is flexible and can be customized for different service types and operating hours."
    },
    {
      id: 8,
      question: "How does QuickQ help businesses improve efficiency?",
      answer: "QuickQ provides businesses with real-time analytics, reduces no-shows, optimizes staff allocation, and improves customer satisfaction. Our dashboard helps you track queue performance and make data-driven decisions to enhance operations."
    }
  ];

  // Filter questions based on search query
  useEffect(() => {
    if (query.trim() === '') {
      setFilteredQuestions(faqData);
    } else {
      const filtered = faqData.filter(item => 
        item.question.toLowerCase().includes(query.toLowerCase()) || 
        item.answer.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredQuestions(filtered);
    }
  }, [query]);

  // Initialize with all questions
  useEffect(() => {
    setFilteredQuestions(faqData);
  }, []);

  const handleToggleExpand = (id) => {
    setIsExpanded(isExpanded === id ? null : id);
  };

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    if (userQuestion.trim()) {
      alert(`Your question "${userQuestion}" has been submitted. Our team will get back to you soon!`);
      setUserQuestion('');
    }
  };

  return (
    <div 
      ref={sectionRef}
      className={`relative flex flex-col items-center w-full min-h-screen bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background Decorative Elements */}
      <div className="absolute left-0 top-20 w-64 h-64 opacity-10">
        <img src="/Ellipses.png" className="w-full h-full object-contain" alt="" />
      </div>
      <div className="absolute right-0 top-40 w-48 h-48 opacity-10">
        <img src="/Ellipses.png" className="w-full h-full object-contain" alt="" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto p-8 pt-32">
        {/* Header */}
        <div className={`w-full text-center mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            How can we
            <br />
            <span style={{ color: "#F97316" }}>help you?</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 font-poppins">
            Find answers to common questions about QuickQ
          </p>
          
          {/* Search Bar */}
          <div className={`relative w-full max-w-xl mx-auto mb-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
          }`}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for answers..."
              className="w-full py-4 px-6 pr-12 rounded-full border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 font-poppins"
            />
            <div className="absolute right-4 top-0 h-full flex items-center">
              <Search size={20} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* FAQ Results */}
        <div className={`w-full space-y-4 mb-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((item, index) => (
              <div 
                key={item.id} 
                className={`w-full rounded-2xl overflow-hidden transition-all duration-300 ${
                  isExpanded === item.id 
                    ? 'bg-white shadow-lg border-2 border-orange-500' 
                    : 'bg-white shadow-md border border-gray-200 hover:shadow-lg'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div 
                  className={`flex justify-between items-center p-6 cursor-pointer transition-all duration-300 ${
                    isExpanded === item.id ? 'bg-orange-50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => handleToggleExpand(item.id)}
                >
                  <h2 className={`font-semibold font-poppins text-lg ${
                    isExpanded === item.id ? 'text-orange-700' : 'text-gray-900'
                  }`}>
                    {item.question}
                  </h2>
                  <ChevronRight 
                    size={24} 
                    className={`text-orange-500 transition-transform duration-300 ${
                      isExpanded === item.id ? 'transform rotate-90' : ''
                    }`}
                  />
                </div>
                
                {isExpanded === item.id && (
                  <div className="px-6 pb-6 text-gray-700 font-poppins leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg font-poppins">
                No results found for "{query}". Try a different search term.
              </p>
            </div>
          )}
        </div>
        
        {/* Ask Question Section */}
        <div className={`w-full text-center rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 p-8 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-poppins">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-8 font-poppins">
            Can't find what you're looking for? Send us your question and we'll get back to you.
          </p>
          
          <form onSubmit={handleSubmitQuestion} className="w-full max-w-2xl mx-auto">
            <textarea
              value={userQuestion}
              onChange={(e) => setUserQuestion(e.target.value)}
              placeholder="Type your question here..."
              className="w-full p-4 min-h-32 rounded-xl border-2 border-gray-200 mb-6 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 font-poppins resize-none"
            />
            
            <button 
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-poppins"
            >
              Send Question
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
