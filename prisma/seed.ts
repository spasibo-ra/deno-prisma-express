import { Prisma, PrismaClient } from '../generated/client/deno/edge.ts';
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";

const envVars = await config();

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: envVars.DATABASE_URL,
        },
    },
});

const userData: Prisma.UserCreateInput[] = [
    {
        name: 'Spasibo',
        last_name: 'Ra'
    },
    {
        name: 'Anastejsha',
        last_name: 'Bal\'zakovna'
    }
];
for (const data of userData) {
    await prisma.$connect();
    const createdUser = await prisma.user.create({
        data
    });
    console.log(`Created user with id: ${createdUser.id}`);
}
console.log(`Seeding finished.`);
await prisma.$disconnect();