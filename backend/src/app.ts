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
  res.status(200).json(user);
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
    if (applyFollow !== null) {
      res.status(500).json({ message: "already requested a follow" });
    }

    res.status(200).json(applyFollow);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/api/find/postedUsers", async (req, res) => {
  const { userId, year, month } = req.query;
  console.log(userId, year, month);

  try {
    if (
      typeof userId !== "string" ||
      typeof year !== "string" ||
      typeof month !== "string"
    )
      throw new Error();

    if (isNaN(Number(userId)) || isNaN(Number(year)) || isNaN(Number(month)))
      throw new Error();

    const users = await findPostedUsersByMonth({
      userId: Number(userId),
      year: Number(year),
      month: Number(month),
    });
    res.status(200).json(users);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/api/find/diaries", async (req, res) => {
  const { userId, year, month, day } = req.query;

  try {
    if (
      typeof userId !== "string" ||
      typeof year !== "string" ||
      typeof month !== "string" ||
      typeof day !== "string"
    )
      throw new Error();

    if (
      isNaN(Number(userId)) ||
      isNaN(Number(year)) ||
      isNaN(Number(month)) ||
      isNaN(Number(day))
    )
      throw new Error();

    const diaries = await diariesListByDay({
      userId: Number(userId),
      year: Number(year),
      month: Number(month),
      day: Number(day),
    });
    res.status(200).json(diaries);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
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
