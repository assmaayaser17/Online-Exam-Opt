'use client'
import { createContext, useState } from "react"

export const QuestionsContext = createContext(null);


export default function QuestionsProvider({children}) {

const [x, setX] = useState(0)
const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);



const handleAnswerSelect = (questionId: any, answerKey: any) => {
    const storedanswer=  {
      questionId:questionId,
      correct: answerKey
  }
    setSelectedAnswers( (prev) => {
      return [...prev,storedanswer]
      }
      );

    console.log(selectedAnswers)

    
  };


  return  <QuestionsContext.Provider value={{handleAnswerSelect,selectedAnswers}}> {children} </QuestionsContext.Provider>
  
}