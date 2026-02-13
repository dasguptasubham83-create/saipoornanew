import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="pt-[64px] min-h-screen bg-[#f1e1dd] font-['Poppins']">
      
      {/* HEADER SECTION */}
      <section className="pt-20 pb-12 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[32px] md:text-[40px] font-bold text-[#734332] mb-6 leading-tight">
            About SAI POORNA TRADING AGENCIES
          </h1>
          <p className="max-w-3xl mx-auto text-[#1c1c1c] text-[16px] md:text-[18px] leading-relaxed font-medium">
            We serve clients across multiple international markets, supported by a strong logistics and trade network
          </p>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: IMAGE */}
          <div className="w-full flex justify-center">
            <img 
              src="https://i.ibb.co/4RfDqWD9/unnamed.jpg" 
              alt="Truck lifting shipping container" 
              className="w-full max-w-[550px] shadow-sm object-cover"
              loading="lazy"
              decoding="async"
              width="550"
              height="400"
            />
          </div>

          {/* RIGHT COLUMN: DESCRIPTION */}
          <div className="flex flex-col">
            <h2 className="text-[28px] font-bold text-[#cc4331] mb-8">
              Sai poorna trading agencies
            </h2>
            
            <div className="space-y-6 text-[#1c1c1c] text-[16px] leading-relaxed font-normal">
              <p>
                We are a trusted import and export company <span className="text-[#cc4331]">specializing in heavy machinery</span> for construction, industrial, mining, and infrastructure sectors. <span className="text-[#cc4331]">We supply quality equipment to international markets</span> with a strong focus on reliability and customer satisfaction.
              </p>
              
              <p>
                With solid experience in global trade, we manage the complete export process including machinery sourcing, inspection, packaging, documentation, customs clearance, and logistics. Our team ensures smooth and timely delivery while meeting international standards.
              </p>
              
              <p>
                Our mission is to provide dependable heavy machinery solutions that support our clients' projects worldwide. We believe in transparency, quality service, and long-term business relationships.
              </p>
              
              <p>
                Backed by a strong logistics network and professional trade practices, we are committed to delivering efficient and seamless global trade solutions.
              </p>

              {/* NEW ADDITION: IEC & GSTIN */}
              <div className="mt-8 pt-4 space-y-1">
                <p>
                  <span className="font-bold">IEC:</span> CKVPC7917H (Importer-Exporter Code)
                </p>
                <p>
                  <span className="font-bold">GSTIN:</span> 37CKVPC7917H1ZM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;