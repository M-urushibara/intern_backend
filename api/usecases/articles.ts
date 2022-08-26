import ArticleRepository from '../repositories/article'


const findArticles = async (category:string) => {
    const articleRepository = new ArticleRepository();
    const articles = articleRepository.find(category);
    return await articles;
}

export { findArticles }