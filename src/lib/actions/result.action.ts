"use server";


import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.API + "/questions";

export const checkQuestionsAction = async (fields: CheckQuestionsFields) => {
  const token = await getToken({ req });

  try {
    const userToken = token?.token
    const response = await fetch(BASE_URL + "/check", {
       
      method: "POST",
      body: JSON.stringify(fields),
      headers: {
        "Content-Type": "application/json",
        token: userToken,
        
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
   
    }

    const payload = await response.json();

    // Assuming the structure of the response is like the example you provided
    return {
      message: payload.message,
      correct: payload.correct,
      wrong: payload.wrong,
      total: payload.total,
      correctQuestions: payload.correctQuestions,
      wrongQuestions: payload.WrongQuestions,
    };
  } catch (error: any) {
  
  }
};


