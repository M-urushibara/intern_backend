import { Router, Request, Response } from 'express';
import { findArticles, findArticle } from '../usecases/articles';


const router = Router();

router.get(
    '/timeline/:category',
    async (req:Request, res:Response) => {
        const recommendArticles = await findArticles(req.params.category);
        res.status(200).json(recommendArticles)
    }
);


router.get(
    '/:id',
    async (req:Request, res:Response) => {
        console.log("a")
        const article = await findArticle(req.params.id);
        res.json(article)
    }
)


export default router;