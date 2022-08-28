import express from 'express';
import bodyParser from 'body-parser';
import articleRoutes  from './routes/articles';


const app = express();
app.use(express.static('views'));
app.use(bodyParser.json());
app.use('/articles', articleRoutes);



app.listen(3001, () => console.log('Server is running'));