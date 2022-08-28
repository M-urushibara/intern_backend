-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Article" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_image_path" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "product_name" TEXT NOT NULL,
    "product_price" INTEGER NOT NULL,
    "official_link" TEXT NOT NULL,
    "product_explain_text" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "M_category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "parent_id" INTEGER,
    "category_name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Article_category" (
    "article_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    PRIMARY KEY ("article_id", "category_id"),
    CONSTRAINT "Article_category_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "Article" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Article_category_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "M_category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Article_product_image_path_key" ON "Article"("product_image_path");
