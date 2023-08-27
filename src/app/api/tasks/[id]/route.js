import { prisma } from "@/lib/prisma";
import { data } from "autoprefixer";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(task);
}
export function POST(request, { params }) {
  return NextResponse.json("criando tarefa " + params.id);
}
export async function PUT(request, { params }) {
  // const id = params.id;
  const data = await request.json();
  const taskUpdated = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    data,
  });
  return NextResponse.json(taskUpdated);
}
export async function DELETE(request, { params }) {
  try {
    const taskRemoved = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(taskRemoved);
  } catch (error) {
    if (error.meta.cause == "Record to delete does not exist.")
      return NextResponse.json("Usuário não existe");
  }
}
