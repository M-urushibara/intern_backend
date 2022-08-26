import express, { Request, Response } from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';
import { findArticles } from './usecases/articles';

const app = express();
app.use(express.static('views'));
app.use(bodyParser.json({limit: '50mb'}))

// app.get(
//     '/articles/:category',
//     async (req:Request, res:Response) => {
//         const articles = await findArticles(req.params.category);
//         res.json(articles)
//     }
// );






// app.get('/get', async (req, res) => {
//     res.(__dirname + "../views/images/IMG_3267.jpg");
// });


app.listen(3001, () => console.log('Server is running'));