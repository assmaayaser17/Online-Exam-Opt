
import { JSON_HEADER } from "@/lib/constants/api.constant";
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

    const fetchingURL = (process.env.API +'/subjects')
    const userToken = token?.token
   
    const response = await fetch(fetchingURL, {
      headers: {
        ...JSON_HEADER,
        token: userToken,
      },
    }
  );

    const data = await response.json();
    console.log(data)

    return NextResponse.json({...data});

  } catch (error) {

    return NextResponse.json(
      { error: error.message, },
      { status: 500 }
    );  
  }
}
  