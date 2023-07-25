import express from 'express';
const app = require('./src/app');

async function main(){
  await app.listen(4000);
  console.log("server ")
}

main();