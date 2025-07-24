import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; 

export async function PATCH(
  req: Request,
  context: { params: { id: string } }
) {
  const id = parseInt(context.params.id); // convert from string to number

  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const updated = await prisma.incident.update({
    where: { id },
    data: { resolved: true },
  });

  return NextResponse.json(updated);
}
