const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const extensions = [
    { name: 'Summarizer', enabled: true },
    { name: 'Translator', enabled: false },
  ];

  for (const ext of extensions) {
    const existingExtension = await prisma.extension.findFirst()
    if(!existingExtension){
        await prisma.extension.upsert({
            where: { name: ext.name },
            update: {},
            create: ext,
          });
    }
    
  }

  const existingPlan = await prisma.plan.findFirst()
  if(!existingPlan){
    const plan = await prisma.plan.create({
        data: {
          name: 'Free',
          limit: 100,
          used_limit: 0,
        }
      });
  }
  
  const existingUser = await prisma.user.findFirst();
  if (!existingUser) {
    await prisma.user.create({
        data: {
          name: 'none',
          email: 'none',
          hotkey: 'space',
          appearance: 'system',
          defaultModel: 'gemini-flash',
          plan: {
            connect: { id: plan.id }
          }
        }
      });
  }

  console.log('✅ Données injectées avec succès.');
}

main()
  .catch((e) => {
    console.error('❌ Erreur :', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
