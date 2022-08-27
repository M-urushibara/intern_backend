import { Router, Request, Response } from 'express';
import { findArticles } from '../usecases/articles';


const router = Router();

router.get(
    '/:category',
    async (req:Request, res:Response) => {
        const articles = await findArticles(req.params.category);
        res.status(200).json(articles)
    }
);


export default router;