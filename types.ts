
export type BlockType = 'text' | 'image' | 'idea' | 'code';

export interface ContentBlock {
  id: string;
  type: BlockType;
  content: string;
  metadata?: {
    title?: string;
    language?: string;
    imageUrl?: string;
    prompt?: string;
  };
  timestamp: number;
}

export enum LoadingState {
  IDLE = 'idle',
  THINKING = 'thinking',
  GENERATING = 'generating',
  ERROR = 'error'
}
