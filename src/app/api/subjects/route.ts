
 
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = await getToken({ req });
    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 401 }
      );
    }
    const cookies = req.cookies;
    const token = cookies.get("token")?.value; // Ensure `token` is read correctly

   
    const response = await fetch(process.env.API+'/subjects', {
      headers: {
        // Authorization: `Bearer ${apiToken}`,
        token:cookies?.token
      },
    });
    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch subjects" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({...data});
  } catch (error) {
    console.error("Error in GET /api/subjects:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

  