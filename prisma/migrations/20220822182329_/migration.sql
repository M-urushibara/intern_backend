/*
  Warnings:

  - The primary key for the `Article` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `article_id` on the `Article` table. All the data in the column will be lost.
  - Added the required column `id` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Article_category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "article_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    CONSTRAINT "Article_category_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "Article" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Article_category_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "M_category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "M_category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "parent_id" INTEGER NOT NULL,
    "category_name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Article" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_imag_path" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Article" ("product_imag_path") SELECT "product_imag_path" FROM "Article";
DROP TABLE "Article";
ALTER TABLE "new_Article" RENAME TO "Article";
CREATE UNIQUE INDEX "Article_product_imag_path_key" ON "Article"("product_imag_path");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
