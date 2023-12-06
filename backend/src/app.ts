import express from "express";
import {
  findUserByAccountId,
  findUserByEmail,
  registerUser,
} from "./prisma/client/user";
import {
  diariesListByDay,
  findPostedUsersByMonth,
  registerDiary,
} from "./prisma/client/diary";
import cors from "cors";
import { ApplyForFollow } from "./prisma/client/follower";

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

app.get("/api/check/user", async (req, res) => {
  const { email } = req.query;

  if (typeof email !== "string") {
    res.status(400).json({ message: "Invalid email parameter" });
    return;
  }

  const user = await findUserByEmail({ email });
  if (!!user && user.id !== undefined) {
    res.status(200).json(user);
  } else {
    res.status(404).json(null);
  }
});

app.get("/api/find/user", async (req, res) => {
  const { accountId } = req.query;

  if (typeof accountId !== "string") {
    res.status(400).json({ message: "Invalid accountId parameter" });
    return;
  }

  const user = await findUserByAccountId({ accountId });
  res.status(200).json(user);
});

app.post("/api/apply/follow", async (req, res) => {
  const { userId, followId } = req.body;

  try {
    const applyFollow = await ApplyForFollow({ userId, followId });
    if (!applyFollow || applyFollow.id !== undefined) {
      res.status(200).json({ message: "already requested a follow" });
      return;
    }

    res.status(200).json(applyFollow);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/api/find/postedUsers", async (req, res) => {
  const { userId, date } = req.query;

  try {
    if (typeof userId !== "string" || typeof date !== "string")
      throw new Error();

    if (isNaN(Number(userId))) throw new Error();

    const users = await findPostedUsersByMonth({
      userId: Number(userId),
      date,
    });
    res.status(200).json(users);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/api/find/diaries", async (req, res) => {
  const { userId, date } = req.query;

  try {
    if (typeof userId !== "string" || typeof date !== "string")
      throw new Error();

    if (isNaN(Number(userId))) throw new Error();

    const diaries = await diariesListByDay({
      userId: Number(userId),
      date,
    });
    res.status(200).json(diaries);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/api/register/diary", async (req, res) => {
  const { date, userId, contents } = req.body;

  try {
    const diary = await registerDiary({ date, userId, contents });
    res.status(200).json(diary);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const server = app.listen(4000, () => {
  console.log(`Node.js is listening to Port:4000`);
});
