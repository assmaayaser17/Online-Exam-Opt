import ExamCard from "./ExamCard";
import { Exam } from "../utils/types";

interface ExamListProps {
  exams: Exam[];
}

export default function ExamList({ exams }: ExamListProps) {
  if (exams.length === 0) {
    return <p>No exams available.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {exams.map((exam) => (
        <ExamCard key={exam.id} exam={exam} />
      ))}
    </div>
  );
}
