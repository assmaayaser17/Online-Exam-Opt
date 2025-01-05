'use client';

import { useState, useEffect } from "react";
import { Exam } from "../utils/types";

export default function useExams() {
  const [exams, setExams] = useState<Exam[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchExams() {
      try {
        const response = await fetch("/api/exams");
        if (!response.ok) {
          throw new Error("Failed to fetch exams");
        }
        const data = await response.json();
        setExams(data);
      } catch (err: any) {
        setError(err.message);
      }
    }
    fetchExams();
  }, []);

  return { exams, error };
}
