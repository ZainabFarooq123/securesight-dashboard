// src/app/api/incidents/[id]/resolve/route.ts

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(
  request: Request,
  { params }: { params: Record<string, string> } // Updated to use Record<string, string>
) {
  const { id } = params;
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
