import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search as SearchIcon, X, ArrowLeft } from 'lucide-react';

interface SitePage {
  title: string;
  path: string;
  content: string;
  lastModified: string;
}

const siteData: SitePage[] = [
  {
    title: "Home",
    path: "/home",
    content: "Sai Poorna Trading Agencies Imports & Exports. Specializing in heavy machinery export across the globe including agricultural, mining, construction, and energy industries. We provide premium products and excellent service. Become a Customer. Revolutionizing Heavy Machinery Exports. LET'S TALK.",
    lastModified: "10 Feb 2026"
  },
  {
    title: "About us",
    path: "/about-us",
    content: "About SAI POORNA TRADING AGENCIES. We serve clients across multiple international markets, supported by a strong logistics and trade network. Leading exporter of all types of machinery since 2007. Our expertise covers global compliance and cost-efficient shipping.",
    lastModified: "10 Feb 2026"
  },
  {
    title: "Services",
    path: "/services",
    content: "Our services include Heavy Machinery Export, Machinery Sourcing, Inspection & Quality Check, Packaging & Logistics, and Customs Clearance. A brief history ... We offer support to assist clients with queries, coordination, and guidance after shipment. Become a Customer.",
    lastModified: "10 Feb 2026"
  },
  {
    title: "Contact",
    path: "/contact",
    content: "Contact us at SAI POORNA. Office Address: 68-1-99, Mulagada, Mindi post, Visakhapatnam 530012. Phone numbers: WhatsApp: 9440283982, Call: 6305197326. Email: saipoornatrading@gmail.com. Reach out for hassle-free global compliance and shipping solutions.",
    lastModified: "10 Feb 2026"
  }
];

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SitePage[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);

    if (val.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = siteData.filter(page => 
      page.title.toLowerCase().includes(val.toLowerCase()) || 
      page.content.toLowerCase().includes(val.toLowerCase())
    );
    setResults(filtered);
  };

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === highlight.toLowerCase() 
            ? <span key={i} className="font-bold bg-yellow-100">{part}</span> 
            : part
        )}
      </span>
    );
  };

  const getSnippet = (content: string, keyword: string) => {
    const index = content.toLowerCase().indexOf(keyword.toLowerCase());
    if (index === -1) return content.substring(0, 160) + "...";
    
    const start = Math.max(0, index - 40);
    const end = Math.min(content.length, index + 120);
    let snippet = content.substring(start, end);
    if (start > 0) snippet = "..." + snippet;
    if (end < content.length) snippet = snippet + "...";
    return snippet;
  };

  return (
    <div className="min-h-screen bg-[#f3f3f3] pt-[64px] font-['Poppins']">
      {/* Header with Back Button and Search Input */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-600"
          >
            <ArrowLeft size={20} />
          </button>
          
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search site..."
              className="block w-full pl-10 pr-10 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm text-lg"
            />
            {query && (
              <button 
                onClick={() => {setQuery(''); setResults([]);}}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Results Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden min-h-[400px]">
          <div className="px-6 py-3 border-b border-gray-100 bg-gray-50 text-[13px] text-gray-500">
            Results from this site
          </div>

          <div className="p-0">
            {query.trim() === '' ? (
              <div className="flex flex-col items-center justify-center py-24 text-gray-400">
                <SearchIcon size={48} className="mb-4 opacity-20" />
                <p>Start typing to search our website</p>
              </div>
            ) : results.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {results.map((result) => (
                  <Link 
                    key={result.path} 
                    to={result.path}
                    className="block p-6 hover:bg-gray-50 transition-colors group"
                  >
                    <h3 className="text-[18px] text-[#1a0dab] font-medium group-hover:underline mb-1">
                      {result.title}
                    </h3>
                    <p className="text-[14px] text-gray-600 leading-relaxed mb-2">
                      {highlightText(getSnippet(result.content, query), query)}
                    </p>
                    <div className="text-[12px] text-gray-400 mt-1">
                      Last modified on {result.lastModified}
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
                <div className="w-32 h-32 mb-6 relative">
                  <div className="absolute inset-0 bg-gray-200 rounded-full flex items-center justify-center">
                    <div className="relative transform -rotate-12 translate-x-2">
                      <div className="w-16 h-8 bg-gray-500 rounded-l-full relative overflow-hidden">
                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-gray-400"></div>
                        <div className="absolute right-2 top-1 bottom-1 w-1 bg-gray-300"></div>
                      </div>
                      <div className="absolute left-[100%] top-[-10px] w-20 h-28 bg-gradient-to-r from-white/40 to-transparent transform -skew-x-[25deg] origin-left"></div>
                    </div>
                  </div>
                </div>
                <h2 className="text-[20px] font-bold text-gray-800 mb-2">No results match your search</h2>
                <p className="text-gray-500 text-[15px]">Check the spelling, or try a different search</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;