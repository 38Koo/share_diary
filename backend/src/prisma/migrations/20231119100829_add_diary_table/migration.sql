-- CreateTable
CREATE TABLE "Diary" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "day" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "contents" TEXT NOT NULL,

    CONSTRAINT "Diary_pkey" PRIMARY KEY ("year","month","day","userId")
);

-- AddForeignKey
ALTER TABLE "Diary" ADD CONSTRAINT "Diary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
