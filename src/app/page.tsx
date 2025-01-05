import { fetchExams } from "./actions/fetchExams";
import ExamList from "./components/ExamList";

export default async function HomePage() {
  const exams = await fetchExams(); // Fetch data directly using server action

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Exams</h1>
      <ExamList exams={exams} />
    </main>
  );
}






