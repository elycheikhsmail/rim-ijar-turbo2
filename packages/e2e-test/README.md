# run seed

pnpm prisma db seed

# test in visual way

pnpm prisma db seed && pnpm run cypress:open
// assuming nextjs is running

# test in backround (invisible)

pnpm run test
