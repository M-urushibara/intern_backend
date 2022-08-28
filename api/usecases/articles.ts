import ArticleRepository from '../repositories/article'
import { Article } from '../module/article_type';

const findArticles = async (category:string) => {
    const articleRepository = new ArticleRepository();
    const result: Article[] = [];
    const hoge = process.env.IMG_URL;

    if (category == 'recommend'){
        const recommendArticles = await articleRepository.findRecommend();
        for (let articleElement of recommendArticles){
            const newArticleResult = new Article(
                articleElement.article_categories[0].article_id,
                hoge + articleElement.product_image_path,
                articleElement.created_at
            );
            result.push(newArticleResult);
        }
        return result
    }

    const categoryArticles = await articleRepository.findCategoryRecommend(category);
    for (let articleElement of categoryArticles){
        const newArticleResult = new Article(
            articleElement.article_categories[0].article_id,
            hoge + articleElement.product_image_path,
            articleElement.created_at
        );
        result.push(newArticleResult);
    }
    return  result;
}

const findArticle = async (id: string) => {
    const articleRepository = new ArticleRepository();
    console.log(id);
    const article = await articleRepository.findArticle(parseInt(id));
    return article;
}

export { findArticles, findArticle }