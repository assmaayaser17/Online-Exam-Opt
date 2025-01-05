import { Exam } from "../utils/types";

interface ExamCardProps {
  exam: Exam;
}

export default function ExamCard({ exam }: ExamCardProps) {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold">{exam.name}</h2>
      <p className="text-sm text-gray-600">{exam.description}</p>
      <small className="text-xs text-gray-400">
        Created: {new Date(exam.createdAt).toLocaleDateString()}
      </small>
    </div>
  );
}
