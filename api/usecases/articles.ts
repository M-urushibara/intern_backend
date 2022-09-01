import ArticleRepository from '../repositories/article'
import { TimeLineArticle, Article } from '../module/article_type';
import { makeArticleJson } from '../module/article';

const findArticles = async (category:string) => {
    const articleRepository = new ArticleRepository();
    const result: TimeLineArticle[] = [];
    const hoge = process.env.IMG_URL;

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
        //const result = makeArticleJson(recommendArticles)
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
    const article = await articleRepository.findArticle(parseInt(id));
    // const result: Article = {
    //     main_image: article.product_image_path,
    //     product_name: article.product_name,
    //     product_price: article.product_price,
    //     product_explain_text: article.product_explain_text,
    //     official_link: article.official_link,
    // }
    return article;
}

export { findArticles, findArticle }