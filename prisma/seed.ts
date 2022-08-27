import { PrismaClient } from '@prisma/client'
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
    const article = await prisma.article.create({
        data:{
            product_image_path: 'IMG_3007.jpg',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'ブルーベース',
                            }
                        }
                    }
                ],
            },
        },
    }); 

    const article1 = await prisma.article.create({
        data:{
            product_image_path: 'IMG_3045.jpg',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'イエローベース',
                            }
                        }
                    }
                ],
            },
        },
    }); 

    const article2 = await prisma.article.create({
        data:{
            product_image_path: 'IMG_3048.jpg',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'ブルーベース',
                            }
                        }
                    }
                ],
            },
        },
    }); 

    const article3 = await prisma.article.create({
        data:{
            product_image_path: 'IMG_3049.jpg',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'イエローベース',
                            }
                        }
                    }
                ],
            },
        },
    }); 
    const article4 = await prisma.article.create({
        data:{
            product_image_path: 'IMG_3050.jpg',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'ブルーベース',
                            }
                        }
                    }
                ],
            },
        },
    }); 

    const article5 = await prisma.article.create({
        data:{
            product_image_path: 'IMG_3051.jpg',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'イエローベース',
                            }
                        }
                    }
                ],
            },
        },
    }); 

    const article6 = await prisma.article.create({
        data:{
            product_image_path: 'IMG_3052.jpg',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'ブルーベース',
                            }
                        }
                    }
                ],
            },
        },
    }); 

    const article7 = await prisma.article.create({
        data:{
            product_image_path: 'IMG_3053.jpg',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'イエローベース',
                            }
                        }
                    }
                ],
            },
        },
    }); 

    const article8 = await prisma.article.create({
        data:{
            product_image_path: 'IMG_3055.jpg',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'イエローベース',
                            }
                        }
                    }
                ],
            },
        },
    }); 

    const article9 = await prisma.article.create({
        data:{
            product_image_path: 'IMG_3267.jpg',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'イエローベース',
                            }
                        }
                    }
                ],
            },
        },
    }); 

    const article10 = await prisma.article.create({
        data:{
            product_image_path: 'IMG_3269.jpg',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'イエローベース',
                            }
                        }
                    }
                ],
            },
        },
    }); 

    const article11 = await prisma.article.create({
        data:{
            product_image_path: 'IMG_3289.jpg',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'イエローベース',
                            }
                        }
                    }
                ],
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