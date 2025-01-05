'use server';

import { Exam } from "../utils/types";

const API_URL = "https://exam.elevateegy.com/api/v1/exams";


export async function fetchExams(): Promise<Exam[]> {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  
  });

  if (!response.ok) {
    throw new Error("Failed to fetch exams");
  }

  return response.json();
}
