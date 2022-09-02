import internal from "stream";

export class TimeLineArticle {
    constructor(
        public article_id: number, 
        public product_image_path: string,
        public created_at: Date){}
}
export type recommendArticles = {
        product_image_path: string,
        article_categories: {article_id: number},
        created_at: Date,
}[];


export type Article = {
        product_name: string,
        product_price: number,
        product_image_path: string,
        product_explain_text: string,
        official_link: string
};

// export type ArticleJson = {
//     product_image_path: string,
//     created_at: Date, 
//     article_categories: [
//         article_id: number,
//     ]
// }