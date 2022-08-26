import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class ArticleRepository{

    async find(category: string){
        const article = await prisma.Article_category.findMany({
            include: { category: true, article: true},
            where: {
                category_name: category
            },
            select: {
				product_imag_path: true,
                article_id: true,
			}
         });
         }


        
    };


