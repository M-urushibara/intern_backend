import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const m_category_yellow = await prisma.M_category.create({
        data: {
            parent_id: 0,
            category_name: "イエローベース"
        },
    });
    const m_category_blue = await prisma.M_category.create({
        data: {
            parent_id: 0,
            category_name: "ブルーベース"
        },
    });    
    const m_category_yellow_spring = await prisma.M_category.create({
        data:{
            parent_id: 1,
            category_name: "春"
        },
    });
    const m_category_yellow_summer = await prisma.M_category.create({
        data:{
            parent_id: 1,
            category_name: "夏"
        },
    });   
    const m_category_blue_autumn = await prisma.M_category.create({
        data:{
            parent_id: 2,
            category_name: "秋"
        },
    });    
    const m_category_blue_winter = await prisma.M_category.create({
        data:{
            parent_id: 2,
            category_name: "冬"
        },
    });    
    const data1 = await prisma.article.create({
        data: {
            product_image: 'IMG_3267.jpg', 
            article_categories: {
                create:[
                    {
                        category:{
                            connect: {
                                category_name: "ブルーベース",
                        },
                        }
                    }
            ]
            },
        },
      });


}















main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });