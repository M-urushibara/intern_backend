import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import articleRoutes  from './routes/articles';

const app = express();
app.use(express.static('views'));
app.use(bodyParser.json())


app.use('/articles', articleRoutes);


// app.use((err: Error, req:Request, res:Response) => {
//     res.status(500).json({message: err.message});
// }) 



app.listen(3001, () => console.log('Server is running'));