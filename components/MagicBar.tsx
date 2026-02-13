
import React, { useState, KeyboardEvent } from 'react';
import { LoadingState } from '../types';

interface MagicBarProps {
  onSend: (prompt: string) => void;
  loading: LoadingState;
}

const MagicBar: React.FC<MagicBarProps> = ({ onSend, loading }) => {
  const [value, setValue] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.trim() && loading === LoadingState.IDLE) {
      onSend(value);
      setValue('');
    }
  };

  const getPlaceholder = () => {
    switch(loading) {
      case LoadingState.THINKING: return "Synthesizing thought...";
      case LoadingState.GENERATING: return "Materializing content...";
      case LoadingState.ERROR: return "Connection lost. Try again.";
      default: return "Summon something from the void...";
    }
  };

  return (
    <div className={`
      relative group transition-all duration-500
      ${loading !== LoadingState.IDLE ? 'scale-95 opacity-80' : 'scale-100'}
    `}>
      <div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-200 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative glass rounded-2xl border border-zinc-200 shadow-2xl flex items-center px-6 py-4">
        <span className={`mr-4 text-zinc-400 font-mono transition-all ${loading !== LoadingState.IDLE ? 'animate-pulse scale-110 text-black' : ''}`}>
          {loading !== LoadingState.IDLE ? '◆' : '◇'}
        </span>
        
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading !== LoadingState.IDLE}
          placeholder={getPlaceholder()}
          className="w-full bg-transparent border-none outline-none text-zinc-800 placeholder-zinc-300 font-light tracking-wide text-lg disabled:cursor-not-allowed"
          autoFocus
        />

        <div className="flex items-center gap-2">
          {value && loading === LoadingState.IDLE && (
            <kbd className="hidden sm:block px-2 py-1 text-[10px] font-mono border border-zinc-200 rounded text-zinc-400">ENTER</kbd>
          )}
          {loading !== LoadingState.IDLE && (
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-zinc-800 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-1 h-1 bg-zinc-800 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-1 h-1 bg-zinc-800 rounded-full animate-bounce"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MagicBar;
