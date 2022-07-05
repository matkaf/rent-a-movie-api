/*
  Warnings:

  - The primary key for the `game_rentals` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `movie_rentals` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "game_rentals" DROP CONSTRAINT "game_rentals_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "game_rentals_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "movie_rentals" DROP CONSTRAINT "movie_rentals_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "movie_rentals_pkey" PRIMARY KEY ("id");
