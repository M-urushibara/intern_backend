-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Article" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_imag_path" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Article" ("created_at", "id", "product_imag_path") SELECT "created_at", "id", "product_imag_path" FROM "Article";
DROP TABLE "Article";
ALTER TABLE "new_Article" RENAME TO "Article";
CREATE TABLE "new_M_category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "parent_id" INTEGER,
    "category_name" TEXT NOT NULL
);
INSERT INTO "new_M_category" ("category_name", "id", "parent_id") SELECT "category_name", "id", "parent_id" FROM "M_category";
DROP TABLE "M_category";
ALTER TABLE "new_M_category" RENAME TO "M_category";
CREATE TABLE "new_Article_category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "article_id" INTEGER,
    "category_id" INTEGER,
    CONSTRAINT "Article_category_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "Article" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Article_category_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "M_category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Article_category" ("article_id", "category_id", "id") SELECT "article_id", "category_id", "id" FROM "Article_category";
DROP TABLE "Article_category";
ALTER TABLE "new_Article_category" RENAME TO "Article_category";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
