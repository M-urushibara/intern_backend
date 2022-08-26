-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Article" (
    "article_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_imag_path" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
