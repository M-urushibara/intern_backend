/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `M_category` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "M_category_id_key" ON "M_category"("id");
