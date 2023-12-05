/*
  Warnings:

  - The primary key for the `Diary` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `day` on the `Diary` table. All the data in the column will be lost.
  - You are about to drop the column `month` on the `Diary` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Diary` table. All the data in the column will be lost.
  - Added the required column `date` to the `Diary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Diary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Follower` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Diary" DROP CONSTRAINT "Diary_pkey",
DROP COLUMN "day",
DROP COLUMN "month",
DROP COLUMN "year",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "date" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "Diary_pkey" PRIMARY KEY ("date", "userId");

-- AlterTable
ALTER TABLE "Follower" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
