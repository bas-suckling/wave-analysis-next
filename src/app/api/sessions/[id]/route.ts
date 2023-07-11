import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    return NextResponse.json({
      status: "success",
      id,
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({ message: "Unknown error occured" }),
      { status: 500 }
    );
  }
}
