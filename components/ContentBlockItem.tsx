
import React from 'react';
import { ContentBlock } from '../types';

interface ContentBlockItemProps {
  block: ContentBlock;
  onRemove: () => void;
}

const ContentBlockItem: React.FC<ContentBlockItemProps> = ({ block, onRemove }) => {
  const renderContent = () => {
    switch (block.type) {
      case 'image':
        return (
          <div className="group relative rounded-lg overflow-hidden border border-zinc-100 shadow-sm transition-all hover:shadow-xl">
            <img src={block.content} alt={block.metadata?.prompt} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <p className="text-white text-xs font-light px-6 text-center italic">"{block.metadata?.prompt}"</p>
            </div>
          </div>
        );
      case 'code':
        return (
          <div className="bg-zinc-50 rounded-lg p-6 border border-zinc-200 shadow-inner group relative">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Source Code</span>
              <button 
                onClick={() => navigator.clipboard.writeText(block.content)}
                className="text-[10px] text-zinc-400 hover:text-zinc-900 transition-colors"
              >
                COPY
              </button>
            </div>
            <pre className="mono text-sm text-zinc-700 whitespace-pre-wrap leading-relaxed overflow-x-auto">
              <code>{block.content}</code>
            </pre>
          </div>
        );
      case 'idea':
        return (
          <div className="bg-white rounded-lg p-8 border-l-4 border-zinc-900 shadow-sm space-y-4">
             <div className="text-sm font-mono text-zinc-400 tracking-tighter uppercase">Concept Matrix</div>
             <div className="prose prose-zinc max-w-none text-zinc-800 leading-relaxed font-light text-lg">
                {block.content.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
             </div>
          </div>
        );
      default:
        return (
          <div className="prose prose-zinc max-w-none">
            <div className="flex items-center gap-3 mb-6 opacity-40">
               <div className="h-px flex-1 bg-zinc-200"></div>
               <span className="text-[10px] font-mono tracking-widest uppercase">Inscription</span>
               <div className="h-px flex-1 bg-zinc-200"></div>
            </div>
            <div className="text-zinc-800 leading-relaxed font-light text-xl whitespace-pre-wrap">
              {block.content}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 group relative">
      <div className="absolute -left-12 top-0 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={onRemove}
          className="p-2 text-zinc-300 hover:text-red-400 transition-colors"
          title="Remove from canvas"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>

      <div className="mb-2 flex items-center justify-between">
        <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-[0.2em]">
          {new Date(block.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
      
      {renderContent()}
    </div>
  );
};

export default ContentBlockItem;
