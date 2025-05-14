import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { quizData, Question } from '../data/quizData';
import QuestionCard from '../components/QuestionCard';
import Timer from '../components/Timer';
import { Button } from '@/components/ui/button';

const QuizPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [unansweredCount, setUnansweredCount] = useState(0);
  const [timeActive, setTimeActive] = useState(true);
  
  const category = quizData.categories.find(c => c.id === categoryId);
  
  useEffect(() => {
    // Reset state for new question
    setSelectedAnswer(null);
    setHasAnswered(false);
    setTimeActive(true);
  }, [currentQuestionIndex]);
  
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Category not found!</h1>
        <Button onClick={() => navigate('/')}>Return to Categories</Button>
      </div>
    );
  }
  
  const questions = category.questions;
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  
  const handleAnswerSelection = (answer: string) => {
    setSelectedAnswer(answer);
    setHasAnswered(true);
    setTimeActive(false);
    
    // Update score if answer is correct
    if (answer === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };
  
  const handleTimeout = () => {
    setHasAnswered(true);
    setTimeActive(false);
    setUnansweredCount(prev => prev + 1);
  };
  
  const handleNextQuestion = () => {
    if (isLastQuestion) {
      // Navigate to results page with state
      navigate('/results', { 
        state: { 
          score,
          totalQuestions: questions.length,
          unansweredCount: selectedAnswer ? unansweredCount : unansweredCount + 1,
          categoryName: category.name
        }
      });
    } else {
      // Go to next question
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };
  
  const handleExitQuiz = () => {
    navigate('/');
  };

  const handleSkipQuestion = () => {
    setHasAnswered(true);
    setTimeActive(false);
    setUnansweredCount(prev => prev + 1);
    // Move to next question or results
    if (isLastQuestion) {
      navigate('/results', { 
        state: { 
          score,
          totalQuestions: questions.length,
          unansweredCount: unansweredCount + 1,
          categoryName: category.name
        }
      });
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };
  
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  
  return (
    <div className="min-h-screen bg-[#f7f6f1] flex flex-col justify-center items-center p-0">
      {/* Header Bar */}
      <div className="w-full bg-white shadow-sm border-b border-gray-200 py-4 px-6 flex items-center justify-between fixed top-0 left-0 z-40">
        <div className="text-2xl font-extrabold tracking-tight text-[#c42a62] flex items-center">
          <span className="text-[#d23f6f]">QUIZ</span><span className="text-[#c42a62]">Mania</span>
        </div>
        <button
          onClick={handleExitQuiz}
          className="text-[#c42a62] font-semibold px-5 py-2 rounded-lg border border-[#c42a62] hover:bg-[#f7e6ee] transition-all duration-150"
        >
          Exit Quiz
        </button>
      </div>
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 flex flex-col mt-24 mb-8">
        <header className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <h1 className="text-2xl font-bold text-[#c42a62]">{category.name}</h1>
            <div className="text-base font-semibold text-gray-500">
              Question {currentQuestionIndex + 1}/{questions.length}
            </div>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#c42a62] rounded-full transition-all duration-300" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </header>
        {/* Timer - prominent, centered, circular if possible */}
        <div className="mb-8 flex justify-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3 text-2xl font-bold mb-2 text-[#c42a62]">
              <svg className="w-7 h-7 text-[#c42a62]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#c42a62" strokeWidth="2" fill="#f7e6ee" /><path d="M12 6v6l4 2" stroke="#c42a62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <Timer 
                timeLimit={currentQuestion.timeLimit}
                onTimeout={handleTimeout}
                isActive={timeActive}
              />
            </div>
          </div>
        </div>
        <div className="flex-1 mb-8">
          <QuestionCard
            question={currentQuestion}
            onAnswer={handleAnswerSelection}
            currentAnswerSelected={selectedAnswer}
            hasAnswered={hasAnswered}
          />
        </div>
        {/* Button Row: Next and Skip side by side */}
        <div className="mt-2 flex justify-center gap-6">
          <Button 
            onClick={handleNextQuestion}
            disabled={!hasAnswered}
            className={`px-10 py-4 text-lg font-bold rounded-lg shadow-md transition-all duration-150 ${hasAnswered ? 'bg-[#c42a62] hover:bg-[#d23f6f] text-white' : 'bg-gray-300 text-gray-400 cursor-not-allowed'}`}
          >
            {isLastQuestion ? 'See Results' : 'Next'}
          </Button>
          <button
            type="button"
            onClick={handleSkipQuestion}
            className="text-[#c42a62] font-semibold text-lg bg-transparent border-none outline-none cursor-pointer hover:underline transition-all duration-150"
          >
            Skip this question
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
