import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

const Index: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showRules, setShowRules] = useState(false);
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    if (!fullName.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your full name to continue",
        variant: "destructive",
      });
      return;
    }

    if (!selectedCategory) {
      toast({
        title: "Category Required",
        description: "Please select a quiz category to continue",
        variant: "destructive",
      });
      return;
    }

    navigate(`/quiz/${selectedCategory}`);
  };

  return (
    <div className="min-h-screen bg-[#f7f6f1] flex flex-col">
      {/* Logo header */}
      <header className="p-6 border-b border-gray-200 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center">
          <h1 className="text-3xl font-extrabold tracking-tight">
            <span className="text-[#d23f6f]">QUIZ</span>
            <span className="text-[#c42a62]">Mania</span>
          </h1>
        </div>
      </header>
      <div className="flex-1 flex flex-col justify-center items-center py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-[#222]">
            Welcome to <span className="text-[#d23f6f]">QUIZ</span><span className="text-[#c42a62]">Mania</span>
          </h1>
        </div>
        <div className="max-w-xl w-full mx-auto bg-white rounded-2xl p-10 shadow-xl">
          <div className="mb-8">
            <div className="bg-[#f7f6f1] rounded-lg p-4 flex flex-col items-start">
              <span className="text-gray-700 mb-1 text-base font-medium">Please read all the rules about this quiz before you start.</span>
              <button 
                className="text-[#d23f6f] font-semibold hover:underline text-base mt-1"
                onClick={() => setShowRules(true)}
              >
                Quiz rules
              </button>
            </div>
          </div>
          <div className="mb-6">
            <Label htmlFor="fullName" className="block mb-2 text-gray-700 font-semibold text-lg">Full name</Label>
            <Input 
              id="fullName"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-[#f7f6f1] border border-gray-200 rounded-lg px-4 py-3 text-lg font-medium focus:border-[#c42a62] focus:ring-2 focus:ring-[#c42a62]"
            />
          </div>
          <div className="mb-10">
            <p className="mb-3 text-gray-700 font-semibold text-lg">Please select topic to continue</p>
            <RadioGroup value={selectedCategory} onValueChange={setSelectedCategory}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className={`rounded-xl p-5 bg-[#f7f6f1] transition-all duration-150 cursor-pointer ${selectedCategory === 'js_basics' ? 'border-2 border-[#c42a62] shadow-lg' : 'border border-gray-200'}`}
                  onClick={() => setSelectedCategory('js_basics')}>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="js_basics" id="js_basics" />
                    <Label htmlFor="js_basics" className="font-semibold text-lg">Javascript Basic</Label>
                  </div>
                </div>
                <div className={`rounded-xl p-5 bg-[#f7f6f1] transition-all duration-150 cursor-pointer ${selectedCategory === 'angular' ? 'border-2 border-[#c42a62] shadow-lg' : 'border border-gray-200'}`}
                  onClick={() => setSelectedCategory('angular')}>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="angular" id="angular" />
                    <Label htmlFor="angular" className="font-semibold text-lg">Angular Basic</Label>
                  </div>
                </div>
                <div className={`rounded-xl p-5 bg-[#f7f6f1] transition-all duration-150 cursor-pointer ${selectedCategory === 'react' ? 'border-2 border-[#c42a62] shadow-lg' : 'border border-gray-200'}`}
                  onClick={() => setSelectedCategory('react')}>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="react" id="react" />
                    <Label htmlFor="react" className="font-semibold text-lg">React.js Advance</Label>
                  </div>
                </div>
                <div className={`rounded-xl p-5 bg-[#f7f6f1] transition-all duration-150 cursor-pointer ${selectedCategory === 'flutter' ? 'border-2 border-[#c42a62] shadow-lg' : 'border border-gray-200'}`}
                  onClick={() => setSelectedCategory('flutter')}>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="flutter" id="flutter" />
                    <Label htmlFor="flutter" className="font-semibold text-lg">Flutter</Label>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div className="flex justify-center">
            <Button 
              onClick={handleStartQuiz}
              className="w-full py-4 h-auto bg-[#c42a62] hover:bg-[#d23f6f] text-white rounded-xl font-bold text-lg shadow-lg transition-all duration-150"
            >
              Start Quiz
            </Button>
          </div>
        </div>
      </div>
      {showRules && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-[#f7f6f1] rounded-lg shadow-lg max-w-lg w-full p-8 relative">
            <button
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700"
              onClick={() => setShowRules(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-[#4b3b6b] mb-6">Quiz rules</h2>
            <div className="mb-6">
              <div className="bg-[#f2f2ea] rounded-md p-4 mb-4">
                <h3 className="font-semibold mb-2">10-Second Timer</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Each question comes with a 10-second timer.</li>
                  <li>If you don't answer within the time limit, the app will automatically move to the next question.</li>
                </ul>
              </div>
              <div className="bg-[#f2f2ea] rounded-md p-4 mb-4">
                <h3 className="font-semibold mb-2">Manual Navigation</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>You can navigate to the next question manually before the timer expires.</li>
                  <li>Use the "Next" button to move ahead if you're ready before the timer runs out.</li>
                </ul>
              </div>
              <div className="bg-[#f2f2ea] rounded-md p-4">
                <h3 className="font-semibold mb-2">Final Score and Performance Message</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>After all questions are answered, your final score will be displayed.</li>
                  <li>
                    Based on your performance, you will receive a personalized message:
                    <ul className="list-disc pl-5 mt-2">
                      <li><b>Great job!</b>: If you score <b>above 80%</b>.</li>
                      <li><b>Well done!</b>: If you score <b>between 60% and 80%</b>.</li>
                      <li><b>Keep practicing!</b>: If you score <b>below 60%</b>.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
