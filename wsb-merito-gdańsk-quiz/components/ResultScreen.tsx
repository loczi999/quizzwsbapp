import React from 'react';
import { Trophy, RefreshCw, Home } from 'lucide-react';

interface ResultScreenProps {
  score: number;
  total: number;
  onRestart: () => void;
  onGoHome: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ score, total, onRestart, onGoHome }) => {
  const percentage = Math.round((score / total) * 100);
  let message = "";
  let colorClass = "";

  if (percentage === 100) {
    message = "Perfekcyjnie! Ekspert WSB Merito!";
    colorClass = "text-green-600";
  } else if (percentage >= 60) {
    message = "Dobry wynik!";
    colorClass = "text-wsb-blue";
  } else {
    message = "Spróbuj jeszcze raz!";
    colorClass = "text-wsb-orange";
  }

  return (
    <div className="flex flex-col items-center justify-center h-full py-10 animate-fade-in">
      
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 w-full max-w-md text-center">
        <div className="bg-wsb-light h-24 w-24 rounded-full mx-auto flex items-center justify-center mb-6">
          <Trophy className={`h-12 w-12 ${colorClass}`} />
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mb-2">Twój Wynik</h2>
        <p className={`text-lg font-medium mb-8 ${colorClass}`}>{message}</p>

        <div className="text-6xl font-extrabold text-slate-800 mb-2">
          {score}<span className="text-3xl text-slate-400">/{total}</span>
        </div>
        <p className="text-slate-500 mb-10">Poprawne odpowiedzi</p>

        <div className="flex flex-col gap-3">
          <button
            onClick={onRestart}
            className="w-full bg-wsb-navy hover:bg-blue-900 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            <RefreshCw size={18} />
            Zagraj Ponownie
          </button>
          
          <button
            onClick={onGoHome}
            className="w-full bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            <Home size={18} />
            Wróć do menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
