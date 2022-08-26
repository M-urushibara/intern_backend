/*
  Warnings:

  - A unique constraint covering the columns `[product_imag_path]` on the table `Article` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Article_product_imag_path_key" ON "Article"("product_imag_path");
