'use client'
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import InstructionsList from '@/components/custom/instructionslist';
import Questions from '@/components/custom/questions/[...id]/questions';


export default function Exam() {
  let {id} =useParams()
  console.log('id',id)

  const [exams, setExam] = useState([]);
  // const [visible, setVisible] = useState(false); 
  // const [question, setQuestion] = useState(false);
  const [isInstructionsPopupVisible, setIsInstructionsPopupVisible] = useState(false); 
  const [isQuestionsPopupVisible, setIsQuestionsPopupVisible] = useState(false);
  const  showInstructionsPopup = () => setIsInstructionsPopupVisible(true);
  const hideInstructionsPopup  = () => setIsInstructionsPopupVisible(false);
  const showQuestionsPopup = (): void => {
    setIsInstructionsPopupVisible(false); // Hide the Instructions popup
    setIsQuestionsPopupVisible(true); // Show the Questions popup
  };


  async function getExams () {
    const res =  await fetch(`http://localhost:3000/api/exams?subject=${id}`);
    const data = await res.json();
    setExam(data.exams);
    console.log(data.exams)
    // console.log("The Data Is From Fetch: ", data.quizes[0])   
}
 
useEffect(() => {

  getExams();

  console.log("The Data Is: ",exams)

}, [])


  return (
    <>
     <div className="flex flex-col gap-5">
            {/* {!question ? ( */}
             { exams?.map((exam, index) => (
                <div key={index}>
                  {/* <Link href={`/questions/${quiz._id}`}> */}
                  <div className="w-[1063px] h-[103px] p-5 flex justify-between rounded shadow">
                    <div className="flex flex-col">
                      <p>{exam?.title}</p>
                      <p className="text-[#535353]">{exam.numberOfQuestions} Questions</p>
                    </div>
                    <div>
                      <p>{exam.duration} minutes</p>
  
                      <button
                     onClick={showInstructionsPopup}
                     
                       
                        className="w-[77px] h-[23px] bg-[#4461F2] rounded-[10px] flex justify-center items-center text-white"
                      >
                        Start
                      </button>
                      {isInstructionsPopupVisible && (
                     <InstructionsList onClose={showQuestionsPopup} />
                        )}
                         {isQuestionsPopupVisible && <Questions onClose={() => setIsQuestionsPopupVisible(false)} />}
                      {/* {isPopupVisible && <InstructionsList onClose={hidePopup} />} */}
  
                      {/* {visible && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
                          <div className="p-6 bg-white w-[648px] h-[309px] rounded-[20px] shadow-lg">
                            <h2 className="text-lg mb-4">Instructions</h2>
                            <ul className="list-disc ml-6">
                              <li>Lorem ipsum dolor sit amet consectetur.</li>
                              <li>Lorem ipsum dolor sit amet consectetur.</li>
                              <li>Lorem ipsum dolor sit amet consectetur.</li>
                              <li>Lorem ipsum dolor sit amet consectetur.</li>
                            </ul>
                            <Link href={`/questions/${quiz._id}`}>
                            <button
                              onClick={gotoQuestion}
                              className="mt-16 px-4 py-2 w-[600px] h-[48px] bg-[#4461F2] text-white rounded-full focus:outline-none"
                            >
                              Start
                            </button>
                            
                            
                            </Link>
  
                            
                          </div>
                        </div>
                      )} */}
                    </div>
                  </div>
                  {/* </Link> */}
                  
                </div>
              ))}
              </div>
       
     
    </>
)
}