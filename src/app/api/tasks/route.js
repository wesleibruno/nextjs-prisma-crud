import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}
export async function POST(request) {
  const { title, description } = await request.json();
  const newTask = await prisma.task.create({
    data: {
      title,
      description,
    },
  });
  return NextResponse.json(newTask);
}

// export function PUT() {
//   return NextResponse.json("alterando dados");
// }
// export function DELETE() {
//   return NextResponse.json("apagando dados");
// }
