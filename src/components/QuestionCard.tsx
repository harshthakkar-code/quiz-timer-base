import React, { useState } from 'react';
import { Question } from '../data/quizData';

interface QuestionCardProps {
  question: Question;
  onAnswer: (selectedAnswer: string) => void;
  currentAnswerSelected: string | null;
  hasAnswered: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  onAnswer, 
  currentAnswerSelected,
  hasAnswered 
}) => {
  
  const handleOptionClick = (option: string) => {
    if (!hasAnswered) {
      onAnswer(option.charAt(0)); // Extract the option letter (A, B, C, D)
    }
  };

  const getOptionClass = (option: string) => {
    const optionLetter = option.charAt(0);
    let baseClasses = 'p-4 rounded-lg border border-gray-200 mb-3 text-left transition-all duration-200 flex items-start';
    
    if (currentAnswerSelected === optionLetter) {
      return `${baseClasses} bg-quiz-primary/10 border-quiz-primary`;
    }
    
    return `${baseClasses} hover:bg-gray-50 cursor-pointer`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-0 animate-fade-in">
      <div className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 text-center leading-snug">{question.question}</div>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <div 
            key={index}
            className={
              `${getOptionClass(option)} ` +
              'rounded-xl border-2 px-6 py-5 text-lg font-semibold flex items-center transition-all duration-200 ' +
              (currentAnswerSelected === option.charAt(0)
                ? 'bg-[#f7e6ee] border-[#c42a62] shadow-lg text-[#c42a62]'
                : 'bg-white border-gray-200 hover:border-[#c42a62] hover:bg-[#f7f6f1] cursor-pointer text-gray-800')
            }
            onClick={() => handleOptionClick(option)}
          >
            <span className="inline-block w-10 h-10 mr-4 rounded-full bg-[#f7e6ee] text-[#c42a62] flex items-center justify-center font-bold text-xl border-2 border-[#c42a62]">
              {option.charAt(0)}
            </span>
            <span className="flex-1 text-left">{option.substring(3)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
