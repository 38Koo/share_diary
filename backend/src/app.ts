import express from "express";
import { findUserByEmail, registerUser } from "./prisma/client/user";
import { registerDiary } from "./prisma/client/diary";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.post("/api/register/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await registerUser({ name, email });
    res.status(200).json(user);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
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

app.post("/api/register/diary", async (req, res) => {
  const { year, month, day, userId, contents } = req.body;

  try {
    const diary = await registerDiary({ year, month, day, userId, contents });
    res.status(200).json(diary);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const server = app.listen(4000, () => {
  console.log(`Node.js is listening to Port:4000`);
});
