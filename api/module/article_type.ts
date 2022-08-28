export class Article {
    constructor(public article_id: number, public product_image_path: string,
        public created_at: Date){}
}

// export type ArticleJson = {
//     product_image_path: string,
//     created_at: Date, 
//     article_categories: [
//         article_id: number,
//     ]
// }