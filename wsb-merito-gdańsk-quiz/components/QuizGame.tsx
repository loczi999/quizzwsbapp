import React, { useState, useEffect } from 'react';
import { Category, Question } from '../types';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

interface QuizGameProps {
  category: Category;
  onFinish: (score: number, total: number) => void;
  onExit: () => void;
}

const QuizGame: React.FC<QuizGameProps> = ({ category, onFinish, onExit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);
  const [isAnswerConfirmed, setIsAnswerConfirmed] = useState(false);
  const [score, setScore] = useState(0);

  const questions = category.questions;
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / questions.length) * 100;

  const handleAnswerClick = (answerId: number, isCorrect: boolean) => {
    if (isAnswerConfirmed) return; // Prevent double clicks

    setSelectedAnswerId(answerId);
    setIsAnswerConfirmed(true);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedAnswerId(null);
      setIsAnswerConfirmed(false);
    } else {
      onFinish(score, questions.length);
    }
  };

  return (
    <div className="flex flex-col h-full justify-between max-w-xl mx-auto w-full">
      {/* Header Info */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2 text-sm font-medium text-slate-500">
          <span>{category.title}</span>
          <span>Pytanie {currentQuestionIndex + 1}/{questions.length}</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2.5">
          <div 
            className="bg-wsb-blue h-2.5 rounded-full transition-all duration-500" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-6 min-h-[160px] flex items-center justify-center text-center">
        <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">
          {currentQuestion.text}
        </h3>
      </div>

      {/* Answers Grid */}
      <div className="grid grid-cols-1 gap-3 mb-8">
        {currentQuestion.answers.map((answer) => {
          let buttonClass = "p-4 rounded-xl border-2 text-left font-medium transition-all relative overflow-hidden ";
          
          if (!isAnswerConfirmed) {
            buttonClass += "bg-white border-slate-200 hover:border-wsb-blue hover:bg-slate-50 text-slate-700 active:scale-[0.98]";
          } else {
            if (answer.id === selectedAnswerId) {
              if (answer.isCorrect) {
                buttonClass += "bg-green-50 border-green-500 text-green-700";
              } else {
                buttonClass += "bg-red-50 border-red-500 text-red-700";
              }
            } else if (answer.isCorrect) {
               // Show correct answer even if user picked wrong
               buttonClass += "bg-green-50 border-green-500 text-green-700 opacity-75";
            } else {
               buttonClass += "bg-slate-50 border-slate-200 text-slate-400 opacity-50";
            }
          }

          return (
            <button
              key={answer.id}
              onClick={() => handleAnswerClick(answer.id, answer.isCorrect)}
              disabled={isAnswerConfirmed}
              className={buttonClass}
            >
              <div className="flex justify-between items-center relative z-10">
                <span>{answer.text}</span>
                {isAnswerConfirmed && answer.id === selectedAnswerId && (
                  answer.isCorrect 
                    ? <CheckCircle className="text-green-600" size={20} /> 
                    : <XCircle className="text-red-600" size={20} />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer Controls */}
      <div className="mt-auto">
        {isAnswerConfirmed ? (
          <button
            onClick={handleNextQuestion}
            className="w-full bg-wsb-orange hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transform transition-transform active:scale-[0.98] flex items-center justify-center gap-2"
          >
             {currentQuestionIndex + 1 === questions.length ? 'Zakończ Quiz' : 'Następne Pytanie'}
             <ArrowRight size={20} />
          </button>
        ) : (
          <div className="h-[56px] flex items-center justify-center text-slate-400 text-sm">
            Wybierz odpowiedź, aby kontynuować
          </div>
        )}
        
        <button 
            onClick={onExit}
            className="w-full mt-4 py-2 text-slate-400 hover:text-slate-600 text-sm"
        >
            Anuluj Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizGame;
