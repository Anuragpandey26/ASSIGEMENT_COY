import { PrismaClient } from "@prisma/client";
import { seedDatabase } from "./seed";

const prisma = new PrismaClient();
const DEMO_USER_ID = process.env.DEMO_USER_ID || "demo-user";

async function resetDemo() {
  console.log("==> Resetting demo state...");

  // Delete all matches
  await prisma.match.deleteMany({});
  console.log("✓ Cleared all matches.");

  // Delete all swipes by demo-user
  await prisma.swipe.deleteMany({
    where: { fromUserId: DEMO_USER_ID },
  });
  console.log("✓ Cleared demo user swipes.");

  // Re-run seed to ensure incoming likes and profiles are intact
  await seedDatabase();

  console.log("==> Demo state successfully reset!");
}

resetDemo()
  .catch((e) => {
    console.error("Reset error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
