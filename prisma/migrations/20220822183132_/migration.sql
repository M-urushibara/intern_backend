-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_M_category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "parent_id" INTEGER,
    "category_name" TEXT
);
INSERT INTO "new_M_category" ("category_name", "id", "parent_id") SELECT "category_name", "id", "parent_id" FROM "M_category";
DROP TABLE "M_category";
ALTER TABLE "new_M_category" RENAME TO "M_category";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
