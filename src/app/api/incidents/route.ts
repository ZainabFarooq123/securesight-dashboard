// src/app/api/incidents/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const incidents = await prisma.incident.findMany({
    where: {
      resolved: false,
    },
    include: {
      camera: true, // Include camera details like name/location
    },
    orderBy: {
      tsStart: 'desc',
    },
  });

  return NextResponse.json(incidents);
}
