import { database } from "@/app/db";
import { NextResponse } from "next/server";

export async function GET(request: any, { params }: any) {
  const id = parseInt(params.noteId, 10);

  if (isNaN(id)) {
    return NextResponse.json(
      { success: false, message: "Invalid note ID", data: null },
      { status: 400 }
    );
  }

  const note = await database.notes.findUnique({ where: { id } });

  if (!note) {
    return NextResponse.json(
      { success: false, message: "Note not found", data: null },
      { status: 404 }
    );
  }

  return NextResponse.json(
    { success: true, message: "Detail data note", data: note },
    { status: 200 }
  );
}
