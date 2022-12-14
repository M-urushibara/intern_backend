import { Router, Request, Response } from 'express';
import { findrecommendArticles, findArticle, findArticles } from '../usecases/articles';


const router = Router();

router.get(
    '/timeline/:category',
    async (req:Request, res:Response) => {
        const recommendArticles = await findrecommendArticles(req.params.category);
        res.json(recommendArticles)
    }
);

router.get(
    '/:id',
    async (req:Request, res:Response) => {
        const article = await findArticle(req.params.id);
        res.json(article)
    }
)

router.get(
    '/search/:keyword',
    async (req:Request, res:Response) => {
        const keyword = req.params.keyword;
        const article = await findArticles(keyword as string);
        console.log(keyword)
        res.json(article)
    }
)


export default router;