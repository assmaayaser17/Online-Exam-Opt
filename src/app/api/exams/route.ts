// import { NextResponse } from "next/server";

// const API_URL = "https://exam.elevateegy.com/api/v1/exams?subject=670037f6728c92b7fdf434fc";

// export async function GET() {
//   try {
//     const response = await fetch(API_URL, { method: "GET" });
//     if (!response.ok) {
//       throw new Error("Failed to fetch exams");
//     }
//     const exams = await response.json();
//     return NextResponse.json(exams);
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
