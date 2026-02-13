import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm your SAI POORNA Assistant. How can I help you today?", sender: 'bot' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    // Only scroll to bottom if the chatbot is open to prevent page-level jumping on mount
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const getBotResponse = (userInput: string): string => {
    const lowInput = userInput.toLowerCase();
    
    // Company & About
    if (lowInput.includes('company') || lowInput.includes('about') || lowInput.includes('who are you')) {
      return "SAI POORNA TRADING AGENCIES was founded in 2007. We are a premier export-import firm specializing in heavy machinery for industrial, construction, and mining sectors.";
    }
    // Location
    if (lowInput.includes('location') || lowInput.includes('address') || lowInput.includes('office') || lowInput.includes('where')) {
      return "Our office is located at: 68-1-99, Mulagada, Mindi post, Visakhapatnam 530012, Andhra Pradesh, India.";
    }
    // Contact Info
    if (lowInput.includes('contact') || lowInput.includes('phone') || lowInput.includes('number') || lowInput.includes('call')) {
      return "You can reach us at WhatsApp: 9440283982 or Call: 6305197326. Email: saipoornatrading@gmail.com";
    }
    // Codes
    if (lowInput.includes('iec') || lowInput.includes('code')) {
      return "Our Importer-Exporter Code (IEC) is CKVPC7917H.";
    }
    if (lowInput.includes('gst') || lowInput.includes('tax') || lowInput.includes('gstin')) {
      return "Our GSTIN is 37CKVPC7917H1ZM.";
    }
    // Services & Machinery
    if (lowInput.includes('machinery') || lowInput.includes('export')) {
      return "We export all types of heavy equipment, including excavators, tractors, lathe machines, and forklifts to global markets.";
    }
    if (lowInput.includes('bore') || lowInput.includes('drilling')) {
      return "We supply high-performance bore machines for precision drilling, ensuring durability and efficiency for your projects.";
    }
    // Process
    if (lowInput.includes('process') || lowInput.includes('how') || lowInput.includes('import') || lowInput.includes('export process')) {
      return "Our end-to-end process includes: Machinery Sourcing -> Quality Inspection -> Secure Packaging -> Customs Clearance -> Global Logistics & Delivery.";
    }
    if (lowInput.includes('sourcing') || lowInput.includes('supply')) {
      return "We source reliable equipment from top Indian manufacturers, ensuring quality compliance with international standards.";
    }
    if (lowInput.includes('inspection') || lowInput.includes('quality')) {
      return "Every machine undergoes certified pre-shipment testing. We provide full mechanical health reports and video proof for your confidence.";
    }
    if (lowInput.includes('logistics') || lowInput.includes('shipping') || lowInput.includes('delivery')) {
      return "We provide cost-efficient shipping, including disassembly and container loading to minimize freight expenses.";
    }

    return "I'm sorry, I only assist with SAI POORNA company-related queries. Please contact us for more details.";
  };

  const handleSend = () => {
    if (!input.trim() || isTyping) return;

    const userMsg: Message = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(input);
      const botMsg: Message = { id: Date.now() + 1, text: botResponse, sender: 'bot' };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="relative inline-block font-['Poppins']">
      {/* Chat Window Popup - Positioned above the trigger */}
      <div className={`absolute bottom-[calc(100%+20px)] right-0 w-[300px] md:w-[360px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100 overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
        {/* Header */}
        <div className="bg-[#1c1c1c] p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#d4a017] rounded-full flex items-center justify-center">
              <Bot size={22} className="text-[#1c1c1c]" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider">Sai Poorna Assistant</h3>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] opacity-70">Support Online</span>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-[320px] overflow-y-auto p-4 bg-gray-50 flex flex-col gap-3">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 rounded-2xl text-[12px] leading-relaxed shadow-sm text-black ${
                msg.sender === 'user' 
                ? 'bg-[#cc4331] rounded-tr-none' 
                : 'bg-white border border-gray-200 rounded-tl-none'
              }`}>
                {msg.text}
                {msg.text.includes("I'm sorry") && (
                  <div className="mt-3 flex flex-col gap-2">
                    <Link 
                      to="/contact" 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-2 bg-[#1c1c1c] text-white py-1.5 px-3 rounded-md hover:bg-gray-800 transition-colors font-bold text-[10px] uppercase tracking-wider"
                    >
                      Contact Us <ExternalLink size={10} />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 p-2.5 rounded-2xl rounded-tl-none flex gap-1 items-center">
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about our services..."
            className="flex-grow bg-gray-100 border-none rounded-full px-4 py-2 text-[13px] outline-none text-black"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${input.trim() && !isTyping ? 'bg-[#d4a017] text-[#1c1c1c] shadow-md' : 'bg-gray-100 text-gray-300'}`}
          >
            <Send size={16} />
          </button>
        </div>
      </div>

      {/* Trigger Button - Circular icon with text */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col items-center gap-1.5 group"
      >
        <div className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 border-2 ${isOpen ? 'bg-[#d4a017] border-[#d4a017] text-[#1c1c1c]' : 'bg-white/10 border-white/20 text-white hover:bg-white/20'}`}>
          <MessageCircle size={22} />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-white/70 group-hover:text-white transition-colors">
          Assistant
        </span>
      </button>
    </div>
  );
};

export default Chatbot;