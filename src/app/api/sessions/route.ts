import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    return NextResponse.json({
      status: "success",
      data: [
        {
          date: "2020-08-30 - Gore Bay",
          session_id: 1,
        },
        {
          date: "2020-08-29 - Gore Bay",
          session_id: 2,
        },
        {
          date: "2020-08-15 - Cape Palliser",
          session_id: 3,
        },
        {
          date: "2020-08-01 - Otaki",
          session_id: 4,
        },
        {
          date: "2020-07-07 - New Brighton",
          session_id: 5,
        },
        {
          date: "2020-05-25 - Sumner",
          session_id: 6,
        },
        {
          date: "2020-05-15 - Sumner",
          session_id: 7,
        },
        {
          date: "2020-03-22 - Karitane",
          session_id: 8,
        },
      ],
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({ message: "Unknown error occured" }),
      { status: 500 }
    );
  }
}
