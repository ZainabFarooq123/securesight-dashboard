import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Step 1: Clear existing data
  await prisma.incident.deleteMany(); // child first
  await prisma.camera.deleteMany();   // parent after

  // Step 2: Create cameras
  const shopFloor = await prisma.camera.create({
    data: { name: 'Shop Floor A', location: 'Main Floor' },
  });
  const vault = await prisma.camera.create({
    data: { name: 'Vault', location: 'Back Room' },
  });
  const entrance = await prisma.camera.create({
    data: { name: 'Entrance', location: 'Front Door' },
  });

  // Step 3: Create 12 incidents
  await prisma.incident.createMany({
    data: [
      {
        cameraId: shopFloor.id,
        type: 'Unauthorized Access',
        tsStart: new Date('2025-07-23T01:15:00Z'),
        tsEnd: new Date('2025-07-23T01:17:00Z'),
        thumbnailUrl: '/thumbnails/incident1.png',
        resolved: false,
      },
      {
        cameraId: vault.id,
        type: 'Gun Threat',
        tsStart: new Date('2025-07-23T02:10:00Z'),
        tsEnd: new Date('2025-07-23T02:13:00Z'),
        thumbnailUrl: '/thumbnails/incident2.png',
        resolved: false,
      },
      {
        cameraId: entrance.id,
        type: 'Face Recognised',
        tsStart: new Date('2025-07-23T03:30:00Z'),
        tsEnd: new Date('2025-07-23T03:32:00Z'),
        thumbnailUrl: '/thumbnails/incident3.png',
        resolved: false,
      },
      {
        cameraId: shopFloor.id,
        type: 'Gun Threat',
        tsStart: new Date('2025-07-23T04:00:00Z'),
        tsEnd: new Date('2025-07-23T04:02:00Z'),
        thumbnailUrl: '/thumbnails/incident4.png',
        resolved: false,
      },
      {
        cameraId: vault.id,
        type: 'Face Recognised',
        tsStart: new Date('2025-07-23T05:00:00Z'),
        tsEnd: new Date('2025-07-23T05:03:00Z'),
        thumbnailUrl: '/thumbnails/incident5.png',
        resolved: false,
      },
      {
        cameraId: entrance.id,
        type: 'Unauthorized Access',
        tsStart: new Date('2025-07-23T06:45:00Z'),
        tsEnd: new Date('2025-07-23T06:49:00Z'),
        thumbnailUrl: '/thumbnails/incident1.png',
        resolved: false,
      },
      {
        cameraId: shopFloor.id,
        type: 'Face Recognised',
        tsStart: new Date('2025-07-23T08:00:00Z'),
        tsEnd: new Date('2025-07-23T08:01:30Z'),
        thumbnailUrl: '/thumbnails/incident2.png',
        resolved: false,
      },
      {
        cameraId: vault.id,
        type: 'Gun Threat',
        tsStart: new Date('2025-07-23T09:15:00Z'),
        tsEnd: new Date('2025-07-23T09:17:00Z'),
        thumbnailUrl: '/thumbnails/incident3.png',
        resolved: false,
      },
      {
        cameraId: entrance.id,
        type: 'Unauthorized Access',
        tsStart: new Date('2025-07-23T10:00:00Z'),
        tsEnd: new Date('2025-07-23T10:03:00Z'),
        thumbnailUrl: '/thumbnails/incident4.png',
        resolved: false,
      },
      {
        cameraId: shopFloor.id,
        type: 'Gun Threat',
        tsStart: new Date('2025-07-23T12:30:00Z'),
        tsEnd: new Date('2025-07-23T12:33:00Z'),
        thumbnailUrl: '/thumbnails/incident5.png',
        resolved: false,
      },
      {
        cameraId: vault.id,
        type: 'Unauthorized Access',
        tsStart: new Date('2025-07-23T15:15:00Z'),
        tsEnd: new Date('2025-07-23T15:17:00Z'),
        thumbnailUrl: '/thumbnails/incident1.png',
        resolved: false,
      },
      {
        cameraId: entrance.id,
        type: 'Face Recognised',
        tsStart: new Date('2025-07-23T17:45:00Z'),
        tsEnd: new Date('2025-07-23T17:48:00Z'),
        thumbnailUrl: '/thumbnails/incident1.png',
        resolved: false,
      },
    ],
  });

  console.log('✅ Seed complete!');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
