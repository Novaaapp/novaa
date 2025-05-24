/*
  Warnings:

  - You are about to drop the column `ipAddress` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "loggedIn" BOOLEAN NOT NULL DEFAULT false,
    "hotkey" TEXT NOT NULL DEFAULT 'space',
    "appearance" TEXT NOT NULL DEFAULT 'system',
    "defaultModel" TEXT NOT NULL DEFAULT 'gemini-flash',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "planId" INTEGER NOT NULL,
    CONSTRAINT "User_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User" ("appearance", "created_at", "defaultModel", "email", "hotkey", "id", "loggedIn", "name", "planId") SELECT "appearance", "created_at", "defaultModel", "email", "hotkey", "id", "loggedIn", "name", "planId" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_planId_key" ON "User"("planId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
