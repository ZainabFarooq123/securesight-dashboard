import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id); // convert to number if your DB uses numeric IDs

  if (isNaN(id)) {
    return new Response("Invalid incident ID", { status: 400 });
  }

  const updatedIncident = await prisma.incident.update({
    where: { id },
    data: { resolved: true },
  });

  return Response.json(updatedIncident);
}
