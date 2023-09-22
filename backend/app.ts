import express from "express";

const app = express();

const server = app.listen(3000, () => {
  console.log(`Node.js is listening to Port:3000`);
});
