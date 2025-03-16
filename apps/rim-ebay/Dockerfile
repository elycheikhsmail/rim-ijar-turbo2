FROM docker.io/oven/bun:1 AS base
WORKDIR /usr/src/app

# Install dependencies
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# Install production dependencies
RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# Build application
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production
ENV DATABASE_URL=postgres://db_user:db_password@localhost:5432/db_name
RUN bun run build

# Final image
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/.next ./.next
COPY --from=prerelease /usr/src/app/public ./public
COPY --from=prerelease /usr/src/app/package.json ./package.json

USER bun
EXPOSE 3000
CMD ["bun", "run", "prisma", "migrate", "deploy"]
CMD ["bun", "run", "seed"]
CMD ["bun", "run", "start"]