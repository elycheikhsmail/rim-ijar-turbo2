console.log('Environment variables loaded:');
console.log('================================');
Object.keys(process.env)
  .sort()
  .forEach((key) => {
    console.log(`${key}=${process.env[key]}`);
  });
console.log('================================');
