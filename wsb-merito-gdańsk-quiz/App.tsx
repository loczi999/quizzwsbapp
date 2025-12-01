import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import CategoryList from './components/CategoryList';
import QuizGame from './components/QuizGame';
import ResultScreen from './components/ResultScreen';
import { getCategories } from './services/quizService';
import { AppState, Category } from './types';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<AppState>('HOME');
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [scoreData, setScoreData] = useState<{ score: number; total: number } | null>(null);

  // Simulate Repository Loading
  useEffect(() => {
    const data = getCategories();
    setCategories(data);
  }, []);

  const handleStartQuiz = (category: Category) => {
    setActiveCategory(category);
    setViewState('QUIZ');
  };

  const handleFinishQuiz = (score: number, total: number) => {
    setScoreData({ score, total });
    setViewState('RESULT');
  };

  const handleRestart = () => {
    setViewState('QUIZ');
  };

  const handleGoHome = () => {
    setViewState('HOME');
    setActiveCategory(null);
    setScoreData(null);
  };

  return (
    <Layout>
      {viewState === 'HOME' && (
        <CategoryList 
          categories={categories} 
          onSelectCategory={handleStartQuiz} 
        />
      )}

      {viewState === 'QUIZ' && activeCategory && (
        <QuizGame 
          category={activeCategory} 
          onFinish={handleFinishQuiz}
          onExit={handleGoHome}
        />
      )}

      {viewState === 'RESULT' && scoreData && (
        <ResultScreen 
          score={scoreData.score} 
          total={scoreData.total}
          onRestart={handleRestart}
          onGoHome={handleGoHome}
        />
      )}
    </Layout>
  );
};

export default App;
