import { TagColor } from "@/components/Tag"
import { NEWS_IMAGES_URL, NEWS_SOURCE } from "./constants"
import { z } from "zod";
import matter from "gray-matter";

// TO-DO: Move all schemas to it's own file/folder.

export const ValidArticleTypes = z.union([
    z.literal("update"), 
    z.literal("announcement"), 
    z.literal("fix"), 
    z.literal("event"), 
    z.literal("tournament"), 
    z.literal("dlc"),
]);

export type ArticleTypes = z.infer<typeof ValidArticleTypes>;

export const ArticleAuthor = z.object({
    displayName: z.string(),
    avatar: z.string().optional(), // TO-DO: create a refine for checking if string = `filename.{png|jpg|jpeg|webp}`
    role: z.string().optional(),
});

export type ArticleAuthor = z.infer<typeof ArticleAuthor>;

export const BaseArticleSchema = z.object({
    type: ValidArticleTypes,
    title: z.string(),
    banner: z.string().optional(), // TO-DO: create a refine for checking if string = `filename.{png|jpg|jpeg|webp}`
    authors: z.array(z.string()),
    release: z.string().datetime().optional(),
    video: z.string().url().optional(),
});

export type BaseArticle = z.infer<typeof BaseArticleSchema>;

const ArticleSchema = BaseArticleSchema.merge(
    z.object({
        authors: z.array(ArticleAuthor),
        content: z.string(),
    }
));

export type Article = z.infer<typeof ArticleSchema>;

export const articleTypes: {
    [key in ArticleTypes]: {
        color: TagColor,
        text: string
    } | undefined
} = {
    "update": {
        color: "blue",
        text: "Update"
    },

    "announcement": {
        color: "green",
        text: "Announcement"
    },

    "fix": {
        color: "yellow",
        text: "Fix"
    },

    "event": {
        color: "purple",
        text: "Event"
    },

    "tournament": {
        color: "red",
        text: "Tournament"
    },

    "dlc": {
        color: "pink",
        text: "DLC Release"
    }
}

export const getArticle = async (slug: string): Promise<Article> => {
    const raw = await fetch(`${NEWS_SOURCE}/articles/${slug}.md`, { next: { tags: ["articles", `article-${slug}`] } }).then(res => res.text());
    const { data, content } = matter(raw);
    
    const parsedData = BaseArticleSchema.parse(data);

    const authors = await Promise.all(
        parsedData.authors.map(id => getAuthorData(id))
    );

    return {
        ...parsedData,
        authors,
        content
    };
}

export const getAuthorData = async (id: string) => {
    const raw: ArticleAuthor = await fetch(`${NEWS_SOURCE}/authors/${id}.json`, { next: { tags: ["articles", `article-author-${id}`] } }).then(res => res.json());
    return ArticleAuthor.parse(raw);
}

export const generateBannerURL = (url: string) => {
    return `${NEWS_IMAGES_URL}/banners/${url}`;
}

type ArticleList = Array<{
    "md": string,
    "type": ArticleTypes,
    "title": string,
    "authors": string[],
    "thumb"?: string,
    "release"?: string,
    "category"?: string
}>;

export const getLatestArticles = async (): Promise<ArticleList> => {
    const { articles } = await fetch(`${NEWS_SOURCE}/index.json`, { next: { tags: ["articles", "articles-list"] } }).then((res) => res.json());
    return articles;
}