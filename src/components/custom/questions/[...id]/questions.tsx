
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
  const [currentIndex, setCurrentIndex] = useState(0);
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

  

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentQuestion = questions[currentIndex];

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
      <div className="p-6 flex flex-col bg-white items-center">
  <div className="mb-6 border p-4 w-[686px] rounded-lg">
    <h1 className="font-bold mb-4 text-[#4461F2]">
      Question {currentIndex + 1} of {questions.length}
    </h1>
    {questions.map((question,index)=>{
      if(currentIndex === index ){
      
      return <div key={index}>
        <p className="font-semibold mb-5 text-2xl">{question?.question}</p>
  
  
        {question.answers.map((answer) => (
        <div
          key={answer.key}
          className={`flex items-center gap-2 p-2 w-[638px] h-[72px] rounded-[10px] mb-2 bg-gray-100 ${
         
          ''}`}
        >
          
          <input
            
            id={answer?.key}
            type="radio"
            name='answer'
           
            onChange={() => handleAnswerSelect(question._id, answer.key)}
          />
          <label
    htmlFor={answer?.key}
    className="cursor-pointer w-full"
  >
    {answer.answer}
  </label>
  
       
        </div>
      ))}
  
      <div className="flex gap-10 mt-8">
        <button
          onClick={handleBack}
          disabled={currentIndex === 0}
          className={`px-4 py-2 rounded ${
            currentIndex === 0
              ? "border border-blue-600 text-blue-600 font-bold text-xl rounded-full h-[56px]  w-[295px] cursor-not-allowed"
              : "font-bold text-xl rounded-full h-[56px] border border-blue-600 text-blue-600 w-[295px]"
          }`}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className={`${
            currentIndex === questions.length - 1 ? "bg-green-500" : "bg-blue-500"
          } w-[295px] font-bold text-xl h-[56px] rounded-full text-white px-4 py-2 hover:bg-blue-600`}
        >
          {currentIndex === questions.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
  
  
      </div>


      }


    }
  

    
    
    
    
    )}
    
  </div>
     </div> 
      </div>

      
    </>
  );
};

export default Questions;




 