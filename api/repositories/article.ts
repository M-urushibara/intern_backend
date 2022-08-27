import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class ArticleRepository{

    async findRecommend(){
        const article = await prisma.article.findMany({
            orderBy:{
                created_at: "desc",
            },
            take:10,
            select: {
                id: true,
                product_image_path: true,
                created_at: true,
            },
        });
        return article;
    } 

    async findCategoryRecommend(category: string){
        const article = await prisma.article.findMany({
            where: {
                article_categories: {
                    some:{
                        category:{
                            category_name: category,
                        },
                    },
                },
            },
            orderBy:{
                created_at: "desc",
            },
            take:10,
            select: {
                id: true,
                product_image_path: true,
                created_at: true,
            },
        });
        return article;
    }
    };


