// app/api/incidents/[id]/resolve/route.ts

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
  const url = new URL(request.url);
  const id = url.pathname.split("/").at(-2); // Extracts the dynamic `[id]`

  const incidentId = Number(id);

  if (isNaN(incidentId)) {
    return new NextResponse("Invalid incident ID", { status: 400 });
  }

  try {
    const updatedIncident = await prisma.incident.update({
      where: { id: incidentId },
      data: { resolved: true },
    });

    return NextResponse.json(updatedIncident);
  } catch (error) {
    return new NextResponse("Incident not found", { status: 404 });
  }
}