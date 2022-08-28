import { Article } from '../module/article_type';

const makeArticleJson = async (recommendArticles) => {
    const result: Article[] = [];
    const hoge = process.env.IMG_URL;
        for (let articleElement of recommendArticles){
            const newArticleResult = new Article(
                articleElement.article_categories[0].article_id,
                hoge + articleElement.product_image_path,
                articleElement.created_at
            );
            result.push(newArticleResult);
        }
        return result;
     }

export {makeArticleJson}