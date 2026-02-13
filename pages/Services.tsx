import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-[64px] min-h-screen bg-[#f1e1dd] font-['Poppins']">
      
      {/* SECTION 1: HERO - As seen in Screenshot Page 1 */}
      <section className="relative h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://i.ibb.co/GQkcJMVT/AP874F-1.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-[48px] font-bold mb-6">Our Services</h1>
          <p className="text-lg md:text-[20px] font-medium leading-relaxed">
            We specialize in the import and export of heavy machinery for construction, industrial, mining, and infrastructure projects. We source reliable machines from trusted manufacturers and deliver them to international markets safely and on time
          </p>
        </div>
      </section>

      {/* SECTION 2: HISTORY - Corrected Description */}
      <section className="py-20 px-6 md:px-24">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-[26px] font-bold text-[#734332] mb-8">A brief history</h2>
          <p className="text-[#1c1c1c] text-[16px] leading-relaxed">
            Since our inception, we have been providing comprehensive export services for all types of machinery, including sourcing, inspection, documentation, customs clearance, and logistics, ensuring the safe and efficient global delivery of every project.
          </p>
          <div className="mt-12 h-[1px] bg-gray-300 w-full opacity-50"></div>
        </div>
      </section>

      {/* SECTION 3: SERVICES LISTING */}
      <section className="pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* 1. Machinery Sourcing & Supply - Image Left, Text Right (Screenshot Page 2) */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2">
              <a href="https://ibb.co/1YDXddGX" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://i.ibb.co/0pg9FFy9/machinery-source-and-supply.jpg" 
                  alt="Machinery Sourcing" 
                  className="w-full h-[350px] object-cover shadow-sm"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="350"
                />
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-[24px] font-bold text-[#cc4331] mb-6">Machinery Sourcing & Supply</h3>
              <p className="text-[#1c1c1c] text-[16px] leading-relaxed">
                We help clients find the right heavy equipment based on their project needs. Our sourcing process ensures quality, performance, and compliance with international standards
              </p>
            </div>
          </div>

          {/* 2. Global Logistics & Transportation - Text Left, Image Right (Screenshot Page 3) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2">
              <a href="https://ibb.co/HDZJT8S9" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://i.ibb.co/d0Zh4YTH/global-logistics.jpg" 
                  alt="Global Logistics" 
                  className="w-full h-[350px] object-cover shadow-sm"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="350"
                />
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-[24px] font-bold text-[#cc4331] mb-6">Global Logistics & Transportation</h3>
              <p className="text-[#1c1c1c] text-[16px] leading-relaxed">
                With a strong logistics network, we manage end-to-end transportation of heavy machinery, including sea freight, customs clearance, and safe delivery to the destination
              </p>
            </div>
          </div>

          {/* 3. Customs Clearance & Documentation - Image Left, Text Right (Screenshot Page 3) */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2">
              <a href="https://ibb.co/6STrkmS" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://i.ibb.co/xbBXNDb/CUSTOM-CLEARANCE-AND-DOCUMENTATION.jpg" 
                  alt="Customs Clearance" 
                  className="w-full h-[350px] object-cover shadow-sm"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="350"
                />
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-[24px] font-bold text-[#cc4331] mb-6">Customs Clearance & Documentation</h3>
              <p className="text-[#1c1c1c] text-[16px] leading-relaxed">
                We handle all import and export documentation, duties, and customs procedures to ensure smooth and hassle-free cross-border trade
              </p>
            </div>
          </div>

          {/* 4. Quality Inspection & Assurance - Text Left, Image Right (Screenshot Page 4) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2">
              <a href="https://ibb.co/jkkPHDLb" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://i.ibb.co/4RRnJpjK/quality-inspection-2.jpg" 
                  alt="Quality Inspection" 
                  className="w-full h-[350px] object-cover shadow-sm"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="350"
                />
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-[24px] font-bold text-[#cc4331] mb-6">Quality Inspection & Assurance</h3>
              <p className="text-[#1c1c1c] text-[16px] leading-relaxed">
                All machinery is carefully inspected before shipment to ensure proper condition, performance, and safety standards
              </p>
            </div>
          </div>

          {/* 5. Packaging & Secure Shipping - Image Left, Text Right (Screenshot Page 4) */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2">
              <a href="https://ibb.co/1jSP8J3" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://i.ibb.co/p5mMJrg/packaging-new.jpg" 
                  alt="Packaging & Secure Shipping" 
                  className="w-full h-[350px] object-cover shadow-sm"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="350"
                />
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-[24px] font-bold text-[#cc4331] mb-6">Packaging & Secure Shipping</h3>
              <p className="text-[#1c1c1c] text-[16px] leading-relaxed">
                We provide professional packaging and secure loading to protect heavy machinery during long-distance transportation
              </p>
            </div>
          </div>

          {/* 6. After-Sales Support - Text Left, Image Right (Screenshot Page 5) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2">
              <a href="https://ibb.co/zhLfKK0Y" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://i.ibb.co/KjQyCC3k/aftersales.jpg" 
                  alt="After-Sales Support" 
                  className="w-full h-[350px] object-cover shadow-sm"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="350"
                />
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-[24px] font-bold text-[#cc4331] mb-6">After-Sales Support</h3>
              <p className="text-[#1c1c1c] text-[16px] leading-relaxed">
                Our services don't end at delivery. We offer support to assist clients with queries, coordination, and guidance after shipment
              </p>
            </div>
          </div>

          {/* 7. NEW SERVICE: Bore Machines - Image Left, Text Right (Maintains Alternation) */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2">
              <a href="https://imgbb.com/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://i.ibb.co/JFswRJcV/image.png" 
                  alt="Bore Machines" 
                  className="w-full h-[350px] object-cover shadow-sm"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="350"
                />
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-[24px] font-bold text-[#cc4331] mb-6">Bore Machines</h3>
              <p className="text-[#1c1c1c] text-[16px] leading-relaxed">
                We supply high-performance bore machines designed for precision drilling and heavy-duty industrial applications. Our bore machines are carefully inspected to ensure durability, accuracy, and compliance with international standards. With reliable sourcing and secure logistics support, we deliver efficient boring solutions tailored to construction, mining, and infrastructure projects worldwide.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: BECOME A CUSTOMER - As seen in Screenshot Page 6 */}
      <section className="relative py-32 text-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://i.ibb.co/YFp0fKvT/AP6AA1-1.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <h1 className="text-[#e58922] text-2xl md:text-[30px] font-bold mb-8 uppercase tracking-[3px]">Become a Customer</h1>
          <div className="mb-14">
            <h2 className="text-[42px] md:text-[76px] font-bold leading-[1.1] mb-0">Revolutionizing Heavy</h2>
            <h2 className="text-[#e58922] text-[42px] md:text-[76px] font-bold leading-[1.1]">Machinery Exports</h2>
          </div>
          <Link 
            to="/contact" 
            className="inline-block bg-[#cc4331] hover:bg-[#b03a2a] text-white font-bold px-14 py-4 text-xl transition-all rounded shadow-2xl uppercase"
          >
            LET'S TALK
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;