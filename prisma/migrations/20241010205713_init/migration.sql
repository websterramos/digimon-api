-- CreateTable
CREATE TABLE "Digimon" (
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "level" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Digimon_name_key" ON "Digimon"("name");
