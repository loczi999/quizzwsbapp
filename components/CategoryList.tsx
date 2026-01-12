import React from 'react';
import { Category } from '../types';
import { BookOpen, History, ChevronRight } from 'lucide-react';

interface CategoryListProps {
  categories: Category[];
  onSelectCategory: (category: Category) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, onSelectCategory }) => {
  return (
    <div className="flex flex-col gap-6 animate-fade-in-up">
      <div className="text-center py-6">
        <h2 className="text-2xl font-bold text-wsb-navy mb-2">Wybierz kategorię</h2>
        <p className="text-slate-600">Sprawdź swoją wiedzę o naszej uczelni.</p>
      </div>

      <div className="grid gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category)}
            className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-200 hover:border-wsb-blue text-left flex items-center"
          >
            <div className="h-12 w-12 rounded-full bg-wsb-light flex items-center justify-center text-wsb-blue group-hover:bg-wsb-blue group-hover:text-white transition-colors">
              {category.iconName === 'history' ? <History size={24} /> : <BookOpen size={24} />}
            </div>
            
            <div className="ml-4 flex-grow">
              <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
              <p className="text-sm text-slate-500">{category.description}</p>
            </div>

            <div className="text-slate-300 group-hover:text-wsb-orange transition-colors">
              <ChevronRight size={24} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
