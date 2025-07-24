import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const incidentId = parseInt(params.id); // 👈 convert string to number

  try {
    await prisma.incident.update({
      where: { id: incidentId },
      data: { resolved: true },
    });

    return NextResponse.json({ message: "Incident resolved" }, { status: 200 });
  } catch (error) {
    console.error("Error resolving incident:", error);
    return NextResponse.json({ error: "Failed to resolve incident" }, { status: 500 });
  }
}
