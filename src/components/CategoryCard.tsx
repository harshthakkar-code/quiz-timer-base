
import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../data/quizData';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link 
      to={`/quiz/${category.id}`}
      className={`block p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-${category.color} bg-white hover:-translate-y-1`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-2xl">{category.icon}</span>
        <span className="text-sm text-gray-500">{category.questions.length} questions</span>
      </div>
      <h3 className="text-xl font-bold mb-2">{category.name}</h3>
      <p className="text-gray-600 text-sm">{category.description}</p>
    </Link>
  );
};

export default CategoryCard;
