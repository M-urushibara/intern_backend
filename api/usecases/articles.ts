import ArticleRepository from '../repositories/article'


const findArticles = async (category:string) => {
    const articleRepository = new ArticleRepository();
    if (category == 'recommend'){
        const recommendArticles = await articleRepository.findRecommend();
        return recommendArticles
    }
    const articles = await articleRepository.findCategoryRecommend(category);
    return  articles;
}



export { findArticles }