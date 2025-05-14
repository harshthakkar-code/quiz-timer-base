
export type Option = string;

export interface Question {
  id: string;
  question: string;
  options: Option[];
  correctAnswer: string;
  timeLimit: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  questions: Question[];
}

export interface QuizData {
  categories: Category[];
}

export const quizData: QuizData = {
  categories: [
    {
      id: "js_basics",
      name: "JavaScript Basics",
      description: "Test your knowledge of JavaScript fundamentals",
      icon: "⚡",
      color: "quiz-js",
      questions: [
        {
          id: "js_q1",
          question: "What is the correct syntax for referring to an external script called 'script.js'?",
          options: [
            "A. <script name='script.js'>",
            "B. <script href='script.js'>",
            "C. <script src='script.js'>",
            "D. <script file='script.js'>"
          ],
          correctAnswer: "C",
          timeLimit: 10
        },
        {
          id: "js_q2",
          question: "How do you create a function in JavaScript?",
          options: [
            "A. function = myFunction()",
            "B. function:myFunction()",
            "C. function myFunction()",
            "D. create myFunction()"
          ],
          correctAnswer: "C",
          timeLimit: 10
        },
        {
          id: "js_q3",
          question: "How do you call a function named 'myFunction'?",
          options: [
            "A. call myFunction()",
            "B. myFunction()",
            "C. call function myFunction()",
            "D. execute myFunction()"
          ],
          correctAnswer: "B",
          timeLimit: 10
        },
        {
          id: "js_q4",
          question: "How to write an IF statement in JavaScript?",
          options: [
            "A. if i = 5 then",
            "B. if i = 5",
            "C. if (i == 5)",
            "D. if i == 5 then"
          ],
          correctAnswer: "C",
          timeLimit: 10
        },
        {
          id: "js_q5",
          question: "Which event occurs when the user clicks on an HTML element?",
          options: [
            "A. onchange",
            "B. onclick",
            "C. onmouseover",
            "D. onmouseclick"
          ],
          correctAnswer: "B",
          timeLimit: 10
        }
      ]
    },
    {
      id: "react",
      name: "React Basics",
      description: "Test your knowledge of React fundamentals",
      icon: "⚛️",
      color: "quiz-react",
      questions: [
        {
          id: "react_q1",
          question: "What is React?",
          options: [
            "A. A JavaScript library for building user interfaces",
            "B. A JavaScript framework for building servers",
            "C. A programming language",
            "D. A database management system"
          ],
          correctAnswer: "A",
          timeLimit: 10
        },
        {
          id: "react_q2",
          question: "Which method is used to change state in a React class component?",
          options: [
            "A. this.state()",
            "B. this.setState()",
            "C. this.changeState()",
            "D. this.updateState()"
          ],
          correctAnswer: "B",
          timeLimit: 10
        },
        {
          id: "react_q3",
          question: "What is JSX in React?",
          options: [
            "A. A styling framework",
            "B. A JavaScript extension that allows writing HTML in React",
            "C. A type of database",
            "D. A testing framework"
          ],
          correctAnswer: "B",
          timeLimit: 10
        },
        {
          id: "react_q4",
          question: "What is the virtual DOM in React?",
          options: [
            "A. A real DOM node",
            "B. A copy of the real DOM in memory",
            "C. A browser feature",
            "D. A database"
          ],
          correctAnswer: "B",
          timeLimit: 10
        },
        {
          id: "react_q5",
          question: "How do you create a React functional component?",
          options: [
            "A. function Component() { return <div></div>; }",
            "B. class Component { render() { return <div></div>; } }",
            "C. create Component() { return <div></div>; }",
            "D. new Component() => <div></div>"
          ],
          correctAnswer: "A",
          timeLimit: 10
        }
      ]
    },
    {
      id: "flutter",
      name: "HTML & CSS",
      description: "Test your knowledge of HTML and CSS",
      icon: "🎨",
      color: "quiz-html",
      questions: [
        {
          id: "html_q1",
          question: "What does HTML stand for?",
          options: [
            "A. Hyper Text Markup Language",
            "B. High Tech Modern Language",
            "C. Hyper Transfer Markup Language",
            "D. Home Tool Markup Language"
          ],
          correctAnswer: "A",
          timeLimit: 10
        },
        {
          id: "html_q2",
          question: "Which tag is used to define an unordered list in HTML?",
          options: [
            "A. <ol>",
            "B. <list>",
            "C. <ul>",
            "D. <li>"
          ],
          correctAnswer: "C",
          timeLimit: 10
        },
        {
          id: "html_q3",
          question: "Which CSS property is used to change the text color of an element?",
          options: [
            "A. font-color",
            "B. text-color",
            "C. color",
            "D. text-style"
          ],
          correctAnswer: "C",
          timeLimit: 10
        },
        {
          id: "html_q4",
          question: "Which CSS property controls the spacing between elements?",
          options: [
            "A. spacing",
            "B. margin",
            "C. padding",
            "D. border"
          ],
          correctAnswer: "B",
          timeLimit: 10
        },
        {
          id: "html_q5",
          question: "Which HTML attribute is used to define inline styles?",
          options: [
            "A. class",
            "B. styles",
            "C. style",
            "D. font"
          ],
          correctAnswer: "C",
          timeLimit: 10
        }
      ]
    },
    {
      id: "angular",
      name: "HTML & CSS",
      description: "Test your knowledge of HTML and CSS",
      icon: "🎨",
      color: "quiz-html",
      questions: [
        {
          id: "html_q1",
          question: "What does HTML stand for?",
          options: [
            "A. Hyper Text Markup Language",
            "B. High Tech Modern Language",
            "C. Hyper Transfer Markup Language",
            "D. Home Tool Markup Language"
          ],
          correctAnswer: "A",
          timeLimit: 10
        },
        {
          id: "html_q2",
          question: "Which tag is used to define an unordered list in HTML?",
          options: [
            "A. <ol>",
            "B. <list>",
            "C. <ul>",
            "D. <li>"
          ],
          correctAnswer: "C",
          timeLimit: 10
        },
        {
          id: "html_q3",
          question: "Which CSS property is used to change the text color of an element?",
          options: [
            "A. font-color",
            "B. text-color",
            "C. color",
            "D. text-style"
          ],
          correctAnswer: "C",
          timeLimit: 10
        },
        {
          id: "html_q4",
          question: "Which CSS property controls the spacing between elements?",
          options: [
            "A. spacing",
            "B. margin",
            "C. padding",
            "D. border"
          ],
          correctAnswer: "B",
          timeLimit: 10
        },
        {
          id: "html_q5",
          question: "Which HTML attribute is used to define inline styles?",
          options: [
            "A. class",
            "B. styles",
            "C. style",
            "D. font"
          ],
          correctAnswer: "C",
          timeLimit: 10
        }
      ]
    }
  ]
};
