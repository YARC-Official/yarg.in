import { NEWS_SOURCE } from "./constants"

export const getArticle = async (slug: string) => {
    const article = await fetch(`${NEWS_SOURCE}/articles/${slug}.md`).then(res => res.text());

    return article;
}