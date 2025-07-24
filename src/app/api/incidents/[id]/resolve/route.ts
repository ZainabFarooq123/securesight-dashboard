// src/app/api/incidents/[id]/resolve/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const updated = await prisma.incident.update({
    where: { id: Number(id) },
    data: { resolved: true },
  });

  return NextResponse.json(updated);
}
