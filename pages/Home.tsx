import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [startX, setStartX] = useState<number | null>(null);
  const [productsList, setProductsList] = useState([
    {
      id: 5,
      name: "Drilling Bits",
      image: "https://i.ibb.co/SZy7WZq/unnamed-2.jpg",
      description: "Premium industrial-grade drilling bits engineered for superior cutting efficiency and maximum durability in diverse rock types and deep-well applications."
    },
    {
      id: 3,
      name: "UPVC Pipes for Bore Hole",
      image: "https://i.ibb.co/20xcVnv1/unnamed.jpg",
      description: "Heavy-duty UPVC borewell casing pipes manufactured for corrosion resistance, high load capacity, and long-term groundwater extraction."
    },
    {
      id: 1,
      name: "Borehole Drilling Rigs",
      image: "https://i.ibb.co/p6GsKQTZ/unnamed.jpg",
      description: "Advanced hydraulic borehole drilling rigs engineered for high performance, precision depth, and robust operation in the most demanding geological terrains."
    },
    {
      id: 2,
      name: "Drilling Hammer Bits",
      image: "https://i.ibb.co/4Z1MW9KN/saipoorna.jpg",
      description: "Precision-engineered DTH hammer bits built for maximum penetration rate and long service life in hard rock drilling."
    },
    {
      id: 4,
      name: "Iron Casing (Temporary Casing)",
      image: "https://i.ibb.co/TxCdSZZR/a59f665b-533b-462a-8be7-cd8b54312136.jpg",
      description: "Premium-grade iron casing pipes designed for temporary borewell support, offering exceptional structural integrity and easy retrieval in challenging soil conditions."
    }
  ]);

  const nextSlide = () => {
    setProductsList((prev) => {
      const newList = [...prev];
      const first = newList.shift();
      if (first) newList.push(first);
      return newList;
    });
  };

  const prevSlide = () => {
    setProductsList((prev) => {
      const newList = [...prev];
      const last = newList.pop();
      if (last) newList.unshift(last);
      return newList;
    });
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (startX === null) return;
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = startX - clientX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    setStartX(null);
  };

  const openImage = (src: string) => {
    window.open(src, '_blank');
  };

  return (
    <div className="overflow-x-hidden pt-[64px]">
      {/* SECTION 1: HERO */}
      <section className="relative h-[430px] md:h-[500px] flex items-center justify-center text-center text-white">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://i.ibb.co/8njkqWcn/hero-image.jpg')`,
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl lg:text-[60px] font-cinzel font-[800] leading-tight mb-2 uppercase tracking-[3px] md:tracking-[5px] text-shadow-elegant">
            SAI POORNA TRADING AGENCIES
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-[40px] font-['Montserrat'] font-[600] mb-8 uppercase tracking-[4px] md:tracking-[6px] text-shadow-elegant opacity-95">
            IMPORTS & EXPORTS
          </h2>
          <p className="italic text-lg mb-8 font-medium">Founded in 2007</p>
          <Link 
            to="/contact" 
            className="inline-block bg-[#e69138] text-[#1c1c1c] font-roboto font-[900] px-8 py-2.5 text-xl hover:bg-orange-600 transition-all shadow-lg"
          >
            Contact US
          </Link>
        </div>
      </section>

      {/* SECTION 2: INTRO TAGLINE */}
      <section className="relative py-16 px-6 md:px-24 text-center overflow-hidden flex items-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://i.ibb.co/Dg8xn7zs/APAQ0S-3.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto py-4">
          <p className="text-white text-lg md:text-[20px] leading-relaxed font-normal">
            We specialize in import and export services, connecting businesses across borders with reliable logistics, quality products, and timely delivery worldwide.
          </p>
        </div>
      </section>

      {/* SECTION 3: FEATURES */}
      <section className="py-24 px-6 md:px-24 bg-[#f1e1dd]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center reveal-hidden">
              <div className="mb-8 text-[#734332]">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2v20" />
                  <path d="M12 2a15.3 15.3 0 0 1 0 20" />
                  <path d="M12 2a15.3 15.3 0 0 0 0 20" />
                  <path d="M4 16h16" />
                  <path d="M4 8h16" />
                </svg>
              </div>
              <h2 className="text-[22px] md:text-[24px] font-bold mb-6 text-[#734332] leading-tight max-w-[280px]">
                Hassle-Free Global Compliance
              </h2>
              <p className="text-[#1c1c1c] text-[16px] leading-relaxed">
                We handle all export licensing, customs clearance, and documentation, ensuring your machinery clears international borders without delays or hidden costs
              </p>
            </div>

            <div className="flex flex-col items-center reveal-hidden">
              <div className="mb-8 text-[#734332]">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                  <path d="M15 18H9" />
                  <path d="M19 18h2a1 1 0 0 0 1-1v-5l-4-4h-3" />
                  <circle cx="7" cy="18" r="2" />
                  <circle cx="17" cy="18" r="2" />
                </svg>
              </div>
              <h2 className="text-[22px] md:text-[24px] font-bold mb-6 text-[#734332] leading-tight max-w-[280px]">
                Cost-Efficient Shipping Solutions
              </h2>
              <p className="text-[#1c1c1c] text-[16px] leading-relaxed">
                Our team expertly disassembles and packs large units into standard containers, significantly reducing your freight expenses while maintaining equipment integrity
              </p>
            </div>

            <div className="flex flex-col items-center reveal-hidden">
              <div className="mb-8 text-[#734332]">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" strokeWidth="2" />
                </svg>
              </div>
              <h2 className="text-[22px] md:text-[24px] font-bold mb-6 text-[#734332] leading-tight max-w-[280px]">
                Certified Pre-Shipment Testing
              </h2>
              <p className="text-[#1c1c1c] text-[16px] leading-relaxed">
                Every machine undergoes rigorous mechanical and hydraulic inspections. We provide full video reports and health checks so you can buy with 100% confidence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RE-ENGINEERED PRODUCT SECTION - CENTERED CAROUSEL */}
      <section id="products" className="py-24 bg-[#111] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#d4a017] font-mono text-xs tracking-[0.4em] uppercase mb-3 block opacity-80">Industrial Catalog</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Products</h2>
          </div>

          <div className="product-wrapper">
            <button className="arrow-btn arrow-left" onClick={prevSlide} aria-label="Previous product">‹</button>

            <div 
              id="product-track" 
              className="product-track cursor-grab active:cursor-grabbing select-none"
              onMouseDown={handleDragStart}
              onMouseUp={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchEnd={handleDragEnd}
            >
              {productsList.map((product, index) => (
                <div 
                  key={product.id} 
                  className={`product-card ${index === 2 ? 'center' : ''}`}
                >
                  <div className="bg-[#1c1c1c] border border-white/5 rounded-xl overflow-hidden shadow-2xl h-full flex flex-col p-0">
                    <div className="relative overflow-hidden aspect-[4/3] rounded-t-xl">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover pointer-events-none" 
                        draggable="false"
                      />
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow items-center text-center">
                      <h3 className="text-xl font-bold text-[#d4a017] mb-3 uppercase tracking-wider">{product.name}</h3>
                      <p className="text-sm text-gray-400 font-light leading-relaxed mb-8 flex-grow">
                        {product.description}
                      </p>
                      
                      <button 
                        onClick={() => openImage(product.image)}
                        className="mt-2 py-3 px-8 bg-[#d4a017] hover:bg-[#f2c94c] text-[#111] font-bold rounded-full transition-all duration-300 active:scale-95 uppercase text-[11px] tracking-widest shadow-lg"
                      >
                        View Image
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="arrow-btn arrow-right" onClick={nextSlide} aria-label="Next product">›</button>
          </div>
        </div>
      </section>

      {/* SECTION 4: MACHINERY TYPES GRID */}
      <section className="bg-[#f1e1dd] pb-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-[32px] md:text-[38px] font-bold text-[#303753] mb-16 text-center md:text-left">
            Machinery Types
          </h3>
          
          <div className="flex flex-col space-y-24">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 group cursor-pointer">
                <img 
                  src="https://i.ibb.co/Hf3tsJSc/APAQ0S-2.jpg" 
                  alt="Heavy Construction Equipment" 
                  className="w-full h-[320px] object-cover transition-transform duration-500 ease-out group-hover:scale-108 group-active:scale-108"
                  loading="lazy"
                  decoding="async"
                  width="640"
                  height="320"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold mb-4 text-[#734332]">Heavy Construction Equipment</h3>
                <p className="text-[#1c1c1c] text-[16px] leading-relaxed">
                  Reliable, high-performance machinery including Excavators, Backhoe Loaders, and Compactors sourced from top Indian manufacturers for global infrastructure projects
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 group cursor-pointer">
                <img 
                  src="https://i.ibb.co/p64FV7F3/APAQ0S-4.jpg" 
                  alt="Agricultural & Farm Machinery" 
                  className="w-full h-[320px] object-cover transition-transform duration-500 ease-out group-hover:scale-108 group-active:scale-108"
                  loading="lazy"
                  decoding="async"
                  width="640"
                  height="320"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold mb-4 text-[#734332]">Agricultural & Farm Machinery</h3>
                <p className="text-[#1c1c1c] text-[16px] leading-relaxed">
                  Exporting robust tractors, power tillers, and harvesters designed to withstand tough terrains and increase farming efficiency across international markets
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 group cursor-pointer">
                <img 
                  src="https://i.ibb.co/gZ1BbBJC/image.png" 
                  alt="Global Import & Export Solutions" 
                  className="w-full h-[320px] object-cover transition-transform duration-500 ease-out group-hover:scale-108 group-active:scale-108"
                  loading="lazy"
                  decoding="async"
                  width="640"
                  height="320"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold mb-4 text-[#734332]">Global Import & Export Solutions</h3>
                <p className="text-[#1c1c1c] text-[16px] leading-relaxed">
                  We provide comprehensive import and export solutions, ensuring smooth international trade operations with complete documentation, customs compliance, and secure logistics management. Our expertise guarantees reliable global sourcing and timely delivery aligned with international trade standards.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 group cursor-pointer">
                <img 
                  src="https://i.ibb.co/N6bcYsBJ/AP5480-1.jpg" 
                  alt="Material Handling & Lifting" 
                  className="w-full h-[320px] object-cover transition-transform duration-500 ease-out group-hover:scale-108 group-active:scale-108"
                  loading="lazy"
                  decoding="async"
                  width="640"
                  height="320"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold mb-4 text-[#734332]">Material Handling & Lifting</h3>
                <p className="text-[#1c1c1c] text-[16px] leading-relaxed">
                  Heavy-duty lifting equipment such as Forklifts, Mobile Cranes, and Overhead Hoists, ensuring safe and efficient logistics for warehouses and ports
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: INTRODUCING BANNER */}
      <section className="relative py-32 text-white">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://i.ibb.co/GQkcJMVT/AP874F-1.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-end">
          <div className="md:w-1/2 text-left md:pl-12">
            <h1 className="text-[#ff9900] text-3xl md:text-[36px] font-bold mb-6 uppercase tracking-wider">INTRODUCING</h1>
            <p className="text-lg md:text-[20px] font-medium mb-8 leading-tight">Premium Heavy Machinery Delivered to Your Job Site</p>
            <p className="text-[16px] text-gray-200 leading-relaxed mb-10">
              <span className="font-bold text-white uppercase">SAI POORNA</span> is your trusted global partner for high-performance industrial equipment. From heavy-duty excavators to precision road-building machinery, we bridge the gap between world-class manufacturing and your project’s success. Based in India and serving the United States, we specialize in exporting robust, certified, and cost-effective machinery solutions that meet the rigorous demands of the US construction and mining industries.
            </p>
            <Link 
              to="/services" 
              className="inline-block bg-[#cc4331] hover:bg-[#b03a2a] text-white font-bold px-10 py-3 text-lg transition-all rounded shadow-md uppercase"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: LEADING EXPORTER */}
      <section className="py-24 bg-[#f1e1dd]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <img 
              src="https://i.ibb.co/chDYMb4r/AP6BD1-1.jpg" 
              alt="Leading Exporter Workers" 
              className="w-full shadow-md"
              loading="lazy"
              decoding="async"
              width="640"
              height="480"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-[46px] font-bold text-[#734332] mb-10 leading-tight">Leading Exporter of All Types of Machinery</h2>
            <p className="text-[18px] text-[#1c1c1c] leading-relaxed font-normal">
              We have been in the industry since 2007. Over the years, we have become the world’s leading exporter of all types of machinery, providing premium products and excellent service.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8: BECOME A CUSTOMER CTA */}
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

export default Home;