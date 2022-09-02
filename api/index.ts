import express from 'express';
import bodyParser from 'body-parser';
import articleRoutes  from './routes/articles';
import cors from 'cors';

const app = express();
app.use(express.static('views'));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000', //アクセス許可するオリジン
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}));



app.use('/articles', articleRoutes);


app.listen(3001, () => console.log('Server is running'));