/*
  Warnings:

  - A unique constraint covering the columns `[gameId]` on the table `game_rentals` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[movieId]` on the table `movie_rentals` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "game_rentals_gameId_key" ON "game_rentals"("gameId");

-- CreateIndex
CREATE UNIQUE INDEX "movie_rentals_movieId_key" ON "movie_rentals"("movieId");
