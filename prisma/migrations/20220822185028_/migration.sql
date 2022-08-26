/*
  Warnings:

  - A unique constraint covering the columns `[category_name]` on the table `M_category` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "M_category_category_name_key" ON "M_category"("category_name");
