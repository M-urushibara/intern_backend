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
                product_image_path: true,
                created_at: true,
                article_categories:{
                    select:{
                        article_id: true,
                    },
                },
            },
        });
        return article;
    }; 

    async findCategoryRecommend(category: string){
        const articles = await prisma.article.findMany({
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
                product_image_path: true,
                created_at: true,
                article_categories:{
                    select:{
                        article_id: true,
                    },
                },
            },
        });
        return articles;
    };

    async findArticle(id: number){
        const article = await prisma.article.findUnique({
            where: {
                id: id,
            },
            select:{
                product_name: true,
                product_price: true,
                product_image_path: true,
                official_link: true,
                product_explain_text: true,
            },
        });
        console.log(article)
        return article;
    };


};


