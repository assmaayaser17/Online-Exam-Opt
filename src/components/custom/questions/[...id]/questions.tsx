
// 'use client';
// import { useParams } from "next/navigation";
// import React, { useContext, useEffect, useState } from "react";
// import { questionsContext } from '@/components/providers/context/questionsContext';


// interface QuestionsProps {
//   onClose: () => void;
// }

// interface Question {
//   question: string;
//   answers: { key: string; answer: string }[];
// }

// const Questions: React.FC<QuestionsProps> = ({ onClose }) => {
//   const { id } = useParams();
//   console.log("Exam ID:", id);

//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const {handleAnswerSelect,selectedAnswers}=useContext(questionsContext)

//   async function getQuestions() {
//     const res = await fetch(`http://localhost:3000/api/questions?exam=${id}`);
//     const data = await res.json();
//     setQuestions(data.questions);
//     console.log(data);
//   }

//   useEffect(() => {
//     getQuestions();
//   }, []);

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const currentQuestion = questions[currentQuestionIndex];

//   return (
//     <>
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
//         <div className="p-6 flex bg-white flex-col items-center w-[686px] rounded-lg shadow-lg">
//           {currentQuestion ? (
//             <>
//               <p className="font-semibold mb-5 text-2xl">{currentQuestion.question}</p>
//               <div className="w-full">
//                 {currentQuestion.answers.map((answer) => (
//                   <div
//                     key={answer.key}
//                     className="flex items-center gap-2 p-2 w-full h-[72px] rounded-[10px] mb-2 bg-gray-100"
//                   >
//                     <label htmlFor={answer.key} className="cursor-pointer w-full">
//                       {answer.answer}
//                     </label>
//                   </div>
//                 ))}
                
//               </div>
//               <button
//                 onClick={handleNext}
//                 disabled={currentQuestionIndex === questions.length - 1}
//                 className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none disabled:bg-gray-300"
//               >
//                 {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
//               </button>
//             </>
//           ) : (
//             <p>Loading questions...</p>
//           )}
//         </div>
//       </div>
//     </>
  
//   );
// };

// export default Questions;

'use client';
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { QuestionsContext } from '@/components/providers/context/QuestionsContext';

interface QuestionsProps {
  onClose: () => void;
}

interface Question {
  _id: string;
  question: string;
  answers: { key: string; answer: string }[];
}

const Questions: React.FC<QuestionsProps> = ({ onClose }) => {
  const { id } = useParams();
  console.log("Exam ID:", id);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { handleAnswerSelect, selectedAnswers } = useContext(QuestionsContext);

  async function getQuestions() {
    const res = await fetch(`http://localhost:3000/api/questions?exam=${id}`);
    const data = await res.json();
    setQuestions(data.questions);
    console.log(data);
  }

  useEffect(() => {
    getQuestions();
  }, []);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <div className="p-6 flex bg-white flex-col items-center w-[686px] rounded-lg shadow-lg">
          {currentQuestion ? (
            <>
              <p className="font-semibold mb-5 text-2xl">{currentQuestion.question}</p>
              <div className="w-full">
                {currentQuestion.answers.map((answer) => (
                  <div
                    key={answer.key}
                    className="flex items-center gap-2 p-2 w-full h-[72px] rounded-[10px] mb-2 bg-gray-100"
                  >
                    <input
                      id={answer.key}
                      type="radio"
                      name='answer'
                      onChange={() => handleAnswerSelect(currentQuestion._id, answer.key)}
                      className="cursor-pointer"
                    />
                    <label htmlFor={answer.key} className="cursor-pointer w-full">
                      {answer.answer}
                    </label>
                  </div>
                ))}
              </div>
              <button
                onClick={handleNext}
                disabled={currentQuestionIndex === questions.length - 1}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none disabled:bg-gray-300"
              >
                {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
              </button>
            </>
          ) : (
            <p>Loading questions...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Questions;




 