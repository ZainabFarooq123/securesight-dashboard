// src/app/api/incidents/[id]/resolve/route.ts

import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function PATCH(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const id = Number(context.params.id);

  if (isNaN(id)) {
    return new Response("Invalid incident ID", { status: 400 });
  }

  try {
    const updatedIncident = await prisma.incident.update({
      where: { id },
      data: { resolved: true },
    });

    return Response.json(updatedIncident);
  } catch (error) {
    return new Response("Incident not found", { status: 404 });
  }
}
