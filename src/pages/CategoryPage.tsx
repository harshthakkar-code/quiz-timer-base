
import React from 'react';
import { quizData } from '../data/quizData';
import CategoryCard from '../components/CategoryCard';

const CategoryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-quiz-primary">React Quiz App</h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Test your knowledge with timed quizzes on various web development topics
          </p>
        </header>
        
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Select a Quiz Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizData.categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CategoryPage;
