import { database } from "@/app/db";
import { NextResponse } from "next/server";

export async function GET() {
  const notes = await database.notes.findMany();
  return NextResponse.json(
    {
      success: true,
      message: "All notes",
      data: notes,
    },
    { status: 201 }
  );
}

export async function POST(request: any) {
  const { content } = await request.json();
  const note = await database.notes.create({ data: { content } });
  return NextResponse.json(
    {
      success: true,
      message: "Note is create successfully",
      data: note,
    },
    { status: 201 }
  );
}
