import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
  const url = new URL(request.url);
  const pathParts = url.pathname.split("/");
  const id = pathParts[pathParts.length - 2]; // captures the [id] from the URL

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
  } catch (error: unknown) {
    console.error("Update failed:", error);
    return new NextResponse("Incident not found", { status: 404 });
  }
}