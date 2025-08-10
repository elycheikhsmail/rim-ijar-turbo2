pnpm install
pnpm -w -r  run generate
pnpm --filter ./packages/ui run build
pnpm --filter ./apps/rim-ebay run build
 
 
pnpm --filter ./apps/rim-ebay run start