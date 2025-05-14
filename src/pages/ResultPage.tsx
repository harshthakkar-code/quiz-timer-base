import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award, ArrowRight } from 'lucide-react';

interface ResultState {
  score: number;
  totalQuestions: number;
  unansweredCount: number;
  categoryName: string;
}

const ResultPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions, unansweredCount, categoryName } = 
    (location.state as ResultState) || { score: 0, totalQuestions: 0, unansweredCount: 0, categoryName: 'Quiz' };
  
  // Calculate percentage
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  const isSuccess = percentage > 50;
  
  // Determine feedback message based on percentage
  const getFeedbackMessage = () => {
    if (percentage >= 80) return "Great job! You've mastered this topic!";
    if (percentage >= 50) return "Good effort! Keep learning and you'll improve!";
    return "Keep practicing! Learning takes time and persistence!";
  };
  
  // Determine feedback emoji based on percentage
  const getFeedbackEmoji = () => {
    if (percentage >= 80) return "🏆";
    if (percentage >= 50) return "👍";
    return "💪";
  };
  
  // Handle restart or try another quiz
  const handleRestartQuiz = () => {
    navigate('/');
  };
  
  return (
    <div className={`min-h-screen ${isSuccess ? 'bg-[#f7f6f1]' : 'bg-[#fff7f1]'} flex items-center justify-center py-10 px-2`}> 
      <div className="relative max-w-md w-full bg-white rounded-3xl shadow-2xl flex flex-col items-center px-0 pb-10">
        {/* Colored Top Section */}
        <div className={`w-full h-36 rounded-t-3xl flex items-center justify-center ${isSuccess ? 'bg-[#f7e6ee]' : 'bg-[#fff0e0]'}`}></div>
        {/* Overlapping Score Circle */}
        <div className={`absolute left-1/2 -top-16 transform -translate-x-1/2 w-36 h-36 rounded-full flex flex-col items-center justify-center border-4 ${isSuccess ? 'border-[#c42a62] bg-white' : 'border-[#ffb26b] bg-[#fff7f1]'} shadow-lg`}>
          <span className={`text-5xl font-extrabold ${isSuccess ? 'text-[#c42a62]' : 'text-[#ffb26b]'}`}>{percentage}%</span>
          <span className="text-6xl mt-1">{isSuccess ? '🎉' : '💡'}</span>
        </div>
        {/* Card Content */}
        <div className="w-full flex flex-col items-center px-8 mt-24">
          <h1 className={`text-2xl font-extrabold mb-1 text-center ${isSuccess ? 'text-[#c42a62]' : 'text-[#ffb26b]'}`}>Quiz Results</h1>
          <p className="text-gray-500 mb-4 text-center text-lg font-medium">{categoryName}</p>
          <p className={`text-xl font-bold mb-7 text-center ${isSuccess ? 'text-[#4b3b6b]' : 'text-[#b97a56]'}`}>{isSuccess ? "Great job! You've mastered this topic!" : "Keep practicing! Learning takes time and persistence!"}</p>
          {/* Stats */}
          <div className="w-full flex flex-col gap-3 mb-8">
            <div className="flex justify-between items-center px-5 py-3 rounded-full bg-[#f7f6f1]">
              <span className="text-gray-600 font-medium">Total Questions</span>
              <span className="font-bold text-lg">{totalQuestions}</span>
            </div>
            <div className="flex justify-between items-center px-5 py-3 rounded-full bg-green-50">
              <span className="text-gray-600 font-medium">Correct Answers</span>
              <span className="font-bold text-lg text-green-600">{score}</span>
            </div>
            <div className="flex justify-between items-center px-5 py-3 rounded-full bg-orange-50">
              <span className="text-gray-600 font-medium">Unanswered</span>
              <span className="font-bold text-lg text-orange-500">{unansweredCount}</span>
            </div>
          </div>
          <Button
            onClick={handleRestartQuiz}
            className={`w-full py-4 text-lg font-bold rounded-full shadow-md transition-all duration-150 ${isSuccess ? 'bg-[#c42a62] hover:bg-[#d23f6f]' : 'bg-[#ffb26b] hover:bg-[#ff9900]'} text-white flex items-center justify-center gap-2`}
          >
            Try Another Quiz
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
