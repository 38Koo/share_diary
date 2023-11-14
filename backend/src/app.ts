import express from "express";
import { createUser, findUserByEmail } from "./prisma/client";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/register/users", async (req, res) => {
  const { name, email } = req.body;
  const user = await createUser({ name, email });
  res.status(200).json(user);
});

app.get("/api/check/users", async (req, res) => {
  const { email } = req.query;

  if (typeof email !== "string") {
    res.status(400).json({ message: "Invalid email parameter" });
    return;
  }

  const user = await findUserByEmail({ email });
  res.status(200).json(user);
});

const server = app.listen(4000, () => {
  console.log(`Node.js is listening to Port:4000`);
});
