

'use client';
import React, { useContext, useEffect, useState } from 'react';
import { QuestionsContext } from '@/components/providers/context/QuestionsContext';

export default function Result() {
  const [result, setResult] = useState(null);
  const [Details, setDetails] = useState(false);
  const { selectedAnswers } = useContext(QuestionsContext);

  // Function to fetch results
  async function getResult() {
    try {
      const res = await fetch('http://localhost:3000/api/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers: selectedAnswers, time: 10 }),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
      }

      const data = await res.json();
      console.log(data)
      setResult(data.results); // Assuming `data.results` contains the desired result object
    } catch (error) {
      console.error('Error fetching results:', error.message);
    }
  }

  // Fetch results on component mount or when selectedAnswers change
  useEffect(() => {
    if (selectedAnswers && selectedAnswers.length > 0) {
      getResult();
    }
  }, [selectedAnswers]);

  // Loading state
  if (!result) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Loading results...</p>
      </div>
    );
  }

  const { correct, wrong, total, correctQuestions, WrongQuestions } = result;

  return (
    <div className="flex flex-col items-center">
      <div className="w-[686px] p-5 shadow rounded-[20px] mt-10 flex flex-col">
        <h1 className="text-2xl font-bold mb-4">Your Score</h1>

        <div className="flex flex-col gap-8">
          <div className="p-4 rounded-lg flex gap-10 justify-center items-center text-white w-full">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-gray-200"></div>
              <div className="absolute top-0 left-0 w-40 h-40 flex items-center justify-center">
                <p className="text-3xl font-bold text-gray-800">
                  {parseFloat(total || 0).toFixed(0)}%
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-2xl text-[#02369C] flex justify-between font-bold">
                Correct
                <span className="text-xl border border-[#02369C] flex justify-center items-center rounded-full w-[32px] h-[32px]">
                  {correct || 0}
                </span>
              </p>
              <p className="text-2xl text-[#CC1010] flex gap-8 font-bold">
                Incorrect
                <span className="text-xl border border-[#CC1010] text-[#CC1010] flex justify-center items-center rounded-full w-[32px] h-[32px]">
                  {wrong || 0}
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="w-[311px] h-[56px] text-blue-600 border border-blue-600 rounded-full">
              Back
            </button>
            <button
              className="w-[311px] h-[56px] border bg-blue-600 text-white rounded-full"
              onClick={() => setDetails(!Details)}
            >
              Show Results
            </button>
          </div>
        </div>
      </div>

      {Details && (
        <div className="mt-10 w-full px-10">
          <h2 className="text-xl font-bold mb-4">Your Result Details:</h2>
          <div className="shadow w-[776px] flex gap-8">
            <div className="list-disc pl-5">
              {WrongQuestions && WrongQuestions.length > 0 ? (
                WrongQuestions.map((question: { Question: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; inCorrectAnswer: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; correctAnswer: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
                  <li key={index} className="text-gray-700">
                    <div className="w-[343px]">
                      <p>
                        <strong>Question:</strong> {question.Question}
                      </p>
                      <div className="bg-[#F8D2D2] w-[327px] h-[72px] rounded-[10px] flex p-5 items-center">
                        <p>
                          <strong>Incorrect Answer:</strong>{' '}
                          {question.inCorrectAnswer}
                        </p>
                      </div>
                      <div className="bg-[#CAF9CC] w-[327px] h-[72px] rounded-[10px] items-center p-5">
                        <p>
                          <strong>Correct Answer:</strong>{' '}
                          {question.correctAnswer}
                        </p>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <p className="text-gray-500">No incorrect questions to display.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



