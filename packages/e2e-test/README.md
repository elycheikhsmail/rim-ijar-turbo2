# run seed

pnpm prisma db seed

# test in visual way

```sh
pnpm run build && pnpm run start
```

then

```sh
pnpm prisma db seed && pnpm run cypress:open
```

# test in backround (invisible)

pnpm run test

```sh
pnpm run build && pnpm run start
```

then

```sh
pnpm run test
```
