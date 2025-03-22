# rim-ebay
# prequis pour utiliser ce projet 
- node version v22.13.0
- docker (ou docker)
- docker compose (ou docker compose)

- utiliser bun 1.2.0 (ou plus recent) pour gerer les deps
- les workflow dans .github/workflows/deploy-nextjs-postgress.yml peut servir sur comment installer et utiliser ce projet en local ou dans le cloud
- 
# prepare env variable
create .env file then copy past .env.exemple in it

# use docker to create postgres database for dev

```shell
docker container stop  mongodb-dev && \
docker container rm -f mongodb-dev && \
docker volume rm mongodb-data && \
docker run -d \
  --name mongodb-dev \
  --hostname localhost \
  -p 27017:27017 \
  -v mongodb-data:/data/db \
  mongo:latest \
  --replSet rs0 --noauth 
  
docker exec -it mongodb-dev mongosh 
rs.initiate(
  {
    _id: 'rs0',
    members: [
      {
        _id: 0,
        host: 'localhost:27017',
        priority: 1
      }
    ]
  }
);

rs.status();

 

```
# create database tables and seed it
```shell
bun install
bun run build
npx prisma db push 
bun run seed

```

 
# scripts
- dev
```shell
bun run dev
```
for running nextjs dev server 

- cache

```shell
bun run cache
```
for caching annonces options (annonces types, categories, subcategories,.. ) from database into json files in data folder

# debug (without console.log)

we configure debug for Vscode in .vscode/launch.json
# test 
okkkkkk