export interface Answer {
  id: number;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export interface Category {
  id: number;
  title: string;
  description: string;
  iconName: 'history' | 'study';
  questions: Question[];
}

export type AppState = 'HOME' | 'QUIZ' | 'RESULT';
