import ArticleRepository from '../repositories/article'
import { TimeLineArticle, Article, recommendArticles } from '../module/article_type';
import { makeArticleJson } from '../module/article';
const hoge = process.env.IMG_URL;

const findrecommendArticles = async (category:string) => {
    const articleRepository = new ArticleRepository();
    const result: TimeLineArticle[] = [];

    if (category == 'recommend'){
        const recommendArticles = await articleRepository.findRecommend();
        for (let articleElement of recommendArticles){
            const newArticleResult = new TimeLineArticle(
                articleElement.article_categories[0].article_id,
                hoge + articleElement.product_image_path,
                articleElement.created_at
            );
            result.push(newArticleResult);
        }
        // const result = makeArticleJson(recommendArticles)
        return result
    }
    const categoryArticles = await articleRepository.findCategoryRecommend(category);
    for (let articleElement of categoryArticles){
        const newArticleResult = new TimeLineArticle(
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
    const article: Article|null = await articleRepository.findArticle(parseInt(id));
    if (article == null){
        return article;
    }else{
        const result = {
            main_image: hoge + article.product_image_path,
            product_name: article.product_name,
            product_price: article.product_price,
            product_explain_text: article.product_explain_text,
            official_link: article.official_link,
        }
        return result;
    }
}

const findArticles = async (keyword: string) => {
    const articleRepository = new ArticleRepository();
    const result: TimeLineArticle[] = [];
    const articles = await articleRepository.findArticles(keyword);
    console.log(articles)
    for (let articleElement of articles){
        const newArticleResult = new TimeLineArticle(
            articleElement.article_categories[0].article_id,
            hoge + articleElement.product_image_path,
            articleElement.created_at
        );
        result.push(newArticleResult);
    }
    return result;
}
export { findrecommendArticles, findArticle, findArticles }