import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "919440283982";
    
    // Constructing the dynamic message based on form input
    const text = `Name: ${formData.name} Email: ${formData.email} Phone: ${formData.phone} Message: ${formData.message}`;
    
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-[64px] min-h-screen bg-[#f1e1dd] font-['Poppins'] flex flex-col">
      
      {/* PAGE HEADER SECTION */}
      <section className="pt-20 pb-12 text-center px-6 block opacity-100 visible">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[42px] md:text-[52px] font-bold text-[#734332] mb-4 tracking-tight leading-tight">
            Contact US
          </h1>
          <p className="text-lg md:text-[20px] text-[#734332]/80 font-medium tracking-wide mb-8">
            Get in touch with us to discuss
          </p>
          
          {/* Contact Details Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 mb-4">
            <div className="bg-white/40 p-6 rounded-lg border border-[#734332]/10">
              <h4 className="text-[#734332] font-bold mb-2">WhatsApp Us</h4>
              <p className="text-[15px] font-medium">WhatsApp: 9440283982</p>
            </div>
            <div className="bg-white/40 p-6 rounded-lg border border-[#734332]/10">
              <h4 className="text-[#734332] font-bold mb-2">Voice Call</h4>
              <p className="text-[15px] font-medium">Call: 6305197326</p>
            </div>
            <div className="bg-white/40 p-6 rounded-lg border border-[#734332]/10">
              <h4 className="text-[#734332] font-bold mb-2">Email & Office</h4>
              <p className="text-[13px] font-medium">saipoornatrading@gmail.com</p>
              <p className="text-[13px] font-medium mt-1">68-1-99 mulagada Mindi post<br/>Visakhapatnam 530012</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT GRID */}
      <section className="pb-24 px-6 md:px-12 flex-grow block opacity-100 visible">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: CONTACT FORM CARD */}
          <div className="flex justify-center lg:justify-end opacity-100 visible">
            <div className="w-full max-w-[480px] bg-white/50 p-8 md:p-10 rounded-[12px] border border-gray-300 shadow-lg backdrop-blur-md">
              <h3 className="text-[24px] font-bold text-center text-[#1c1c1c] mb-8">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#734332]/20 transition-all placeholder:text-gray-500 text-[15px] shadow-sm"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#734332]/20 transition-all placeholder:text-gray-500 text-[15px] shadow-sm"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#734332]/20 transition-all placeholder:text-gray-500 text-[15px] shadow-sm"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#734332]/20 transition-all placeholder:text-gray-500 resize-none text-[15px] shadow-sm"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#25D366] hover:bg-[#1fb354] text-white font-bold py-4 rounded-md shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-lg uppercase tracking-wider mt-4"
                >
                  Send WhatsApp
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT COLUMN: GOOGLE MAP EMBED */}
          <div className="opacity-100 visible">
            <div className="w-full aspect-square lg:aspect-auto lg:h-[530px] max-w-[550px] mx-auto rounded-[12px] overflow-hidden shadow-xl border-[4px] border-white/80 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.980637171448!2d83.216335!3d17.7126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3969e06e300001%3A0x8f2d50e828e6c71!2s68-1-99%2C%20Mulagada%2C%20Mindi%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530012!5e0!3m2!1sen!2sin!4v1716300000000!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sai Poorna Trading Agencies Office Location"
                className="opacity-100 visible"
              ></iframe>
            </div>
            <p className="mt-4 text-center text-[#734332] font-medium text-[14px]">
              68-1-99 mulagada Mindi post visakhapatnam 530012
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;