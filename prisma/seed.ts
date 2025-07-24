import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Step 1: Clear existing data
  await prisma.incident.deleteMany(); // child first
  await prisma.camera.deleteMany();   // parent after

  // Step 2: Create cameras and capture IDs
  const shopFloor = await prisma.camera.create({
    data: { name: 'Shop Floor A', location: 'Main Floor' },
  });
  const vault = await prisma.camera.create({
    data: { name: 'Vault', location: 'Back Room' },
  });
  const entrance = await prisma.camera.create({
    data: { name: 'Entrance', location: 'Front Door' },
  });

  // Step 3: Create incidents using actual camera IDs
  await prisma.incident.createMany({
    data: [
      {
        cameraId: shopFloor.id,
        type: 'Unauthorized Access',
        tsStart: new Date('2025-07-23T02:15:00Z'),
        tsEnd: new Date('2025-07-23T02:17:00Z'),
        thumbnailUrl: '/thumbnails/incident1.png',
        resolved: false,
      },
      {
        cameraId: vault.id,
        type: 'Gun Threat',
        tsStart: new Date('2025-07-23T04:10:00Z'),
        tsEnd: new Date('2025-07-23T04:12:00Z'),
        thumbnailUrl: '/thumbnails/incident2.png',
        resolved: false,
      },
      {
        cameraId: entrance.id,
        type: 'Face Recognised',
        tsStart: new Date('2025-07-23T06:30:00Z'),
        tsEnd: new Date('2025-07-23T06:33:00Z'),
        thumbnailUrl: '/thumbnails/incident3.png',
        resolved: false,
      },
      // ✅ Add 10+ more if needed
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

